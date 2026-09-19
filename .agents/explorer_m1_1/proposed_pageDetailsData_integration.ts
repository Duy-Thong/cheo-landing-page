/**
 * Integration Test Prototype for pageDetailsData.ts
 * Milestone: M1 (Data & UI Primitives)
 */

import type {
  HubShowcaseData,
  ModernCheoComprehensiveData,
  CheoAudioCompleteData,
  BackstageArtistryData,
  CulturalPhilosophyData,
  ArchiveDocumentItem,
  MuseumZoneMapData,
  CuratedTourData,
  CulturalMetric,
  HeritagePillar,
  MetaBadge
} from './proposed_cheoCulturalTypes'

import {
  KHAM_PHA_HUB_DATA,
  GIOI_THIEU_HUB_DATA,
  SAN_KHAU_HUB_DATA,
  TIEN_ICH_HUB_DATA,
  MODERN_CHEO_DATA,
  CHEO_AUDIO_COMPLETE_DATA,
  BACKSTAGE_ARTISTRY_DATA,
  CULTURAL_PHILOSOPHY_DATA,
  ARCHIVE_VAULT_DATA,
  MUSEUM_ZONES_DATA,
  CURATED_TOURS_DATA
} from './proposed_cheoCulturalData'

export interface PageDetailContent {
  id: string
  title: string
  parentTitle?: string
  breadcrumb: string[]
  quote?: {
    text: string
    author?: string
  }
  heroBadge: string
  introduction: string
  sections: {
    heading: string
    paragraphs: string[]
    bullets?: string[]
  }[]
  funFacts?: string[]
  widgetType?: 'audio' | 'characters' | 'costumes' | 'ticket' | 'feedback' | 'timeline' | 'plays' | 'modern' | 'map' | 'archive' | 'default'
  metaBadges?: string[]
  structuredBadges?: MetaBadge[]
  quickSpecs?: { label: string; value: string }[]
  tags: string[]
  // Rich Cultural Data Extensions (Non-breaking)
  hubShowcase?: HubShowcaseData
  modernCheoData?: ModernCheoComprehensiveData
  audioData?: CheoAudioCompleteData
  backstageData?: BackstageArtistryData
  philosophyData?: CulturalPhilosophyData
  archiveVault?: ArchiveDocumentItem[]
  museumZones?: MuseumZoneMapData[]
  curatedTours?: CuratedTourData[]
  keyMetrics?: CulturalMetric[]
  pillars?: HeritagePillar[]
}

export const SAMPLE_INTEGRATION_MAP: Record<string, PageDetailContent> = {
  'kham-pha': {
    id: 'kham-pha',
    title: 'Không Gian Khám Phá',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Sảnh', 'Khám phá'],
    heroBadge: 'Trái Tim Của Bảo Tàng',
    introduction: 'Khu vực trưng bày chính nơi bạn có thể khám phá lịch sử ngàn năm...',
    sections: [
      {
        heading: 'Hành trình 3 chặng trải nghiệm',
        paragraphs: ['Chặng 1: Tổng quan nguồn cội...']
      }
    ],
    tags: ['Trưng bày chính', 'Nghệ thuật diễn xướng'],
    // Cultural Integration:
    hubShowcase: KHAM_PHA_HUB_DATA,
    keyMetrics: KHAM_PHA_HUB_DATA.keyMetrics,
    pillars: KHAM_PHA_HUB_DATA.pillars
  },
  'cheo-hien-dai': {
    id: 'cheo-hien-dai',
    title: 'Chèo Hiện Đại & Sự Chuyển Mình',
    parentTitle: 'Khám phá',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Chèo hiện đại'],
    heroBadge: 'Đương Đại & Tương Lai',
    widgetType: 'modern',
    metaBadges: ['Cột Mốc 1951', 'Kỷ Nguyên Tào Mạt', 'Bộ Ba Bài Ca Giữ Nước', 'Hồ Sơ UNESCO 2024'],
    quickSpecs: [
      { label: 'Mốc chuyển mình', value: '1951 (Chiến khu Việt Bắc)' },
      { label: 'Tác giả kiệt xuất', value: 'NSND Tào Mạt, Lưu Quang Vũ' }
    ],
    introduction: 'Hành trình hơn 70 năm chuyển mình ngoạn mục...',
    sections: [
      {
        heading: 'Cột mốc 1951: Chuyển mình từ sân đình sang nhà hát chuyên nghiệp',
        paragraphs: ['Năm 1951, giữa bom đạn chiến khu Việt Bắc...']
      }
    ],
    tags: ['Chèo đương đại', 'NSND Tào Mạt'],
    // Cultural Integration:
    modernCheoData: MODERN_CHEO_DATA
  },
  'am-thanh': {
    id: 'am-thanh',
    title: 'Âm Thanh & Dàn Nhạc Làn Điệu Chèo',
    parentTitle: 'Sân Khấu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Sân Khấu', 'Âm Thanh'],
    heroBadge: 'Giai Điệu Quê Hương',
    widgetType: 'audio',
    introduction: 'Dàn nhạc Chèo là linh hồn của mỗi vở diễn...',
    sections: [
      {
        heading: 'Trống đế: nhạc trưởng của chiếu chèo',
        paragraphs: ['Người đánh trống đế không chỉ giữ nhịp...']
      }
    ],
    tags: ['Trống Chèo', 'Đàn nguyệt'],
    // Cultural Integration:
    audioData: CHEO_AUDIO_COMPLETE_DATA
  },
  'gioi-thieu': {
    id: 'gioi-thieu',
    title: 'Không Gian Giới Thiệu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Sảnh', 'Giới thiệu'],
    heroBadge: 'Khởi Nguồn & Sứ Mệnh',
    introduction: 'Nơi lưu giữ câu chuyện khởi đầu của Bảo tàng Chèo Số...',
    sections: [],
    tags: ['Sứ mệnh'],
    hubShowcase: GIOI_THIEU_HUB_DATA,
    keyMetrics: GIOI_THIEU_HUB_DATA.keyMetrics
  },
  'san-khau': {
    id: 'san-khau',
    title: 'Không Gian Sân Khấu Chèo',
    parentTitle: 'Khám phá',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Sân Khấu'],
    heroBadge: 'Trọng Tâm Biểu Diễn',
    widgetType: 'plays',
    introduction: 'Chiếu chèo xưa chỉ vỏn vẹn một tấm chiếu hoa...',
    sections: [],
    tags: ['Chiếu chèo sân đình'],
    hubShowcase: SAN_KHAU_HUB_DATA,
    keyMetrics: SAN_KHAU_HUB_DATA.keyMetrics
  },
  'tien-ich': {
    id: 'tien-ich',
    title: 'Không Gian Tiện Ích & Dịch Vụ',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Sảnh', 'Tiện ích'],
    heroBadge: 'Dịch Vụ Khách Tham Quan',
    introduction: 'Tập hợp các công cụ hỗ trợ trải nghiệm bảo tàng...',
    sections: [],
    tags: ['Dịch vụ số'],
    hubShowcase: TIEN_ICH_HUB_DATA,
    keyMetrics: TIEN_ICH_HUB_DATA.keyMetrics
  },
  'phia-sau-san-khau': {
    id: 'phia-sau-san-khau',
    title: 'Phía Sau Sân Khấu',
    parentTitle: 'Tổng quan',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Tổng quan', 'Phía sau sân khấu'],
    heroBadge: 'Góc Hậu Trường',
    introduction: 'Nơi khám phá quá trình khổ luyện của diễn viên Chèo...',
    sections: [],
    tags: ['Hóa trang', 'Tập luyện'],
    backstageData: BACKSTAGE_ARTISTRY_DATA
  },
  'gia-tri-van-hoa': {
    id: 'gia-tri-van-hoa',
    title: 'Giá Trị Văn Hóa & Nhân Sinh',
    parentTitle: 'Tổng quan',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Tổng quan', 'Giá trị văn hoá'],
    heroBadge: 'Đạo Lý Dân Gian',
    introduction: 'Chèo chứa đựng triết lý nhân sinh mộc mạc mà thâm thúy...',
    sections: [],
    tags: ['Đạo lý nhân sinh'],
    philosophyData: CULTURAL_PHILOSOPHY_DATA
  },
  'kho-tu-lieu': {
    id: 'kho-tu-lieu',
    title: 'Kho Tư Liệu Di Sản',
    parentTitle: 'Tiện ích',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Kho tư liệu'],
    heroBadge: 'Thư Viện Di Sản',
    widgetType: 'archive',
    introduction: 'Kho lưu trữ di sản quý hiếm...',
    sections: [],
    tags: ['Đĩa than 78 vòng'],
    archiveVault: ARCHIVE_VAULT_DATA
  },
  'ban-do-bao-tang': {
    id: 'ban-do-bao-tang',
    title: 'Bản Đồ Bảo Tàng',
    parentTitle: 'Tiện ích',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Bản đồ bảo tàng'],
    heroBadge: 'Sơ Đồ Tương Tác',
    widgetType: 'map',
    introduction: 'Hệ thống định vị không gian đa tầng...',
    sections: [],
    tags: ['Bản đồ tương tác'],
    museumZones: MUSEUM_ZONES_DATA,
    curatedTours: CURATED_TOURS_DATA
  }
}
