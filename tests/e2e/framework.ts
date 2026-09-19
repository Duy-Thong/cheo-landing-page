import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export interface TestCase {
  title: string
  fn: () => void | Promise<void>
  durationMs: number
  status: 'passed' | 'failed' | 'skipped'
  error?: Error
}

export interface TestSuite {
  title: string
  tier: string
  tests: TestCase[]
  beforeAllFns: Array<() => void | Promise<void>>
  afterAllFns: Array<() => void | Promise<void>>
  beforeEachFns: Array<() => void | Promise<void>>
  afterEachFns: Array<() => void | Promise<void>>
}

class TestRegistry {
  suites: TestSuite[] = []
  currentSuite: TestSuite | null = null
  currentTier: string = 'General'

  setTier(tier: string) {
    this.currentTier = tier
  }

  describe(title: string, fn: () => void) {
    const previousSuite = this.currentSuite
    const suite: TestSuite = {
      title,
      tier: this.currentTier,
      tests: [],
      beforeAllFns: [],
      afterAllFns: [],
      beforeEachFns: [],
      afterEachFns: []
    }
    this.suites.push(suite)
    this.currentSuite = suite
    try {
      fn()
    } finally {
      this.currentSuite = previousSuite
    }
  }

  it(title: string, fn: () => void | Promise<void>) {
    if (!this.currentSuite) {
      this.describe('Default Suite', () => {
        this.it(title, fn)
      })
      return
    }
    this.currentSuite.tests.push({
      title,
      fn,
      durationMs: 0,
      status: 'skipped'
    })
  }

  beforeAll(fn: () => void | Promise<void>) {
    if (this.currentSuite) this.currentSuite.beforeAllFns.push(fn)
  }

  afterAll(fn: () => void | Promise<void>) {
    if (this.currentSuite) this.currentSuite.afterAllFns.push(fn)
  }

  beforeEach(fn: () => void | Promise<void>) {
    if (this.currentSuite) this.currentSuite.beforeEachFns.push(fn)
  }

  afterEach(fn: () => void | Promise<void>) {
    if (this.currentSuite) this.currentSuite.afterEachFns.push(fn)
  }
}

export const registry = new TestRegistry()

export const setTier = (tier: string) => registry.setTier(tier)
export const describe = (title: string, fn: () => void) => registry.describe(title, fn)
export const it = (title: string, fn: () => void | Promise<void>) => registry.it(title, fn)
export const test = it
export const beforeAll = (fn: () => void | Promise<void>) => registry.beforeAll(fn)
export const afterAll = (fn: () => void | Promise<void>) => registry.afterAll(fn)
export const beforeEach = (fn: () => void | Promise<void>) => registry.beforeEach(fn)
export const afterEach = (fn: () => void | Promise<void>) => registry.afterEach(fn)

/** Deep comparison helper */
function deepEqual(a: any, b: any): boolean {
  if (a === b) return true
  if (typeof a !== typeof b) return false
  if (a === null || b === null) return a === b
  if (typeof a !== 'object') return false

  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false
    }
    return true
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  if (keysA.length !== keysB.length) return false

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false
    if (!deepEqual(a[key], b[key])) return false
  }

  return true
}

export class Expectation {
  constructor(private actual: any, private isNot = false) {}

  get not() {
    return new Expectation(this.actual, !this.isNot)
  }

  private assert(condition: boolean, message: string) {
    const passed = this.isNot ? !condition : condition
    if (!passed) {
      throw new Error(this.isNot ? `Expected NOT to: ${message}` : message)
    }
  }

  toBe(expected: any) {
    this.assert(
      this.actual === expected,
      `Expected ${JSON.stringify(this.actual)} to be ${JSON.stringify(expected)}`
    )
  }

  toEqual(expected: any) {
    this.assert(
      deepEqual(this.actual, expected),
      `Expected ${JSON.stringify(this.actual)} to deep equal ${JSON.stringify(expected)}`
    )
  }

  toBeTruthy() {
    this.assert(Boolean(this.actual), `Expected ${JSON.stringify(this.actual)} to be truthy`)
  }

  toBeFalsy() {
    this.assert(!this.actual, `Expected ${JSON.stringify(this.actual)} to be falsy`)
  }

  toBeDefined() {
    this.assert(this.actual !== undefined, `Expected value to be defined`)
  }

  toBeUndefined() {
    this.assert(this.actual === undefined, `Expected ${JSON.stringify(this.actual)} to be undefined`)
  }

  toBeNull() {
    this.assert(this.actual === null, `Expected ${JSON.stringify(this.actual)} to be null`)
  }

  toContain(item: any) {
    if (typeof this.actual === 'string') {
      this.assert(
        this.actual.includes(item),
        `Expected string to contain substring: "${item}" (Actual string length: ${this.actual.length})`
      )
    } else if (Array.isArray(this.actual)) {
      this.assert(
        this.actual.some(el => deepEqual(el, item) || el === item),
        `Expected array to contain item: ${JSON.stringify(item)}`
      )
    } else if (this.actual instanceof Set) {
      this.assert(this.actual.has(item), `Expected Set to contain item: ${JSON.stringify(item)}`)
    } else {
      this.assert(false, `Cannot call toContain on type ${typeof this.actual}`)
    }
  }

  toMatch(regex: RegExp) {
    this.assert(
      typeof this.actual === 'string' && regex.test(this.actual),
      `Expected string to match pattern ${regex.toString()}`
    )
  }

  toBeGreaterThan(num: number) {
    this.assert(
      typeof this.actual === 'number' && this.actual > num,
      `Expected ${this.actual} to be greater than ${num}`
    )
  }

  toBeGreaterThanOrEqual(num: number) {
    this.assert(
      typeof this.actual === 'number' && this.actual >= num,
      `Expected ${this.actual} to be >= ${num}`
    )
  }

  toBeLessThan(num: number) {
    this.assert(
      typeof this.actual === 'number' && this.actual < num,
      `Expected ${this.actual} to be less than ${num}`
    )
  }

  toBeLessThanOrEqual(num: number) {
    this.assert(
      typeof this.actual === 'number' && this.actual <= num,
      `Expected ${this.actual} to be <= ${num}`
    )
  }

  toHaveLength(expectedLen: number) {
    const actualLen = this.actual ? (this.actual.length ?? this.actual.size) : undefined
    this.assert(
      actualLen === expectedLen,
      `Expected length to be ${expectedLen}, but got ${actualLen}`
    )
  }

  toThrow(expectedMessage?: string | RegExp) {
    if (typeof this.actual !== 'function') {
      throw new Error(`Expected a function to test toThrow, but got ${typeof this.actual}`)
    }
    let threw = false
    let thrownError: any = null
    try {
      this.actual()
    } catch (err) {
      threw = true
      thrownError = err
    }

    if (!this.isNot) {
      this.assert(threw, `Expected function to throw an error, but it did not`)
      if (expectedMessage && thrownError) {
        const msg = thrownError.message || String(thrownError)
        if (typeof expectedMessage === 'string') {
          this.assert(
            msg.includes(expectedMessage),
            `Expected thrown message to contain "${expectedMessage}", got "${msg}"`
          )
        } else if (expectedMessage instanceof RegExp) {
          this.assert(
            expectedMessage.test(msg),
            `Expected thrown message to match ${expectedMessage.toString()}, got "${msg}"`
          )
        }
      }
    } else {
      if (threw) {
        throw new Error(`Expected function NOT to throw, but it threw: ${thrownError?.message || thrownError}`)
      }
    }
  }
}

export const expect = (actual: any) => new Expectation(actual)

/** SSR HTML rendering helper for React components */
export function renderComponent(element: React.ReactElement): string {
  return renderToStaticMarkup(element)
}

/** Check if rendered markup includes text */
export function containsText(html: string, text: string): boolean {
  return html.includes(text)
}
