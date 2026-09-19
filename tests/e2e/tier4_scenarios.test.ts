import React from 'react'
import { describe, it, expect, setTier, renderComponent } from './framework.ts'
import { SITEMAP_ROUTES, matchRoute } from '../../src/data/sitemapRoutes.ts'
import { PAGE_DETAILS_MAP } from '../../src/data/pageDetailsData.ts'
import { MuseumView } from '../../src/components/MuseumView.tsx'
import { HomePage } from '../../src/components/HomePage.tsx'

setTier('Tier 4: Real-World Application Scenarios')

describe('Tier 4.1: Scenario 1 - Heritage Researcher Traversing 10 Centuries of Chèo History', () => {
  it('T4.1.1 Step 1: Researcher arrives at Reception Hall (/) and inspects heritage entrance', () => {
    const rootRoute = matchRoute('/')
    expect(rootRoute.id).toBe('sanh')
    const html = renderComponent(React.createElement(HomePage, { onNavigate: () => {} }))
    expect(html).toContain('Bảo Tàng Số Nghệ Thuật')
    expect(html).toContain('Chèo Cổ Truyền')
    expect(html).toContain('Không Gian Di Sản')
  })

  it('T4.1.2 Step 2: Researcher enters /kham-pha hub and observes 3 Heritage Branches and descriptions', () => {
    const route = matchRoute('/kham-pha')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Không Gian Khám Phá')
    expect(html).toContain('Tổng Quan')
    expect(html).toContain('Sân Khấu')
    expect(html).toContain('Chèo Hiện Đại')
  })

  it('T4.1.3 Step 3: Researcher navigates into /kham-pha/tong-quan sub-hub', () => {
    const route = matchRoute('/kham-pha/tong-quan')
    expect(route.isHub).toBe(true)
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Lịch Sử Phát Triển')
    expect(html).toContain('Giá Trị Văn Hóa')
  })

  it('T4.1.4 Step 4: Researcher explores 10-Century Timeline at /kham-pha/tong-quan/lich-su-phat-trien', () => {
    const route = matchRoute('/kham-pha/tong-quan/lich-su-phat-trien')
    expect(route.widgetType).toBe('timeline')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Lịch Sử Phát Triển')
    expect(html).toContain('Hoa Lư')
  })

  it('T4.1.5 Step 5: Researcher deep-dives into Cultural Values at /kham-pha/tong-quan/gia-tri-van-hoa', () => {
    const route = matchRoute('/kham-pha/tong-quan/gia-tri-van-hoa')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Giá Trị Văn Hóa')
    const detail = PAGE_DETAILS_MAP['gia-tri-van-hoa']
    expect(detail.sections.length).toBeGreaterThanOrEqual(2)
  })
})

describe('Tier 4.2: Scenario 2 - Theater Patron Planning a Visit, Checking Venues & Booking Tickets', () => {
  it('T4.2.1 Step 1: Patron opens Utilities Space at /tien-ich', () => {
    const route = matchRoute('/tien-ich')
    expect(route.isHub).toBe(true)
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Không Gian Tiện Ích')
    expect(html).toContain('Tham Quan &amp; Sự Kiện')
  })

  it('T4.2.2 Step 2: Patron checks Event & Performance Sub-hub at /tien-ich/tham-quan-va-su-kien', () => {
    const route = matchRoute('/tien-ich/tham-quan-va-su-kien')
    expect(route.isHub).toBe(true)
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Tham Quan &amp; Sự Kiện')
    expect(html).toContain('Lịch Biểu Diễn')
    expect(html).toContain('Đặt Mua Vé')
  })

  it('T4.2.3 Step 3: Patron inspects Theater Venues at /tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien', () => {
    const route = matchRoute('/tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Địa Điểm Biểu Diễn')
    const detail = PAGE_DETAILS_MAP['dia-diem-bieu-dien']
    expect(detail.sections.some(s => s.paragraphs.some(p => p.includes('Kim Mã') || p.includes('Đại Nam')))).toBe(true)
  })

  it('T4.2.4 Step 4: Patron accesses Ticket Booking system at /tien-ich/tham-quan-va-su-kien/dat-mua-ve', () => {
    const route = matchRoute('/tien-ich/tham-quan-va-su-kien/dat-mua-ve')
    expect(route.widgetType).toBe('ticket')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Đặt Mua Vé')
    expect(html).toContain('Cổng Đặt Mua Vé Trực Tuyến')
    expect(html).toContain('Chọn vở diễn')
  })
})

describe('Tier 4.3: Scenario 3 - Musicologist Studying Chèo Sound Journey, Timeline & Bát Âm Orchestra', () => {
  it('T4.3.1 Step 1: Musicologist navigates to Stage Hub at /kham-pha/san-khau', () => {
    const route = matchRoute('/kham-pha/san-khau')
    expect(route.isHub).toBe(true)
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Không Gian Sân Khấu')
    expect(html).toContain('Âm Thanh')
  })

  it('T4.3.2 Step 2: Musicologist mounts Sound & Melody page at /kham-pha/san-khau/am-thanh', () => {
    const route = matchRoute('/kham-pha/san-khau/am-thanh')
    expect(route.widgetType).toBe('audio')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Âm Thanh')
    expect(html).toContain('Hành Trình Âm Sắc')
  })

  it('T4.3.3 Step 3: Musicologist analyzes 4 theatrical phases of the Chèo performance', () => {
    const route = matchRoute('/kham-pha/san-khau/am-thanh')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toMatch(/Khởi Nhạc/i)
    expect(html).toMatch(/Xưng Danh/i)
    expect(html).toMatch(/Trữ Tình/i)
    expect(html).toMatch(/Trào Lộng/i)
  })

  it('T4.3.4 Step 4: Musicologist examines all 6 orchestra instruments and classic verses', () => {
    const route = matchRoute('/kham-pha/san-khau/am-thanh')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Trống Đế')
    expect(html).toContain('Trống Cơm')
    expect(html).toContain('Đàn Nguyệt')
    expect(html).toContain('Đàn Nhị')
    expect(html).toContain('Sáo Trúc')
    expect(html).toContain('Thanh La')
    expect(html).toMatch(/Đào [Ll]iễu/)
  })
})

describe('Tier 4.4: Scenario 4 - Heritage Advocate Investigating 1951 Modern Chèo Transformation & UNESCO', () => {
  it('T4.4.1 Step 1: Advocate navigates to Khám Phá hub and views modern Chèo entry', () => {
    const route = matchRoute('/kham-pha')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Chèo Hiện Đại')
  })

  it('T4.4.2 Step 2: Advocate enters /kham-pha/cheo-hien-dai and mounts modern Chèo exhibition', () => {
    const route = matchRoute('/kham-pha/cheo-hien-dai')
    expect(route.widgetType).toBe('modern')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Chèo Hiện Đại')
    expect(html).toContain('Hành Trình Chuyển Mình')
  })

  it('T4.4.3 Step 3: Advocate reviews the 1951 founding milestone at Việt Bắc and master artists', () => {
    const route = matchRoute('/kham-pha/cheo-hien-dai')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('1951')
    expect(html).toContain('Thành Lập Đoàn Chèo Cổ Truyền Việt Nam')
    expect(html).toContain('Dịu Hương')
    expect(html).toContain('Cả Tam')
  })

  it('T4.4.4 Step 4: Advocate investigates modern Chèo masterpiece trilogy "Bài ca giữ nước"', () => {
    const route = matchRoute('/kham-pha/cheo-hien-dai')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Bài ca giữ nước')
  })

  it('T4.4.5 Step 5: Advocate verifies 14-province UNESCO intangible heritage dossier details', () => {
    const route = matchRoute('/kham-pha/cheo-hien-dai')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('UNESCO')
    expect(html).toContain('14+')
  })
})

describe('Tier 4.5: Scenario 5 - Literature Student Exploring Archetypal Characters, Costumes & Master Plays', () => {
  it('T4.5.1 Step 1: Student visits Stage Characters gallery at /kham-pha/san-khau/nhan-vat', () => {
    const route = matchRoute('/kham-pha/san-khau/nhan-vat')
    expect(route.widgetType).toBe('characters')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Đào')
    expect(html).toContain('Kép')
    expect(html).toContain('Hề')
    expect(html).toContain('Lão')
    expect(html).toContain('Mụ')
  })

  it('T4.5.2 Step 2: Student examines traditional costume artifacts at /kham-pha/san-khau/trang-phuc', () => {
    const route = matchRoute('/kham-pha/san-khau/trang-phuc')
    expect(route.widgetType).toBe('costumes')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toMatch(/Áo [Tt]ứ [Tt]hân/)
    expect(html).toMatch(/Nón [Qq]uai [Tt]hao/)
  })

  it('T4.5.3 Step 3: Student explores 4 master plays at /kham-pha/san-khau/tac-pham-tieu-bieu', () => {
    const route = matchRoute('/kham-pha/san-khau/tac-pham-tieu-bieu')
    expect(route.widgetType).toBe('plays')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Quan Âm Thị Kính')
    expect(html).toContain('Xúy Vân')
    expect(html).toContain('Lưu Bình')
    expect(html).toContain('Nghêu Sò')
  })

  it('T4.5.4 Step 4: Student accesses Document Archive Vault at /tien-ich/kho-tu-lieu', () => {
    const route = matchRoute('/tien-ich/kho-tu-lieu')
    expect(route.widgetType).toBe('archive')
    const html = renderComponent(React.createElement(MuseumView, { route, onNavigate: () => {} }))
    expect(html).toContain('Kho Tư Liệu')
  })
})
