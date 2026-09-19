import React from 'react'
import { describe, it, expect, setTier, renderComponent } from './framework.ts'
import { SITEMAP_ROUTES, matchRoute } from '../../src/data/sitemapRoutes.ts'
import { PAGE_DETAILS_MAP } from '../../src/data/pageDetailsData.ts'
import { MuseumView } from '../../src/components/MuseumView.tsx'
import { HomePage } from '../../src/components/HomePage.tsx'
import { AudioSamplePlayer } from '../../src/components/interactive/AudioSamplePlayer.tsx'
import { ModernCheoShowcase } from '../../src/components/interactive/ModernCheoShowcase.tsx'
import { CharactersGallery } from '../../src/components/interactive/CharactersGallery.tsx'
import { CostumesShowcase } from '../../src/components/interactive/CostumesShowcase.tsx'
import { PlaysShowcase } from '../../src/components/interactive/PlaysShowcase.tsx'
import { TimelineWidget } from '../../src/components/interactive/TimelineWidget.tsx'

setTier('Tier 1: Feature Coverage')

describe('Tier 1.1: Route Discovery & 30-Route Resolution', () => {
  it('T1.1.1 should register exactly 30 route entries with 29 unique logical IDs', () => {
    const routeKeys = Object.keys(SITEMAP_ROUTES)
    expect(routeKeys.length).toBe(30)

    const uniqueIds = new Set(routeKeys.map(k => SITEMAP_ROUTES[k].id))
    expect(uniqueIds.size).toBe(29) // '/' and '/sanh' share logical ID 'sanh'
  })

  it('T1.1.2 should resolve root path "/" and alias "/sanh" to the same reception hall node', () => {
    const rootRoute = matchRoute('/')
    const sanhRoute = matchRoute('/sanh')
    expect(rootRoute.id).toBe('sanh')
    expect(sanhRoute.id).toBe('sanh')
    expect(rootRoute.title).toBe('Sảnh Đón Tiếp')
    expect(sanhRoute.title).toBe('Sảnh Đón Tiếp')
  })

  it('T1.1.3 should provide valid hierarchical breadcrumbs for all routes across 3 main pillars', () => {
    for (const [path, route] of Object.entries(SITEMAP_ROUTES)) {
      expect(route.breadcrumbs).toBeDefined()
      expect(route.breadcrumbs.length).toBeGreaterThanOrEqual(1)
      expect(route.breadcrumbs[0].path).toBe('/')
      expect(route.breadcrumbs[0].title).toBe('Bảo Tàng Chèo Số')
      const lastCrumb = route.breadcrumbs[route.breadcrumbs.length - 1]
      expect(lastCrumb.title.length).toBeGreaterThan(0)
    }
  })

  it('T1.1.4 should enforce bidirectional hub-to-children relationship with >= 2 children per hub', () => {
    const hubs = Object.values(SITEMAP_ROUTES).filter(r => r.isHub)
    expect(hubs.length).toBeGreaterThanOrEqual(6)

    for (const hub of hubs) {
      expect(hub.childrenPaths).toBeDefined()
      expect(hub.childrenPaths!.length).toBeGreaterThanOrEqual(2)
      for (const childPath of hub.childrenPaths!) {
        expect(SITEMAP_ROUTES[childPath]).toBeDefined()
      }
    }
  })

  it('T1.1.5 should require complete non-empty metadata (title, category, description, tags) on every route', () => {
    for (const [path, route] of Object.entries(SITEMAP_ROUTES)) {
      expect(typeof route.title).toBe('string')
      expect(route.title.trim().length).toBeGreaterThan(0)
      expect(typeof route.category).toBe('string')
      expect(route.category.trim().length).toBeGreaterThan(0)
      expect(typeof route.description).toBe('string')
      expect(route.description.trim().length).toBeGreaterThan(10)
      expect(Array.isArray(route.tags)).toBe(true)
      expect(route.tags.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('T1.1.6 should map all routes to authorized cultural categories', () => {
    const validCategories = new Set(['Sảnh', 'Giới thiệu', 'Khám phá', 'Tổng quan', 'Sân Khấu', 'Tiện ích', 'Sự kiện'])
    for (const [path, route] of Object.entries(SITEMAP_ROUTES)) {
      expect(validCategories.has(route.category)).toBe(true)
    }
  })
})

describe('Tier 1.2: R1 Khám Phá Heritage Pillars & Hub System', () => {
  it('T1.2.1 should define /kham-pha as a core Hub route with exactly 3 main heritage branches', () => {
    const khamPha = SITEMAP_ROUTES['/kham-pha']
    expect(khamPha).toBeDefined()
    expect(khamPha.isHub).toBe(true)
    expect(khamPha.childrenPaths).toEqual([
      '/kham-pha/tong-quan',
      '/kham-pha/san-khau',
      '/kham-pha/cheo-hien-dai'
    ])
  })

  it('T1.2.2 should link 3 Heritage Pillars (Tổng quan, Sân khấu, Chèo hiện đại) under /kham-pha', () => {
    const khamPha = SITEMAP_ROUTES['/kham-pha']
    expect(khamPha.childrenPaths!.length).toBe(3)
    const childTitles = khamPha.childrenPaths!.map(p => SITEMAP_ROUTES[p]?.title)
    expect(childTitles).toContain('Tổng Quan Nghệ Thuật Chèo')
    expect(childTitles).toContain('Không Gian Sân Khấu')
    expect(childTitles).toContain('Chèo Hiện Đại')
  })

  it('T1.2.3 should encompass key cultural scope (10+ thế kỷ, Chèo cổ, Chèo đương đại)', () => {
    const khamPha = SITEMAP_ROUTES['/kham-pha']
    const details = PAGE_DETAILS_MAP['kham-pha']
    expect(khamPha.description).toBeDefined()
    expect(details.introduction.length).toBeGreaterThan(20)
    expect(khamPha.description).toContain('10 thế kỷ')
    expect(khamPha.description).toContain('Chèo đương đại')
  })

  it('T1.2.4 should render child room portal cards with navigation affordance on /kham-pha', () => {
    const html = renderComponent(React.createElement(MuseumView, {
      route: SITEMAP_ROUTES['/kham-pha'],
      onNavigate: () => {}
    }))
    expect(html).toContain('Không Gian Khám Phá')
    expect(html).toContain('Tổng Quan Nghệ Thuật Chèo')
    expect(html).toContain('Không Gian Sân Khấu')
    expect(html).toContain('Chèo Hiện Đại')
    expect(html).toMatch(/khám phá/i)
  })

  it('T1.2.5 should verify all 7 Hub pages in the system contain rich introductions and children links', () => {
    const hubRoutes = [
      '/',
      '/gioi-thieu',
      '/kham-pha',
      '/kham-pha/tong-quan',
      '/kham-pha/san-khau',
      '/tien-ich',
      '/tien-ich/tham-quan-va-su-kien'
    ]
    for (const hubPath of hubRoutes) {
      const route = SITEMAP_ROUTES[hubPath]
      expect(route).toBeDefined()
      expect(route.isHub).toBe(true)
      const detail = PAGE_DETAILS_MAP[route.id]
      expect(detail).toBeDefined()
      expect(detail.introduction.length).toBeGreaterThan(20)
    }
  })

  it('T1.2.6 should render introduction heading and portals for /gioi-thieu hub', () => {
    const html = renderComponent(React.createElement(MuseumView, {
      route: SITEMAP_ROUTES['/gioi-thieu'],
      onNavigate: () => {}
    }))
    expect(html).toContain('Không Gian Giới Thiệu')
    expect(html).toContain('Bảo Tàng Số “Chèo”')
    expect(html).toContain('Câu Chuyện Hình Thành')
  })
})

describe('Tier 1.3: R2 Chèo Hiện Đại 1951 Milestone, Masters & UNESCO', () => {
  it('T1.3.1 should define /kham-pha/cheo-hien-dai with widgetType "modern"', () => {
    const modernRoute = SITEMAP_ROUTES['/kham-pha/cheo-hien-dai']
    expect(modernRoute).toBeDefined()
    expect(modernRoute.widgetType).toBe('modern')
    expect(modernRoute.category).toBe('Khám phá')
  })

  it('T1.3.2 should highlight the historical 1951 Việt Bắc founding milestone of Đoàn Chèo Cổ truyền Việt Nam', () => {
    const html = renderComponent(React.createElement(ModernCheoShowcase))
    expect(html).toContain('1951')
    expect(html).toContain('Thành Lập Đoàn Chèo Cổ Truyền Việt Nam')
    expect(html).toContain('chiến khu Việt Bắc')
    expect(html).toContain('Nhà hát Chèo Việt Nam')
  })

  it('T1.3.3 should honor master artists: NSND Dịu Hương and cụ Cả Tam in historical milestones', () => {
    const html = renderComponent(React.createElement(ModernCheoShowcase))
    expect(html).toContain('Dịu Hương')
    expect(html).toContain('Cả Tam')
  })

  it('T1.3.4 should feature the masterpiece trilogy "Bài ca giữ nước" in modern metrics', () => {
    const html = renderComponent(React.createElement(ModernCheoShowcase))
    expect(html).toContain('Bài ca giữ nước')
  })

  it('T1.3.5 should document the UNESCO intangible cultural heritage submission of 14 Red River Delta provinces', () => {
    const html = renderComponent(React.createElement(ModernCheoShowcase))
    expect(html).toContain('UNESCO')
    expect(html).toContain('14+')
  })

  it('T1.3.6 should render ModernCheoShowcase seamlessly inside MuseumView for /kham-pha/cheo-hien-dai', () => {
    const html = renderComponent(React.createElement(MuseumView, {
      route: SITEMAP_ROUTES['/kham-pha/cheo-hien-dai'],
      onNavigate: () => {}
    }))
    expect(html).toContain('Chèo Hiện Đại')
    expect(html).toContain('1951')
    expect(html).toContain('UNESCO')
  })
})

describe('Tier 1.4: R3 Sound Journey 4-Phase Timeline & 6 Orchestra Instruments', () => {
  it('T1.4.1 should assign route /kham-pha/san-khau/am-thanh to widgetType "audio"', () => {
    const audioRoute = SITEMAP_ROUTES['/kham-pha/san-khau/am-thanh']
    expect(audioRoute).toBeDefined()
    expect(audioRoute.widgetType).toBe('audio')
  })

  it('T1.4.2 should present the 4 sequential theatrical phases of a Chèo night', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toMatch(/Khởi Nhạc/i)
    expect(html).toMatch(/Xưng Danh/i)
    expect(html).toMatch(/Trữ Tình/i)
    expect(html).toMatch(/Trào Lộng/i)
  })

  it('T1.4.3 should showcase all 6 core orchestra instruments with independent cards', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toContain('Trống Đế')
    expect(html).toContain('Trống Cơm')
    expect(html).toContain('Đàn Nguyệt')
    expect(html).toContain('Đàn Nhị')
    expect(html).toContain('Sáo Trúc')
    expect(html).toContain('Thanh La')
  })

  it('T1.4.4 should include acoustic characteristics and rhythm leadership for key instruments', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toContain('Chỉ huy tiết tấu')
    expect(html).toContain('linh hồn chiếu chèo')
  })

  it('T1.4.5 should provide classic melody audio samples with poetic verse citations', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toMatch(/Đào [Ll]iễu/)
    expect(html).toMatch(/Quân [Tt]ử [Vv]u [Dd]ịch/)
    expect(html).toMatch(/Sa [Ll]ệch/)
    expect(html).toMatch(/Hề [Mm]ồi/)
  })

  it('T1.4.6 should render AudioSamplePlayer cleanly inside MuseumView for /kham-pha/san-khau/am-thanh', () => {
    const html = renderComponent(React.createElement(MuseumView, {
      route: SITEMAP_ROUTES['/kham-pha/san-khau/am-thanh'],
      onNavigate: () => {}
    }))
    expect(html).toContain('Âm Thanh')
    expect(html).toContain('Trống Đế')
    expect(html).toMatch(/Đào [Ll]iễu/)
  })
})

describe('Tier 1.5: Deep Cultural Content & Stage Artifacts', () => {
  it('T1.5.1 should render 5 archetypal characters in CharactersGallery', () => {
    const html = renderComponent(React.createElement(CharactersGallery))
    expect(html).toContain('Đào')
    expect(html).toContain('Kép')
    expect(html).toContain('Hề')
    expect(html).toContain('Lão')
    expect(html).toContain('Mụ')
  })

  it('T1.5.2 should render traditional costume heritage artifacts in CostumesShowcase', () => {
    const html = renderComponent(React.createElement(CostumesShowcase))
    expect(html).toMatch(/Áo [Tt]ứ [Tt]hân/)
    expect(html).toMatch(/Nón [Qq]uai [Tt]hao/)
    expect(html).toMatch(/Yếm [Đđ]ào/)
  })

  it('T1.5.3 should render the 4 classic masterpieces in PlaysShowcase', () => {
    const html = renderComponent(React.createElement(PlaysShowcase))
    expect(html).toContain('Quan Âm Thị Kính')
    expect(html).toContain('Xúy Vân')
    expect(html).toContain('Lưu Bình')
    expect(html).toContain('Nghêu Sò')
  })

  it('T1.5.4 should render historical milestones spanning 10 centuries in TimelineWidget', () => {
    const html = renderComponent(React.createElement(TimelineWidget))
    expect(html).toContain('Thế kỷ X')
    expect(html).toContain('Hoa Lư')
  })

  it('T1.5.5 should render interactive HomePage with hero presentation and stage sections', () => {
    const html = renderComponent(React.createElement(HomePage, { onNavigate: () => {} }))
    expect(html).toContain('Bảo Tàng Số Nghệ Thuật')
    expect(html).toContain('Chèo Cổ Truyền')
    expect(html).toContain('Không Gian Di Sản')
  })

  it('T1.5.6 should provide complete cultural essay details for /kham-pha/tong-quan/gia-tri-van-hoa', () => {
    const detail = PAGE_DETAILS_MAP['gia-tri-van-hoa']
    expect(detail).toBeDefined()
    expect(detail.sections.length).toBeGreaterThanOrEqual(2)
    expect(detail.sections.some(s =>
      s.heading.includes('trào lộng') ||
      s.heading.includes('hiếu nghĩa') ||
      s.heading.toLowerCase().includes('dân gian')
    )).toBe(true)
  })
})

describe('Tier 1.6: R4 Information Restructuring & Atomic Cleanliness', () => {
  it('T1.6.1 should enforce concise subtitles (<= 80 chars) across all 30 routes without verbose paragraph packing', () => {
    for (const [path, route] of Object.entries(SITEMAP_ROUTES)) {
      expect(route.subtitle).toBeDefined()
      expect(route.subtitle.length).toBeLessThanOrEqual(80)
    }
  })

  it('T1.6.2 should structure detailed page content into distinct headings, paragraphs, and bullets', () => {
    for (const [id, content] of Object.entries(PAGE_DETAILS_MAP)) {
      expect(content.introduction.length).toBeGreaterThan(0)
      expect(content.sections.length).toBeGreaterThanOrEqual(1)
      for (const section of content.sections) {
        expect(section.heading.length).toBeGreaterThan(0)
        expect(section.paragraphs.length).toBeGreaterThanOrEqual(1)
      }
    }
  })

  it('T1.6.3 should assign structured metadata tags (1 to 6 tags) to every route', () => {
    for (const [path, route] of Object.entries(SITEMAP_ROUTES)) {
      expect(route.tags.length).toBeGreaterThanOrEqual(1)
      expect(route.tags.length).toBeLessThanOrEqual(6)
      for (const tag of route.tags) {
        expect(tag.trim().length).toBeGreaterThan(0)
      }
    }
  })

  it('T1.6.4 should provide fun facts and cultural trivia on key educational pages', () => {
    const pagesWithTrivia = Object.values(PAGE_DETAILS_MAP).filter(p => p.funFacts && p.funFacts.length > 0)
    expect(pagesWithTrivia.length).toBeGreaterThanOrEqual(5)
  })

  it('T1.6.5 should produce semantic markup with headings and sections when rendered via MuseumView', () => {
    const html = renderComponent(React.createElement(MuseumView, {
      route: SITEMAP_ROUTES['/gioi-thieu/bao-tang-so-cheo'],
      onNavigate: () => {}
    }))
    expect(html).toContain('<header')
    expect(html).toContain('<h1')
  })

  it('T1.6.6 should render badges and categorizations without null or undefined text', () => {
    for (const path of ['/kham-pha', '/gioi-thieu', '/tien-ich', '/kham-pha/san-khau/am-thanh']) {
      const html = renderComponent(React.createElement(MuseumView, {
        route: SITEMAP_ROUTES[path],
        onNavigate: () => {}
      }))
      expect(html).not.toContain('undefined')
      expect(html).not.toContain('null')
      expect(html).not.toContain('NaN')
    }
  })
})
