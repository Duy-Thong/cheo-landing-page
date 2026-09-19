import { registry, TestSuite } from './framework.ts'

// Import all tier test suites
import './tier1_features.test.ts'
import './tier2_boundaries.test.ts'
import './tier3_combinations.test.ts'
import './tier4_scenarios.test.ts'

// ANSI colors for clean CLI reporting
const GREEN = '\x1b[32m'
const RED = '\x1b[31m'
const YELLOW = '\x1b[33m'
const CYAN = '\x1b[36m'
const BOLD = '\x1b[1m'
const DIM = '\x1b[2m'
const RESET = '\x1b[0m'

async function runSuite(suite: TestSuite): Promise<{ total: number; passed: number; failed: number }> {
  let passed = 0
  let failed = 0

  // Run beforeAll hooks
  for (const fn of suite.beforeAllFns) {
    await fn()
  }

  for (const testCase of suite.tests) {
    // Run beforeEach hooks
    for (const fn of suite.beforeEachFns) {
      await fn()
    }

    const start = performance.now()
    try {
      await testCase.fn()
      testCase.status = 'passed'
      passed++
    } catch (err: any) {
      testCase.status = 'failed'
      testCase.error = err
      failed++
    } finally {
      testCase.durationMs = Math.round(performance.now() - start)
    }

    // Run afterEach hooks
    for (const fn of suite.afterEachFns) {
      await fn()
    }
  }

  // Run afterAll hooks
  for (const fn of suite.afterAllFns) {
    await fn()
  }

  return { total: suite.tests.length, passed, failed }
}

async function main() {
  console.log(`\n${BOLD}${CYAN}╔════════════════════════════════════════════════════════════════════════════╗${RESET}`)
  console.log(`${BOLD}${CYAN}║           BẢO TÀNG CHÈO SỐ — E2E TEST SUITE RUNNER (TIERS 1 - 4)           ║${RESET}`)
  console.log(`${BOLD}${CYAN}╚════════════════════════════════════════════════════════════════════════════╝${RESET}\n`)

  const tierStats: Record<string, { total: number; passed: number; failed: number }> = {}
  let totalTests = 0
  let totalPassed = 0
  let totalFailed = 0
  const globalStart = performance.now()

  for (const suite of registry.suites) {
    const tier = suite.tier
    if (!tierStats[tier]) {
      tierStats[tier] = { total: 0, passed: 0, failed: 0 }
      console.log(`\n${BOLD}${YELLOW}=== ${tier} ===${RESET}`)
    }

    console.log(`\n  ${BOLD}${suite.title}${RESET}`)
    const { total, passed, failed } = await runSuite(suite)

    tierStats[tier].total += total
    tierStats[tier].passed += passed
    tierStats[tier].failed += failed

    totalTests += total
    totalPassed += passed
    totalFailed += failed

    for (const test of suite.tests) {
      if (test.status === 'passed') {
        console.log(`    ${GREEN}✓${RESET} ${test.title} ${DIM}(${test.durationMs}ms)${RESET}`)
      } else {
        console.log(`    ${RED}✗${RESET} ${BOLD}${test.title}${RESET} ${DIM}(${test.durationMs}ms)${RESET}`)
        if (test.error) {
          console.log(`      ${RED}Error: ${test.error.message}${RESET}`)
          if (test.error.stack) {
            const stackLines = test.error.stack.split('\n').slice(1, 4).join('\n')
            console.log(`      ${DIM}${stackLines}${RESET}`)
          }
        }
      }
    }
  }

  const globalDuration = Math.round(performance.now() - globalStart)

  console.log(`\n${BOLD}${CYAN}══════════════════════════════════════════════════════════════════════════════${RESET}`)
  console.log(`${BOLD}                    E2E TEST EXECUTION SUMMARY STATISTICS                     ${RESET}`)
  console.log(`${BOLD}${CYAN}══════════════════════════════════════════════════════════════════════════════${RESET}`)

  for (const [tier, stats] of Object.entries(tierStats)) {
    const statusColor = stats.failed === 0 ? GREEN : RED
    const passRate = Math.round((stats.passed / stats.total) * 100)
    console.log(
      `  ${BOLD}${tier.padEnd(38)}${RESET} : ${statusColor}${stats.passed}/${stats.total} passed (${passRate}%)${RESET}`
    )
  }

  console.log(`${BOLD}${CYAN}──────────────────────────────────────────────────────────────────────────────${RESET}`)
  const overallColor = totalFailed === 0 ? GREEN : RED
  console.log(`  ${BOLD}Total Tests Run${RESET}  : ${totalTests}`)
  console.log(`  ${BOLD}Total Passed${RESET}     : ${GREEN}${totalPassed}${RESET}`)
  console.log(`  ${BOLD}Total Failed${RESET}     : ${overallColor}${totalFailed}${RESET}`)
  console.log(`  ${BOLD}Total Duration${RESET}   : ${globalDuration}ms`)
  console.log(`${BOLD}${CYAN}══════════════════════════════════════════════════════════════════════════════${RESET}\n`)

  if (totalFailed === 0) {
    console.log(`${GREEN}${BOLD}🎉 ALL E2E TESTS PASSED SUCCESSFULLY! Ready for deployment & milestones verification.${RESET}\n`)
    process.exit(0)
  } else {
    console.log(`${RED}${BOLD}❌ ${totalFailed} TEST(S) FAILED. Please review the errors above.${RESET}\n`)
    process.exit(1)
  }
}

main().catch(err => {
  console.error(`${RED}Fatal runner error:${RESET}`, err)
  process.exit(1)
})
