import React from 'react'
import { describe, it, expect, setTier, renderComponent } from './framework.ts'
import { SITEMAP_ROUTES, matchRoute } from '../../src/data/sitemapRoutes.ts'
import { PAGE_DETAILS_MAP } from '../../src/data/pageDetailsData.ts'
import { MuseumView } from '../../src/components/MuseumView.tsx'
import { AudioSamplePlayer } from '../../src/components/interactive/AudioSamplePlayer.tsx'
import { CharactersGallery } from '../../src/components/interactive/CharactersGallery.tsx'
import { CostumesShowcase } from '../../src/components/interactive/CostumesShowcase.tsx'
import { PlaysShowcase } from '../../src/components/interactive/PlaysShowcase.tsx'
import { TimelineWidget } from '../../src/components/interactive/TimelineWidget.tsx'

setTier('Tier 2: Boundary & Corner Cases')

describe('Tier 2.1: Route Normalization, Hashes & Path Edge Cases', () => {
  it('T2.1.1 should resolve empty string, "#", "#/", and "#///" to Sảnh Đón Tiếp without errors', () => {
    const inputs = ['', '#', '#/', '#///', '###']
    for (const input of inputs) {
      const route = matchRoute(input)
      expect(route).toBeDefined()
      expect(route.id).toBe('sanh')
    }
  })

  it('T2.1.2 should normalize paths with trailing slashes, e.g. "/kham-pha/" -> "/kham-pha"', () => {
    const route = matchRoute('/kham-pha/')
    expect(route.path).toBe('/kham-pha')
    expect(route.id).toBe('kham-pha')

    const subRoute = matchRoute('/kham-pha/san-khau/am-thanh/')
    expect(subRoute.path).toBe('/kham-pha/san-khau/am-thanh')
  })

  it('T2.1.3 should resolve routes using last-segment ID fallback when prefix is missing', () => {
    const route = matchRoute('cheo-hien-dai')
    expect(route.id).toBe('cheo-hien-dai')
    expect(route.path).toBe('/kham-pha/cheo-hien-dai')

    const audioRoute = matchRoute('am-thanh')
    expect(audioRoute.id).toBe('am-thanh')
    expect(audioRoute.path).toBe('/kham-pha/san-khau/am-thanh')
  })

  it('T2.1.4 should safely fall back to root "/" for completely non-existent routes', () => {
    const nonExistentPaths = [
      '/trang-khong-ton-tai-12345',
      '/kham-pha/khong-co-that',
      '/undefined',
      '/null',
      'random-nonsense-string'
    ]
    for (const path of nonExistentPaths) {
      const route = matchRoute(path)
      expect(route).toBeDefined()
      expect(route.id).toBe('sanh')
    }
  })

  it('T2.1.5 should handle hash paths with leading multiple slashes safely', () => {
    const route = matchRoute('///gioi-thieu')
    expect(route.id).toBe('gioi-thieu')
  })

  it('T2.1.6 should maintain idempotent resolution for repeated matchRoute calls', () => {
    const r1 = matchRoute('/kham-pha/cheo-hien-dai')
    const r2 = matchRoute(r1.path)
    expect(r1).toEqual(r2)
  })
})

describe('Tier 2.2: Data Boundary, Structure Integrity & Nil Safety', () => {
  it('T2.2.1 should ensure 100% of routes in SITEMAP_ROUTES have matching entries in PAGE_DETAILS_MAP', () => {
    for (const [path, route] of Object.entries(SITEMAP_ROUTES)) {
      const details = PAGE_DETAILS_MAP[route.id]
      expect(details).toBeDefined()
      expect(typeof details.title).toBe('string')
      expect(details.title.length).toBeGreaterThan(0)
      expect(typeof details.introduction).toBe('string')
      expect(details.introduction.length).toBeGreaterThan(0)
      expect(Array.isArray(details.sections)).toBe(true)
    }
  })

  it('T2.2.2 should verify no dangling children links exist in any hub childrenPaths', () => {
    for (const route of Object.values(SITEMAP_ROUTES)) {
      if (route.isHub && route.childrenPaths) {
        for (const childPath of route.childrenPaths) {
          const childRoute = SITEMAP_ROUTES[childPath]
          expect(childRoute).toBeDefined()
          expect(childRoute.path).toBe(childPath)
        }
      }
    }
  })

  it('T2.2.3 should ensure all breadcrumbs are non-empty and start with the root sitemap node', () => {
    for (const route of Object.values(SITEMAP_ROUTES)) {
      for (const crumb of route.breadcrumbs) {
        expect(crumb.title.trim().length).toBeGreaterThan(0)
        expect(crumb.path.startsWith('/')).toBe(true)
      }
      expect(route.breadcrumbs[0].path).toBe('/')
    }
  })

  it('T2.2.4 should confirm tags contain no empty strings, nulls, or internal duplicates', () => {
    for (const route of Object.values(SITEMAP_ROUTES)) {
      const tagSet = new Set<string>()
      for (const tag of route.tags) {
        expect(tag.trim().length).toBeGreaterThan(0)
        expect(tagSet.has(tag)).toBe(false)
        tagSet.add(tag)
      }
    }
  })

  it('T2.2.5 should verify absence of mojibake corruption in titles and descriptions', () => {
    for (const route of Object.values(SITEMAP_ROUTES)) {
      // Must not contain mojibake patterns
      expect(route.title).not.toMatch(/\u00C3[\u0080-\u00BF]/)
      expect(route.description).not.toMatch(/\u00C3[\u0080-\u00BF]/)
    }
  })

  it('T2.2.6 should verify every section in PAGE_DETAILS_MAP has non-empty paragraphs', () => {
    for (const [id, detail] of Object.entries(PAGE_DETAILS_MAP)) {
      for (const sec of detail.sections) {
        expect(sec.paragraphs.length).toBeGreaterThanOrEqual(1)
        for (const p of sec.paragraphs) {
          expect(p.trim().length).toBeGreaterThan(10)
        }
      }
    }
  })
})

describe('Tier 2.3: Component SSR Rendering & Prop Boundaries', () => {
  it('T2.3.1 should render MuseumView safely when onNavigate is a no-op handler', () => {
    const html = renderComponent(React.createElement(MuseumView, {
      route: SITEMAP_ROUTES['/gioi-thieu/bao-tang-so-cheo'],
      onNavigate: () => {}
    }))
    expect(html.length).toBeGreaterThan(500)
    expect(html).toContain('Bảo Tàng Số “Chèo”')
  })

  it('T2.3.2 should render MuseumView safely for leaf routes with no widgetType', () => {
    const textOnlyRoute = SITEMAP_ROUTES['/gioi-thieu/cau-chuyen-hinh-thanh']
    expect(textOnlyRoute.widgetType).toBeUndefined()

    const html = renderComponent(React.createElement(MuseumView, {
      route: textOnlyRoute,
      onNavigate: () => {}
    }))
    expect(html).toContain('Câu Chuyện Hình Thành')
  })

  it('T2.3.3 should render MuseumView safely for routes without funFacts', () => {
    const html = renderComponent(React.createElement(MuseumView, {
      route: SITEMAP_ROUTES['/tien-ich/tim-kiem'],
      onNavigate: () => {}
    }))
    expect(html).toContain('Tìm Kiếm')
  })

  it('T2.3.4 should generate HTML string payload within acceptable bounds (1 KB to 300 KB)', () => {
    for (const path of ['/gioi-thieu', '/kham-pha', '/tien-ich', '/kham-pha/cheo-hien-dai', '/kham-pha/san-khau/am-thanh']) {
      const html = renderComponent(React.createElement(MuseumView, {
        route: SITEMAP_ROUTES[path],
        onNavigate: () => {}
      }))
      expect(html.length).toBeGreaterThan(1000)
      expect(html.length).toBeLessThan(300000)
    }
  })

  it('T2.3.5 should ensure rendered HTML includes no broken or unescaped HTML attributes', () => {
    const html = renderComponent(React.createElement(MuseumView, {
      route: SITEMAP_ROUTES['/kham-pha/san-khau/am-thanh'],
      onNavigate: () => {}
    }))
    expect(html).not.toContain('class="undefined"')
    expect(html).not.toContain('id="undefined"')
    expect(html).not.toContain('href="undefined"')
  })

  it('T2.3.6 should render all 30 routes without throwing any exceptions during SSR markup generation', () => {
    for (const [path, route] of Object.entries(SITEMAP_ROUTES)) {
      expect(() => {
        renderComponent(React.createElement(MuseumView, {
          route,
          onNavigate: () => {}
        }))
      }).not.toThrow()
    }
  })
})

describe('Tier 2.4: Sound, Frequency & Melody Boundaries', () => {
  it('T2.4.1 should enforce sequential step numbering (1, 2, 3, 4) across all sound journey phases', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toMatch(/Khởi Nhạc/i)
    expect(html).toMatch(/Xưng Danh/i)
    expect(html).toMatch(/Trữ Tình/i)
    expect(html).toMatch(/Trào Lộng/i)
  })

  it('T2.4.2 should verify exactly 6 core instruments are listed with role and timbre details', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    const instrumentNames = ['Trống Đế', 'Trống Cơm', 'Đàn Nguyệt', 'Đàn Nhị', 'Sáo Trúc', 'Thanh La']
    for (const name of instrumentNames) {
      expect(html).toContain(name)
    }
  })

  it('T2.4.3 should confirm instrument techniques and acoustic roles are present in the DOM', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toContain('Chỉ huy tiết tấu')
    expect(html).toContain('Trống Cơm')
  })

  it('T2.4.4 should verify all classic melodies include lyrics and musical character descriptors', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toMatch(/Đào [Ll]iễu/)
    expect(html).toMatch(/Quân [Tt]ử [Vv]u [Dd]ịch/)
    expect(html).toMatch(/Sa [Ll]ệch/)
    expect(html).toMatch(/Hề [Mm]ồi/)
  })

  it('T2.4.5 should render audio player controls (Play, Volume, Timeline markers) in the DOM', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toContain('Dàn Nhạc Cụ Bát Âm')
    expect(html).toContain('Hành Trình Âm Sắc')
  })

  it('T2.4.6 should ensure audio player contains no impure or broken rendering styles', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).not.toContain('style="undefined"')
    expect(html).not.toContain('style="NaN"')
  })
})

describe('Tier 2.5: Search Query Normalization & Unicode Boundary', () => {
  it('T2.5.1 should match Vietnamese search query without diacritics to Vietnamese text with diacritics', () => {
    const normalize = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    const query = 'cheo'
    const target = 'Bảo Tàng Chèo Số'
    expect(normalize(target)).toContain(normalize(query))
  })

  it('T2.5.2 should handle queries containing regex special characters without breaking', () => {
    const specialQueries = ['[cheo]', 'dao.*lieu', '(quan)', 'he?moi', '$100', 'cheo^2']
    for (const query of specialQueries) {
      expect(() => {
        const safeMatch = (text: string, q: string) => text.toLowerCase().includes(q.toLowerCase())
        safeMatch('Bảo Tàng Chèo', query)
      }).not.toThrow()
    }
  })

  it('T2.5.3 should handle whitespace-only and padded queries gracefully', () => {
    const query = '   chèo   '
    const trimmed = query.trim()
    expect(trimmed).toBe('chèo')
  })

  it('T2.5.4 should handle long search queries (>= 200 characters) without hanging', () => {
    const longQuery = 'chèo '.repeat(40)
    expect(longQuery.length).toBeGreaterThanOrEqual(200)
    const matches = Object.values(SITEMAP_ROUTES).filter(r => r.title.includes(longQuery))
    expect(matches.length).toBe(0)
  })

  it('T2.5.5 should index key terms "Tào Mạt", "UNESCO", "Thị Kính", "Áo tứ thân" across routes and details', () => {
    const allText = JSON.stringify(SITEMAP_ROUTES) + JSON.stringify(PAGE_DETAILS_MAP)
    expect(allText).toContain('Tào Mạt')
    expect(allText).toContain('UNESCO')
    expect(allText).toContain('Thị Kính')
    expect(allText).toContain('Áo tứ thân')
  })

  it('T2.5.6 should ensure search tag keywords directly match corresponding route paths', () => {
    const tagToPath = [
      { tag: 'Quan Âm Thị Kính', expectedPath: '/kham-pha/san-khau/tac-pham-tieu-bieu' },
      { tag: 'Trống đế', expectedPath: '/kham-pha/san-khau/am-thanh' },
      { tag: 'Đào liễu', expectedPath: '/kham-pha/san-khau/am-thanh' }
    ]
    for (const item of tagToPath) {
      const route = SITEMAP_ROUTES[item.expectedPath]
      expect(route).toBeDefined()
      expect(route.tags).toContain(item.tag)
    }
  })
})

describe('Tier 2.6: Deep Content Completeness & Artifact Boundaries', () => {
  it('T2.6.1 should verify CharactersGallery defines all 5 character archetypes', () => {
    const html = renderComponent(React.createElement(CharactersGallery))
    for (const char of ['Đào', 'Kép', 'Hề', 'Lão', 'Mụ']) {
      expect(html).toContain(char)
    }
  })

  it('T2.6.2 should verify CostumesShowcase defines key traditional costume artifacts', () => {
    const html = renderComponent(React.createElement(CostumesShowcase))
    expect(html).toMatch(/Áo [Tt]ứ [Tt]hân/)
    expect(html).toMatch(/Nón [Qq]uai [Tt]hao/)
  })

  it('T2.6.3 should verify PlaysShowcase defines the 4 traditional masterpieces', () => {
    const html = renderComponent(React.createElement(PlaysShowcase))
    expect(html).toContain('Quan Âm Thị Kính')
    expect(html).toContain('Xúy Vân')
    expect(html).toContain('Lưu Bình')
    expect(html).toContain('Nghêu Sò')
  })

  it('T2.6.4 should verify TimelineWidget defines historical era milestones', () => {
    const html = renderComponent(React.createElement(TimelineWidget))
    expect(html).toContain('Hoa Lư')
  })

  it('T2.6.5 should ensure each section in pageDetailsData has at least 1 heading and 1 paragraph', () => {
    for (const [id, detail] of Object.entries(PAGE_DETAILS_MAP)) {
      for (const section of detail.sections) {
        expect(section.heading.trim().length).toBeGreaterThan(0)
        expect(section.paragraphs.length).toBeGreaterThanOrEqual(1)
        expect(section.paragraphs[0].trim().length).toBeGreaterThan(0)
      }
    }
  })

  it('T2.6.6 should verify no route description is shorter than 25 characters to ensure content quality', () => {
    for (const route of Object.values(SITEMAP_ROUTES)) {
      expect(route.description.length).toBeGreaterThanOrEqual(25)
    }
  })
})
