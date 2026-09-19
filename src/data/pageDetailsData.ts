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
} from '../types/cheoCulturalTypes'

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
} from './cheoCulturalData'

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

export const PAGE_DETAILS_MAP: Record<string, PageDetailContent> = {
  // ================= 1. GỐC & SẢNH =================
  'root': {
    id: 'root',
    title: 'Bảo Tàng Chèo Số',
    breadcrumb: ['Trang Chủ', 'Cổng Chính Số'],
    quote: {
      text: 'Chèo là tấm gương phản chiếu tâm hồn, tính cách và tiếng cười lạc quan của người Việt từ ngàn đời nay.',
      author: 'Nghệ nhân Nhân dân Dịu Hương'
    },
    heroBadge: 'Không Gian Trọng Tâm',
    introduction: 'Bảo tàng Chèo Số ứng dụng công nghệ Web3D và âm thanh vòm chất lượng cao nhằm bảo tồn 5 mẫu nhân vật, trang phục truyền thống và hơn 200 làn điệu Chèo cổ phục vụ học tập, nghiên cứu.',
    sections: [
      {
        heading: 'Sứ mệnh phụng sự di sản',
        paragraphs: [
          'Chèo là loại hình nghệ thuật sân khấu cổ truyền đậm đà tính dân tộc, kết hợp nhuần nhuyễn giữa hát, múa, diễn xuất và kịch bản văn học giàu tính triết lý nhân sinh.',
          'Bảo tàng Chèo Số ra đời với trọng trách thu thập, phục chế và trình diễn số các tư liệu quý hiếm, xây dựng kho dữ liệu mở cho cộng đồng học thuật và công chúng yêu nghệ thuật.'
        ]
      },
      {
        heading: 'Không gian trải nghiệm đa chiều',
        paragraphs: [
          'Khách tham quan có thể tương tác với phục trang 3D, thưởng thức hơn 200 làn điệu Chèo qua dàn âm thanh phòng thu chuẩn mực, bước vào hậu trường để khám phá nghệ thuật hóa trang và tìm hiểu các mẫu nhân vật kinh điển.'
        ]
      }
    ],
    funFacts: [
      'Chèo ra đời từ thế kỷ thứ 10 tại kinh đô Hoa Lư (Ninh Bình) dưới thời vua Đinh Tiên Hoàng.',
      'Hơn 200 làn điệu Chèo cổ đã được các nghệ nhân ghi chép và lưu truyền qua nhiều thế hệ.'
    ],
    widgetType: 'timeline',
    tags: ['Di sản UNESCO', 'Sân khấu cổ truyền', 'Bảo tàng số 3D'],
    structuredBadges: [
      { label: 'Không Gian Trọng Tâm', variant: 'amber' },
      { label: 'Di Sản Sông Hồng', variant: 'emerald' },
      { label: 'Web3D Tương Tác', variant: 'sky' }
    ],
    quickSpecs: [
      { label: 'Không gian', value: '3 Phân khu lớn' },
      { label: 'Quy mô', value: '29 Phòng trưng bày' },
      { label: 'Hình thức', value: 'Số hóa tương tác' }
    ],
    hubShowcase: KHAM_PHA_HUB_DATA,
    keyMetrics: KHAM_PHA_HUB_DATA.keyMetrics,
    pillars: KHAM_PHA_HUB_DATA.pillars,
  },

  'sanh': {
    id: 'sanh',
    title: 'Sảnh Đón Tiếp',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Sảnh'],
    heroBadge: 'Điểm Khởi Hành',
    introduction: 'Sảnh chính là không gian trung tâm dẫn lối người xem vào 3 không gian lớn: Không gian Giới thiệu, Không gian Khám phá Sân khấu và Không gian Tiện ích dịch vụ.',
    sections: [
      {
        heading: 'Định hướng hành trình tham quan',
        paragraphs: [
          'Tại Sảnh, bạn có thể lựa chọn hành trình theo sở thích: Tour Lịch sử (dành cho người muốn tìm hiểu nguồn cội), Tour Nghệ thuật biểu diễn (thưởng thức nhân vật, phục trang và làn điệu) hoặc Tour Trải nghiệm thực tế (xem lịch diễn và đặt vé).'
        ]
      }
    ],
    tags: ['Sảnh đón tiếp', 'Bản đồ chỉ dẫn', 'Trợ lý ảo'],
    structuredBadges: [
      { label: 'Sảnh Đón Tiếp', variant: 'amber' },
      { label: 'Cổng 3 Không Gian', variant: 'emerald' },
      { label: 'Chỉ Dẫn 3D', variant: 'sky' }
    ],
    quickSpecs: [
      { label: 'Không gian', value: '3 Phân khu' },
      { label: 'Quy mô', value: '29 Phòng trưng bày' },
      { label: 'Hình thức', value: 'Số hóa tương tác' }
    ],
    hubShowcase: KHAM_PHA_HUB_DATA,
    keyMetrics: KHAM_PHA_HUB_DATA.keyMetrics,
    pillars: KHAM_PHA_HUB_DATA.pillars,
  },

  // ================= 2. NHÁNH GIỚI THIỆU =================
  'gioi-thieu': {
    id: 'gioi-thieu',
    title: 'Không Gian Giới Thiệu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Sảnh', 'Giới thiệu'],
    heroBadge: 'Khởi Nguồn & Sứ Mệnh',
    introduction: 'Nơi lưu giữ câu chuyện khởi đầu của Bảo tàng Chèo Số, hành trình điền dã sưu tầm di sản và giới thiệu những con người tâm huyết kiến tạo nên nền tảng.',
    sections: [
      {
        heading: 'Kết nối truyền thống và công nghệ tương lai',
        paragraphs: [
          'Chúng tôi tin rằng di sản văn hóa chỉ thực sự sống khi nó hiện diện trong đời sống hàng ngày của người trẻ. Không gian Giới thiệu sẽ giúp bạn hiểu rõ lý do dự án ra đời và những giá trị cốt lõi mà chúng tôi hướng tới.'
        ]
      }
    ],
    tags: ['Sứ mệnh', 'Điền dã văn hóa', 'Đội ngũ sáng lập'],
    structuredBadges: [
      { label: 'Sứ Mệnh Di Sản', variant: 'amber' },
      { label: 'Hành Trình Điền Dã', variant: 'emerald' },
      { label: 'Đội Ngũ Sáng Lập', variant: 'sky' }
    ],
    quickSpecs: [
      { label: 'Trọng tâm', value: 'Bảo tồn & Lan tỏa' },
      { label: 'Địa bàn', value: 'Bắc Bộ' },
      { label: 'Phương thức', value: 'Âm thanh vòm & 3D' }
    ],
    hubShowcase: GIOI_THIEU_HUB_DATA,
    keyMetrics: GIOI_THIEU_HUB_DATA.keyMetrics,
  },

  'bao-tang-so-cheo': {
    id: 'bao-tang-so-cheo',
    title: 'Bảo Tàng Số “Chèo”',
    parentTitle: 'Giới thiệu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Giới thiệu', 'Bảo tàng số "Chèo"'],
    quote: {
      text: 'Đem chiếu chèo sân đình ngày xưa đặt lên không gian số của ngày mai.'
    },
    heroBadge: 'Không Gian Văn Hóa',
    introduction: 'Chiếu chèo ngàn năm dưới mái đình số — nơi ký ức dân gian châu thổ sông Hồng được gìn giữ bằng công nghệ, để tiếng trống hội làng không bao giờ tắt.',
    sections: [
      {
        heading: 'Một bảo tàng sống giữa kỷ nguyên số',
        paragraphs: [
          'Không đóng khung di sản sau những lớp kính dày lạnh lẽo, Bảo tàng Chèo Số mở ra một không gian tương tác đa chiều để người xem được tự do lắng nghe, chạm vào và sống cùng nghệ thuật truyền thống.',
          'Nơi ngón nghề nảy hạt của các bậc nghệ nhân lão thành hòa quyện cùng công nghệ âm thanh đa tầng và đồ họa 3D hiện đại, kết nối quá khứ ngàn năm với nhịp đập thế hệ trẻ.'
        ]
      }
    ],
    tags: ['Bảo tàng mở', 'Âm thanh đa tầng', 'Di sản sống'],
    structuredBadges: [
      { label: 'Chiếu Chèo Số', variant: 'red' },
      { label: 'Tương Tác Sống', variant: 'amber' },
      { label: 'Lan Tỏa Cội Nguồn', variant: 'emerald' }
    ],
    quickSpecs: [
      { label: 'Triết lý', value: 'Bảo tàng mở' },
      { label: 'Âm thanh', value: 'Thu âm đa tầng mộc' },
      { label: 'Tầm nhìn', value: 'Gìn giữ cho muôn đời sau' }
    ],
  },

  'cau-chuyen-hinh-thanh': {
    id: 'cau-chuyen-hinh-thanh',
    title: 'Câu Chuyện Hình Thành',
    parentTitle: 'Giới thiệu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Giới thiệu', 'Câu chuyện hình thành'],
    quote: {
      text: 'Những bước chân điền dã khắp các làng Chèo cổ bên bờ sông Đáy, sông Hồng đã thắp lên ngọn lửa cho dự án này.'
    },
    heroBadge: 'Ký Sự Điền Dã',
    introduction: 'Hành trình hơn 2 năm tìm về các làng chèo cổ Bắc Bộ (Khuốc, Yên Khánh, Nam Trực) để trò chuyện cùng các nghệ nhân lão thành và ghi chép lại những tinh hoa đang dần bị lãng quên.',
    sections: [
      {
        heading: 'Từ lo âu mai một đến hành động số hóa',
        paragraphs: [
          'Khi nhiều nghệ nhân tuổi đã ngoài 80 không còn nhiều học trò theo nghề, nguy cơ thất truyền các làn điệu cổ ngày càng hiện hữu. Đội ngũ dự án đã tức tốc lên đường với máy ghi âm, máy quay chuyên dụng để ghi nhận từng nhịp trống, từng tiếng ngân vang.'
        ]
      }
    ],
    funFacts: [
      'Làng Khuốc (Thái Bình) là một trong những cái nôi Chèo cổ nhất Việt Nam với hơn 280 làn điệu còn được gìn giữ.'
    ],
    tags: ['Làng Chèo cổ', 'Ký sự', 'Nghệ nhân dân gian'],
    structuredBadges: [
      { label: '2+ Năm Điền Dã', variant: 'amber' },
      { label: 'Làng Chèo Cổ', variant: 'emerald' },
      { label: 'Ký Sự Ghi Âm', variant: 'stone' }
    ],
    quickSpecs: [
      { label: 'Địa bàn', value: 'Khuốc, Yên Khánh, Nam Trực' },
      { label: 'Nhân chứng', value: '20+ Nghệ nhân lão thành' },
      { label: 'Hiện vật', value: '150+ Bản ghi' }
    ],
  },

  'muc-tieu-va-y-nghia': {
    id: 'muc-tieu-va-y-nghia',
    title: 'Mục Tiêu Và Ý Nghĩa',
    parentTitle: 'Giới thiệu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Giới thiệu', 'Mục tiêu và ý nghĩa'],
    heroBadge: 'Ý Nghĩa Nhân Văn',
    introduction: 'Không để tiếng trống hội làng lùi vào dĩ vãng — cất giữ nguyên vẹn hồn cốt của cha ông và đánh thức niềm tự hào cội rễ trong trái tim thế hệ trẻ hôm nay.',
    sections: [
      {
        heading: 'Khát vọng gìn giữ và tiếp lửa di sản',
        paragraphs: [
          'Dự án ra đời từ lời kêu gọi của lương tâm trước nguy cơ thất truyền của các làn điệu cổ truyền, khi những nghệ nhân báu vật nhân văn sống dần tạ thế theo thời gian.',
          'Bằng ngôn ngữ công nghệ số, chúng tôi mở ra không gian tương tác đa chiều để người trẻ được tự do chạm vào di sản, đồng thời đưa nghệ thuật Chèo đồng hành cùng hồ sơ UNESCO vươn tầm thế giới.'
        ]
      }
    ],
    tags: ['Bảo tồn nguyên bản', 'Khơi nguồn tự hào', 'Hồ sơ UNESCO'],
    structuredBadges: [
      { label: 'Cứu Ký Ức Cổ', variant: 'red' },
      { label: 'Cảm Hứng Thế Hệ Mới', variant: 'emerald' },
      { label: 'Không Gian UNESCO', variant: 'sky' }
    ],
    quickSpecs: [
      { label: 'Tâm nguyện', value: 'Gìn giữ hồn cốt' },
      { label: 'Cầu nối', value: 'Thế hệ trẻ & Học đường' },
      { label: 'Tầm vóc', value: 'Di sản nhân loại' }
    ],
  },

  'doi-ngu-nhom-thuc-hien': {
    id: 'doi-ngu-nhom-thuc-hien',
    title: 'Đội Ngũ & Nhóm Thực Hiện',
    parentTitle: 'Giới thiệu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Giới thiệu', 'Đội ngũ/ nhóm thực hiện'],
    heroBadge: 'Con Người Dự Án',
    introduction: 'Sự hòa quyện giữa các Nghệ sĩ Nhân dân, nhà nghiên cứu văn hóa dân gian Bắc Bộ và các bạn kỹ sư công nghệ, nhà thiết kế đồ họa trẻ.',
    sections: [
      {
        heading: 'Cố vấn chuyên môn & Nghệ thuật',
        paragraphs: [
          'Hội đồng cố vấn bao gồm các chuyên gia hàng đầu từ Viện Văn hóa Nghệ thuật Quốc gia, các Nghệ nhân Nhân dân giàu kinh nghiệm từ Nhà hát Chèo Việt Nam và các nghệ nhân làng Chèo truyền thống.'
        ]
      },
      {
        heading: 'Đội ngũ công nghệ & Trải nghiệm',
        paragraphs: [
          'Các kỹ sư Web & 3D đã tối ưu hóa hiệu năng để bảo tàng chạy mượt mà trên mọi thiết bị di động và máy tính mà không cần cài đặt phần mềm phức tạp.'
        ]
      }
    ],
    tags: ['Cố vấn nghệ thuật', 'Kỹ sư công nghệ', 'Nghệ nhân Nhân dân'],
    structuredBadges: [
      { label: 'Nghệ Nhân Nhân Dân', variant: 'amber' },
      { label: 'Nhà Nghiên Cứu', variant: 'stone' },
      { label: 'Kỹ Sư Công Nghệ', variant: 'sky' }
    ],
    quickSpecs: [
      { label: 'Cố vấn', value: 'Viện Văn Hóa Nghệ Thuật' },
      { label: 'Chuyên gia', value: 'NSND Cả Tam, NSND Dịu Hương' },
      { label: 'Kỹ thuật', value: 'Team Web3D' }
    ],
  },

  // ================= 3. NHÁNH KHÁM PHÁ =================
  'kham-pha': {
    id: 'kham-pha',
    title: 'Không Gian Khám Phá',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Sảnh', 'Khám phá'],
    heroBadge: 'Trái Tim Của Bảo Tàng',
    introduction: 'Khu vực trưng bày chính nơi bạn có thể khám phá lịch sử ngàn năm, phân tích các mẫu nhân vật kinh điển, chiêm ngưỡng phục trang và thưởng thức các làn điệu Chèo bất hủ.',
    sections: [
      {
        heading: 'Hành trình 3 chặng trải nghiệm',
        paragraphs: [
          'Chặng 1: Tổng quan nguồn cội và triết lý Chèo cổ.',
          'Chặng 2: Trực tiếp khám phá 4 trụ cột Sân Khấu (Nhân vật, Trang phục, Âm thanh, Vở diễn tiêu biểu).',
          'Chặng 3: Sự tiếp biến và hơi thở mới của Chèo đương đại.'
        ]
      }
    ],
    tags: ['Trưng bày chính', 'Nghệ thuật diễn xướng', 'Kho tàng Chèo'],
    structuredBadges: [
      { label: '10+ Thế Kỷ Di Sản', variant: 'amber' },
      { label: '200+ Làn Điệu', variant: 'emerald' },
      { label: '5 Mẫu Nhân Vật', variant: 'red' }
    ],
    quickSpecs: [
      { label: 'Cột mốc', value: 'Từ TK X' },
      { label: 'Trụ cột', value: 'Lịch sử, Sân khấu, Hiện đại' },
      { label: 'Kiệt tác', value: 'Tứ đại tích cổ' }
    ],
    hubShowcase: KHAM_PHA_HUB_DATA,
    keyMetrics: KHAM_PHA_HUB_DATA.keyMetrics,
    pillars: KHAM_PHA_HUB_DATA.pillars,
  },

  'tong-quan': {
    id: 'tong-quan',
    title: 'Tổng Quan Nghệ Thuật Chèo',
    parentTitle: 'Khám phá',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Tổng quan'],
    heroBadge: 'Góc Nhìn Khái Quát',
    introduction: 'Tìm hiểu cội nguồn hình thành từ thế kỷ thứ 10, ý nghĩa nhân văn sâu sắc và cuộc sống cần lao phía sau ánh hào quang sân khấu.',
    sections: [
      {
        heading: 'Nghệ thuật xuất phát từ nông thôn đồng bằng Bắc Bộ',
        paragraphs: [
          'Khác với Tuồng mang tính cung đình ước lệ, Chèo bắt rễ sâu xa từ đời sống người nông dân trồng lúa nước. Mỗi độ nông nhàn hay vào dịp hội làng, tiếng trống Chèo lại giục giã bà con tụ họp trước sân đình.'
        ]
      }
    ],
    widgetType: 'timeline',
    tags: ['Sân đình', 'Văn minh lúa nước', 'Lịch sử'],
    structuredBadges: [
      { label: 'Văn Minh Sông Hồng', variant: 'emerald' },
      { label: 'Bà Tổ Phạm Thị Trân', variant: 'amber' },
      { label: 'Đạo Lý Nhân Sinh', variant: 'red' }
    ],
    quickSpecs: [
      { label: 'Khởi phát', value: 'Kinh đô Hoa Lư' },
      { label: 'Không gian', value: 'Chiếu chèo sân đình' },
      { label: 'Giá trị', value: 'Nhân văn & Trào phúng' }
    ],
    pillars: KHAM_PHA_HUB_DATA.pillars,
  },

  'lich-su-phat-trien': {
    id: 'lich-su-phat-trien',
    title: 'Lịch Sử Phát Triển Nghệ Thuật Chèo',
    parentTitle: 'Tổng quan',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Tổng quan', 'Lịch sử phát triển'],
    quote: {
      text: 'Chẳng thèm ăn chả ăn nem / Thèm no cơm tẻ, thèm xem hát Chèo.',
      author: 'Ca dao cổ Bắc Bộ'
    },
    heroBadge: '10 Thế Kỷ Thăng Trầm',
    introduction: 'Từ thuở bà Phạm Thị Trân (Đào Thị Huệ) dạy quân sĩ múa hát dưới thời vua Đinh, qua các thời Lý - Trần - Lê - Nguyễn, Chèo đã trải qua hơn 10 thế kỷ đồng hành cùng vận mệnh dân tộc.',
    sections: [
      {
        heading: 'Thế kỷ X: Khởi thủy bà tổ nghề Chèo',
        paragraphs: [
          'Bà Phạm Thị Trân được phong chức Ưu Bà, là nữ quan đầu tiên trong lịch sử phụ trách việc ca múa, dạy quân sĩ hát múa cổ vũ tinh thần chiến đấu chống giặc ngoại xâm.'
        ]
      },
      {
        heading: 'Thế kỷ XIV - XVIII: Chèo sân đình định hình',
        paragraphs: [
          'Chèo bén rễ vào hội làng mùa xuân, hình thành các làn điệu mẫu mực và các tích truyện kinh điển phản ánh khát vọng công lý, tự do yêu đương của tầng lớp bình dân.'
        ]
      },
      {
        heading: 'Thế kỷ XX - XXI: Bước lên sân khấu lớn và số hóa',
        paragraphs: [
          'Chèo được đưa vào các nhà hát chuyên nghiệp, ghi âm đĩa hát và nay bước vào kỷ nguyên số với các công nghệ tương tác trực tuyến.'
        ]
      }
    ],
    widgetType: 'timeline',
    tags: ['Bà tổ nghề Chèo', 'Niên biểu', '1000 năm lịch sử'],
    structuredBadges: [
      { label: 'Khởi Nguồn TK X', variant: 'amber' },
      { label: 'Chèo Sân Đình', variant: 'stone' },
      { label: 'Sân Khấu Hộp 1951', variant: 'red' }
    ],
    quickSpecs: [
      { label: 'Bà tổ nghề', value: 'Ưu bà Phạm Thị Trân' },
      { label: 'Niên đại', value: 'Thế kỷ X - Nay' },
      { label: 'Đỉnh cao', value: 'Chèo cổ TK 17-18' }
    ],
  },

  'gia-tri-van-hoa': {
    id: 'gia-tri-van-hoa',
    title: 'Giá Trị Văn Hóa & Nhân Sinh',
    parentTitle: 'Tổng quan',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Tổng quan', 'Giá trị văn hoá'],
    heroBadge: 'Đạo Lý Dân Gian',
    introduction: 'Chèo chứa đựng triết lý nhân sinh mộc mạc mà thâm thúy: tinh thần tương thân tương ái, trừng phạt kẻ ác, tôn vinh đức hi sinh và dùng nụ cười trào phúng để thanh lọc tâm hồn.',
    sections: [
      {
        heading: 'Tiếng cười trào lộng dân gian — Vũ khí của người nghèo',
        paragraphs: [
          'Nhân vật Hề Chèo đại diện cho tiếng nói phê phán của nhân dân đối với quan lại tham nhũng, thói đạo đức giả của tầng lớp thống trị. Tiếng cười trong Chèo vừa chua cay vừa sảng khoái và chan chứa lòng trắc ẩn.',
          'Không phải ngẫu nhiên mà Hề Chèo luôn được yêu thích nhất trên chiếu diễn sân đình. Đây là nhân vật duy nhất được phép nói thật, phá bỏ quy ước, thậm chí "bình luận" trực tiếp với khán giả đang ngồi xem — một thứ tự do biểu đạt hiếm có trong xã hội phong kiến.',
          'Có hai loại Hề tiêu biểu: Hề Gậy — chuyên nhận đòn thay thiên hạ mà vẫn tếu táo; và Hề Mồi — khéo léo dùng lời nói bóng gió để vạch trần sự thật. Tiếng cười Chèo không phá hoại mà chữa lành, không nhục mạ mà cảm thông.'
        ],
        bullets: [
          'Hề Gậy: nhận đòn thay thiên hạ với nụ cười hào sảng',
          'Hề Mồi: dùng ngôn từ bóng gió khéo léo vạch trần sự thật',
          'Tiếng cười Chèo mang triết lý Phật giáo: bi hỉ xả, không oán hận'
        ]
      },
      {
        heading: 'Triết lý "Ở hiền gặp lành" — Nhân quả công bằng',
        paragraphs: [
          'Khác với bi kịch phương Tây thường kết thúc trong tuyệt vọng, Chèo hầu như luôn đề cao sự công bằng của đạo trời: kẻ ác bị trừng phạt, người hiền được đền bù. Thị Kính nhẫn chịu oan khuất suốt đời tu hành nhưng cuối cùng được phong Bồ Tát; Lưu Bình vượt hoạn nạn trở thành quan cao chức trọng.',
          'Đây không phải ảo tưởng mà là lẽ sống thực tiễn của người nông dân Bắc Bộ: phải nhẫn nại, phải tin vào nhân quả, phải giữ vững đạo lý dù trời đất trở tay. Niềm tin ấy đã giúp cộng đồng làng xã vượt qua những biến cố nghiệt ngã nhất của lịch sử.'
        ]
      },
      {
        heading: 'Đạo lý hiếu nghĩa & Thủy chung — Gốc rễ văn minh lúa nước',
        paragraphs: [
          'Các vở như Quan Âm Thị Kính, Lưu Bình Dương Lễ giáo dục con người về đức nhẫn nại, lòng vị tha và tình bạn son sắt chí tình. Chèo là "trường đạo lý" bằng nghệ thuật của người Bắc Bộ: không thuyết giảng giáo điều mà để cảm xúc dẫn dắt hiểu biết.',
          'Hình mẫu Châu Long trong Lưu Bình — Dương Lễ là biểu tượng cao đẹp về người phụ nữ Việt: hy sinh âm thầm vì nghĩa cả, trung thành tuyệt đối với chồng, kiên nhẫn chờ đợi không than trách. Đây không phải sự phục tùng mà là chủ động chọn lựa vì yêu thương và lòng tự trọng.'
        ],
        bullets: [
          'Tứ đức: Công — Dung — Ngôn — Hạnh qua hình tượng Đào Chèo',
          'Ngũ thường: Nhân Nghĩa Lễ Trí Tín qua hình tượng Kép Chèo',
          'Tình bạn tri kỷ: lý tưởng sống vượt lên vật chất của người quân tử'
        ]
      },
      {
        heading: 'Khát vọng tự do và công lý — Giọng nói của người bị áp bức',
        paragraphs: [
          'Nhân vật Xúy Vân trong vở Kim Nhan đã "giả dại" như một cách phản kháng duy nhất có thể: khi không được ly hôn, không được tự do, nàng chọn cái "điên" để thoát khỏi sự giam hãm. Bi kịch này không phê phán Xúy Vân mà tố cáo một xã hội phi nhân không cho người phụ nữ quyền lựa chọn.',
          'Tinh thần ấy tiếp tục trong suốt lịch sử Chèo: từ Thị Mầu lên chùa táo bạo tán tỉnh tiểu Kính Tâm, đến các vở hiện đại của NSND Tào Mạt dám nói lên những điều cấm kỵ — Chèo luôn là tiếng nói của những người bị lịch sử bỏ quên.'
        ]
      },
      {
        heading: 'Chèo và cố kết cộng đồng làng xã Bắc Bộ',
        paragraphs: [
          'Khác với sân khấu cung đình dành cho giới thượng lưu, Chèo là của nhân dân, diễn giữa sân đình cho nhân dân. Màn diễn không có tường ngăn cách: khán giả ngồi xung quanh chiếu diễn, tương tác trực tiếp — vỗ tay tán thưởng, cười ồ với Hề, thậm chí "thưởng tiền" khi đào kép hát hay.',
          'Chiếu Chèo sân đình trong những hội làng mùa xuân (từ Tết đến Rằm tháng Giêng) là sợi dây gắn kết cả cộng đồng: không phân biệt giàu nghèo, già trẻ, tất cả cùng cười khóc với những số phận sân khấu phản chiếu đời thật của chính mình.'
        ],
        bullets: [
          'Hội làng: không gian thiêng để Chèo trở về với cội nguồn',
          'Chiếu tròn 3 phía khán giả: xóa bỏ rào cản nghệ sĩ — khán giả',
          'Tục "thưởng hát": sự tri ân trực tiếp của dân gian với nghệ nhân'
        ]
      },
      {
        heading: 'Di sản sống — Chèo trong đời sống đương đại',
        paragraphs: [
          'Những giá trị mà Chèo mang lại — tinh thần nhân văn, tiếng cười lạc quan, khát vọng công lý — không bị cũ đi theo thời gian. Thế hệ trẻ ngày nay tìm đến Chèo như một cách khám phá bản sắc văn hóa, hiểu về tổ tiên và tìm lại chính mình trong nhịp sống hiện đại.',
          'Bảo tàng Chèo Số ra đời từ niềm tin đó: số hóa không phải để "bảo quản trong tủ kính" mà để làm Chèo sống động và tiếp cận được với mọi người, mọi thế hệ, mọi biên giới địa lý.'
        ]
      }
    ],
    tags: ['Đạo lý nhân sinh', 'Tiếng cười trào phúng', 'Nhân nghĩa'],
    structuredBadges: [
      { label: 'Đạo Lý Nhân Quả', variant: 'amber' },
      { label: 'Nụ Cười Trào Phúng', variant: 'emerald' },
      { label: 'Khát Vọng Công Lý', variant: 'red' }
    ],
    quickSpecs: [
      { label: 'Triết lý', value: 'Ở hiền gặp lành' },
      { label: 'Nhân vật phản biện', value: 'Hề Chèo' },
      { label: 'Tính cộng đồng', value: 'Hội làng Bắc Bộ' }
    ],
    philosophyData: CULTURAL_PHILOSOPHY_DATA,
  },

  'phia-sau-san-khau': {
    id: 'phia-sau-san-khau',
    title: 'Phía Sau Sân Khấu',
    parentTitle: 'Tổng quan',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Tổng quan', 'Phía sau sân khấu'],
    heroBadge: 'Góc Hậu Trường',
    introduction: 'Nơi khám phá quá trình khổ luyện của diễn viên Chèo: luyện thanh, tập điệu múa quạt, nghệ thuật vẽ mặt hóa trang và chuẩn bị đạo cụ biểu diễn.',
    sections: [
      {
        heading: 'Khẩu quyết "Nhất thanh, nhị sắc, tam tinh, tứ nghệ" — Bốn trụ cột của người nghệ sĩ Chèo',
        paragraphs: [
          'Đây là phương châm tối thượng mà mỗi diễn viên Chèo phải khắc cốt ghi tâm từ ngày đầu nhập môn. Thanh — giọng hát phải thuần khiết, ngọt ngào, phát âm chuẩn xác từng chữ; Sắc — dáng vẻ ngoại hình, nét mặt, ánh mắt phải truyền cảm xúc; Tinh — sự tinh tế, sâu sắc trong lý giải tâm lý nhân vật; Nghệ — kỹ thuật thuần thục toàn bộ hệ thống múa, hát, diễn.',
          'Người thầy Chèo xưa thường nói: "Học mười năm chưa đủ để đứng chiếu, nhưng chỉ cần một đêm hát sai nhịp là đủ để mất danh". Đó là áp lực và niềm kiêu hãnh của nghề.'
        ],
        bullets: [
          'Thanh: giọng hát nảy hạt, nhả chữ rõ ràng, ngân nga đúng điệu thức',
          'Sắc: ánh mắt, nụ cười, nét mặt — "mắt là cửa sổ tâm hồn nhân vật"',
          'Tinh: hiểu sâu tâm lý từng loại nhân vật, mỗi câu hát là một trạng thái',
          'Nghệ: kỹ năng tổng hợp — múa tay, múa chân, múa quạt, múa nón'
        ]
      },
      {
        heading: 'Nghệ thuật hóa trang mặt nhân vật — Mã ngôn ngữ trực quan của Chèo cổ',
        paragraphs: [
          'Hóa trang Chèo không nhằm mục đích tạo ra vẻ ngoài "đẹp" hay "đúng với thực tế" mà là hệ thống ký hiệu ước lệ: khán giả xưa nhìn mặt nhân vật là biết ngay tính cách và số phận của họ.',
          'Mặt Đào thương — hồng hào, lông mày cong nhẹ, khóe mắt buồn. Mặt Đào lẳng (Thị Mầu) — son môi đậm, mắt sắc sảo, lông mày cong cao táo bạo. Mặt Kép — nét thư sinh thanh tú. Mặt Hề — nét cong hài hước cường điệu. Mặt Lão nghiêm — trắng bệch hoặc đỏ tươi. Mặt Mụ ác — đen hoặc xanh đậm. Màu sắc cũng là ngôn ngữ: đỏ là trung thành, trắng là xảo quyệt, đen là hung hãn.'
        ]
      },
      {
        heading: 'Đạo cụ Chèo: giản dị mà đa năng — Nghệ thuật "biến vật thành hồn"',
        paragraphs: [
          'Một chiếc quạt mo có thể hóa thành chiếc gương soi, phong thư tình, mái chèo xuôi dòng hay vũ khí chiến đấu tùy theo diễn cảm của người nghệ sĩ. Điều này phản ánh tinh thần tối giản mà phong phú của sân khấu truyền thống: không phụ thuộc vào cảnh trí cầu kỳ mà phụ thuộc hoàn toàn vào tài năng diễn xuất.',
          'Chiếc quạt (Đào múa), chiếc gậy tre (Hề gậy), bình vôi, chuỗi hạt, khăn vuông — mỗi đạo cụ đều mang ý nghĩa biểu tượng riêng. Bình vôi (phụ nữ giữ nhà), gậy tre (sức mạnh dân gian giản dị), nón ba tầm (vẻ duyên dáng che giấu), khăn vuông (tiếc thương và biệt ly).'
        ],
        bullets: [
          'Quạt mo: đa năng nhất — gương, thư, mái chèo, vũ khí, tín vật tình yêu',
          'Gậy tre: sức mạnh Hề Chèo — vừa đánh vừa chống, vừa đùa vừa thật',
          'Nón ba tầm: múa nón — vũ điệu duyên dáng nhất của Đào Chèo'
        ]
      },
      {
        heading: 'Vũ đạo Chèo — Ngôn ngữ thân xác chuẩn mực hàng nghìn năm',
        paragraphs: [
          'Mỗi bộ phận cơ thể trong vũ đạo Chèo đều có quy ước riêng: bàn tay phải "búp măng" mềm mại; bước chân phải khép gối nhẹ nhàng; khi ngồi phải "ngồi chiếu" — thẳng lưng, hai gối chụm, hai tay đặt trên gối; mắt phải "liếc nhanh — nhìn lâu" tùy tình cảnh.',
          'Riêng múa quạt của Đào Chèo là một nghệ thuật hoàn chỉnh, có thể kể một câu chuyện dài bằng cử động quạt đơn thuần: quạt mở (vui), quạt che mặt (xấu hổ), quạt hất ngược (giận dỗi), quạt trên đầu (đội nón ra đi). Học múa quạt đúng chuẩn có thể mất 3-5 năm.'
        ]
      },
      {
        heading: 'Hậu trường đêm diễn — Không gian tâm linh trước giờ G',
        paragraphs: [
          'Trước mỗi đêm diễn, các nghệ nhân Chèo cổ thường thực hiện lễ "xin phép Tổ": thắp hương trước bài vị Tổ nghề (bà Phạm Thị Trân), khấn xin cho buổi diễn thuận lợi và nhận được sự phù hộ để hát hay múa đẹp. Nét tâm linh này phản ánh lòng biết ơn sâu sắc với tiền nhân đã truyền lại nghề.',
          'Tiếp đó là "mặc áo" — nghi thức thay trang phục diễn mang ý nghĩa chuyển hóa: từ con người đời thường biến thành nhân vật sân khấu. Nhiều nghệ nhân lớn tuổi chia sẻ: chỉ khi mặc xong trang phục và vẽ xong mặt, họ mới thực sự "thành" nhân vật mình đóng.'
        ]
      }
    ],
    tags: ['Hóa trang', 'Tập luyện', 'Đạo cụ: Quạt mo'],
    structuredBadges: [
      { label: 'Thanh - Sắc - Tinh - Nghệ', variant: 'amber' },
      { label: 'Vẽ Mặt Ước Lệ', variant: 'red' },
      { label: 'Đạo Cụ Tượng Trưng', variant: 'stone' }
    ],
    quickSpecs: [
      { label: 'Khẩu quyết', value: 'Nhất thanh nhị sắc tam tinh tứ nghệ' },
      { label: 'Đạo cụ chính', value: 'Chiếc quạt mo' },
      { label: 'Hóa trang', value: 'Lối vẽ biểu cảm' }
    ],
    funFacts: [
      'Nghệ nhân múa quạt Chèo giỏi có thể biểu diễn hơn 30 động tác khác nhau chỉ với một chiếc quạt duy nhất.',
      'Vẽ mặt hóa trang Chèo truyền thống dùng son phấn tự làm từ đất son, phấn mạch nha và màu thực vật — tuyệt đối không dùng hóa chất.',
      'Bộ trang phục Đào Chèo đầy đủ gồm 7 lớp, nặng có thể lên tới 5-7 kg, đòi hỏi nghệ nhân phải luyện sức bền thể chất.'
    ],
    backstageData: BACKSTAGE_ARTISTRY_DATA,
  },

  // SÂN KHẤU
  'san-khau': {
    id: 'san-khau',
    title: 'Không Gian Sân Khấu Chèo',
    parentTitle: 'Khám phá',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Sân Khấu'],
    heroBadge: 'Trọng Tâm Biểu Diễn',
    introduction: 'Chiếu chèo xưa chỉ vỏn vẹn một tấm chiếu hoa trải giữa sân đình, nhưng đã mở ra cả một thế giới hỷ nộ ái ố với đầy đủ nhân vật, phục trang rực rỡ và tiếng đàn nhị da diết.',
    sections: [
      {
        heading: 'Bốn trụ cột của vở diễn Chèo',
        paragraphs: [
          'Một vở Chèo thành công là sự hòa quyện tuyệt đỉnh giữa Nhân vật chuẩn mực, Phục trang ước lệ, Âm nhạc sống động và Kịch bản kiệt tác.'
        ]
      }
    ],
    widgetType: 'plays',
    tags: ['Chiếu chèo sân đình', 'Sân khấu cổ', '4 Trụ cột'],
    structuredBadges: [
      { label: '4 Trụ Cột Sân Khấu', variant: 'amber' },
      { label: 'Chiếu Chèo Cổ', variant: 'stone' },
      { label: 'Nguyên Bản Dân Tộc', variant: 'emerald' }
    ],
    quickSpecs: [
      { label: 'Không gian', value: 'Chiếu hoa sân đình' },
      { label: 'Trụ cột', value: 'Nhân vật, Phục trang, Âm thanh, Vở diễn' }
    ],
    hubShowcase: SAN_KHAU_HUB_DATA,
    keyMetrics: SAN_KHAU_HUB_DATA.keyMetrics,
  },

  'nhan-vat': {
    id: 'nhan-vat',
    title: 'Hệ Thống Nhân Vật Chèo Cổ',
    parentTitle: 'Sân Khấu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Sân Khấu', 'Nhân vật'],
    heroBadge: '5 Dạng Nhân Vật Chuẩn Mực',
    introduction: 'Sân khấu Chèo phân chia nhân vật theo các mô thức chuẩn: Đào (nữ), Kép (nam), Hề (hài hước trào lộng), Lão (ông già trung thực), Mụ (phụ nữ lớn tuổi cay nghiệt).',
    sections: [
      {
        heading: 'Tính cách định hình qua vũ đạo và làn điệu',
        paragraphs: [
          'Chỉ cần nhân vật bước ra khỏi cánh gà, cất tiếng ngâm xưng danh và đi một bước chân, khán giả xưa đã biết ngay đó là người hiền lành trung hậu hay kẻ gian giảo điêu ngoa.'
        ]
      }
    ],
    widgetType: 'characters',
    tags: ['Thị Mầu', 'Xúy Vân', 'Hề Chèo', 'Kép Lưu Bình'],
    structuredBadges: [
      { label: '5 Mẫu Ước Lệ', variant: 'amber' },
      { label: 'Đào - Kép - Hề', variant: 'red' },
      { label: 'Lão - Mụ', variant: 'stone' }
    ],
    quickSpecs: [
      { label: 'Quy ước', value: 'Ước lệ nghiêm ngặt' },
      { label: 'Nổi bật', value: 'Thị Mầu, Xúy Vân' },
      { label: 'Điểm xuyết', value: 'Hề gậy, Hề mồi' }
    ],
  },

  'trang-phuc': {
    id: 'trang-phuc',
    title: 'Trang Phục & Phục Sức Sân Khấu Chèo',
    parentTitle: 'Sân Khấu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Sân Khấu', 'Trang phục'],
    quote: {
      text: 'Áo tứ thân mớ ba mớ bảy, nón quai thao che nghiêng nụ cười duyên quan họ.'
    },
    heroBadge: 'Sắc Màu Di Sản',
    introduction: 'Khám phá vẻ đẹp tinh tế của trang phục Chèo: áo tứ thân thắt vạt, yếm thắm, khăn mỏ quạ, nón ba tầm quai thao cùng quy ước màu sắc nghiêm cẩn của từng tầng lớp nhân vật.',
    sections: [
      {
        heading: 'Quy ước màu sắc trang phục trong Chèo cổ',
        paragraphs: [
          'Màu sắc trong Chèo không đơn thuần là thẩm mỹ mà mang tính biểu tượng xã hội cao:',
          '• Màu đỏ, vàng: dành cho vương hầu, công tôn quý tộc.',
          '• Màu nâu, đen: dành cho nông dân, người lao động, chú hề.',
          '• Áo mớ ba mớ bảy (nhiều lớp màu tương phản): tôn vinh vẻ thùy mị, duyên dáng của người phụ nữ Bắc Bộ.'
        ]
      }
    ],
    widgetType: 'costumes',
    tags: ['Áo tứ thân', 'Nón quai thao', 'Khăn mỏ quạ', 'Yếm đào'],
    structuredBadges: [
      { label: 'Áo Tứ Thân Mớ Ba Mớ Bảy', variant: 'amber' },
      { label: 'Nón Quai Thao - Yếm Đào', variant: 'red' },
      { label: 'Ngũ Sắc Ước Lệ', variant: 'emerald' }
    ],
    quickSpecs: [
      { label: 'Chất liệu', value: 'Lụa tơ tằm, vải thô nhuộm củ nâu' },
      { label: 'Màu sắc', value: 'Ngũ hành ước lệ' },
      { label: 'Phụ kiện', value: 'Thắt lưng bao ngũ sắc' }
    ],
  },

  'am-thanh': {
    id: 'am-thanh',
    title: 'Âm Thanh & Dàn Nhạc Làn Điệu Chèo',
    parentTitle: 'Sân Khấu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Sân Khấu', 'Âm Thanh'],
    quote: {
      text: 'Tiếng trống Chèo rộn rã thúc giục lòng người, tiếng đàn nguyệt nỉ non gửi gắm tâm tình.'
    },
    heroBadge: 'Giai Điệu Quê Hương',
    introduction: 'Dàn nhạc Chèo là linh hồn của mỗi vở diễn. Tiếng trống cơm, trống đế, đàn nhị, đàn bầu, sáo trúc hòa quyện cùng hơn 200 làn điệu cổ truyền tạo nên bức tranh âm thanh đậm đà bản sắc sông Hồng.',
    sections: [
      {
        heading: 'Trống đế: nhạc trưởng của chiếu chèo',
        paragraphs: [
          'Người đánh trống đế không chỉ giữ nhịp mà còn tương tác trực tiếp với diễn viên qua các tiếng "tùng", "cắc", thể hiện sự đồng tình, châm chọc hay báo hiệu kịch tính.'
        ]
      }
    ],
    widgetType: 'audio',
    tags: ['Trống Chèo', 'Đàn nguyệt', 'Đào liễu', 'Quân tử vu dịch'],
    structuredBadges: [
      { label: 'Dàn Bát Âm Cổ', variant: 'amber' },
      { label: '200+ Làn Điệu Mẫu', variant: 'emerald' },
      { label: 'Timeline 4 Hồi', variant: 'sky' }
    ],
    quickSpecs: [
      { label: 'Trưởng ban', value: 'Trống đế' },
      { label: 'Nhạc cụ gõ', value: 'Trống cái, thanh la, mõ' },
      { label: 'Giai điệu', value: 'Đàn nguyệt, đàn nhị, sáo trúc' }
    ],
    audioData: CHEO_AUDIO_COMPLETE_DATA,
  },

  'tac-pham-tieu-bieu': {
    id: 'tac-pham-tieu-bieu',
    title: 'Các Tác Phẩm Chèo Tiêu Biểu',
    parentTitle: 'Sân Khấu',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Sân Khấu', 'Tác phẩm tiêu biểu'],
    heroBadge: 'Kiệt Tác Sân Khấu',
    introduction: 'Tuyển tập 4 vở Chèo kinh điển đã đi vào tiềm thức hàng triệu người Việt: Quan Âm Thị Kính, Kim Nhan (Xúy Vân), Lưu Bình - Dương Lễ và Nghêu Sò Ốc Hến.',
    sections: [
      {
        heading: 'Sức sống vượt thời gian của các kiệt tác',
        paragraphs: [
          'Mỗi tác phẩm là một pho tượng nghệ thuật độc đáo, phản ánh chân thực số phận con người trong xã hội phong kiến, khát vọng tự do và tình người cao quý.'
        ]
      }
    ],
    widgetType: 'plays',
    tags: ['Quan Âm Thị Kính', 'Xúy Vân giả dại', 'Lưu Bình Dương Lễ'],
    structuredBadges: [
      { label: 'Tứ Đại Kiệt Tác', variant: 'red' },
      { label: 'Quan Âm Thị Kính', variant: 'amber' },
      { label: 'Xúy Vân Giả Dại', variant: 'emerald' }
    ],
    quickSpecs: [
      { label: 'Vở tiêu biểu', value: 'Quan Âm Thị Kính, Kim Nhan, Lưu Bình Dương Lễ' },
      { label: 'Giá trị', value: 'Bi kịch nhân văn sâu sắc' }
    ],
  },

  'cheo-hien-dai': {
    id: 'cheo-hien-dai',
    title: 'Chèo Hiện Đại & Sự Chuyển Mình',
    parentTitle: 'Khám phá',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Khám phá', 'Chèo hiện đại'],
    quote: {
      text: 'Nghệ thuật Chèo chỉ thực sự sống khi nó bắt kịp nhịp thở của thời đại mà không đánh mất điệu thức ngàn năm.',
      author: 'Cố tác giả, NSND Tào Mạt'
    },
    heroBadge: 'Đương Đại & Tương Lai',
    metaBadges: ['Cột Mốc 1951', 'Kỷ Nguyên Tào Mạt', 'Bộ Ba Bài Ca Giữ Nước', 'Hồ Sơ UNESCO 2024'],
    quickSpecs: [
      { label: 'Mốc chuyển mình', value: '1951 (Chiến khu Việt Bắc)' },
      { label: 'Tác giả kiệt xuất', value: 'NSND Tào Mạt, Lưu Quang Vũ' },
      { label: 'Vở diễn tiêu biểu', value: 'Bài ca giữ nước, Nàng Sita' },
      { label: 'Vị thế quốc tế', value: 'Hồ sơ đệ trình UNESCO Di sản Nhân loại' }
    ],
    introduction: 'Hành trình hơn 70 năm chuyển mình ngoạn mục của sân khấu Chèo: từ chiếu chèo hội làng bước vào rạp hát chuyên nghiệp năm 1951, sáng tạo bộ ba sử thi "Bài ca giữ nước" và tiến trình khẳng định vị thế di sản thế giới.',
    sections: [
      {
        heading: 'Cột mốc 1951: Chuyển mình từ sân đình sang nhà hát chuyên nghiệp',
        paragraphs: [
          'Năm 1951, giữa bom đạn chiến khu Việt Bắc, Đoàn Chèo Cổ truyền Việt Nam (tiền thân của Nhà hát Chèo Việt Nam ngày nay) được thành lập theo chủ trương của Chủ tịch Hồ Chí Minh và Trung ương Đảng. Đây là dấu mốc mang tính bước ngoặt, đưa nghệ thuật Chèo từ sân diễn dân gian bước lên sân khấu nhà hát hiện đại có kịch bản thành văn, đạo diễn, và hệ thống âm thanh ánh sáng quy chuẩn.',
          'Các nghệ nhân tinh hoa thời bấy giờ như cụ Cả Tam, NSND Dịu Hương, cụ Trùm Thịnh đã cùng các nhà nghiên cứu bắt tay sưu tầm, ký âm hàng trăm làn điệu mẫu mực, đào tạo nên thế hệ diễn viên Chèo cách mạng đầu tiên.'
        ],
        bullets: [
          'Thành lập Đoàn Chèo Cổ truyền Việt Nam tại chiến khu Việt Bắc (1951)',
          'Chuẩn hóa kịch bản văn học và hệ thống điệu hát dân gian',
          'Xây dựng các nhà hát Chèo chuyên nghiệp tại Hà Nội và các tỉnh đồng bằng Bắc Bộ'
        ]
      },
      {
        heading: 'Kỷ nguyên kịch Chèo Tào Mạt & Bộ ba "Bài ca giữ nước"',
        paragraphs: [
          'Thập niên 1970 - 1980 ghi dấu đỉnh cao sáng tạo của cố tác giả NSND Tào Mạt với bộ ba vở Chèo sử thi bất hủ: "Thề qua sông", "Như những đỉnh núi" và "Tiếng sấm Tây Nguyên". Tác phẩm chứng minh sức mạnh của ngôn ngữ Chèo truyền thống khi chuyển tải những xung đột xã hội và triết lý chính trị tầm vóc dân tộc.',
          'Điểm đột phá lớn nhất của Tào Mạt là nâng tầm nhân vật Hề Chèo: từ vai hề mua vui dân gian trở thành biểu tượng của lương tâm, lẽ phải và tiếng nói phản biện của nhân dân trước triều đình.'
        ],
        bullets: [
          'Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật (1996) trao tặng cho bộ ba vở',
          'Nâng tầm hình tượng Hề Chèo thành lương tri thời đại',
          'Dung hòa hoàn hảo giữa thi pháp sân khấu cổ truyền và tư duy kịch bản hiện đại'
        ]
      },
      {
        heading: 'Thể nghiệm cách tân hòa âm & Giao lưu quốc tế',
        paragraphs: [
          'Từ thập niên 1990 đến nay, các nghệ sĩ Chèo không ngừng tìm tòi làm mới ngôn ngữ sân khấu: đưa dàn nhạc giao hưởng phương Tây phối hợp cùng dàn nhạc cụ dân tộc, khai thác các kịch bản chuyển thể kinh điển thế giới (như "Nàng Sita" của Lưu Quang Vũ) hay đề tài thời sự đương đại.',
          'Nhiều đoàn Chèo đã lưu diễn thành công tại Pháp, Đức, Nhật Bản, Hoa Kỳ, giới thiệu nét duyên dáng, độc đáo của sân khấu truyền thống Việt Nam đến bạn bè quốc tế.'
        ]
      },
      {
        heading: 'Hồ sơ quốc gia đệ trình UNESCO ghi danh Di sản Nhân loại',
        paragraphs: [
          'Hiện nay, Bộ Văn hóa, Thể thao và Du lịch đang chủ trì, phối hợp với 14 tỉnh thành đồng bằng sông Hồng hoàn thiện hồ sơ quốc gia đề cử "Nghệ thuật Chèo" vào danh sách Di sản Văn hóa Phi vật thể Đại diện của Nhân loại của UNESCO.',
          'Bảo tàng Chèo Số chính là một trong những sáng kiến công nghệ cộng đồng tiên phong nhằm bảo tồn toàn vẹn dữ liệu và truyền lửa tình yêu di sản cho thế hệ tương lai.'
        ]
      }
    ],
    funFacts: [
      'Bộ ba vở Chèo "Bài ca giữ nước" của NSND Tào Mạt mất hơn 10 năm thai nghén và hoàn thành (1973 - 1983).',
      'Vở "Nàng Sita" từng diễn kỷ lục hơn 1.000 đêm phục vụ hàng triệu khán giả khắp hai miền Nam - Bắc.',
      'Hồ sơ đệ trình UNESCO có sự tham gia đồng thuận của 14 tỉnh thành thuộc châu thổ sông Hồng.'
    ],
    widgetType: 'modern',
    tags: ['Chèo đương đại', 'NSND Tào Mạt', 'Bài ca giữ nước', 'Hồ sơ UNESCO'],
    structuredBadges: [
      { label: 'Mốc Son 1951', variant: 'red' },
      { label: 'Tác Phẩm Tào Mạt', variant: 'amber' },
      { label: 'Hồ Sơ UNESCO', variant: 'sky' }
    ],
    modernCheoData: MODERN_CHEO_DATA,
  },

  // ================= 4. NHÁNH TIỆN ÍCH =================
  'tien-ich': {
    id: 'tien-ich',
    title: 'Không Gian Tiện Ích & Dịch Vụ',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Sảnh', 'Tiện ích'],
    heroBadge: 'Dịch Vụ Khách Tham Quan',
    introduction: 'Tập hợp các công cụ hỗ trợ trải nghiệm bảo tàng, tra cứu kho tư liệu cổ, khảo sát đóng góp ý kiến và dịch vụ đặt vé xem Chèo trực tuyến.',
    sections: [
      {
        heading: 'Hỗ trợ trải nghiệm tối đa',
        paragraphs: [
          'Từ công cụ tìm kiếm thông minh, thư viện số hóa băng từ cổ đến cổng đặt vé xem diễn, tất cả nhằm mang lại sự thuận tiện nhất cho bạn.'
        ]
      }
    ],
    tags: ['Dịch vụ số', 'Tra cứu', 'Đặt vé trực tuyến'],
    structuredBadges: [
      { label: 'Tra Cứu Di Sản', variant: 'sky' },
      { label: 'Kho Tư Liệu Số', variant: 'amber' },
      { label: 'Lịch & Vé Trực Tuyến', variant: 'emerald' }
    ],
    quickSpecs: [
      { label: 'Công cụ', value: 'Lọc đa tiêu chí' },
      { label: 'Lưu trữ', value: 'Đĩa than & Bản Nôm' },
      { label: 'Tương tác', value: 'Bản đồ 3D' }
    ],
    hubShowcase: TIEN_ICH_HUB_DATA,
    keyMetrics: TIEN_ICH_HUB_DATA.keyMetrics,
  },

  'tim-kiem': {
    id: 'tim-kiem',
    title: 'Tìm Kiếm Thông Minh',
    parentTitle: 'Tiện ích',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Tìm kiếm'],
    heroBadge: 'Bộ Lọc Tra Cứu',
    introduction: 'Tra cứu nhanh chóng theo tên vở diễn, làn điệu, nhân vật, nghệ nhân hoặc các chủ đề nghiên cứu chuyên sâu về Chèo.',
    sections: [
      {
        heading: 'Hệ thống tìm kiếm toàn văn thông minh',
        paragraphs: [
          'Bạn có thể gõ từ khóa tự do như "Thị Mầu lên chùa", "làn điệu Sa Lệch", hoặc tên nghệ nhân NSND Thanh Ngoan để tìm kiếm toàn bộ âm thanh và video liên quan.',
          'Toàn bộ kho dữ liệu bảo tàng — từ 200+ làn điệu, 5 mẫu nhân vật, 6 nhạc cụ đến 4 vở Chèo kinh điển — đều được lập chỉ mục và tìm kiếm tức thì ngay trên trình duyệt, không cần kết nối máy chủ.'
        ]
      },
      {
        heading: 'Bộ lọc đa tiêu chí — Tìm đúng điều bạn muốn',
        paragraphs: [
          'Ngoài tìm kiếm từ khóa tự do, hệ thống cung cấp bộ lọc kết hợp để thu hẹp kết quả theo nhiều chiều:',
          '• Theo thể loại nội dung: Làn điệu, Nhân vật, Nhạc cụ, Vở diễn, Phục trang, Tư liệu âm thanh.',
          '• Theo thời kỳ lịch sử: Chèo cổ (trước 1951), Chèo cách mạng (1951-1975), Chèo đương đại (1975-nay).',
          '• Theo vùng địa lý: Thái Bình (làng Khuốc), Ninh Bình (Yên Khánh), Nam Định (Nam Trực), Hà Nội và các tỉnh thành khác.',
          '• Theo tính cách nhân vật: Đào thương, Đào lẳng, Kép văn, Kép võ, Hề gậy, Hề mồi, Lão, Mụ.'
        ],
        bullets: [
          'Lọc đồng thời nhiều tiêu chí: ví dụ "Làn điệu + Thị Mầu + Thái Bình"',
          'Sắp xếp kết quả theo độ phù hợp, theo thời đại, hoặc theo tên A-Z',
          'Lưu bộ lọc yêu thích để truy xuất nhanh lần sau'
        ]
      },
      {
        heading: 'Gợi ý thông minh — Khám phá điều bạn chưa biết',
        paragraphs: [
          'Khi bạn tìm kiếm một chủ đề, hệ thống không chỉ hiển thị kết quả trực tiếp mà còn gợi ý các nội dung liên quan mà bạn có thể quan tâm: nhân vật liên quan, làn điệu thường hát trong hoàn cảnh đó, hay nghệ nhân nổi tiếng với vai diễn này.',
          'Ví dụ: Tìm "Xúy Vân" sẽ dẫn đến làn điệu "Xúy Vân giả dại", vở "Kim Nhan", nhân vật Đào lẳng, và gợi ý xem clip NSND Thanh Ngoan biểu diễn trích đoạn kinh điển này.'
        ]
      },
      {
        heading: 'Kho dữ liệu được chuẩn hóa học thuật',
        paragraphs: [
          'Tất cả dữ liệu trong hệ thống được dán nhãn (tagged) theo tiêu chuẩn học thuật của Viện Văn hóa Nghệ thuật Quốc gia Việt Nam và các nhà nghiên cứu Chèo học hàng đầu như GS.NSND Trần Bảng.',
          'Mỗi mục từ điều tra đều có nguồn trích dẫn rõ ràng: thuộc bộ sưu tập nào, ghi âm năm nào, do nghệ nhân nào thực hiện. Đảm bảo độ chính xác và độ tin cậy tuyệt đối cho mục đích nghiên cứu học thuật.'
        ]
      }
    ],
    tags: ['Tìm kiếm', 'Bộ lọc thông minh', 'Tra cứu di sản'],
    structuredBadges: [
      { label: 'Bộ Lọc Đa Tiêu Chí', variant: 'sky' },
      { label: 'Tra Cứu Làn Điệu', variant: 'emerald' },
      { label: 'Tìm Kiếm Kịch Bản', variant: 'stone' }
    ],
    quickSpecs: [
      { label: 'Tiêu chí', value: 'Làn điệu, Nhân vật, Nghệ nhân' },
      { label: 'Tốc độ', value: 'Tức thì (Client-side search)' }
    ],
  },

  'danh-gia-cai-thien': {
    id: 'danh-gia-cai-thien',
    title: 'Đánh Giá & Cải Thiện Dịch Vụ',
    parentTitle: 'Tiện ích',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Đánh giá/ Cải thiện'],
    heroBadge: 'Khảo Sát Người Dùng',
    introduction: 'Chúng tôi rất trân trọng mọi phản hồi và đóng góp của bạn để hoàn thiện trải nghiệm số hóa di sản Chèo ngày càng tốt hơn.',
    sections: [
      {
        heading: 'Gửi ý kiến đóng góp cho ban biên tập',
        paragraphs: [
          'Hãy chia sẻ cảm nghĩ của bạn về giao diện, độ chính xác của tư liệu hay những tính năng bạn mong muốn được bổ sung trong tương lai.'
        ]
      }
    ],
    widgetType: 'feedback',
    tags: ['Khảo sát', 'Đánh giá sao', 'Góp ý giao diện'],
    structuredBadges: [
      { label: 'Hòm Thư Di Sản', variant: 'amber' },
      { label: 'Khảo Sát Trải Nghiệm', variant: 'emerald' },
      { label: 'Góp Ý Hoàn Thiện', variant: 'sky' }
    ],
    quickSpecs: [
      { label: 'Kênh', value: 'Biểu mẫu trực tuyến' },
      { label: 'Đánh giá', value: 'Sao & Nhận xét' },
      { label: 'Phản hồi', value: 'Trong vòng 24h' }
    ],
  },

  'ban-do-bao-tang': {
    id: 'ban-do-bao-tang',
    title: 'Bản Đồ Bảo Tàng',
    parentTitle: 'Tiện ích',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Bản đồ bảo tàng'],
    quote: {
      text: 'Không gian mở kết nối 10 thế kỷ di sản trong tầm tay người thưởng ngoạn.'
    },
    heroBadge: 'Sơ Đồ Tương Tác',
    metaBadges: ['Quy Hoạch 3 Tầng', '13 Gian Phòng Chuyên Đề', 'Định Vị Tức Thời'],
    quickSpecs: [
      { label: 'Tầng 1', value: 'Sảnh Đón Tiếp & Ký Sự Điền Dã' },
      { label: 'Tầng 2', value: 'Đại Sảnh Khám Phá Nghệ Thuật Chèo' },
      { label: 'Tầng 3', value: 'Kho Lưu Trữ & Quầy Vé Biểu Diễn' }
    ],
    introduction: 'Hệ thống định vị không gian đa tầng giúp khách tham quan dễ dàng lựa chọn lộ trình theo sở thích: từ cội nguồn lịch sử, không gian sân khấu cổ truyền đến thư viện lưu trữ chuyên sâu.',
    sections: [
      {
        heading: 'Quy hoạch kiến trúc không gian bảo tàng số',
        paragraphs: [
          'Bảo tàng được phân chia khoa học thành 3 tầng không gian tương tác:',
          'Tầng 1 (Tầng Khởi Nguồn): Giới thiệu câu chuyện điền dã sưu tầm tại các làng chèo cổ Bắc Bộ (Khuốc, Yên Khánh, Nam Trực) và vinh danh hội đồng nghệ nhân.',
          'Tầng 2 (Đại Sảnh Khám Phá): Trọng tâm trưng bày với các phòng Lịch sử 10 thế kỷ, Chiếu Chèo cổ & 5 mẫu nhân vật, Phục trang lụa là Kinh Bắc, Thính phòng Bát âm và Kiệt tác sân khấu cổ.',
          'Tầng 3 (Tầng Dịch Vụ & Lưu Trữ): Nơi lưu trữ các bản ghi âm đĩa than 78 vòng, bản chép tay kịch bản chữ Nôm và cổng kết nối đặt vé biểu diễn thực tế.'
        ]
      }
    ],
    funFacts: [
      'Toàn bộ sơ đồ được thiết kế dạng ma trận phòng thông minh, hỗ trợ chuyển phòng trực tiếp chỉ với 1 click.',
      'Khách tham quan có thể lựa chọn Tour 15 phút (rút gọn), Tour 45 phút (tiêu chuẩn) hoặc Tour Điền dã chuyên sâu.'
    ],
    widgetType: 'map',
    tags: ['Bản đồ tương tác', 'Sơ đồ bảo tàng', 'Lộ trình tham quan'],
    structuredBadges: [
      { label: 'Mặt Bằng 5 Khu', variant: 'sky' },
      { label: 'Lộ Trình Gợi Ý', variant: 'amber' },
      { label: 'Định Vị Tương Tác', variant: 'emerald' }
    ],
    museumZones: MUSEUM_ZONES_DATA,
    curatedTours: CURATED_TOURS_DATA,
  },

  'kho-tu-lieu': {
    id: 'kho-tu-lieu',
    title: 'Kho Tư Liệu Di Sản',
    parentTitle: 'Tiện ích',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Kho tư liệu'],
    quote: {
      text: 'Mỗi đĩa than, mỗi trang kịch bản chép tay là bằng chứng lịch sử ghi lại giọng hát của các nghệ nhân đời trước.',
      author: 'Ban Cố vấn Khoa học Bảo tàng'
    },
    heroBadge: 'Thư Viện Di Sản',
    metaBadges: ['Đĩa Than Shellac 78 RPM', 'Kịch Bản Chữ Nôm', 'Băng Điền Dã 1965', 'Mộc Bản Đông Hồ'],
    quickSpecs: [
      { label: 'Chuẩn số hóa âm thanh', value: 'Master 24-bit / 96kHz' },
      { label: 'Chuẩn scan tài liệu', value: 'Bản quét màu 600 DPI không nén' },
      { label: 'Bảo quản hiện vật gốc', value: 'Phòng lạnh tiêu chuẩn 18°C, độ ẩm 45%' }
    ],
    introduction: 'Kho lưu trữ di sản quý hiếm tập hợp các bản ghi âm đĩa than 78 vòng đầu thế kỷ 20, kịch bản Chèo cổ chép tay chữ Nôm và các cuộn băng từ điền dã ghi lại giọng hát của những nghệ nhân thế hệ vàng.',
    sections: [
      {
        heading: 'Bộ sưu tập đĩa than 78 vòng thời kỳ đầu',
        paragraphs: [
          'Kho tư liệu hiện lưu giữ các bản ghi âm đĩa Shellac 78 vòng quý giá được thu âm từ thập niên 1920 - 1950 bởi các hãng đĩa danh tiếng thời bấy giờ như Pathé, Asia và Hãng Dĩa Việt Nam.',
          'Các bản thu này lưu giữ trọn vẹn phong cách hát chân phương, không micro, nảy hạt tự nhiên của các danh ca huyền thoại như cụ Cả Tam, NSND Dịu Hương, cụ Trùm Thịnh.'
        ]
      },
      {
        heading: 'Kịch bản chép tay Hán Nôm & Bản thảo tác giả',
        paragraphs: [
          'Bên cạnh di sản âm thanh, bảo tàng số hóa các bản chép tay chữ Nôm của các kiệt tác "Quan Âm Thị Kính", "Kim Nhan", "Trương Viên" từ các làng chèo cổ vùng Nam Định, Ninh Bình và Thái Bình.',
          'Các bản thảo có bút tích chỉnh sửa lời thoại và nhịp trống của chính các tác giả, là nguồn tài liệu quý báu phục vụ nghiên cứu ngữ văn học và sân khấu học dân tộc.'
        ]
      }
    ],
    funFacts: [
      'Đĩa than 78 vòng cổ nhất trong bộ sưu tập là bản thu trích đoạn Xúy Vân giả dại do hãng Pathé Frères thu âm năm 1928.',
      'Toàn bộ dữ liệu số hóa được cung cấp hoàn toàn miễn phí phục vụ mục đích nghiên cứu học thuật và giáo dục di sản.'
    ],
    widgetType: 'archive',
    tags: ['Đĩa than 78 vòng', 'Kịch bản chữ Nôm', 'Tư liệu điền dã', 'Bảo tồn di sản'],
    structuredBadges: [
      { label: 'Đĩa Than 78 Vòng', variant: 'amber' },
      { label: 'Bản Chép Tay Nôm 1875', variant: 'red' },
      { label: 'Khảo Cứu Trần Bảng', variant: 'stone' }
    ],
    archiveVault: ARCHIVE_VAULT_DATA,
  },

  'tham-quan-va-su-kien': {
    id: 'tham-quan-va-su-kien',
    title: 'Tham Quan & Sự Kiện Nghệ Thuật',
    parentTitle: 'Tiện ích',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Tham quan và sự kiện'],
    heroBadge: 'Cổng Sự Kiện & Biểu Diễn',
    introduction: 'Cập nhật các chương trình biểu diễn thực tế, lịch diễn định kỳ cuối tuần, tọa đàm cùng nghệ nhân và dịch vụ đặt vé điện tử.',
    sections: [
      {
        heading: 'Kết nối trải nghiệm ảo với sân khấu thực',
        paragraphs: [
          'Sau khi tìm hiểu trực tuyến tại Bảo tàng Chèo Số, bạn có thể dễ dàng chọn vé xem trực tiếp tại Nhà hát Chèo Việt Nam hoặc các rạp Chèo trên toàn quốc.'
        ]
      }
    ],
    widgetType: 'ticket',
    tags: ['Sự kiện Chèo', 'Vé xem Chèo', 'Nhà hát Chèo'],
    structuredBadges: [
      { label: 'Nhà Hát & Sân Đình', variant: 'amber' },
      { label: 'Lịch Diễn Cập Nhật', variant: 'emerald' },
      { label: 'Vé Điện Tử', variant: 'sky' }
    ],
    quickSpecs: [
      { label: 'Mạng lưới', value: 'Toàn quốc' },
      { label: 'Hình thức', value: 'Rạp hát chuyên nghiệp & Chiếu chèo làng' },
      { label: 'Dịch vụ', value: 'Đặt chỗ tức thì' }
    ],
  },

  'thong-bao-su-kien': {
    id: 'thong-bao-su-kien',
    title: 'Thông Báo Sự Kiện & Hội Thảo',
    parentTitle: 'Tham quan và sự kiện',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Tham quan và sự kiện', 'Thông báo sự kiện'],
    heroBadge: 'Tin Tức Hoạt Động',
    introduction: 'Bảng tin các sự kiện văn hóa: tọa đàm di sản, workshop tập hát Chèo cho bạn trẻ và liên hoan Chèo toàn quốc.',
    sections: [
      {
        heading: 'Các sự kiện thường niên tiêu biểu',
        paragraphs: [
          'Bảo tàng Chèo Số phối hợp với Nhà hát Chèo Việt Nam và các cơ quan văn hóa tổ chức chuỗi sự kiện quanh năm nhằm đưa Chèo đến gần hơn với công chúng, đặc biệt là giới trẻ học đường.',
          '• Liên hoan Chèo Toàn quốc (tổ chức 2 năm/lần): Sân chơi cạnh tranh lành mạnh giữa các đoàn Chèo toàn quốc, tôn vinh những vở diễn, diễn viên xuất sắc nhất năm.',
          '• Festival Chèo Mùa Xuân (Tháng Giêng âm lịch): Chuỗi 10 đêm diễn Chèo sân đình tại các làng chèo cổ Bắc Bộ — Khuốc (Thái Bình), Yên Khánh (Ninh Bình), Nam Trực (Nam Định).',
          '• Tuần lễ Di sản Văn hóa Phi vật thể (Tháng 11): Tọa đàm khoa học, triển lãm ảnh, chiếu phim tư liệu và giao lưu cùng nghệ nhân.'
        ]
      },
      {
        heading: 'Workshop định kỳ — Trải nghiệm Chèo trực tiếp',
        paragraphs: [
          'Chuỗi workshop thực hành hàng tháng dành cho mọi lứa tuổi, không yêu cầu kinh nghiệm sân khấu. Người tham gia sẽ được hướng dẫn bởi các nghệ nhân lão thành và diễn viên chuyên nghiệp.',
          '• Workshop "Thử tài Hề Chèo" (Chủ nhật hàng tuần, tại Rạp Kim Mã): Học 3 chiêu Hề cơ bản, tự hóa trang mặt và biểu diễn một trích đoạn ngắn trước khán giả.',
          '• Workshop "Múa Quạt Đào Chèo" (Thứ Bảy, 2 lần/tháng): Nắm vững 5 động tác quạt cơ bản và ghép thành điệu múa ngắn theo nhạc Chèo.',
          '• Workshop "Nhập môn Hát Chèo" (dành cho học sinh THCS, THPT): Học cách ngâm câu xưng danh, hiểu về thang âm ngũ cung và thử hát một câu Đào liễu.'
        ],
        bullets: [
          'Đối tượng: Mở cho tất cả — từ 8 tuổi trở lên, không giới hạn kinh nghiệm',
          'Số người: Tối đa 20 người/buổi để đảm bảo chất lượng hướng dẫn 1-1',
          'Chi phí: 150.000đ/người — Miễn phí cho học sinh có thẻ học sinh hợp lệ'
        ]
      },
      {
        heading: 'Tọa đàm khoa học & Chuyên đề nghiên cứu',
        paragraphs: [
          'Chuỗi tọa đàm học thuật định kỳ kết nối giới nghiên cứu, nghệ nhân và công chúng trong các chủ đề chuyên sâu về Chèo và di sản nghệ thuật truyền thống.',
          '• "Giải mã nụ cười Thị Mầu dưới góc nhìn tâm lý học hiện đại" — Diễn giả: TS. Nguyễn Thu Hà (Đại học Sư phạm Hà Nội). Phân tích tâm lý nhân vật Thị Mầu — biểu tượng tự do cá nhân trong xã hội phong kiến.',
          '• "Âm nhạc Chèo và mối liên hệ với dân ca Bắc Bộ" — Diễn giả: GS.TS Tô Vũ (Viện Âm nhạc Việt Nam). Truy tìm nguồn gốc các làn điệu từ đồng dao, ca dao và hát quan họ.',
          '• "Chèo trong thời đại số: Cơ hội và thách thức bảo tồn" — Bàn tròn với các chuyên gia công nghệ và nhà nghiên cứu văn hóa.'
        ]
      },
      {
        heading: 'Đăng ký nhận thông báo sự kiện',
        paragraphs: [
          'Để không bỏ lỡ bất kỳ sự kiện Chèo nào, bạn có thể đăng ký nhận bản tin điện tử hàng tháng qua email hoặc theo dõi fanpage chính thức của Bảo tàng Chèo Số.',
          'Thành viên đăng ký nhận tin thường xuyên sẽ được ưu tiên đặt chỗ workshop và nhận vé ưu đãi cho các buổi diễn đặc biệt trong năm.'
        ]
      }
    ],
    tags: ['Workshop', 'Tọa đàm', 'Festival Chèo'],
    structuredBadges: [
      { label: 'Festival Chèo', variant: 'red' },
      { label: 'Workshop Nghệ Nhân', variant: 'amber' },
      { label: 'Tọa Đàm Khoa Học', variant: 'sky' }
    ],
    quickSpecs: [
      { label: 'Tần suất', value: 'Hàng tháng' },
      { label: 'Địa điểm', value: 'Hà Nội & Ninh Bình' },
      { label: 'Đối tượng', value: 'Công chúng & Giới nghiên cứu' }
    ],
  },

  'lich-bieu-dien': {
    id: 'lich-bieu-dien',
    title: 'Lịch Biểu Diễn Chèo Toàn Quốc',
    parentTitle: 'Tham quan và sự kiện',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Tham quan và sự kiện', 'Lịch biểu diễn'],
    heroBadge: 'Suất Diễn Trong Tuần',
    introduction: 'Lịch biểu diễn cập nhật theo ngày của Nhà hát Chèo Việt Nam, Nhà hát Chèo Hà Nội, Nhà hát Chèo Ninh Bình và các đoàn Chèo Bắc Bộ.',
    sections: [
      {
        heading: 'Lịch diễn định kỳ tại các nhà hát Hà Nội',
        paragraphs: [
          'Mỗi cuối tuần, các trích đoạn kinh điển như Xúy Vân giả dại, Thị Mầu lên chùa hay vở trọn vẹn Quan Âm Thị Kính đều được trình diễn phục vụ công chúng.',
          '• Nhà hát Chèo Việt Nam (71 Kim Mã): Tối thứ Sáu 20h — Vở diễn trọn vẹn; Tối Chủ nhật 18h — Các trích đoạn kinh điển dành cho gia đình.',
          '• Nhà hát Chèo Hà Nội (Rạp Đại Nam, 89 Phố Huế): Tối thứ Bảy 19h30 — Chương trình tổng hợp các trích đoạn từ 4 vở Tứ đại kiệt tác.',
          '• Sân Khấu Ngoài Trời (Công viên Thống Nhất): Chiều Chủ nhật 16h — Chiếu Chèo sân đình không gian mở, miễn phí cho học sinh, sinh viên.'
        ],
        bullets: [
          'Vé thường: 150.000 - 400.000đ tuỳ hạng ghế và chương trình',
          'Vé học sinh, sinh viên: Giảm 50% khi xuất trình thẻ học sinh/sinh viên hợp lệ',
          'Vé nhóm (từ 10 người): Liên hệ phòng vé để được báo giá đặc biệt'
        ]
      },
      {
        heading: 'Các chương trình biểu diễn tại các tỉnh',
        paragraphs: [
          '• Nhà hát Chèo Ninh Bình: 3 buổi/tuần — Chuyên diễn các vở đặc sắc của Chèo vùng Ninh Bình với làn điệu đặc trưng luyến láy độc đáo.',
          '• Nhà hát Chèo Thái Bình: 2 buổi/tuần — Bảo tồn nguyên bản phong cách Chèo làng Khuốc, một trong những trung tâm Chèo cổ nhất Bắc Bộ với 280 làn điệu.',
          '• Nhà hát Chèo Nam Định: Biểu diễn vào các dịp lễ hội và cuối tháng — Đặc biệt nổi tiếng với phong cách hát Chèo vùng đồng bằng sông Hồng.',
          '• Nhà hát Chèo Hải Phòng: Tháng 10 hàng năm — Liên hoan Chèo Hải Phòng thu hút các đoàn Chèo toàn quốc về biểu diễn giao lưu.'
        ]
      },
      {
        heading: 'Chiếu chèo làng — Trải nghiệm Chèo nguyên bản sân đình',
        paragraphs: [
          'Khác với Chèo nhà hát hiện đại, "chiếu chèo làng" tại các làng chèo cổ Bắc Bộ cho phép bạn chứng kiến Chèo trong không gian nguyên bản: sân đình, dưới tán cây cổ thụ, với khán giả ngồi quanh chiếu diễn theo lối dân gian truyền thống.',
          'Làng Khuốc (xã Phong Châu, Đông Hưng, Thái Bình) là điểm đến không thể bỏ qua: 280 làn điệu Chèo vẫn được các nghệ nhân lão thành gìn giữ và truyền dạy hàng ngày. Mỗi dịp Tết Nguyên đán và các lễ hội làng đều có chiếu Chèo kéo dài nhiều đêm liên tiếp.'
        ]
      }
    ],
    widgetType: 'ticket',
    tags: ['Lịch diễn cuối tuần', 'Rạp Kim Mã', 'Rạp Đại Nam'],
    structuredBadges: [
      { label: 'Lịch Diễn Cuối Tuần', variant: 'emerald' },
      { label: 'Rạp Kim Mã & Đại Nam', variant: 'amber' },
      { label: 'Chiếu Chèo Làng', variant: 'stone' }
    ],
    quickSpecs: [
      { label: 'Định kỳ', value: 'Tối thứ 6, 7, CN' },
      { label: 'Đơn vị', value: 'Nhà hát Chèo Việt Nam, Chèo Hà Nội' },
      { label: 'Cập nhật', value: 'Theo tuần' }
    ],
  },

  'dat-mua-ve': {
    id: 'dat-mua-ve',
    title: 'Cổng Đặt Mua Vé Trực Tuyến',
    parentTitle: 'Tham quan và sự kiện',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Tham quan và sự kiện', 'Đặt mua vé'],
    heroBadge: 'Vé Điện Tử QR',
    introduction: 'Hệ thống chọn vị trí ghế ngồi trực quan tại rạp hát, thanh toán bảo mật bằng mã QR và nhận vé điện tử tức thì.',
    sections: [
      {
        heading: 'Ưu đãi đặc biệt cho học sinh & sinh viên',
        paragraphs: [
          'Giảm 50% giá vé cho học sinh, sinh viên và các đoàn trường học nhằm khuyến khích tình yêu di sản nghệ thuật truyền thống.'
        ]
      }
    ],
    widgetType: 'ticket',
    tags: ['Đặt vé trực tuyến', 'Sơ đồ ghế ngồi', 'Mã QR vé'],
    structuredBadges: [
      { label: 'Sơ Đồ Chọn Ghế', variant: 'sky' },
      { label: 'Thanh Toán QR Code', variant: 'emerald' },
      { label: 'Vé Điện Tử Tức Thì', variant: 'amber' }
    ],
    quickSpecs: [
      { label: 'Cổng vé', value: 'Trực tuyến 24/7' },
      { label: 'Thanh toán', value: 'Chuyển khoản, Thẻ, QR Code' },
      { label: 'Xác nhận', value: 'Email & SMS' }
    ],
  },

  'dia-diem-bieu-dien': {
    id: 'dia-diem-bieu-dien',
    title: 'Danh Bạ Địa Điểm Biểu Diễn Chèo',
    parentTitle: 'Tham quan và sự kiện',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Tham quan và sự kiện', 'Địa điểm biểu diễn'],
    heroBadge: 'Mạng Lưới Rạp Hát',
    introduction: 'Tổng hợp danh sách các nhà hát Chèo tiêu biểu, địa chỉ, số điện thoại liên hệ và chỉ dẫn đường đi thuận tiện.',
    sections: [
      {
        heading: 'Các nhà hát Chèo tiêu biểu tại miền Bắc',
        paragraphs: [
          '1. Nhà hát Chèo Việt Nam: Số 71 Kim Mã, Ba Đình, Hà Nội.',
          '2. Nhà hát Chèo Hà Nội: Rạp Đại Nam, số 89 Phố Huế, Hai Bà Trưng, Hà Nội.',
          '3. Nhà hát Chèo Ninh Bình: Đường Đinh Tất Miễn, TP Ninh Bình.',
          '4. Nhà hát Chèo Thái Bình: Đường Lê Lợi, TP Thái Bình.'
        ]
      }
    ],
    tags: ['Nhà hát Kim Mã', 'Rạp Đại Nam', 'Chèo Ninh Bình'],
    structuredBadges: [
      { label: 'Mạng Lưới Rạp Hát', variant: 'amber' },
      { label: 'Bắc Ninh - Ninh Bình', variant: 'emerald' },
      { label: 'Thái Bình - Nam Định', variant: 'stone' }
    ],
    quickSpecs: [
      { label: 'Điểm diễn', value: 'Rạp Kim Mã, Rạp Đại Nam, Rạp Ninh Bình' },
      { label: 'Loại hình', value: 'Nhà hát chuyên nghiệp' }
    ],
  },

  'thong-tin-tham-quan': {
    id: 'thong-tin-tham-quan',
    title: 'Thông Tin Tham Quan & Hướng Dẫn',
    parentTitle: 'Tham quan và sự kiện',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Tham quan và sự kiện', 'Thông tin tham quan'],
    heroBadge: 'Cẩm Nang Khách Tham Quan',
    introduction: 'Hướng dẫn chi tiết quy định tham quan, thời gian mở cửa, dịch vụ thuyết minh tự động Audio Guide đa ngôn ngữ.',
    sections: [
      {
        heading: 'Dịch vụ Audio Guide thông minh',
        paragraphs: [
          'Quét mã QR tại mỗi góc trưng bày để nghe giọng thuyết minh ấm áp bằng tiếng Việt, tiếng Anh và tiếng Pháp từ các chuyên gia di sản.'
        ]
      }
    ],
    tags: ['Audio Guide', 'Giờ mở cửa', 'Cẩm nang'],
    structuredBadges: [
      { label: 'Dịch Vụ Audio Guide', variant: 'sky' },
      { label: 'Ưu Đãi Học Đường', variant: 'emerald' },
      { label: 'Nội Quy Bảo Tàng', variant: 'stone' }
    ],
    quickSpecs: [
      { label: 'Thuyết minh', value: 'Đa ngôn ngữ' },
      { label: 'Ưu đãi', value: 'Giảm 50% cho học sinh - sinh viên' },
      { label: 'Giờ mở cửa', value: '08:00 - 17:00' }
    ],
  },

  'thong-tin-va-ho-tro': {
    id: 'thong-tin-va-ho-tro',
    title: 'Thông Tin & Kênh Hỗ Trợ',
    parentTitle: 'Tiện ích',
    breadcrumb: ['Bảo Tàng Chèo Số', 'Tiện ích', 'Thông tin và hỗ trợ'],
    heroBadge: 'Hỗ Trợ Khách 24/7',
    introduction: 'Tổng đài tư vấn, giải đáp câu hỏi thường gặp (FAQ) và hỗ trợ kỹ thuật trải nghiệm thực tế ảo kính VR.',
    sections: [
      {
        heading: 'Kênh liên hệ hỗ trợ',
        paragraphs: [
          '• Hotline tư vấn di sản: 1900 6868 (8:00 - 21:00)',
          '• Email hỗ trợ: hotro@baotangcheoso.vn',
          '• Hướng dẫn kết nối kính VR: Xem mục Trợ giúp kỹ thuật tại phòng trải nghiệm số.'
        ]
      }
    ],
    tags: ['Hotline', 'FAQ', 'Trợ giúp 24/7'],
    structuredBadges: [
      { label: 'Hotline 24/7', variant: 'sky' },
      { label: 'Hỏi Đáp FAQ', variant: 'amber' },
      { label: 'Hỗ Trợ Kỹ Thuật VR', variant: 'emerald' }
    ],
    quickSpecs: [
      { label: 'Tổng đài', value: '1900 xxxx' },
      { label: 'Email', value: 'hotro@baotangcheoso.vn' },
      { label: 'Kỹ thuật', value: 'Trợ giúp tương tác 3D' }
    ],
  }
}

// Re-export cultural data and models for ergonomic downstream access
export * from './cheoCulturalData'
export type * from '../types/cheoCulturalTypes'
