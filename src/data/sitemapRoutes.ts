import type { BadgeVariant, KeyValueAttribute } from '../types/cheoCulturalTypes'

export interface RouteMetaBadge {
  label: string
  variant?: BadgeVariant
}

export interface RouteNode {
  path: string
  id: string
  title: string
  subtitle: string
  category: string
  breadcrumbs: { title: string; path: string }[]
  childrenPaths?: string[]
  isHub?: boolean
  description: string
  widgetType?: 'audio' | 'characters' | 'costumes' | 'ticket' | 'timeline' | 'feedback' | 'plays' | 'modern' | 'map' | 'archive' | 'about-museum' | 'field-story' | 'goals' | 'team' | 'overview' | 'cultural-values' | 'backstage' | 'default'
  tags: string[]
  // Structured Metadata Primitives (R4 Architecture)
  metaBadges?: RouteMetaBadge[]
  featurePills?: string[]
  quickSpecs?: Array<{ label: string; value: string }>
  keySpecs?: KeyValueAttribute[]
}

/**
 * Pure helper function to parse legacy/raw subtitles into structured badge primitives.
 */
export function parseSubtitleToBadges(
  subtitle?: string,
  _category?: string,
  tags?: string[]
): RouteMetaBadge[] {
  if (!subtitle || !subtitle.trim()) {
    if (tags && tags.length > 0) {
      return tags.slice(0, 3).map((t, idx) => ({
        label: t,
        variant: (['amber', 'emerald', 'sky'][idx % 3]) as BadgeVariant
      }))
    }
    return []
  }

  const rawParts = subtitle.split(/\s*(?:&|,|;|—|\bvà\b|\bvà\b)\s*/)
  const parts = rawParts.map(p => p.trim()).filter(p => p.length > 0)

  const pickVariant = (text: string, idx: number): BadgeVariant => {
    const lower = text.toLowerCase()
    if (lower.includes('1951') || lower.includes('unesco') || lower.includes('kiệt tác') || lower.includes('hồn cốt') || lower.includes('đào - kép') || lower.includes('mốc son')) {
      return 'red'
    }
    if (lower.includes('thế kỷ') || lower.includes('bảo tàng') || lower.includes('nghệ nhân') || lower.includes('cổ truyền') || lower.includes('đĩa than') || lower.includes('lịch sử') || lower.includes('phục trang')) {
      return 'amber'
    }
    if (lower.includes('làn điệu') || lower.includes('âm thanh') || lower.includes('dân gian') || lower.includes('sông hồng') || lower.includes('điền dã') || lower.includes('bảo tồn') || lower.includes('lịch diễn')) {
      return 'emerald'
    }
    if (lower.includes('số hóa') || lower.includes('web3d') || lower.includes('tìm kiếm') || lower.includes('bộ lọc') || lower.includes('vé') || lower.includes('hotline') || lower.includes('vr') || lower.includes('bản đồ')) {
      return 'sky'
    }
    const fallbacks: BadgeVariant[] = ['amber', 'emerald', 'sky', 'red', 'stone']
    return fallbacks[idx % fallbacks.length]
  }

  return parts.map((part, idx) => ({
    label: part,
    variant: pickVariant(part, idx)
  }))
}

export const SITEMAP_ROUTES: Record<string, RouteNode> = {
  // GỐC & SẢNH
  '/': {
    path: '/',
    id: 'sanh',
    title: 'Sảnh Đón Tiếp',
    subtitle: 'Không gian trung tâm bảo tàng',
    category: 'Sảnh',
    breadcrumbs: [{ title: 'Bảo Tàng Chèo Số', path: '/' }],
    childrenPaths: ['/gioi-thieu', '/kham-pha', '/tien-ich'],
    isHub: true,
    description: 'Cổng đón tiếp chính của Bảo tàng Chèo Số, kết nối người tham quan đến 3 không gian lớn: Giới thiệu, Khám phá sân khấu và Tiện ích dịch vụ.',
    tags: ['Sảnh chính', 'Bảo tàng số', 'Trung tâm'],
    metaBadges: [
      { label: 'Sảnh Đón Tiếp', variant: 'amber' },
      { label: 'Cổng 3 Không Gian', variant: 'emerald' },
      { label: 'Chỉ Dẫn 3D', variant: 'sky' }
    ],
    featurePills: ['Bảo tàng số', 'Web3D tương tác', 'Di sản Bắc Bộ'],
    quickSpecs: [
      { label: 'Không gian', value: '3 Phân khu' },
      { label: 'Quy mô', value: '29 Phòng trưng bày' },
      { label: 'Hình thức', value: 'Số hóa tương tác' }
    ]
  },
  '/sanh': {
    path: '/sanh',
    id: 'sanh',
    title: 'Sảnh Đón Tiếp',
    subtitle: 'Không gian trung tâm bảo tàng',
    category: 'Sảnh',
    breadcrumbs: [{ title: 'Bảo Tàng Chèo Số', path: '/' }, { title: 'Sảnh', path: '/sanh' }],
    childrenPaths: ['/gioi-thieu', '/kham-pha', '/tien-ich'],
    isHub: true,
    description: 'Cổng đón tiếp chính của Bảo tàng Chèo Số, kết nối người tham quan đến 3 không gian lớn: Giới thiệu, Khám phá sân khấu và Tiện ích dịch vụ.',
    tags: ['Sảnh chính', 'Bảo tàng số', 'Trung tâm'],
    metaBadges: [
      { label: 'Sảnh Đón Tiếp', variant: 'amber' },
      { label: 'Cổng 3 Không Gian', variant: 'emerald' },
      { label: 'Chỉ Dẫn 3D', variant: 'sky' }
    ],
    featurePills: ['Bảo tàng số', 'Web3D tương tác', 'Di sản Bắc Bộ'],
    quickSpecs: [
      { label: 'Không gian', value: '3 Phân khu' },
      { label: 'Quy mô', value: '29 Phòng trưng bày' },
      { label: 'Hình thức', value: 'Số hóa tương tác' }
    ]
  },

  // ================= 1. GIỚI THIỆU =================
  '/gioi-thieu': {
    path: '/gioi-thieu',
    id: 'gioi-thieu',
    title: 'Không Gian Giới Thiệu',
    subtitle: 'Khởi nguồn, sứ mệnh & con người',
    category: 'Giới thiệu',
    breadcrumbs: [{ title: 'Bảo Tàng Chèo Số', path: '/' }, { title: 'Giới thiệu', path: '/gioi-thieu' }],
    childrenPaths: [
      '/gioi-thieu/bao-tang-so-cheo',
      '/gioi-thieu/cau-chuyen-hinh-thanh',
      '/gioi-thieu/muc-tieu-va-y-nghia',
      '/gioi-thieu/doi-ngu-nhom-thuc-hien'
    ],
    isHub: true,
    description: 'Tìm hiểu về nguồn gốc dự án Bảo tàng Chèo Số, hành trình sưu tầm điền dã và những con người đứng sau công trình số hóa di sản nghệ thuật truyền thống.',
    tags: ['Giới thiệu', 'Sứ mệnh', 'Đội ngũ'],
    metaBadges: [
      { label: 'Sứ Mệnh Di Sản', variant: 'amber' },
      { label: 'Hành Trình Điền Dã', variant: 'emerald' },
      { label: 'Đội Ngũ Sáng Lập', variant: 'sky' }
    ],
    featurePills: ['Bảo tồn', 'Nghiên cứu điền dã', 'Cố vấn chuyên gia'],
    quickSpecs: [
      { label: 'Trọng tâm', value: 'Bảo tồn & Lan tỏa' },
      { label: 'Địa bàn', value: 'Bắc Bộ' },
      { label: 'Phương thức', value: 'Âm thanh vòm & 3D' }
    ]
  },
  '/gioi-thieu/bao-tang-so-cheo': {
    path: '/gioi-thieu/bao-tang-so-cheo',
    id: 'bao-tang-so-cheo',
    title: 'Bảo Tàng Số “Chèo”',
    subtitle: 'Chiếu chèo ngàn năm dưới mái đình số',
    category: 'Giới thiệu',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Giới thiệu', path: '/gioi-thieu' },
      { title: 'Bảo tàng số “Chèo”', path: '/gioi-thieu/bao-tang-so-cheo' }
    ],
    description: 'Không gian mở nơi tinh hoa sân khấu truyền thống hội ngộ cùng công nghệ số hóa tương tác, để tiếng trống hội làng không bao giờ tắt.',
    widgetType: 'about-museum',
    tags: ['Bảo tàng mở', 'Âm thanh đa tầng', 'Di sản sống'],
    metaBadges: [
      { label: 'Chiếu Chèo Số', variant: 'red' },
      { label: 'Tương Tác Sống', variant: 'amber' },
      { label: 'Lan Tỏa Cội Nguồn', variant: 'emerald' }
    ],
    featurePills: ['Bảo tàng mở', 'Kho âm thanh mộc', 'Di sản sống'],
    quickSpecs: [
      { label: 'Triết lý', value: 'Bảo tàng mở' },
      { label: 'Âm thanh', value: 'Thu âm đa tầng mộc' },
      { label: 'Tầm nhìn', value: 'Gìn giữ cho muôn đời sau' }
    ]
  },
  '/gioi-thieu/cau-chuyen-hinh-thanh': {
    path: '/gioi-thieu/cau-chuyen-hinh-thanh',
    id: 'cau-chuyen-hinh-thanh',
    title: 'Câu Chuyện Hình Thành',
    subtitle: 'Hành trình điền dã tìm về cội nguồn',
    category: 'Giới thiệu',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Giới thiệu', path: '/gioi-thieu' },
      { title: 'Câu chuyện hình thành', path: '/gioi-thieu/cau-chuyen-hinh-thanh' }
    ],
    description: 'Hành trình hơn 2 năm qua các làng chèo cổ Bắc Bộ (làng Khuốc, Yên Khánh, Nam Trực) để ghi chép lại những làn điệu cổ truyền từ các nghệ nhân lão thành.',
    widgetType: 'field-story',
    tags: ['Làng Chèo cổ', 'Ký sự', 'Nghệ nhân dân gian'],
    metaBadges: [
      { label: '2+ Năm Điền Dã', variant: 'amber' },
      { label: 'Làng Chèo Cổ', variant: 'emerald' },
      { label: 'Ký Sự Ghi Âm', variant: 'stone' }
    ],
    featurePills: ['Làng Khuốc', 'Yên Khánh', 'Nam Trực'],
    quickSpecs: [
      { label: 'Địa bàn', value: 'Khuốc, Yên Khánh, Nam Trực' },
      { label: 'Nhân chứng', value: '20+ Nghệ nhân lão thành' },
      { label: 'Hiện vật', value: '150+ Bản ghi' }
    ]
  },
  '/gioi-thieu/muc-tieu-va-y-nghia': {
    path: '/gioi-thieu/muc-tieu-va-y-nghia',
    id: 'muc-tieu-va-y-nghia',
    title: 'Mục Tiêu Và Ý Nghĩa',
    subtitle: 'Gìn giữ hồn cốt & đánh thức tự hào cội rễ',
    category: 'Giới thiệu',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Giới thiệu', path: '/gioi-thieu' },
      { title: 'Mục tiêu và ý nghĩa', path: '/gioi-thieu/muc-tieu-va-y-nghia' }
    ],
    description: 'Cứu vãn những làn điệu cổ trước nguy cơ thất truyền, mở rộng cánh cửa di sản cho thế hệ trẻ và đưa bản sắc sân đình Bắc Bộ vươn tầm thế giới.',
    widgetType: 'goals',
    tags: ['Bảo tồn nguyên bản', 'Khơi nguồn tự hào', 'Hồ sơ UNESCO'],
    metaBadges: [
      { label: 'Cứu Ký Ức Cổ', variant: 'red' },
      { label: 'Cảm Hứng Thế Hệ Mới', variant: 'emerald' },
      { label: 'Không Gian UNESCO', variant: 'sky' }
    ],
    featurePills: ['Ký sự điền dã', 'Cầu nối thế hệ', 'Tầm nhìn toàn cầu'],
    quickSpecs: [
      { label: 'Tâm nguyện', value: 'Gìn giữ hồn cốt' },
      { label: 'Cầu nối', value: 'Thế hệ trẻ & Học đường' },
      { label: 'Tầm vóc', value: 'Di sản nhân loại' }
    ]
  },
  '/gioi-thieu/doi-ngu-nhom-thuc-hien': {
    path: '/gioi-thieu/doi-ngu-nhom-thuc-hien',
    id: 'doi-ngu-nhom-thuc-hien',
    title: 'Đội Ngũ & Nhóm Thực Hiện',
    subtitle: 'Hội đồng cố vấn, nghệ nhân & kỹ sư công nghệ',
    category: 'Giới thiệu',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Giới thiệu', path: '/gioi-thieu' },
      { title: 'Đội ngũ & nhóm thực hiện', path: '/gioi-thieu/doi-ngu-nhom-thuc-hien' }
    ],
    description: 'Sự kết hợp giữa các nghệ nhân gạo cội, nhà nghiên cứu văn hóa dân gian và đội ngũ kỹ sư công nghệ đam mê văn hóa truyền thống.',
    widgetType: 'team',
    tags: ['Đội ngũ', 'Nghệ nhân', 'Cố vấn'],
    metaBadges: [
      { label: 'Nghệ Nhân Nhân Dân', variant: 'amber' },
      { label: 'Nhà Nghiên Cứu', variant: 'stone' },
      { label: 'Kỹ Sư Công Nghệ', variant: 'sky' }
    ],
    featurePills: ['Hội đồng cố vấn', 'Kỹ sư Web3D', 'Chuyên gia âm thanh'],
    quickSpecs: [
      { label: 'Cố vấn', value: 'Viện Văn Hóa Nghệ Thuật' },
      { label: 'Chuyên gia', value: 'NSND Cả Tam, NSND Dịu Hương' },
      { label: 'Kỹ thuật', value: 'Team Web3D' }
    ]
  },

  // ================= 2. KHÁM PHÁ =================
  '/kham-pha': {
    path: '/kham-pha',
    id: 'kham-pha',
    title: 'Không Gian Khám Phá',
    subtitle: 'Trọng tâm biểu diễn & di sản Chèo',
    category: 'Khám phá',
    breadcrumbs: [{ title: 'Bảo Tàng Chèo Số', path: '/' }, { title: 'Khám phá', path: '/kham-pha' }],
    childrenPaths: ['/kham-pha/tong-quan', '/kham-pha/san-khau', '/kham-pha/cheo-hien-dai'],
    isHub: true,
    description: 'Không gian trưng bày cốt lõi với 3 chuyên đề lớn: Lịch sử tổng quan, 4 trụ cột sân khấu truyền thống và bước chuyển mình của Chèo đương đại.',
    tags: ['Trưng bày chính', 'Nghệ thuật diễn xướng', 'Di sản'],
    metaBadges: [
      { label: '10+ Thế Kỷ Di Sản', variant: 'amber' },
      { label: '200+ Làn Điệu', variant: 'emerald' },
      { label: '5 Mẫu Nhân Vật', variant: 'red' }
    ],
    featurePills: ['Hoa Lư TK X', 'Chiếu chèo cổ', 'UNESCO 14 tỉnh'],
    quickSpecs: [
      { label: 'Cột mốc', value: 'Từ TK X' },
      { label: 'Trụ cột', value: 'Lịch sử, Sân khấu, Hiện đại' },
      { label: 'Kiệt tác', value: 'Tứ đại tích cổ' }
    ]
  },

  // 2.1 Tổng quan & Cội nguồn
  '/kham-pha/tong-quan': {
    path: '/kham-pha/tong-quan',
    id: 'tong-quan',
    title: 'Tổng Quan & Cội Nguồn',
    subtitle: 'Cội nguồn lịch sử & chiều sâu văn hóa',
    category: 'Tổng quan',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Tổng quan', path: '/kham-pha/tong-quan' }
    ],
    childrenPaths: [
      '/kham-pha/tong-quan/lich-su-phat-trien',
      '/kham-pha/tong-quan/gia-tri-van-hoa',
      '/kham-pha/tong-quan/phia-sau-san-khau'
    ],
    isHub: true,
    widgetType: 'overview',
    description: 'Dòng chảy lịch sử Chèo qua các triều đại phong kiến, từ chiếu chèo sân đình hội làng đến sân khấu kịch hát dân tộc hoàn chỉnh.',
    tags: ['Lịch sử Chèo', 'Cội nguồn', 'Sân đình'],
    metaBadges: [
      { label: 'Văn Minh Sông Hồng', variant: 'emerald' },
      { label: 'Bà Tổ Phạm Thị Trân', variant: 'amber' },
      { label: 'Đạo Lý Nhân Sinh', variant: 'red' }
    ],
    featurePills: ['Đất mẹ sông Hồng', 'Tiếng trống quân doanh', 'Hội làng mùa xuân'],
    quickSpecs: [
      { label: 'Khởi phát', value: 'Kinh đô Hoa Lư' },
      { label: 'Không gian', value: 'Chiếu chèo sân đình' },
      { label: 'Giá trị', value: 'Nhân văn & Trào phúng' }
    ]
  },
  '/kham-pha/tong-quan/lich-su-phat-trien': {
    path: '/kham-pha/tong-quan/lich-su-phat-trien',
    id: 'lich-su-phat-trien',
    title: 'Lịch Sử Phát Triển',
    subtitle: 'Hơn 10 thế kỷ thăng trầm cùng vận mệnh dân tộc',
    category: 'Tổng quan',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Tổng quan', path: '/kham-pha/tong-quan' },
      { title: 'Lịch sử phát triển', path: '/kham-pha/tong-quan/lich-su-phat-trien' }
    ],
    widgetType: 'timeline',
    description: 'Timeline chi tiết từ thế kỷ thứ 10 (thời Đinh) với bà tổ Phạm Thị Trân qua thời Lý, Trần, Hậu Lê đến thế kỷ 20.',
    tags: ['Timeline', 'Thế kỷ 10', 'Bà tổ Phạm Thị Trân'],
    metaBadges: [
      { label: 'Khởi Nguồn TK X', variant: 'amber' },
      { label: 'Chèo Sân Đình', variant: 'stone' },
      { label: 'Sân Khấu Hộp 1951', variant: 'red' }
    ],
    featurePills: ['Thời Đinh 968', 'Chèo cổ TK XVII-XVIII', 'Việt Bắc 1951'],
    quickSpecs: [
      { label: 'Bà tổ nghề', value: 'Ưu bà Phạm Thị Trân' },
      { label: 'Niên đại', value: 'Thế kỷ X - Nay' },
      { label: 'Đỉnh cao', value: 'Chèo cổ TK 17-18' }
    ]
  },
  '/kham-pha/tong-quan/gia-tri-van-hoa': {
    path: '/kham-pha/tong-quan/gia-tri-van-hoa',
    id: 'gia-tri-van-hoa',
    title: 'Giá Trị Văn Hóa & Triết Lý',
    subtitle: 'Đạo đức, ước mơ & nụ cười trào lộng dân gian',
    category: 'Tổng quan',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Tổng quan', path: '/kham-pha/tong-quan' },
      { title: 'Giá trị văn hóa', path: '/kham-pha/tong-quan/gia-tri-van-hoa' }
    ],
    widgetType: 'cultural-values',
    description: 'Khám phá triết lý nhân sinh quan, tinh thần lạc quan, tiếng cười đả kích cường quyền và khát vọng công lý ẩn chứa sau mỗi tích Chèo.',
    tags: ['Triết lý nhân sinh', 'Tiếng cười dân gian', 'Giá trị nhân văn'],
    metaBadges: [
      { label: 'Đạo Lý Nhân Quả', variant: 'amber' },
      { label: 'Nụ Cười Trào Phúng', variant: 'emerald' },
      { label: 'Khát Vọng Công Lý', variant: 'red' }
    ],
    featurePills: ['Ở hiền gặp lành', 'Hề Chèo trào lộng', 'Hội làng cố kết'],
    quickSpecs: [
      { label: 'Triết lý', value: 'Ở hiền gặp lành' },
      { label: 'Nhân vật phản biện', value: 'Hề Chèo' },
      { label: 'Tính cộng đồng', value: 'Hội làng Bắc Bộ' }
    ]
  },
  '/kham-pha/tong-quan/phia-sau-san-khau': {
    path: '/kham-pha/tong-quan/phia-sau-san-khau',
    id: 'phia-sau-san-khau',
    title: 'Phía Sau Sân Khấu',
    subtitle: 'Hậu trường, hóa trang & công phu rèn luyện',
    category: 'Tổng quan',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Tổng quan', path: '/kham-pha/tong-quan' },
      { title: 'Phía sau sân khấu', path: '/kham-pha/tong-quan/phia-sau-san-khau' }
    ],
    widgetType: 'backstage',
    description: 'Bước vào hậu trường tìm hiểu công phu luyện giọng, múa tay múa chân, nghệ thuật hóa trang mặt nhân vật và tâm niệm của người nghệ sĩ Chèo.',
    tags: ['Hậu trường', 'Hóa trang mặt', 'Luyện nghề'],
    metaBadges: [
      { label: 'Thanh - Sắc - Tinh - Nghệ', variant: 'amber' },
      { label: 'Vẽ Mặt Ước Lệ', variant: 'red' },
      { label: 'Đạo Cụ Tượng Trưng', variant: 'stone' }
    ],
    featurePills: ['Chiếc quạt mo', 'Bình vôi tích nước', 'Hóa trang biểu cảm'],
    quickSpecs: [
      { label: 'Khẩu quyết', value: 'Nhất thanh nhị sắc tam tinh tứ nghệ' },
      { label: 'Đạo cụ chính', value: 'Chiếc quạt mo' },
      { label: 'Hóa trang', value: 'Lối vẽ biểu cảm' }
    ]
  },

  // 2.2 Sân khấu Chèo (Trọng tâm)
  '/kham-pha/san-khau': {
    path: '/kham-pha/san-khau',
    id: 'san-khau',
    title: 'Không Gian Sân Khấu Chèo',
    subtitle: 'Bốn trụ cột tạo nên tác phẩm Chèo',
    category: 'Sân Khấu',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' }
    ],
    childrenPaths: [
      '/kham-pha/san-khau/nhan-vat',
      '/kham-pha/san-khau/trang-phuc',
      '/kham-pha/san-khau/am-thanh',
      '/kham-pha/san-khau/tac-pham-tieu-bieu'
    ],
    isHub: true,
    description: 'Trưng bày toàn diện 4 yếu tố làm nên sân khấu Chèo: nhân vật ước lệ, phục trang ngũ sắc, dàn nhạc bát âm và các trích đoạn kinh điển.',
    tags: ['Nhân vật', 'Phục trang', 'Âm thanh', 'Tác phẩm'],
    metaBadges: [
      { label: '4 Trụ Cột Sân Khấu', variant: 'amber' },
      { label: 'Chiếu Chèo Cổ', variant: 'stone' },
      { label: 'Nguyên Bản Dân Tộc', variant: 'emerald' }
    ],
    featurePills: ['Chiếu hoa sân đình', 'Dàn bát âm', 'Múa hát ước lệ'],
    quickSpecs: [
      { label: 'Không gian', value: 'Chiếu hoa sân đình' },
      { label: 'Trụ cột', value: 'Nhân vật, Phục trang, Âm thanh, Vở diễn' }
    ]
  },
  '/kham-pha/san-khau/nhan-vat': {
    path: '/kham-pha/san-khau/nhan-vat',
    id: 'nhan-vat',
    title: 'Nhân Vật Chèo Cổ',
    subtitle: 'Hệ thống 5 mẫu hình nhân vật chuẩn mực',
    category: 'Sân Khấu',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Nhân vật', path: '/kham-pha/san-khau/nhan-vat' }
    ],
    widgetType: 'characters',
    description: 'Hệ thống nhân vật Chèo mang tính ước lệ cao: Đào (nữ tính, lẳng lơ, thương cảm), Kép (chính trực), Hề (châm biếm), Lão và Mụ.',
    tags: ['Thị Mầu', 'Xúy Vân', 'Hề Chèo', 'Đào Kép'],
    metaBadges: [
      { label: '5 Mẫu Ước Lệ', variant: 'amber' },
      { label: 'Đào - Kép - Hề', variant: 'red' },
      { label: 'Lão - Mụ', variant: 'stone' }
    ],
    featurePills: ['Thị Mầu lúng liếng', 'Xúy Vân giả dại', 'Hề gậy trào lộng'],
    quickSpecs: [
      { label: 'Quy ước', value: 'Ước lệ nghiêm ngặt' },
      { label: 'Nổi bật', value: 'Thị Mầu, Xúy Vân' },
      { label: 'Điểm xuyết', value: 'Hề gậy, Hề mồi' }
    ]
  },
  '/kham-pha/san-khau/nhan-vat/dao': {
    path: '/kham-pha/san-khau/nhan-vat/dao',
    id: 'dao',
    title: 'Đào',
    subtitle: 'Đào thương & Đào lẳng',
    category: 'Nhân Vật',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Nhân vật', path: '/kham-pha/san-khau/nhan-vat' },
      { title: 'Đào', path: '/kham-pha/san-khau/nhan-vat/dao' }
    ],
    widgetType: 'characters',
    description: 'Khám phá hình tượng Đào thương và Đào lẳng qua các vai diễn kinh điển Thị Kính, Thị Mầu và Xúy Vân.',
    tags: ['Đào thương', 'Đào lẳng', 'Thị Kính', 'Thị Mầu']
  },
  '/kham-pha/san-khau/nhan-vat/kep': {
    path: '/kham-pha/san-khau/nhan-vat/kep',
    id: 'kep',
    title: 'Kép',
    subtitle: 'Kép văn & Kép võ',
    category: 'Nhân Vật',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Nhân vật', path: '/kham-pha/san-khau/nhan-vat' },
      { title: 'Kép', path: '/kham-pha/san-khau/nhan-vat/kep' }
    ],
    widgetType: 'characters',
    description: 'Hình mẫu đấng nam nhi quân tử, nho nhã thanh cao trong nghệ thuật sân khấu Chèo cổ.',
    tags: ['Kép văn', 'Kép võ', 'Lưu Bình', 'Trương Viên']
  },
  '/kham-pha/san-khau/nhan-vat/he': {
    path: '/kham-pha/san-khau/nhan-vat/he',
    id: 'he',
    title: 'Hề',
    subtitle: 'Hề áo ngắn & Hề gậy',
    category: 'Nhân Vật',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Nhân vật', path: '/kham-pha/san-khau/nhan-vat' },
      { title: 'Hề', path: '/kham-pha/san-khau/nhan-vat/he' }
    ],
    widgetType: 'characters',
    description: 'Linh hồn tiếng cười dân gian sân đình, châm biếm sâu cay thói hư tật xấu bằng sự lạc quan.',
    tags: ['Hề gậy', 'Hề mồi', 'Tiếng cười sân đình']
  },
  '/kham-pha/san-khau/nhan-vat/lao': {
    path: '/kham-pha/san-khau/nhan-vat/lao',
    id: 'lao',
    title: 'Lão',
    subtitle: 'Lão say & Lão hiền',
    category: 'Nhân Vật',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Nhân vật', path: '/kham-pha/san-khau/nhan-vat' },
      { title: 'Lão', path: '/kham-pha/san-khau/nhan-vat/lao' }
    ],
    widgetType: 'characters',
    description: 'Bậc trưởng lão đại diện cho sự từng trải nhân thế, bảo ban con cháu đạo lý gia phong.',
    tags: ['Mãng Ông', 'Lão say', 'Trưởng thượng']
  },
  '/kham-pha/san-khau/nhan-vat/mu': {
    path: '/kham-pha/san-khau/nhan-vat/mu',
    id: 'mu',
    title: 'Mụ',
    subtitle: 'Mụ ác & Mụ quán',
    category: 'Nhân Vật',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Nhân vật', path: '/kham-pha/san-khau/nhan-vat' },
      { title: 'Mụ', path: '/kham-pha/san-khau/nhan-vat/mu' }
    ],
    widgetType: 'characters',
    description: 'Tuyến tính cách phản diện sắc sảo tạo nên xung đột kịch tính sâu sắc trong các tích Chèo.',
    tags: ['Sùng Bà', 'Mụ Quán', 'Tuyến phản diện']
  },
  '/kham-pha/san-khau/trang-phuc': {
    path: '/kham-pha/san-khau/trang-phuc',
    id: 'trang-phuc',
    title: 'Phục Trang & Đạo Cụ',
    subtitle: 'Màu sắc, chất liệu & biểu tượng phục trang truyền thống',
    category: 'Sân Khấu',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Phục trang', path: '/kham-pha/san-khau/trang-phuc' }
    ],
    widgetType: 'costumes',
    description: 'Chiêm ngưỡng áo tứ thân mớ ba mớ bảy, nón quai thao, thắt lưng bao ngũ sắc và các đạo cụ kinh điển như chiếc quạt Chèo đa năng.',
    tags: ['Áo tứ thân', 'Nón quai thao', 'Quạt Chèo', 'Ngũ sắc'],
    metaBadges: [
      { label: 'Áo Tứ Thân Mớ Ba Mớ Bảy', variant: 'amber' },
      { label: 'Nón Quai Thao - Yếm Đào', variant: 'red' },
      { label: 'Ngũ Sắc Ước Lệ', variant: 'emerald' }
    ],
    featurePills: ['Lụa tơ tằm', 'Nhuộm củ nâu', 'Dải bao ngũ sắc'],
    quickSpecs: [
      { label: 'Chất liệu', value: 'Lụa tơ tằm, vải thô nhuộm củ nâu' },
      { label: 'Màu sắc', value: 'Ngũ hành ước lệ' },
      { label: 'Phụ kiện', value: 'Thắt lưng bao ngũ sắc' }
    ]
  },
  '/kham-pha/san-khau/trang-phuc/ao-tu-than': {
    path: '/kham-pha/san-khau/trang-phuc/ao-tu-than',
    id: 'ao-tu-than',
    title: 'Áo Tứ Thân & Yếm Đào',
    subtitle: 'Phục trang chuẩn mực của Đào Chèo',
    category: 'Phục Trang',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Phục trang', path: '/kham-pha/san-khau/trang-phuc' },
      { title: 'Áo Tứ Thân', path: '/kham-pha/san-khau/trang-phuc/ao-tu-than' }
    ],
    widgetType: 'costumes',
    description: 'Bốn tà áo tượng trưng cho tứ thân phụ mẫu, yếm đào lụa thắm đượm nét duyên thôn quê.',
    tags: ['Áo tứ thân', 'Yếm đào', 'Tứ thân phụ mẫu']
  },
  '/kham-pha/san-khau/trang-phuc/non-quai-thao': {
    path: '/kham-pha/san-khau/trang-phuc/non-quai-thao',
    id: 'non-quai-thao',
    title: 'Nón Ba Tầm',
    subtitle: 'Đạo cụ múa & biểu cảm của Đào Chèo',
    category: 'Phục Trang',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Phục trang', path: '/kham-pha/san-khau/trang-phuc' },
      { title: 'Nón Quai Thao', path: '/kham-pha/san-khau/trang-phuc/non-quai-thao' }
    ],
    widgetType: 'costumes',
    description: 'Chiếc nón lá cọ quai tơ tằm buông dài, đạo cụ che nửa mặt e ấp duyên dáng.',
    tags: ['Nón ba tầm', 'Nón quai thao', 'Đạo cụ múa']
  },
  '/kham-pha/san-khau/trang-phuc/ao-ngu-than-kep': {
    path: '/kham-pha/san-khau/trang-phuc/ao-ngu-than-kep',
    id: 'ao-ngu-than-kep',
    title: 'Áo Ngũ Thân & Khăn Xếp',
    subtitle: 'Trang phục đĩnh đạc của Kép Chèo',
    category: 'Phục Trang',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Phục trang', path: '/kham-pha/san-khau/trang-phuc' },
      { title: 'Áo Ngũ Thân', path: '/kham-pha/san-khau/trang-phuc/ao-ngu-than-kep' }
    ],
    widgetType: 'costumes',
    description: 'Năm thân áo tượng trưng cho ngũ thường, phong thái đĩnh đạc nho nhã của đấng quân tử.',
    tags: ['Áo ngũ thân', 'Khăn xếp', 'Kép chèo']
  },
  '/kham-pha/san-khau/trang-phuc/ao-ba-ba-he': {
    path: '/kham-pha/san-khau/trang-phuc/ao-ba-ba-he',
    id: 'ao-ba-ba-he',
    title: 'Áo Cộc Hề Chèo & Gậy Tre',
    subtitle: 'Trang phục trào lộng của Hề Sân Đình',
    category: 'Phục Trang',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Phục trang', path: '/kham-pha/san-khau/trang-phuc' },
      { title: 'Áo Cộc Hề Chèo', path: '/kham-pha/san-khau/trang-phuc/ao-ba-ba-he' }
    ],
    widgetType: 'costumes',
    description: 'Áo ngắn vá thô mộc, ống quần xắn khập khiễng, phản ánh thân phận dân nghèo nhưng tự do.',
    tags: ['Áo cộc hề', 'Gậy tre', 'Hề chèo']
  },
  '/kham-pha/san-khau/am-thanh': {
    path: '/kham-pha/san-khau/am-thanh',
    id: 'am-thanh',
    title: 'Âm Thanh & Làn Điệu',
    subtitle: 'Dàn nhạc dân tộc & hơn 200 làn điệu Chèo cổ',
    category: 'Sân Khấu',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' }
    ],
    childrenPaths: [
      '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am',
      '/kham-pha/san-khau/am-thanh/lan-dieu',
      '/kham-pha/san-khau/am-thanh/tiet-tau'
    ],
    widgetType: 'audio',
    description: 'Nghe thử các làn điệu Chèo tiêu biểu (Đào liễu, Luyện năm cung, Quân tử vu dịch...) và tìm hiểu dàn nhạc: trống đế, đàn nguyệt, đàn nhị, sáo trúc.',
    tags: ['Làn điệu', 'Trống đế', 'Đào liễu', 'Bát âm'],
    metaBadges: [
      { label: 'Dàn Bát Âm Cổ', variant: 'amber' },
      { label: '200+ Làn Điệu Mẫu', variant: 'emerald' },
      { label: 'Timeline 4 Hồi', variant: 'sky' }
    ],
    featurePills: ['Trống đế chỉ huy', 'Đào liễu', 'Quân tử vu dịch'],
    quickSpecs: [
      { label: 'Trưởng ban', value: 'Trống đế' },
      { label: 'Nhạc cụ gõ', value: 'Trống cái, thanh la, mõ' },
      { label: 'Giai điệu', value: 'Đàn nguyệt, đàn nhị, sáo trúc' }
    ]
  },
  '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am': {
    path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am',
    id: 'dan-nhac-bat-am',
    title: 'Dàn Nhạc Bát Âm',
    subtitle: 'Nhạc khí chuẩn mực của chiếu Chèo sân đình',
    category: 'Âm Thanh',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' },
      { title: 'Dàn Nhạc Bát Âm', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am' }
    ],
    childrenPaths: [
      '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/trong-de',
      '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/dan-nguyet',
      '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/dan-nhi',
      '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/sao-truc',
      '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/trong-com',
      '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/thanh-la-mo'
    ],
    widgetType: 'audio',
    description: 'Khám phá 6 nhạc khí cốt lõi: Trống đế chỉ huy, Đàn nguyệt, Đàn nhị, Sáo trúc, Trống cơm, Thanh la và Mõ.',
    tags: ['Trống đế', 'Đàn nguyệt', 'Đàn nhị', 'Sáo trúc', 'Bát âm']
  },
  '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/trong-de': {
    path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/trong-de',
    id: 'trong-de',
    title: 'Trống Đế',
    subtitle: 'Trưởng ban tiết tấu & Nhịp thở đêm diễn',
    category: 'Nhạc Khí',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' },
      { title: 'Dàn Nhạc Bát Âm', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am' },
      { title: 'Trống Đế', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/trong-de' }
    ],
    widgetType: 'audio',
    description: 'Vị chỉ huy vô hình dẫn dắt từng bước chân, ánh mắt và nhịp thở của đào kép trên manh chiếu.',
    tags: ['Trống đế', 'Tiết tấu', 'Tùng cắc', 'Chỉ huy']
  },
  '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/dan-nguyet': {
    path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/dan-nguyet',
    id: 'dan-nguyet',
    title: 'Đàn Nguyệt',
    subtitle: 'Lãnh tấu giai điệu & Luyến láy làn hơi',
    category: 'Nhạc Khí',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' },
      { title: 'Dàn Nhạc Bát Âm', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am' },
      { title: 'Đàn Nguyệt', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/dan-nguyet' }
    ],
    widgetType: 'audio',
    description: 'Hai dây tơ gảy nên những cung bậc khoan thai, dìu dặt, uốn lượn nâng niu từng câu hát nhả chữ.',
    tags: ['Đàn nguyệt', 'Nguyệt cầm', 'Giai điệu', 'Lãnh tấu']
  },
  '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/dan-nhi': {
    path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/dan-nhi',
    id: 'dan-nhi',
    title: 'Đàn Nhị',
    subtitle: 'Cung vĩ nỉ non & Biểu cảm nội tâm',
    category: 'Nhạc Khí',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' },
      { title: 'Dàn Nhạc Bát Âm', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am' },
      { title: 'Đàn Nhị', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/dan-nhi' }
    ],
    widgetType: 'audio',
    description: 'Cung vĩ lông ngựa miết trên hai dây tơ tạo nên thanh âm nỉ non da diết cho những thân phận oan khuất chìm nổi.',
    tags: ['Đàn nhị', 'Đàn cò', 'Cung vĩ', 'Biểu cảm nội tâm']
  },
  '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/sao-truc': {
    path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/sao-truc',
    id: 'sao-truc',
    title: 'Sáo Trúc',
    subtitle: 'Thanh âm đồng nội vút cao thanh thoát',
    category: 'Nhạc Khí',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' },
      { title: 'Dàn Nhạc Bát Âm', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am' },
      { title: 'Sáo Trúc', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/sao-truc' }
    ],
    widgetType: 'audio',
    description: 'Ống trúc mộc mạc cất lên tiếng sáo vút cao thanh thoát, đưa hồn người nghe về với bóng tre làng và dòng sông quê hương.',
    tags: ['Sáo trúc', 'Thổi sáo', 'Đồng nội', 'Kinh Bắc']
  },
  '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/trong-com': {
    path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/trong-com',
    id: 'trong-com',
    title: 'Trống Cơm',
    subtitle: 'Âm sắc lúa nước & Nhịp điệu giao duyên',
    category: 'Nhạc Khí',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' },
      { title: 'Dàn Nhạc Bát Âm', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am' },
      { title: 'Trống Cơm', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/trong-com' }
    ],
    widgetType: 'audio',
    description: 'Âm trầm ấm áp dán cơm nếp ấm, hòa nhịp rộn ràng gắn liền với văn minh lúa nước và các màn giao duyên trai gái.',
    tags: ['Trống cơm', 'Tang tình', 'Lúa nước', 'Dân ca']
  },
  '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/thanh-la-mo': {
    path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/thanh-la-mo',
    id: 'thanh-la-mo',
    title: 'Thanh La & Mõ',
    subtitle: 'Tiết tấu trào lộng & Tiếng cười phân minh',
    category: 'Nhạc Khí',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' },
      { title: 'Dàn Nhạc Bát Âm', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am' },
      { title: 'Thanh La & Mõ', path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/thanh-la-mo' }
    ],
    widgetType: 'audio',
    description: 'Bộ đôi nhạc khí gõ dập phách ăn khớp châm biếm, tạo nên những tràng cười sảng khoái của các màn Hề Chèo.',
    tags: ['Thanh la', 'Mõ tre', 'Hề chèo', 'Trào lộng']
  },
  '/kham-pha/san-khau/am-thanh/lan-dieu': {
    path: '/kham-pha/san-khau/am-thanh/lan-dieu',
    id: 'lan-dieu',
    title: 'Kho Tàng Làn Điệu',
    subtitle: 'Hơn 200 làn điệu Chèo cổ mẫu mực',
    category: 'Âm Thanh',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' },
      { title: 'Làn Điệu', path: '/kham-pha/san-khau/am-thanh/lan-dieu' }
    ],
    widgetType: 'audio',
    description: 'Phòng thẩm âm tương tác với các làn điệu kinh điển: Đào liễu, Quân tử vu dịch, Sa lệch chênh, Hề mồi.',
    tags: ['Đào liễu', 'Quân tử vu dịch', 'Sa lệch chênh', 'Hề mồi']
  },
  '/kham-pha/san-khau/am-thanh/tiet-tau': {
    path: '/kham-pha/san-khau/am-thanh/tiet-tau',
    id: 'tiet-tau',
    title: 'Tiết Tấu & Nhịp Trống',
    subtitle: 'Bốn chặng phát triển kịch tính của đêm diễn',
    category: 'Âm Thanh',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Âm thanh', path: '/kham-pha/san-khau/am-thanh' },
      { title: 'Tiết Tấu', path: '/kham-pha/san-khau/am-thanh/tiet-tau' }
    ],
    widgetType: 'audio',
    description: 'Bốn chặng tiết tấu kịch tính: Khởi nhạc mở màn, Hát xưng danh, Làn điệu trữ tình, Trào lộng hề chèo.',
    tags: ['Tiết tấu', 'Trống đế', 'Trống cái', 'Hát xưng danh']
  },
  '/kham-pha/san-khau/tac-pham-tieu-bieu': {
    path: '/kham-pha/san-khau/tac-pham-tieu-bieu',
    id: 'tac-pham-tieu-bieu',
    title: 'Tác Phẩm Tiêu Biểu',
    subtitle: 'Tứ đại kiệt tác Chèo cổ bất hủ',
    category: 'Sân Khấu',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Tác phẩm tiêu biểu', path: '/kham-pha/san-khau/tac-pham-tieu-bieu' }
    ],
    widgetType: 'plays',
    description: 'Tứ đại tích chèo cổ bất hủ: Quan Âm Thị Kính, Kim Nhan (Xúy Vân giả dại), Lưu Bình Dương Lễ và Trương Viên cùng các trích đoạn kinh điển.',
    tags: ['Quan Âm Thị Kính', 'Xúy Vân giả dại', 'Lưu Bình Dương Lễ'],
    metaBadges: [
      { label: 'Tứ Đại Kiệt Tác', variant: 'red' },
      { label: 'Quan Âm Thị Kính', variant: 'amber' },
      { label: 'Xúy Vân Giả Dại', variant: 'emerald' }
    ],
    featurePills: ['Lưu Bình Dương Lễ', 'Kim Nhan', 'Nghêu Sò Ốc Hến'],
    quickSpecs: [
      { label: 'Vở tiêu biểu', value: 'Quan Âm Thị Kính, Kim Nhan, Lưu Bình Dương Lễ' },
      { label: 'Giá trị', value: 'Bi kịch nhân văn sâu sắc' }
    ]
  },
  '/kham-pha/san-khau/tac-pham-tieu-bieu/quan-am-thi-kinh': {
    path: '/kham-pha/san-khau/tac-pham-tieu-bieu/quan-am-thi-kinh',
    id: 'quan-am-thi-kinh',
    title: 'Quan Âm Thị Kính',
    subtitle: 'Kiệt tác bi kịch về đức nhẫn nhịn và lòng vị tha',
    category: 'Vở Diễn',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Tác phẩm', path: '/kham-pha/san-khau/tac-pham-tieu-bieu' },
      { title: 'Quan Âm Thị Kính', path: '/kham-pha/san-khau/tac-pham-tieu-bieu/quan-am-thi-kinh' }
    ],
    widgetType: 'plays',
    description: 'Kiệt tác bất hủ về đức nhẫn nhịn, lòng vị tha và sự bao dung của người phụ nữ Việt Nam.',
    tags: ['Quan Âm Thị Kính', 'Tiểu Kính Tâm', 'Thị Mầu', 'Cổ bản']
  },
  '/kham-pha/san-khau/tac-pham-tieu-bieu/xuy-van-gia-dai': {
    path: '/kham-pha/san-khau/tac-pham-tieu-bieu/xuy-van-gia-dai',
    id: 'xuy-van-gia-dai',
    title: 'Xúy Vân Giả Dại',
    subtitle: 'Bi kịch tình yêu và khát vọng tự do',
    category: 'Vở Diễn',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Tác phẩm', path: '/kham-pha/san-khau/tac-pham-tieu-bieu' },
      { title: 'Xúy Vân Giả Dại', path: '/kham-pha/san-khau/tac-pham-tieu-bieu/xuy-van-gia-dai' }
    ],
    widgetType: 'plays',
    description: 'Đỉnh cao nghệ thuật diễn xuất và biểu cảm tâm lý phức tạp của sân khấu kịch hát truyền thống.',
    tags: ['Xúy Vân', 'Kim Nhan', 'Giả dại', 'Đỉnh cao ước lệ']
  },
  '/kham-pha/san-khau/tac-pham-tieu-bieu/luu-binh-duong-le': {
    path: '/kham-pha/san-khau/tac-pham-tieu-bieu/luu-binh-duong-le',
    id: 'luu-binh-duong-le',
    title: 'Lưu Bình — Dương Lễ',
    subtitle: 'Tình bạn tri kỷ mẫu mực & Nghĩa cử Châu Long',
    category: 'Vở Diễn',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Tác phẩm', path: '/kham-pha/san-khau/tac-pham-tieu-bieu' },
      { title: 'Lưu Bình — Dương Lễ', path: '/kham-pha/san-khau/tac-pham-tieu-bieu/luu-binh-duong-le' }
    ],
    widgetType: 'plays',
    description: 'Bài ca bất hủ về tình bạn tri kỷ, chí khí nam nhi và tấm lòng cao cả của người phụ nữ.',
    tags: ['Lưu Bình', 'Dương Lễ', 'Châu Long', 'Nghĩa khí']
  },
  '/kham-pha/san-khau/tac-pham-tieu-bieu/truong-vien': {
    path: '/kham-pha/san-khau/tac-pham-tieu-bieu/truong-vien',
    id: 'truong-vien',
    title: 'Trương Viên',
    subtitle: 'Bản hùng ca về lòng hiếu thảo và nghĩa vợ chồng',
    category: 'Vở Diễn',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Sân Khấu', path: '/kham-pha/san-khau' },
      { title: 'Tác phẩm', path: '/kham-pha/san-khau/tac-pham-tieu-bieu' },
      { title: 'Trương Viên', path: '/kham-pha/san-khau/tac-pham-tieu-bieu/truong-vien' }
    ],
    widgetType: 'plays',
    description: 'Vở Chèo cổ xưa bậc nhất ca ngợi đạo hiếu cảm động trời đất và tình nghĩa son sắt vượt qua giông bão.',
    tags: ['Trương Viên', 'Thị Phương', 'Đạo hiếu', 'Tích cổ TK XVI']
  },

  // 2.3 Chèo hiện đại
  '/kham-pha/cheo-hien-dai': {
    path: '/kham-pha/cheo-hien-dai',
    id: 'cheo-hien-dai',
    title: 'Chèo Hiện Đại',
    subtitle: 'Sức sống mới & Sự cách tân đương đại',
    category: 'Khám phá',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Khám phá', path: '/kham-pha' },
      { title: 'Chèo hiện đại', path: '/kham-pha/cheo-hien-dai' }
    ],
    widgetType: 'modern',
    description: 'Nghệ thuật Chèo trong thời kỳ đổi mới: chuyển mình từ 1951, sáng tạo kịch bản mới, đưa hơi thở đương đại và hồ sơ đệ trình UNESCO.',
    tags: ['Chèo hiện đại', 'Cách tân', 'Đổi mới', 'UNESCO 2024'],
    metaBadges: [
      { label: 'Mốc Son 1951', variant: 'red' },
      { label: 'Tác Phẩm Tào Mạt', variant: 'amber' },
      { label: 'Hồ Sơ UNESCO', variant: 'sky' }
    ],
    featurePills: ['Bài ca giữ nước', 'Nàng Sita', 'Đổi mới sân khấu'],
    quickSpecs: [
      { label: 'Khởi đầu mới', value: 'Đoàn Chèo Cổ truyền 1951' },
      { label: 'Đỉnh cao', value: 'Bộ ba Bài ca giữ nước' },
      { label: 'Hồ sơ', value: '14 tỉnh thành châu thổ' }
    ]
  },

  // ================= 3. TIỆN ÍCH =================
  '/tien-ich': {
    path: '/tien-ich',
    id: 'tien-ich',
    title: 'Không Gian Tiện Ích',
    subtitle: 'Dịch vụ tương tác & Thông tin người dùng',
    category: 'Tiện ích',
    breadcrumbs: [{ title: 'Bảo Tàng Chèo Số', path: '/' }, { title: 'Tiện ích', path: '/tien-ich' }],
    childrenPaths: [
      '/tien-ich/tim-kiem',
      '/tien-ich/danh-gia-cai-thien',
      '/tien-ich/ban-do-bao-tang',
      '/tien-ich/kho-tu-lieu',
      '/tien-ich/tham-quan-va-su-kien',
      '/tien-ich/thong-tin-va-ho-tro'
    ],
    isHub: true,
    description: 'Tổng hợp các công cụ hỗ trợ người tham quan: tìm kiếm thông minh, phản hồi góp ý, bản đồ số, thư viện tư liệu và cổng đặt vé xem diễn.',
    tags: ['Công cụ tra cứu', 'Dịch vụ vé', 'Bản đồ số'],
    metaBadges: [
      { label: 'Tra Cứu Di Sản', variant: 'sky' },
      { label: 'Kho Tư Liệu Số', variant: 'amber' },
      { label: 'Lịch & Vé Trực Tuyến', variant: 'emerald' }
    ],
    featurePills: ['Bộ lọc thông minh', 'Thư viện đĩa than', 'Bản đồ số'],
    quickSpecs: [
      { label: 'Công cụ', value: 'Lọc đa tiêu chí' },
      { label: 'Lưu trữ', value: 'Đĩa than & Bản Nôm' },
      { label: 'Tương tác', value: 'Bản đồ 3D' }
    ]
  },

  // 3.1 Tìm kiếm
  '/tien-ich/tim-kiem': {
    path: '/tien-ich/tim-kiem',
    id: 'tim-kiem',
    title: 'Tìm Kiếm & Tra Cứu',
    subtitle: 'Bộ lọc thông minh theo làn điệu, nhân vật & nghệ nhân',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Tìm kiếm', path: '/tien-ich/tim-kiem' }
    ],
    description: 'Hệ thống tra cứu nhanh toàn bộ kho dữ liệu bảo tàng theo từ khóa, chủ đề làn điệu, nhân vật hoặc thời kỳ lịch sử.',
    tags: ['Tìm kiếm', 'Bộ lọc', 'Tra cứu nhanh'],
    metaBadges: [
      { label: 'Bộ Lọc Đa Tiêu Chí', variant: 'sky' },
      { label: 'Tra Cứu Làn Điệu', variant: 'emerald' },
      { label: 'Tìm Kiếm Kịch Bản', variant: 'stone' }
    ],
    featurePills: ['Tìm tức thì', 'Gợi ý thông minh', 'Lọc vai diễn'],
    quickSpecs: [
      { label: 'Tiêu chí', value: 'Làn điệu, Nhân vật, Nghệ nhân' },
      { label: 'Tốc độ', value: 'Tức thì (Client-side search)' }
    ]
  },

  // 3.2 Đánh giá & Cải thiện
  '/tien-ich/danh-gia-cai-thien': {
    path: '/tien-ich/danh-gia-cai-thien',
    id: 'danh-gia-cai-thien',
    title: 'Đánh Giá & Cải Thiện',
    subtitle: 'Khảo sát cảm nghĩ & đóng góp hoàn thiện nền tảng',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Đánh giá & cải thiện', path: '/tien-ich/danh-gia-cai-thien' }
    ],
    widgetType: 'feedback',
    description: 'Khảo sát ý kiến đóng góp của khách tham quan nhằm không ngừng nâng cao chất lượng nội dung và trải nghiệm số của bảo tàng.',
    tags: ['Khảo sát', 'Ý kiến người dùng', 'Góp ý'],
    metaBadges: [
      { label: 'Hòm Thư Di Sản', variant: 'amber' },
      { label: 'Khảo Sát Trải Nghiệm', variant: 'emerald' },
      { label: 'Góp Ý Hoàn Thiện', variant: 'sky' }
    ],
    featurePills: ['Đánh giá sao', 'Góp ý hiện vật', 'Phản hồi 24h'],
    quickSpecs: [
      { label: 'Kênh', value: 'Biểu mẫu trực tuyến' },
      { label: 'Đánh giá', value: 'Sao & Nhận xét' },
      { label: 'Phản hồi', value: 'Trong vòng 24h' }
    ]
  },

  // 3.3 Bản đồ bảo tàng
  '/tien-ich/ban-do-bao-tang': {
    path: '/tien-ich/ban-do-bao-tang',
    id: 'ban-do-bao-tang',
    title: 'Bản Đồ Bảo Tàng',
    subtitle: 'Sơ đồ định vị các không gian trưng bày số',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Bản đồ bảo tàng', path: '/tien-ich/ban-do-bao-tang' }
    ],
    widgetType: 'map',
    description: 'Sơ đồ mặt bằng tương tác giúp người dùng định vị phòng trưng bày, xem lộ trình tham quan gợi ý và di chuyển nhanh giữa các không gian.',
    tags: ['Bản đồ tương tác', 'Lộ trình gợi ý', 'Định vị'],
    metaBadges: [
      { label: 'Mặt Bằng 5 Khu', variant: 'sky' },
      { label: 'Lộ Trình Gợi Ý', variant: 'amber' },
      { label: 'Định Vị Tương Tác', variant: 'emerald' }
    ],
    featurePills: ['Tour 45 phút', 'Tour 90 phút', 'Audio guide 3 thứ tiếng'],
    quickSpecs: [
      { label: 'Bản đồ', value: 'Sơ đồ tương tác' },
      { label: 'Lộ trình', value: '3 Tour chuyên đề' },
      { label: 'Định vị', value: 'Tọa độ phòng' }
    ]
  },

  // 3.4 Kho tư liệu
  '/tien-ich/kho-tu-lieu': {
    path: '/tien-ich/kho-tu-lieu',
    id: 'kho-tu-lieu',
    title: 'Kho Tư Liệu Số',
    subtitle: 'Thư viện số hóa đĩa than 78 vòng, sách & kịch bản cổ',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Kho tư liệu', path: '/tien-ich/kho-tu-lieu' }
    ],
    widgetType: 'archive',
    description: 'Thư viện số hóa bao gồm các bản ghi âm đĩa than hiếm, hình ảnh tư liệu thế kỷ trước, kịch bản chép tay chữ Nôm và sách khảo cứu Chèo.',
    tags: ['Đĩa than 78 vòng', 'Bản chép tay', 'Hình ảnh lịch sử'],
    metaBadges: [
      { label: 'Đĩa Than 78 Vòng', variant: 'amber' },
      { label: 'Bản Chép Tay Nôm 1875', variant: 'red' },
      { label: 'Khảo Cứu Trần Bảng', variant: 'stone' }
    ],
    featurePills: ['Dihavina 1960', 'Bản khắc gỗ', 'Băng cối cổ'],
    quickSpecs: [
      { label: 'Định dạng', value: 'Audio 78 RPM Dihavina' },
      { label: 'Bản thảo', value: 'Kịch bản Nôm thế kỷ 19' },
      { label: 'Sách', value: 'Khảo cứu học thuật' }
    ]
  },

  // 3.5 Tham quan và sự kiện
  '/tien-ich/tham-quan-va-su-kien': {
    path: '/tien-ich/tham-quan-va-su-kien',
    id: 'tham-quan-va-su-kien',
    title: 'Tham Quan & Sự Kiện',
    subtitle: 'Lịch trình, địa điểm & mua vé biểu diễn',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Tham quan và sự kiện', path: '/tien-ich/tham-quan-va-su-kien' }
    ],
    childrenPaths: [
      '/tien-ich/tham-quan-va-su-kien/thong-bao-su-kien',
      '/tien-ich/tham-quan-va-su-kien/lich-bieu-dien',
      '/tien-ich/tham-quan-va-su-kien/dat-mua-ve',
      '/tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien',
      '/tien-ich/tham-quan-va-su-kien/thong-tin-tham-quan'
    ],
    isHub: true,
    description: 'Cập nhật lịch biểu diễn Chèo trực tiếp tại các nhà hát, sự kiện giao lưu nghệ nhân và cổng đặt vé xem diễn thuận tiện.',
    tags: ['Lịch diễn', 'Sự kiện', 'Đặt vé', 'Nhà hát'],
    metaBadges: [
      { label: 'Nhà Hát & Sân Đình', variant: 'amber' },
      { label: 'Lịch Diễn Cập Nhật', variant: 'emerald' },
      { label: 'Vé Điện Tử', variant: 'sky' }
    ],
    featurePills: ['Lịch tuần', 'Rạp Kim Mã', 'Vé QR Code'],
    quickSpecs: [
      { label: 'Mạng lưới', value: 'Toàn quốc' },
      { label: 'Hình thức', value: 'Rạp hát chuyên nghiệp & Chiếu chèo làng' },
      { label: 'Dịch vụ', value: 'Đặt chỗ tức thì' }
    ]
  },
  '/tien-ich/tham-quan-va-su-kien/thong-bao-su-kien': {
    path: '/tien-ich/tham-quan-va-su-kien/thong-bao-su-kien',
    id: 'thong-bao-su-kien',
    title: 'Thông Báo Sự Kiện',
    subtitle: 'Tin tức tọa đàm, workshop & festival Chèo',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Tham quan và sự kiện', path: '/tien-ich/tham-quan-va-su-kien' },
      { title: 'Thông báo sự kiện', path: '/tien-ich/tham-quan-va-su-kien/thong-bao-su-kien' }
    ],
    description: 'Tin tức về các festival Chèo toàn quốc, hội thảo khoa học, workshop trải nghiệm hát Chèo cùng nghệ nhân và triển lãm chuyên đề.',
    tags: ['Festival Chèo', 'Workshop', 'Tin tức sự kiện'],
    metaBadges: [
      { label: 'Festival Chèo', variant: 'red' },
      { label: 'Workshop Nghệ Nhân', variant: 'amber' },
      { label: 'Tọa Đàm Khoa Học', variant: 'sky' }
    ],
    featurePills: ['Hội thảo di sản', 'Chiếu chèo xuân', 'Workshop múa quạt'],
    quickSpecs: [
      { label: 'Tần suất', value: 'Hàng tháng' },
      { label: 'Địa điểm', value: 'Hà Nội & Ninh Bình' },
      { label: 'Đối tượng', value: 'Công chúng & Giới nghiên cứu' }
    ]
  },
  '/tien-ich/tham-quan-va-su-kien/lich-bieu-dien': {
    path: '/tien-ich/tham-quan-va-su-kien/lich-bieu-dien',
    id: 'lich-bieu-dien',
    title: 'Lịch Biểu Diễn',
    subtitle: 'Lịch diễn tại các rạp hát & sân đình định kỳ',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Tham quan và sự kiện', path: '/tien-ich/tham-quan-va-su-kien' },
      { title: 'Lịch biểu diễn', path: '/tien-ich/tham-quan-va-su-kien/lich-bieu-dien' }
    ],
    description: 'Lịch trình diễn xuất hàng tuần tại Nhà hát Chèo Việt Nam, Nhà hát Chèo Hà Nội, rạp Đại Nam và các chiếu chèo sân đình hội làng.',
    tags: ['Lịch diễn tuần', 'Nhà hát Chèo VN', 'Rạp Đại Nam'],
    metaBadges: [
      { label: 'Lịch Diễn Cuối Tuần', variant: 'emerald' },
      { label: 'Rạp Kim Mã & Đại Nam', variant: 'amber' },
      { label: 'Chiếu Chèo Làng', variant: 'stone' }
    ],
    featurePills: ['Tối thứ Sáu', 'Tối thứ Bảy', 'Chủ nhật'],
    quickSpecs: [
      { label: 'Định kỳ', value: 'Tối thứ 6, 7, CN' },
      { label: 'Đơn vị', value: 'Nhà hát Chèo Việt Nam, Chèo Hà Nội' },
      { label: 'Cập nhật', value: 'Theo tuần' }
    ]
  },
  '/tien-ich/tham-quan-va-su-kien/dat-mua-ve': {
    path: '/tien-ich/tham-quan-va-su-kien/dat-mua-ve',
    id: 'dat-mua-ve',
    title: 'Đặt Mua Vé',
    subtitle: 'Cổng bán vé điện tử & sơ đồ chọn ghế ngồi trực quan',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Tham quan và sự kiện', path: '/tien-ich/tham-quan-va-su-kien' },
      { title: 'Đặt mua vé', path: '/tien-ich/tham-quan-va-su-kien/dat-mua-ve' }
    ],
    widgetType: 'ticket',
    description: 'Chọn rạp hát, xem sơ đồ ghế ngồi trực quan và thanh toán vé điện tử nhanh chóng qua mã QR tiện lợi.',
    tags: ['Đặt vé online', 'Sơ đồ ghế', 'Thanh toán QR'],
    metaBadges: [
      { label: 'Sơ Đồ Chọn Ghế', variant: 'sky' },
      { label: 'Thanh Toán QR Code', variant: 'emerald' },
      { label: 'Vé Điện Tử Tức Thì', variant: 'amber' }
    ],
    featurePills: ['Ghế VIP', 'Thanh toán trực tuyến', 'Vé điện tử SMS'],
    quickSpecs: [
      { label: 'Cổng vé', value: 'Trực tuyến 24/7' },
      { label: 'Thanh toán', value: 'Chuyển khoản, Thẻ, QR Code' },
      { label: 'Xác nhận', value: 'Email & SMS' }
    ]
  },
  '/tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien': {
    path: '/tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien',
    id: 'dia-diem-bieu-dien',
    title: 'Địa Điểm Biểu Diễn',
    subtitle: 'Mạng lưới các nhà hát & không gian diễn Chèo tiêu biểu',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Tham quan và sự kiện', path: '/tien-ich/tham-quan-va-su-kien' },
      { title: 'Địa điểm biểu diễn', path: '/tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien' }
    ],
    description: 'Danh sách và thông tin liên hệ các nhà hát Chèo chuyên nghiệp: Hà Nội, Ninh Bình, Thái Bình, Hải Phòng, Nam Định.',
    tags: ['Nhà hát Chèo', 'Địa chỉ rạp', 'Bản đồ rạp hát'],
    metaBadges: [
      { label: 'Mạng Lưới Rạp Hát', variant: 'amber' },
      { label: 'Bắc Ninh - Ninh Bình', variant: 'emerald' },
      { label: 'Thái Bình - Nam Định', variant: 'stone' }
    ],
    featurePills: ['Kim Mã', 'Đại Nam', 'Chèo Thái Bình'],
    quickSpecs: [
      { label: 'Điểm diễn', value: 'Rạp Kim Mã, Rạp Đại Nam, Rạp Ninh Bình' },
      { label: 'Loại hình', value: 'Nhà hát chuyên nghiệp' }
    ]
  },
  '/tien-ich/tham-quan-va-su-kien/thong-tin-tham-quan': {
    path: '/tien-ich/tham-quan-va-su-kien/thong-tin-tham-quan',
    id: 'thong-tin-tham-quan',
    title: 'Thông Tin Tham Quan',
    subtitle: 'Quy định, giá vé ưu đãi & dịch vụ Audio Guide',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Tham quan và sự kiện', path: '/tien-ich/tham-quan-va-su-kien' },
      { title: 'Thông tin tham quan', path: '/tien-ich/tham-quan-va-su-kien/thong-tin-tham-quan' }
    ],
    description: 'Cẩm nang dành cho khách tham quan: giờ mở cửa, chính sách vé ưu đãi cho học sinh/sinh viên và thiết bị thuyết minh tự động.',
    tags: ['Audio Guide', 'Giờ mở cửa', 'Cẩm nang'],
    metaBadges: [
      { label: 'Dịch Vụ Audio Guide', variant: 'sky' },
      { label: 'Ưu Đãi Học Đường', variant: 'emerald' },
      { label: 'Nội Quy Bảo Tàng', variant: 'stone' }
    ],
    featurePills: ['Giờ mở cửa 8h-17h', 'Giảm 50% HSSV', 'Đa ngôn ngữ'],
    quickSpecs: [
      { label: 'Thuyết minh', value: 'Đa ngôn ngữ' },
      { label: 'Ưu đãi', value: 'Giảm 50% cho học sinh - sinh viên' },
      { label: 'Giờ mở cửa', value: '08:00 - 17:00' }
    ]
  },

  // 3.6 Thông tin và hỗ trợ
  '/tien-ich/thong-tin-va-ho-tro': {
    path: '/tien-ich/thong-tin-va-ho-tro',
    id: 'thong-tin-va-ho-tro',
    title: 'Thông Tin Và Hỗ Trợ',
    subtitle: 'Tổng đài tư vấn, giải đáp FAQ & hỗ trợ kỹ thuật VR',
    category: 'Tiện ích',
    breadcrumbs: [
      { title: 'Bảo Tàng Chèo Số', path: '/' },
      { title: 'Tiện ích', path: '/tien-ich' },
      { title: 'Thông tin và hỗ trợ', path: '/tien-ich/thong-tin-va-ho-tro' }
    ],
    description: 'Kênh liên hệ trực tiếp, câu hỏi thường gặp (FAQ) và đường dây nóng hỗ trợ khách tham quan bảo tàng số.',
    tags: ['Hotline', 'FAQ', 'Trợ giúp 24/7'],
    metaBadges: [
      { label: 'Hotline 24/7', variant: 'sky' },
      { label: 'Hỏi Đáp FAQ', variant: 'amber' },
      { label: 'Hỗ Trợ Kỹ Thuật VR', variant: 'emerald' }
    ],
    featurePills: ['1900 6868', 'hotro@baotangcheoso.vn', 'Hướng dẫn kính VR'],
    quickSpecs: [
      { label: 'Tổng đài', value: '1900 xxxx' },
      { label: 'Email', value: 'hotro@baotangcheoso.vn' },
      { label: 'Kỹ thuật', value: 'Trợ giúp tương tác 3D' }
    ]
  }
}

/** Helper to match any hash path (normalized) */
export function matchRoute(hash: string): RouteNode {
  let clean = hash.replace(/^#\/?/, '').replace(/\/$/, '')
  if (!clean) return SITEMAP_ROUTES['/']
  
  // Format with leading slash
  const path = `/${clean}`
  if (SITEMAP_ROUTES[path]) return SITEMAP_ROUTES[path]

  // Fallback match by ending ID
  const lastSegment = clean.split('/').pop()
  for (const r of Object.values(SITEMAP_ROUTES)) {
    if (r.id === lastSegment || r.path.endsWith(`/${lastSegment}`)) {
      return r
    }
  }

  return SITEMAP_ROUTES['/']
}
