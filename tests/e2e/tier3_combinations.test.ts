import React from 'react'
import { describe, it, expect, setTier, renderComponent } from './framework.ts'
import { SITEMAP_ROUTES, matchRoute } from '../../src/data/sitemapRoutes.ts'
import { MuseumView } from '../../src/components/MuseumView.tsx'
import { AudioSamplePlayer } from '../../src/components/interactive/AudioSamplePlayer.tsx'

setTier('Tier 3: Cross-Feature Combinations')

describe('Tier 3.1: Route Resolution + Widget Mounting Combinations', () => {
  it('T3.1.1 should mount AudioSamplePlayer when navigating to /kham-pha/san-khau/am-thanh', () => {
    const route = matchRoute('/kham-pha/san-khau/am-thanh')
    expect(route.widgetType).toBe('audio')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Hành Trình Âm Sắc')
    expect(html).toContain('Trống Đế')
    expect(html).toContain('Đàn Nguyệt')
  })

  it('T3.1.2 should mount ModernCheoShowcase when navigating to /kham-pha/cheo-hien-dai', () => {
    const route = matchRoute('/kham-pha/cheo-hien-dai')
    expect(route.widgetType).toBe('modern')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Chèo Hiện Đại')
    expect(html).toContain('1951')
    expect(html).toContain('UNESCO')
  })

  it('T3.1.3 should mount CharactersGallery when navigating to /kham-pha/san-khau/nhan-vat', () => {
    const route = matchRoute('/kham-pha/san-khau/nhan-vat')
    expect(route.widgetType).toBe('characters')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Đào')
    expect(html).toContain('Kép')
    expect(html).toContain('Hề')
  })

  it('T3.1.4 should mount CostumesShowcase when navigating to /kham-pha/san-khau/trang-phuc', () => {
    const route = matchRoute('/kham-pha/san-khau/trang-phuc')
    expect(route.widgetType).toBe('costumes')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toMatch(/Áo [Tt]ứ [Tt]hân/)
    expect(html).toMatch(/Nón [Qq]uai [Tt]hao/)
  })

  it('T3.1.5 should mount PlaysShowcase when navigating to /kham-pha/san-khau/tac-pham-tieu-bieu', () => {
    const route = matchRoute('/kham-pha/san-khau/tac-pham-tieu-bieu')
    expect(route.widgetType).toBe('plays')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Quan Âm Thị Kính')
    expect(html).toContain('Xúy Vân')
  })

  it('T3.1.6 should mount TimelineWidget when navigating to /kham-pha/tong-quan/lich-su-phat-trien', () => {
    const route = matchRoute('/kham-pha/tong-quan/lich-su-phat-trien')
    expect(route.widgetType).toBe('timeline')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Thế kỷ X')
    expect(html).toContain('Hoa Lư')
  })
})

describe('Tier 3.2: Hub Parent Hierarchy + Leaf Breadcrumbs & Category Consistency', () => {
  it('T3.2.1 should verify all /gioi-thieu leaf pages reference /gioi-thieu in their breadcrumbs', () => {
    const parent = SITEMAP_ROUTES['/gioi-thieu']
    for (const childPath of parent.childrenPaths!) {
      const child = SITEMAP_ROUTES[childPath]
      expect(child).toBeDefined()
      const hasParentCrumb = child.breadcrumbs.some(b => b.path === '/gioi-thieu')
      expect(hasParentCrumb).toBe(true)
    }
  })

  it('T3.2.2 should verify all /kham-pha primary children reference /kham-pha in their breadcrumbs', () => {
    const parent = SITEMAP_ROUTES['/kham-pha']
    for (const childPath of parent.childrenPaths!) {
      const child = SITEMAP_ROUTES[childPath]
      expect(child).toBeDefined()
      const hasParentCrumb = child.breadcrumbs.some(b => b.path === '/kham-pha')
      expect(hasParentCrumb).toBe(true)
    }
  })

  it('T3.2.3 should verify all /tien-ich primary children reference /tien-ich in their breadcrumbs', () => {
    const parent = SITEMAP_ROUTES['/tien-ich']
    for (const childPath of parent.childrenPaths!) {
      const child = SITEMAP_ROUTES[childPath]
      expect(child).toBeDefined()
      const hasParentCrumb = child.breadcrumbs.some(b => b.path === '/tien-ich')
      expect(hasParentCrumb).toBe(true)
    }
  })

  it('T3.2.4 should verify all /kham-pha/tong-quan sub-leaves reference the sub-hub path', () => {
    const subHub = SITEMAP_ROUTES['/kham-pha/tong-quan']
    for (const childPath of subHub.childrenPaths!) {
      const child = SITEMAP_ROUTES[childPath]
      expect(child).toBeDefined()
      const hasSubHubCrumb = child.breadcrumbs.some(b => b.path === '/kham-pha/tong-quan')
      expect(hasSubHubCrumb).toBe(true)
    }
  })

  it('T3.2.5 should verify all /kham-pha/san-khau sub-leaves reference the stage hub path', () => {
    const stageHub = SITEMAP_ROUTES['/kham-pha/san-khau']
    for (const childPath of stageHub.childrenPaths!) {
      const child = SITEMAP_ROUTES[childPath]
      expect(child).toBeDefined()
      const hasStageCrumb = child.breadcrumbs.some(b => b.path === '/kham-pha/san-khau')
      expect(hasStageCrumb).toBe(true)
    }
  })

  it('T3.2.6 should verify all /tien-ich/tham-quan-va-su-kien sub-leaves reference the event hub path', () => {
    const eventHub = SITEMAP_ROUTES['/tien-ich/tham-quan-va-su-kien']
    for (const childPath of eventHub.childrenPaths!) {
      const child = SITEMAP_ROUTES[childPath]
      expect(child).toBeDefined()
      const hasEventCrumb = child.breadcrumbs.some(b => b.path === '/tien-ich/tham-quan-va-su-kien')
      expect(hasEventCrumb).toBe(true)
    }
  })
})

describe('Tier 3.3: Search Query Matches + Route Navigation Targeting', () => {
  it('T3.3.1 should map keyword "âm thanh" or "làn điệu" to /kham-pha/san-khau/am-thanh', () => {
    const matching = Object.values(SITEMAP_ROUTES).filter(r =>
      r.title.toLowerCase().includes('âm thanh') || r.tags.some(t => t.toLowerCase().includes('âm thanh'))
    )
    expect(matching.some(r => r.path === '/kham-pha/san-khau/am-thanh')).toBe(true)
  })

  it('T3.3.2 should map keyword "hiện đại" or "cách tân" to /kham-pha/cheo-hien-dai', () => {
    const matching = Object.values(SITEMAP_ROUTES).filter(r =>
      r.title.toLowerCase().includes('hiện đại') || r.description.toLowerCase().includes('hiện đại')
    )
    expect(matching.some(r => r.path === '/kham-pha/cheo-hien-dai')).toBe(true)
  })

  it('T3.3.3 should map keyword "nhân vật" to /kham-pha/san-khau/nhan-vat', () => {
    const matching = Object.values(SITEMAP_ROUTES).filter(r =>
      r.title.toLowerCase().includes('nhân vật')
    )
    expect(matching.some(r => r.path === '/kham-pha/san-khau/nhan-vat')).toBe(true)
  })

  it('T3.3.4 should map keyword "trang phục" or "phục trang" to /kham-pha/san-khau/trang-phuc', () => {
    const matching = Object.values(SITEMAP_ROUTES).filter(r =>
      r.title.toLowerCase().includes('trang') || r.path.includes('trang-phuc')
    )
    expect(matching.some(r => r.path === '/kham-pha/san-khau/trang-phuc')).toBe(true)
  })

  it('T3.3.5 should map keyword "đặt vé" or "vé" to ticket booking routes', () => {
    const matching = Object.values(SITEMAP_ROUTES).filter(r =>
      r.title.toLowerCase().includes('vé') || r.path.includes('dat-mua-ve')
    )
    expect(matching.some(r => r.path.includes('dat-mua-ve'))).toBe(true)
  })

  it('T3.3.6 should map keyword "kho tư liệu" to /tien-ich/kho-tu-lieu', () => {
    const matching = Object.values(SITEMAP_ROUTES).filter(r =>
      r.title.toLowerCase().includes('tư liệu')
    )
    expect(matching.some(r => r.path === '/tien-ich/kho-tu-lieu')).toBe(true)
  })
})

describe('Tier 3.4: Melody Selection + Lyric Poetic Forms + Instrument Associations', () => {
  it('T3.4.1 should pair "Khởi Nhạc & Mở Màn" (Stage 1) with Trống đế and Trống cái', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toContain('Khởi Nhạc')
    expect(html).toContain('Trống đế &amp; Trống cái đại cổ')
  })

  it('T3.4.2 should pair "Hát Xưng Danh" (Stage 2) in stage progression', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toContain('Hát Xưng Danh')
  })

  it('T3.4.3 should pair "Làn Điệu Trữ Tình" (Stage 3) in stage progression', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toContain('Làn Điệu Trữ Tình')
  })

  it('T3.4.4 should pair "Trào Lộng & Hoan Hỉ" (Stage 4) in stage progression', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toContain('Trào Lộng')
  })

  it('T3.4.5 should associate melody "Đào Liễu" with lyrical character expression', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toMatch(/Đào [Ll]iễu/)
  })

  it('T3.4.6 should pair instrument "Trống Đế" with rhythm leadership role', () => {
    const html = renderComponent(React.createElement(AudioSamplePlayer))
    expect(html).toContain('Trống Đế')
    expect(html).toContain('Chỉ huy tiết tấu')
  })
})
