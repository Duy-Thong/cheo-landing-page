/**
 * Complete Structured Cultural Datasets for Chèo Heritage Platform
 * Author: Explorer Survey 3 (Cultural Content & Data Models)
 * Location: .agents/explorer_survey_3/proposed_cheoDataFiles.ts
 */

import type {
  HubShowcaseData,
  ModernCheoComprehensiveData,
  CheoAudioCompleteData,
  BackstageArtistryData,
  CulturalPhilosophyData,
  ArchiveDocumentItem,
  MuseumZoneMapData,
  CuratedTourData
} from './proposed_cheoCulturalTypes'

// =========================================================================
// R1: KHÁM PHÁ HUB DATA (/kham-pha) & OTHER HUBS
// =========================================================================

export const KHAM_PHA_HUB_DATA: HubShowcaseData = {
  hubId: 'kham-pha',
  bannerTitle: 'Không Gian Trưng Bày Di Sản Sân Khấu Chèo',
  bannerTagline: 'Mười Thế Kỷ Diễn Xướng Dân Gian Vùng Châu Thổ Sông Hồng',
  heroDescription: 'Bước vào trái tim của Bảo tàng Chèo Số: khám phá dòng thời gian khởi thủy từ kinh đô Hoa Lư thế kỷ X, chiêm ngưỡng lề lối sân khấu ước lệ và chứng kiến sự chuyển mình rực rỡ của Chèo trong nhịp thở đương đại.',
  featuredQuote: {
    verse: 'Chẳng thèm ăn chả ăn nem / Thèm no cơm tẻ, thèm xem hát Chèo.',
    author: 'Ca dao cổ truyền Bắc Bộ',
    context: 'Lời ca tụng sức cuốn hút nguyên sơ của chiếu chèo sân đình trong lòng người dân quê'
  },
  keyMetrics: [
    { value: '10+', unit: 'Thế kỷ', label: 'Lịch sử phát triển', description: 'Từ thời Đinh Tiên Hoàng (968) đến nay' },
    { value: '200+', unit: 'Làn điệu', label: 'Kho tàng âm nhạc', description: 'Hệ thống điệu hát phong phú bậc nhất kịch hát dân tộc' },
    { value: '5', unit: 'Mẫu nhân vật', label: 'Hệ thống ước lệ', description: 'Đào, Kép, Hề, Lão, Mụ chuẩn mực mẫu hình' },
    { value: '14', unit: 'Tỉnh thành', label: 'Hồ sơ UNESCO', description: 'Chung tay xây dựng không gian văn hóa Chèo đại diện nhân loại' }
  ],
  pillars: [
    {
      id: 'tong-quan-lich-su',
      title: 'Tổng Quan & Cội Nguồn Lịch Sử',
      epoch: 'Từ Thế Kỷ X Đến Thế Kỷ XIX',
      summary: 'Khởi nguồn từ tiếng trống quân doanh của bà tổ nghề Phạm Thị Trân, phát triển rực rỡ qua chiếu chèo sân đình hội làng và đúc kết những giá trị nhân sinh trường tồn.',
      keyAspects: [
        'Bà tổ Ưu Bà Phạm Thị Trân - Tiên phong nữ quan nghệ thuật thời Đinh',
        'Văn minh lúa nước sông Hồng - Đất mẹ nuôi dưỡng chiếu chèo hội xuân',
        'Đạo lý nhân nghĩa, trừng ác dương thiện và tiếng cười trào phúng sắc sảo'
      ],
      visualAsset: {
        imageUrl: '/images/cheo_dinh_lang.jpg',
        caption: 'Chiếu chèo trải giữa sân đình trong dịp hội làng xuân',
        altText: 'Chiếu chèo sân đình cổ truyền'
      },
      metrics: [
        { value: '968', label: 'Năm khởi nguyên' },
        { value: '3', label: 'Cái nôi Chèo cổ: Khuốc, Yên Khánh, Đặng' }
      ],
      targetRoute: '/kham-pha/tong-quan',
      metaBadges: [
        { label: 'Cội Nguồn Di Sản', variant: 'amber' },
        { label: 'Sân Đình Cổ', variant: 'stone' }
      ]
    },
    {
      id: 'khong-gian-bieu-dien',
      title: 'Không Gian Biểu Diễn & 4 Trụ Cột',
      epoch: 'Nghệ Thuật Ước Lệ Toàn Bích',
      summary: 'Thế giới diễn xướng sống động được dệt nên từ 5 mẫu nhân vật kinh điển, phục trang mớ ba mớ bảy huyền ảo, dàn nhạc gõ dây giòn giã và tứ đại kiệt tác tích chèo.',
      keyAspects: [
        '5 Mẫu nhân vật chuẩn mực: Đào, Kép, Hề, Lão, Mụ',
        'Phục trang ngũ sắc: Áo tứ thân mớ ba mớ bảy, nón quai thao, yếm đào',
        'Dàn nhạc 6 cổ nhạc cụ: Tiếng trống đế nhạc trưởng, nhị nỉ non, đàn nguyệt',
        'Tứ đại kiệt tác: Quan Âm Thị Kính, Kim Nhan, Lưu Bình Dương Lễ, Nghêu Sò'
      ],
      visualAsset: {
        imageUrl: '/images/cheo_costume.jpg',
        caption: 'Trang phục thiếu nữ Chèo Bắc Bộ với áo tứ thân và dải lụa',
        altText: 'Phục trang Chèo cổ'
      },
      metrics: [
        { value: '4', label: 'Trụ cột sàn diễn' },
        { value: '200+', label: 'Làn điệu nguyên bản' }
      ],
      targetRoute: '/kham-pha/san-khau',
      metaBadges: [
        { label: 'Sân Khấu Ước Lệ', variant: 'rose' },
        { label: 'Kiệt Tác Cổ Điển', variant: 'red' }
      ]
    },
    {
      id: 'cheo-duong-dai',
      title: 'Chèo Đương Đại & Sức Sống Mới',
      epoch: 'Thế Kỷ XX Đến Thế Kỷ XXI',
      summary: 'Dấu mốc chuyển mình lịch sử năm 1951, kỷ nguyên kịch Chèo sử thi NSND Tào Mạt, thử nghiệm hòa âm dân tộc - giao hưởng và sứ mệnh ghi danh UNESCO.',
      keyAspects: [
        '1951: Thành lập Đoàn Chèo Cổ truyền Việt Nam tại chiến khu Việt Bắc',
        'NSND Dịu Hương, cụ Cả Tam và bộ ba sử thi "Bài ca giữ nước" của Tào Mạt',
        'Giao thoa dàn nhạc phương Tây, phản ánh số phận con người thời kỳ đổi mới',
        'Hồ sơ quốc gia đệ trình UNESCO vinh danh di sản văn hóa phi vật thể thế giới'
      ],
      visualAsset: {
        imageUrl: '/images/cheo_instruments.jpg',
        caption: 'Dàn nhạc cụ Chèo hiện đại kết hợp quy chuẩn âm học phòng thu',
        altText: 'Nhạc cụ và hòa âm Chèo đương đại'
      },
      metrics: [
        { value: '1951', label: 'Năm thành lập Nhà hát Chèo' },
        { value: '14', label: 'Tỉnh thành chung hồ sơ' }
      ],
      targetRoute: '/kham-pha/cheo-hien-dai',
      metaBadges: [
        { label: 'Chuyển Mình Hiện Đại', variant: 'emerald' },
        { label: 'Hồ Sơ UNESCO', variant: 'sky' }
      ]
    }
  ],
  exhibitionSubRooms: [
    {
      routePath: '/kham-pha/tong-quan',
      id: 'tong-quan',
      title: 'Tổng Quan Nghệ Thuật Chèo',
      badge: 'Cội Nguồn Sông Hồng',
      highlightTag: 'Lịch sử & Chiều sâu nhân bản',
      summary: 'Tìm hiểu ngọn nguồn văn hóa lúa nước sông Hồng, 10 thế kỷ thăng trầm và thế giới hậu trường của người nghệ sĩ.',
      bulletHighlights: ['Niên biểu 10 thế kỷ', 'Đạo lý nhân sinh dân gian', 'Hậu trường & hóa trang'],
      actionLabel: 'Bước vào phòng Tổng Quan'
    },
    {
      routePath: '/kham-pha/san-khau',
      id: 'san-khau',
      title: 'Không Gian Sân Khấu Biểu Diễn',
      badge: 'Trọng Tâm Triển Lãm',
      highlightTag: '4 Trụ cột sàn diễn Chèo',
      summary: 'Trực quan hóa trọn vẹn 4 yếu tố cấu thành tác phẩm: Mô hình nhân vật 3D, Kho phục trang ngũ sắc, Dàn nhạc cổ và Tứ đại kiệt tác.',
      bulletHighlights: ['5 Mẫu hình nhân vật', 'Trang phục mớ ba mớ bảy', 'Dàn nhạc 6 nhạc cụ', 'Vở diễn kinh điển'],
      actionLabel: 'Bước vào sàn diễn ảo'
    },
    {
      routePath: '/kham-pha/cheo-hien-dai',
      id: 'cheo-hien-dai',
      title: 'Chèo Hiện Đại & Tiếp Biến Đương Thời',
      badge: 'Chuyển Mình Thời Đại',
      highlightTag: 'Từ năm 1951 đến kỷ nguyên số',
      summary: 'Khám phá bước ngoặt chuyển từ chiếu chèo sang nhà hát hộp 1951, các danh nhân tiên phong và nỗ lực ghi danh di sản UNESCO.',
      bulletHighlights: ['Mốc son lịch sử 1951', 'NSND Tào Mạt & Dịu Hương', 'Giao thoa hòa âm mới', 'Hồ sơ đệ trình UNESCO'],
      actionLabel: 'Khám phá Chèo đương đại'
    }
  ]
}

// =========================================================================
// R2: CHÈO HIỆN ĐẠI DETAILED DATA (/kham-pha/cheo-hien-dai)
// =========================================================================

export const MODERN_CHEO_DATA: ModernCheoComprehensiveData = {
  overviewHero: {
    title: 'Chèo Hiện Đại: Hành Trình Chuyển Mình & Tỏa Sáng Đương Đại',
    headline: 'Từ Chiếu Chèo Sân Đình Sang Nhà Hát Hộp & Sứ Mệnh Di Sản Nhân Loại',
    missionDeclaration: 'Nghệ thuật Chèo hiện đại chứng minh sức sống trường tồn của bản sắc văn hóa Việt: vừa gìn giữ nghiêm cẩn tinh hoa mẫu mực của tiền nhân, vừa dám cách tân hòa âm, kịch bản để hòa nhịp vào thời đại mới.',
    metrics: [
      { value: '1951', unit: 'Năm', label: 'Cột mốc thành lập', description: 'Đoàn Chèo Cổ truyền VN tại Việt Bắc' },
      { value: '3', unit: 'Tập sử thi', label: 'Bài ca giữ nước', description: 'Kiệt tác đỉnh cao của NSND Tào Mạt' },
      { value: '14', unit: 'Tỉnh thành', label: 'Mạng lưới bảo tồn', description: 'Chung tay đệ trình hồ sơ quốc gia UNESCO' },
      { value: '100+', unit: 'Vở diễn mới', label: 'Đề tài đương đại', description: 'Khắc họa chiến tranh, hậu chiến & đổi mới' }
    ]
  },
  milestones: [
    {
      era: 'Kháng chiến chống Pháp',
      yearRange: '1951 - 1954',
      title: 'Bước Ngoặt Sân Khấu Hóa Chuyên Nghiệp Tại Chiến Khu Việt Bắc',
      historicContext: 'Giữa khói lửa kháng chiến, Chủ tịch Hồ Chí Minh và Trung ương Đảng chủ trương chấn hưng văn hóa dân tộc, quy tụ các nghệ nhân tinh hoa làng chèo thành lập Đoàn Chèo Cổ truyền Việt Nam (1951).',
      transitionNature: 'stage-reform',
      coreTransformation: 'Chuyển hóa không gian từ chiếu chèo hội làng dân gian (diễn 4 mặt) sang quy chuẩn rạp hát sân khấu hộp (proscenium) có cánh gà, phông màn, hệ thống đèn chiếu và bục diễn hiện đại.',
      keyAchievements: [
        'Quy tụ các đại thụ nghệ nhân: Cụ Trịnh Thị Lan (Cả Tam), NSND Dịu Hương, cụ Trùm Thịnh, cụ An Văn Mược',
        'Ký âm và phục dựng các trích đoạn mẫu mực có nguy cơ mai một: Xúy Vân giả dại, Thị Mầu lên chùa',
        'Khai sinh hệ thống đào tạo diễn viên Chèo bài bản theo trường lớp nhà nước'
      ],
      quotesOrDirectives: {
        verse: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy.',
        author: 'Chủ tịch Hồ Chí Minh',
        context: 'Thư gửi các họa sĩ và nghệ sĩ nhân dịp Triển lãm Hội họa 1951'
      },
      metaBadges: [
        { label: 'Mốc Son 1951', variant: 'amber' },
        { label: 'Việt Bắc', variant: 'red' },
        { label: 'Sân Khấu Hóa', variant: 'emerald' }
      ]
    },
    {
      era: 'Kháng chiến chống Mỹ & Thống nhất đất nước',
      yearRange: '1960 - 1985',
      title: 'Kỷ Nguyên Kịch Chèo Sử Thi NSND Tào Mạt & Bộ Ba "Bài Ca Giữ Nước"',
      historicContext: 'Giai đoạn kịch bản Chèo đạt đến tầm cao tư tưởng triết học và giá trị văn học vĩ mô, khẳng định Chèo đủ sức gánh vác các bi kịch sử thi tầm cỡ dân tộc.',
      transitionNature: 'literary-epic',
      coreTransformation: 'Đưa cấu trúc kịch bản sử thi hiện đại vào kết cấu làn điệu Chèo nguyên bản; tái cấu trúc hình tượng nhân vật Hề Chèo từ người mua vui bình dân thành "lương tri của thời đại", người dám nói thẳng sự thật trước ngai vàng phong kiến.',
      keyAchievements: [
        'NSND Tào Mạt sáng tác bộ ba kiệt tác: "Thề qua sông" (1979), "Như những đỉnh núi" (1981), "Tiếng sấm Tây Nguyên" (1983)',
        'Xây dựng các nhân vật bất hủ: Hề Hoàn Bợm, Kép Trần Quốc Chẩn, Đào Phù Dung',
        'Đoạt Giải thưởng Hồ Chí Minh đợt 1 về Văn học Nghệ thuật (1996)'
      ],
      quotesOrDirectives: {
        verse: 'Khoan thư sức dân để làm kế sâu rễ bền gốc, đó là thượng sách giữ nước.',
        author: 'Hưng Đạo Đại Vương Trần Quốc Tuấn',
        context: 'Tư tưởng cốt lõi được NSND Tào Mạt chuyển hóa xuyên suốt bộ ba kịch Chèo Bài ca giữ nước'
      },
      metaBadges: [
        { label: 'Sử Thi Giữ Nước', variant: 'rose' },
        { label: 'NSND Tào Mạt', variant: 'purple' },
        { label: 'Giải Thưởng Hồ Chí Minh', variant: 'amber' }
      ]
    },
    {
      era: 'Thời kỳ Đổi Mới & Hội nhập',
      yearRange: '1986 - 2015',
      title: 'Thể Nghiệm Giao Thoa Dàn Nhạc Dân Tộc - Phương Tây & Cơn Sốt "Nàng Sita"',
      historicContext: 'Kinh tế thị trường và sự mở cửa quốc tế đòi hỏi sân khấu Chèo thích ứng, mở rộng biên độ thẩm mỹ để thu hút khán giả thành thị và bạn bè năm châu.',
      transitionNature: 'orchestral-fusion',
      coreTransformation: 'Bổ sung các nhạc cụ phương Tây (cello, contrabass, bộ gõ giao hưởng) vào dàn nhạc dân tộc để làm dày bè trầm; dàn dựng các kịch bản chuyển thể văn học thế giới và đề tài xã hội đương đại gai góc.',
      keyAchievements: [
        'Hiện tượng sân khấu "Nàng Sita" (Lưu Quang Vũ kịch bản, NSND Doãn Hoàng Giang đạo diễn) lập kỷ lục hàng nghìn đêm diễn',
        'Vở "Hồ Xuân Hương", "Đồng tiền Vạn Lịch" khẳng định bản lĩnh châm biếm thói tha hóa đồng tiền',
        'Lưu diễn và đoạt giải thưởng tại các festival sân khấu quốc tế tại Pháp, Đức, Nhật Bản, Thụy Sĩ'
      ],
      metaBadges: [
        { label: 'Nàng Sita Kỷ Lục', variant: 'emerald' },
        { label: 'Hòa Âm Bán Giao Hưởng', variant: 'sky' }
      ]
    },
    {
      era: 'Kỷ nguyên số & Hội nhập toàn cầu',
      yearRange: '2016 - Hiện nay',
      title: 'Hồ Sơ Đệ Trình UNESCO Di Sản Nhân Loại & Số Hóa Bảo Tồn Đa Phương Tiện',
      historicContext: 'Chèo được định vị là di sản văn hóa phi vật thể tầm cỡ quốc tế, cần sự chung tay liên tỉnh và ứng dụng công nghệ số để truyền thừa thế hệ trẻ.',
      transitionNature: 'unesco-digital',
      coreTransformation: 'Chuyển từ bảo tồn tĩnh sang bảo tồn động trong cộng đồng; số hóa toàn diện dữ liệu âm thanh, kịch bản, trang phục 3D và đưa nghệ thuật Chèo vào giảng đường phổ thông.',
      keyAchievements: [
        'Bộ Văn hóa, Thể thao và Du lịch phối hợp 14 tỉnh thành đồng bằng sông Hồng hoàn thiện hồ sơ quốc gia trình UNESCO',
        'Triển khai dự án "Đưa Chèo vào học đường", đào tạo hạt nhân trẻ tại các làng chèo truyền thống',
        'Thành lập Bảo tàng Chèo Số Việt Nam ứng dụng Web3D, âm thanh binaural và kho tư liệu mở'
      ],
      metaBadges: [
        { label: 'Hồ Sơ UNESCO', variant: 'amber' },
        { label: 'Số Hóa Web3D', variant: 'rose' },
        { label: '14 Tỉnh Sông Hồng', variant: 'emerald' }
      ]
    }
  ],
  pioneers: [
    {
      id: 'tao-mat',
      name: 'NSND Tào Mạt (Nguyễn Duy Thục)',
      birthDeath: '1930 - 1993',
      title: 'Cây Đại Thụ Kịch Bản & Đạo Diễn Chèo Hiện Đại',
      stageRoleSpecialty: 'Tác giả & Đạo diễn kịch Chèo sử thi',
      iconicCharacters: ['Hề Hoàn Bợm (Bài ca giữ nước)', 'Thề qua sông', 'Tiếng sấm Tây Nguyên'],
      historicContribution: 'Người nâng tầm kịch bản Chèo từ các tích trò dân gian đơn sơ thành những pho sử thi đồ sộ, giàu tính triết lý nhân sinh và phản biện thời đại. Nâng nhân vật Hề Chèo thành tiếng nói lương tâm xã hội.',
      signatureStyle: 'Lời văn bi tráng, kết hợp nhuần nhuyễn thơ bác học và ca dao tục ngữ dân gian; am hiểu uyên bác từng nhịp trống và làn điệu mẫu mực.',
      awardedTitle: 'Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật đợt 1 (1996)',
      avatarPlaceholderText: 'Tào Mạt',
      badges: [
        { label: 'Giải Thưởng Hồ Chí Minh', variant: 'amber' },
        { label: 'Đại Thụ Kịch Bản', variant: 'purple' }
      ]
    },
    {
      id: 'ca-tam',
      name: 'Cụ Trịnh Thị Lan (Cả Tam)',
      birthDeath: '1888 - 1971',
      title: 'Bậc Thầy Đệ Nhất Danh Ca & Sư Phạm Làn Điệu Chèo Cổ',
      stageRoleSpecialty: 'Đào thương mẫu mực, Đào lẳng tinh tế',
      iconicCharacters: ['Thị Kính (Quan Âm Thị Kính)', 'Châu Long (Lưu Bình Dương Lễ)', 'Thị Mầu'],
      historicContribution: 'Được mệnh danh là "cuốn từ điển sống của làn điệu Chèo". Cụ là người đầu tiên đặt nền móng phương pháp sư phạm xướng âm truyền dạy Chèo cho thế hệ diễn viên cách mạng đầu tiên sau năm 1951.',
      signatureStyle: 'Giọng hát ngọt ngào thanh khiết, luyến láy vi tế, hơi thở sâu thẳm, giữ trọn vẹn phong cách phát âm nhả chữ chuẩn mực xứ Đoài.',
      awardedTitle: 'Nghệ nhân Nhân dân tiền bối Đoàn Chèo Cổ truyền Việt Nam',
      avatarPlaceholderText: 'Cả Tam',
      badges: [
        { label: 'Bậc Thầy Sư Phạm', variant: 'rose' },
        { label: 'Từ Điển Làn Điệu', variant: 'amber' }
      ]
    },
    {
      id: 'diu-huong',
      name: 'NSND Dịu Hương',
      birthDeath: '1919 - 1999',
      title: 'Tiếng Hát Vàng Ròng Của Nghệ Thuật Chèo Việt Nam',
      stageRoleSpecialty: 'Đào thương kinh điển, ngâm vịnh cổ nhạc',
      iconicCharacters: ['Thị Kính', 'Xúy Vân', 'Nàng Sĩ (Trương Viên)'],
      historicContribution: 'Nghệ sĩ tiêu biểu đưa âm sắc Chèo qua làn sóng Đài Tiếng nói Việt Nam đến hàng triệu thính giả trong và ngoài nước. Giọng hát của bà được xem là "khuôn thước vàng" cho bất kỳ nghệ sĩ Đào thương nào noi theo.',
      signatureStyle: 'Lối hát tự sự chất chứa bi cảm sâu sắc, ngân rung truyền cảm đến lay động lòng người trong các điệu Quân tử vu dịch, Sử rầu, Ru bế con.',
      awardedTitle: 'Nghệ sĩ Nhân dân thế hệ đầu tiên',
      avatarPlaceholderText: 'Dịu Hương',
      badges: [
        { label: 'Tiếng Hát Vàng Ròng', variant: 'amber' },
        { label: 'Đào Thương Mẫu Mực', variant: 'emerald' }
      ]
    },
    {
      id: 'bui-dac-su',
      name: 'NSND Bùi Đắc Sừ',
      birthDeath: '1948 - 2020',
      title: 'Đạo Diễn Đổi Mới Sân Khấu Chèo Thập Niên 1980 - 2000',
      stageRoleSpecialty: 'Đạo diễn dàn dựng & Quản lý nghệ thuật',
      iconicCharacters: ['Hồ Xuân Hương', 'Chuyện tình người mất tích', 'Vua Hùng kén rể'],
      historicContribution: 'Giám đốc Nhà hát Chèo Việt Nam nhiều nhiệm kỳ, người tiên phong kết hợp mỹ thuật tạo hình sân khấu hiện đại với vũ đạo Chèo truyền thống, đưa các vở diễn Chèo tiếp cận khán giả trẻ thế hệ mới.',
      signatureStyle: 'Tư duy dàn dựng sắc sảo, tiết tấu sân khấu nhanh gọn, khai thác triệt để tính ước lệ và nhịp điệu của trống đế.',
      awardedTitle: 'Nghệ sĩ Nhân dân, Giải thưởng Nhà nước về Văn học Nghệ thuật',
      avatarPlaceholderText: 'Đắc Sừ',
      badges: [
        { label: 'Đạo Diễn Tiên Phong', variant: 'sky' },
        { label: 'Cách Tân Sân Khấu', variant: 'purple' }
      ]
    }
  ],
  masterpieces: [
    {
      id: 'bai-ca-giu-nuoc',
      title: 'Bộ Ba Kịch Chèo Sử Thi "Bài Ca Giữ Nước"',
      subTitle: 'Tập 1: Thề qua sông &bull; Tập 2: Như những đỉnh núi &bull; Tập 3: Tiếng sấm Tây Nguyên',
      premiereYear: '1979 - 1983',
      playwright: 'NSND Tào Mạt',
      director: 'NSND Tào Mạt & Đoàn Chèo Tổng cục Hậu cần',
      troupeOrTheater: 'Đoàn Chèo Tổng cục Chính trị (Quân đội)',
      synopsis: 'Tác phẩm tái hiện thời kỳ hưng thịnh của vương triều Lý, xoay quanh vị anh hùng dân tộc Lý Thường Kiệt cùng mối quan hệ giằng xé giữa vương quyền, tướng lĩnh và đời sống thứ dân trong cuộc chiến vệ quốc.',
      philosophicalDepth: 'Khẳng định chân lý muôn đời: Sức mạnh giữ nước không nằm ở thành cao hào sâu mà nằm ở lòng dân (Khoan thư sức dân). Đưa nhân vật Hề Hoàn Bợm lên đài danh dự như biểu tượng cho trí tuệ sáng suốt của nhân dân.',
      artisticBreakthrough: 'Đột phá đỉnh cao về kết cấu kịch bản kịch tính phương Tây hòa quyện nhuần nhuyễn cùng hệ thống làn điệu Chèo cổ truyền thống, không phá vỡ một nhịp trống mẫu mực nào.',
      awardsAndLegacy: [
        'Huy chương Vàng Hội diễn Sân khấu Toàn quốc (1980, 1985)',
        'Công trình được trao Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật'
      ],
      iconicExtract: {
        sceneName: 'Trích đoạn Hề Hoàn Bợm can ngăn chủ tướng trước giờ xuất binh',
        lyricsOrExcerpt: 'Bẩm tướng công! Gươm báu chém giặc thì ngọt, nhưng đừng chém nhầm vào lòng dân! Dân có no ấm thì bờ cõi mới yên hàn!'
      }
    },
    {
      id: 'nang-sita',
      title: 'Nàng Sita',
      subTitle: 'Kiệt tác chuyển thể sử thi Ramayana sang nghệ thuật Chèo',
      premiereYear: '1984',
      playwright: 'Lưu Quang Vũ (Dựa trên bản thảo của nhà thơ Lưu Quang Thuận)',
      director: 'NSND Doãn Hoàng Giang',
      troupeOrTheater: 'Đoàn Chèo Hà Nội (nay là Nhà hát Chèo Hà Nội)',
      synopsis: 'Chuyển thể từ đại sử thi Ramayana của Ấn Độ, kể về mối tình son sắt nhưng đầy nghiệt ngã giữa hoàng tử Ram và nàng Sita trinh liệt, vượt qua muôn trùng thử thách ma quỷ và sự nghi kỵ ghen tuông.',
      philosophicalDepth: 'Ca ngợi vẻ đẹp thủy chung, phẩm giá trong sạch của người phụ nữ và sự thức tỉnh đau đớn của lương tri trước thói ích kỷ ghen hờn hẹp hòi.',
      artisticBreakthrough: 'Tạo nên "cơn địa chấn sân khấu" với hơn 2.000 đêm diễn cháy vé; kết hợp vũ đạo xiêm y rực rỡ mang hơi thở Chăm-pa/Ấn Độ với làn điệu Chèo trữ tình Bắc Bộ ngọt lịm.',
      awardsAndLegacy: [
        'Kỷ lục vở Chèo có số đêm diễn và lượng khán giả đông nhất lịch sử sân khấu Việt Nam',
        'Đưa tên tuổi NSND Quốc Chiêm (vai Ram) và NSƯT Lâm Bằng (vai Sita) thành ngôi sao thần tượng'
      ],
      iconicExtract: {
        sceneName: 'Cảnh nàng Sita bước vào giàn lửa để chứng minh lòng trinh bạch',
        lyricsOrExcerpt: 'Hỡi ngọn lửa thần linh, hãy thiêu rụi thân thiếp nếu thiếp hai lòng! Nhưng nếu thiếp trong sạch, xin trả thiếp về với đất mẹ bình yên!'
      }
    },
    {
      id: 'ho-xuan-huong',
      title: 'Hồ Xuân Hương',
      subTitle: 'Khắc họa kiêu khí và bi kịch của Bà Chúa Thơ Nôm',
      premiereYear: '1988',
      playwright: 'Bùi Đức Hạnh',
      director: 'NSND Bùi Đắc Sừ',
      troupeOrTheater: 'Nhà hát Chèo Việt Nam',
      synopsis: 'Tái hiện cuộc đời đầy ba đào nhưng bất khuất của nữ sĩ Hồ Xuân Hương, người dám dùng ngòi bút thơ Nôm sắc bén để bỡn cợt lũ quan thị, thầy đồ dốt nát và đòi quyền bình đẳng cho phái nữ.',
      philosophicalDepth: 'Tôn vinh tiếng cười giải phóng bản năng và tự do cá nhân; khẳng định tư tưởng nữ quyền vượt trước thời đại hàng trăm năm.',
      artisticBreakthrough: 'Sử dụng triệt để chất Chèo lẳng duyên dáng, lồng ghép các bài thơ Nôm nổi tiếng thành các làn điệu Hát Nói, Sa Lệch độc nhất vô nhị.',
      awardsAndLegacy: [
        'Huy chương Vàng Hội diễn Sân khấu Chuyên nghiệp Toàn quốc',
        'Vở diễn mẫu mực được giảng dạy tại Đại học Sân khấu - Điện ảnh Hà Nội'
      ],
      iconicExtract: {
        sceneName: 'Cảnh Xuân Hương đối đáp bỡn cợt lũ thầy đồ tại quán nước đầu làng',
        lyricsOrExcerpt: 'Khéo khéo đi đâu lũ ngẩn ngơ / Lại đây cho chị dạy làm thơ / Ong non ngứa nọc châm hoa rữa / Dê cỏn buồn sừng húc giậu thưa!'
      }
    }
  ],
  unescoDossier: {
    dossierTitle: 'Nghệ Thuật Chèo Đồng Bằng Sông Hồng',
    submissionYear: '2024 - 2026',
    convener: 'Bộ Văn hóa, Thể thao và Du lịch phối hợp Viện Văn hóa Nghệ thuật Quốc gia Việt Nam',
    participatingProvinces: [
      { province: 'Hà Nội', cradleVillageOrTroupe: 'Nhà hát Chèo Việt Nam, Nhà hát Chèo Hà Nội', focalHeritagePoint: 'Trung tâm đào tạo và biểu diễn chuẩn mực' },
      { province: 'Thái Bình', cradleVillageOrTroupe: 'Làng Chèo Khuốc (xã Phong Châu, Đông Hưng)', focalHeritagePoint: 'Cái nôi Chèo cổ với hơn 280 làn điệu còn lưu giữ' },
      { province: 'Ninh Bình', cradleVillageOrTroupe: 'Cố đô Hoa Lư, Làng Chèo Yên Khánh', focalHeritagePoint: 'Nơi phát tích bà tổ nghề Phạm Thị Trân thế kỷ X' },
      { province: 'Hà Nam', cradleVillageOrTroupe: 'Làng Chèo Chanh Thượng (Liêm Sơn)', focalHeritagePoint: 'Không gian diễn xướng sân đình cổ Bắc Bộ' },
      { province: 'Hải Dương', cradleVillageOrTroupe: 'Làng Chèo Thạch Lỗi, Nhà hát Chèo Hải Dương', focalHeritagePoint: 'Quê hương của bà tổ nghề Phạm Thị Trân' },
      { province: 'Bắc Ninh', cradleVillageOrTroupe: 'Nhà hát Dân ca Quan họ & Đoàn Chèo Bắc Ninh', focalHeritagePoint: 'Vùng giao thoa văn hóa Kinh Bắc' },
      { province: 'Nam Định', cradleVillageOrTroupe: 'Làng Đặng Xá (Nam Trực)', focalHeritagePoint: 'Phường chèo cổ nổi danh thời Hậu Lê' }
    ],
    criteriaAssessment: [
      {
        criterionCode: 'R.1 - Tính Đại Diện Di Sản',
        title: 'Bản sắc văn hóa cốt lõi của cư dân châu thổ sông Hồng',
        assessment: 'Chèo là hình thức kịch hát dân tộc lâu đời nhất của người Việt, phản ánh trọn vẹn thế giới quan, tâm hồn, tín ngưỡng nông nghiệp và tinh thần lạc quan của nền văn minh lúa nước.'
      },
      {
        criterionCode: 'R.2 - Sức Sống Cộng Đồng Bền Bỉ',
        title: 'Sự trao truyền tự nguyện qua hàng trăm thế hệ gia tộc nghệ nhân',
        assessment: 'Dù trải qua chiến tranh và đô thị hóa, hàng trăm câu lạc bộ Chèo dân gian tại các làng cổ vẫn duy trì sinh hoạt, dạy hát múa tự nguyện cho thiếu nhi vào mỗi dịp hội làng.'
      },
      {
        criterionCode: 'R.3 - Kế Hoạch Bảo Tồn Khả Thi',
        title: 'Chiến lược quốc gia về số hóa và giáo dục học đường',
        assessment: 'Chính phủ Việt Nam đã ban hành các đề án trọng điểm: đưa Chèo vào chương trình ngoại khóa phổ thông, phong tặng danh hiệu Nghệ nhân Nhân dân và xây dựng nền tảng số hóa lưu trữ mở.'
      }
    ],
    nationalActionPlan: [
      {
        pillarName: 'Đưa Chèo Vào Học Đường',
        objective: 'Khơi dậy tình yêu di sản cho 500,000 học sinh phổ thông',
        implementedPrograms: [
          'Biên soạn tài liệu nghe - nhìn tương tác về các trích đoạn Chèo kinh điển',
          'Tổ chức các câu lạc bộ "Em yêu làn điệu quê hương" tại các trường THCS và THPT',
          'Nghệ nhân gạo cội trực tiếp hướng dẫn kỹ năng hát nói và múa quạt'
        ]
      },
      {
        pillarName: 'Số Hóa & Phục Chế Băng Đĩa Than Cổ',
        objective: 'Lưu trữ vĩnh viễn kho tàng âm thanh mẫu mực của tiền nhân',
        implementedPrograms: [
          'Phục chế kỹ thuật số hơn 1,200 giờ thu âm đĩa than 78 vòng Dihavina (1958 - 1980)',
          'Xây dựng cơ sở dữ liệu mở trực tuyến cho giới nghiên cứu âm nhạc quốc tế',
          'Ký âm chuẩn hóa toàn bộ 200+ làn điệu Chèo Bắc Bộ'
        ]
      }
    ]
  },
  innovations: [
    {
      area: 'Hòa âm & Dàn nhạc giao hưởng x dân tộc',
      description: 'Đưa đàn Cello, Contrabass và bộ gõ hiện đại vào đệm hát Chèo nhưng vẫn giữ nguyên trục nhịp phách của Trống đế và tiếng Đàn nguyệt.',
      caseStudy: 'Vở "Nàng Sita", "Đồng tiền Vạn Lịch"',
      aestheticBalance: 'Làm dầy bè trầm cho khán phòng nhà hát lớn nhưng không lấn át âm sắc thanh thoát của nhạc cụ dân tộc.'
    },
    {
      area: 'Đề tài hiện đại & Xã hội đương thời',
      description: 'Chèo không chỉ diễn tích cổ trang mà trực tiếp dấn thân vào đề tài cuộc sống người lính thời bình, phòng chống tham nhũng và đạo đức gia đình thời kinh tế thị trường.',
      caseStudy: 'Vở "Chuyện tình người mất tích", "Vực xoáy", "Hai giọt nước"',
      aestheticBalance: 'Giữ lề lối ước lệ Chèo trong trang phục hiện đại (quân phục, thường phục) mà không bị gượng ép.'
    }
  ]
}

// =========================================================================
// R3: ÂM THANH SÂN KHẤU & NHẠC CỤ (/kham-pha/san-khau/am-thanh)
// =========================================================================

export const CHEO_AUDIO_COMPLETE_DATA: CheoAudioCompleteData = {
  nightTimeline: [
    {
      phaseNumber: 1,
      phaseId: 'phase-khoi-nhac',
      phaseName: 'Hiệu Lệnh Khởi Nhạc & Nhịp Trống Mở Màn',
      timeInNight: '19:00 - 19:30 &bull; Khai hội đầu làng',
      dramaticFunction: 'Tập hợp dân làng, tạo không khí lễ hội náo nức, xua tan tĩnh mịch đêm quê và báo hiệu đêm diễn bắt đầu.',
      atmosphereAndAcoustics: 'Âm vang rền vang của Trống cái kết hợp nhịp giòn đanh của Trống đế và tiếng Thanh la vang lừng, tạo cảm giác thôi thúc, rộn rã bước chân bà con từ khắp nẻo đường làng đổ về sân đình.',
      representativeMelodies: ['Trống dạo khai màn', 'Điệu Vỡ Nước mở đầu', 'Nhịp giục hội xuân'],
      primaryInstruments: ['Trống cái đại', 'Trống đế', 'Thanh la', 'Mõ'],
      drumPatternDescription: 'Nhịp "Tùng... Tùng... Cắc! Tùng Tùng Tùng Cắc!" dồn dập, tăng dần tốc độ từ chậm rãi trang nghiêm sang rộn ràng náo nức.',
      audiencePsychology: 'Khán giả háo hức ổn định chỗ ngồi quanh mép chiếu chèo, trẻ con reo hò, người già nhai trầu chuyện trò rôm rả.',
      metaBadges: [
        { label: 'Khai Màn Sân Đình', variant: 'amber' },
        { label: 'Nhịp Trống Giục', variant: 'red' }
      ]
    },
    {
      phaseNumber: 2,
      phaseId: 'phase-xung-danh',
      phaseName: 'Hát Xưng Danh & Ra Ngô Ra Khoai',
      timeInNight: '19:30 - 20:15 &bull; Nhập cuộc tích diễn',
      dramaticFunction: 'Nhân vật bước ra chiếu chèo xưng danh tính, diện mạo, quê quán, gia cảnh và nỗi niềm để khán giả minh bạch phân định chính tà.',
      atmosphereAndAcoustics: 'Giọng hát rõ ràng, dứt khoát qua lối Nói Lối, Hát Cách kết hợp nhịp trống đế tùng cắc dõng dạc, định hình tính cách nhân vật ngay từ những bước chân đầu tiên.',
      representativeMelodies: ['Điệu Nói Lối chính diện', 'Điệu Hát Cách', 'Hát Vỉa xưng danh'],
      primaryInstruments: ['Trống đế', 'Đàn nguyệt', 'Đàn nhị', 'Sáo trúc'],
      drumPatternDescription: 'Điểm "Cắc... Tùng!" chắc nịch sau mỗi câu tự bạch của diễn viên, tạo điểm tựa nhịp điệu cho bước chân vũ đạo.',
      audiencePsychology: 'Người xem chăm chú quan sát tạo hình, trang phục để nhận diện đây là chàng Nho sĩ đức hạnh, cô Đào duyên dáng hay gã cường hào gian giảo.',
      metaBadges: [
        { label: 'Quy Ước Ước Lệ', variant: 'sky' },
        { label: 'Nói Lối Tự Bạch', variant: 'purple' }
      ]
    },
    {
      phaseNumber: 3,
      phaseId: 'phase-tru-tinh',
      phaseName: 'Làn Điệu Trữ Tình & Tự Sự Khắc Khoải',
      timeInNight: '20:15 - 21:30 &bull; Trọng tâm cảm xúc',
      dramaticFunction: 'Đỉnh cao kịch tính và chiều sâu cảm xúc: diễn tả nỗi oan khiên bi thương, tình yêu đôi lứa e ấp hoặc nỗi lòng nhớ nhung vời vợi.',
      atmosphereAndAcoustics: 'Âm sắc nỉ non tha thiết của tiếng đàn nhị hòa quyện cùng tiếng sáo trúc thanh tao, tiếng đàn nguyệt ấm áp dẫn dắt câu hát luyến láy vi tế, chạm đến tận đáy sâu tâm hồn người nghe.',
      representativeMelodies: ['Điệu Đào Liễu', 'Quân Tử Vu Dịch', 'Luyện Năm Cung', 'Sa Lệch Chênh', 'Sử Rầu'],
      primaryInstruments: ['Đàn nhị', 'Đàn nguyệt', 'Sáo trúc', 'Trống cơm'],
      drumPatternDescription: 'Tiếng trống đế chuyển sang điểm xuyết nhẹ nhàng, buông lơi nhịp nhàng theo hơi thở và tiếng nấc nghẹn ngào của câu hát.',
      audiencePsychology: 'Cả sân đình nín lặng xúc động; nhiều người rơi nước mắt đồng cảm với thân phận oan khuất của nàng Thị Kính hay nàng Xúy Vân.',
      metaBadges: [
        { label: 'Đỉnh Cao Cảm Xúc', variant: 'rose' },
        { label: 'Nỉ Non Đào Thương', variant: 'emerald' }
      ]
    },
    {
      phaseNumber: 4,
      phaseId: 'phase-trao-long',
      phaseName: 'Tiếng Cười Trào Lộng & Tiết Tấu Hoan Hỉ',
      timeInNight: '21:30 - 22:30 &bull; Hoan ca kết hội',
      dramaticFunction: 'Hề Chèo xuất hiện đả kích thói hư tật xấu, giải tỏa mọi căng thẳng bi kịch bằng tiếng cười triết lý và khép lại đêm diễn trong không khí hoan ca đại đoàn viên.',
      atmosphereAndAcoustics: 'Nhịp điệu dồn dập, tiếng gõ mõ, kèn bóp và trống đế rộn ràng, giai điệu tươi sáng tràn đầy sức sống lạc quan dân gian.',
      representativeMelodies: ['Điệu Hề Gậy', 'Điệu Hề Mồi', 'Sắp Chợ Duyên', 'Con Gà Rừng'],
      primaryInstruments: ['Trống đế', 'Mõ gỗ', 'Thanh la', 'Kèn bóp', 'Sáo trúc'],
      drumPatternDescription: 'Nhịp "Cắc rụp tùng cắc!" nhanh, linh hoạt, biến tấu theo từng cú nhảy chân sáo, cái trợn mắt hóm hỉnh của anh Hề.',
      audiencePsychology: 'Tiếng cười rộ lên vang dội cả sân đình, mọi muộn phiền lo toan cuộc sống thường nhật tan biến, đọng lại niềm tin yêu hy vọng vào ngày mai.',
      metaBadges: [
        { label: 'Tiếng Cười Hề Chèo', variant: 'amber' },
        { label: 'Đại Cuộc Hoan Ca', variant: 'emerald' }
      ]
    }
  ],
  instrumentsCatalog: [
    {
      id: 'trong-de',
      vietnameseName: 'Trống Đế',
      sinoVietnameseName: 'Đế Cổ',
      classification: 'percussion-membranophone',
      acousticRole: 'Rhythmic Commander (Nhạc Trưởng)',
      physicalStructure: {
        materials: 'Tang trống bằng gỗ mít lõi dầy dặn, hai mặt bọc da nách trâu non được bào mỏng và căng bằng dây chằng néo.',
        shapeAndDimensions: 'Chiều cao thân trống khoảng 18 - 20cm, đường kính mặt trống khoảng 15 - 18cm, hai dùi trống tiện bằng gỗ lim hoặc gỗ nghiến đầu nhỏ.',
        soundboxDetail: 'Kích thước nhỏ gọn giúp người đánh trống kẹp chắc vào hai đùi khi ngồi bệt trên chiếu diễn.'
      },
      acousticsAndTimbre: {
        tonalQuality: 'Âm sắc đanh, giòn, cao, có sức xuyên thấu mạnh mẽ khắp không gian sân đình rộng lớn.',
        pitchRange: 'Âm vực cao, không xác định cao độ cụ thể nhưng có sự phân biệt rõ ràng giữa tiếng mặt và tiếng tang.',
        characteristicSounds: ['Tiếng "Tùng" (gõ giữa mặt trống)', 'Tiếng "Cắc" (gõ mũi dùi vào tang gỗ)', 'Tiếng "Rụp" (gõ bịt mặt trống tạo âm câm ngắt nhịp)']
      },
      soulOfRhythm: 'Được tôn vinh là "Linh hồn chỉ huy của dàn nhạc Chèo". Người cầm chầu trống đế vừa giữ nhịp nền cho toàn ban nhạc, vừa theo dõi sát sao từng ánh mắt, bước chân của diễn viên để "thưởng phạt" bằng tiếng tùng cắc giòn tan.',
      stageInteraction: 'Tương tác trực tiếp như một nhân vật vô hình: khi Hề Chèo hỏi bâng quơ, trống đế điểm "cắc tùng" như lời đối đáp; khi đào than khóc, trống đế buông lơi từng nhịp ngậm ngùi.',
      sampleAudioData: {
        soundPreviewLabel: 'Nhịp chầu khai mạc & Điệu trống đế tung hứng Hề',
        rhythmCadence: 'Nhịp đôi 2/4 biến phách dồn dập',
        durationHint: '0:45'
      },
      badges: [
        { label: 'Nhạc Trưởng Chiếu Chèo', variant: 'amber' },
        { label: 'Bộ Gõ Da Trâu', variant: 'red' }
      ]
    },
    {
      id: 'trong-com',
      vietnameseName: 'Trống Cơm',
      sinoVietnameseName: 'Phạn Cổ',
      classification: 'percussion-membranophone',
      acousticRole: 'Harmonic Bass (Đệm Trầm)',
      physicalStructure: {
        materials: 'Thân trống bằng gỗ mít khoét rỗng hình ống thuôn dài, hai đầu bịt da bò non.',
        shapeAndDimensions: 'Thân dài khoảng 55 - 60cm, phình nhẹ ở giữa và thon ở hai đầu, có quai đeo qua vai.',
        soundboxDetail: 'Trước khi diễn tấu, nghệ nhân lấy một nắm cơm nếp dẻo nặn thành hình tròn đắp vào giữa hai mặt trống để ghè âm (hạ cao độ và tăng độ ấm ngân).'
      },
      acousticsAndTimbre: {
        tonalQuality: 'Âm thanh trầm ấm, đục mờ, vang vọng mộc mạc và gợi cảm giác thổ nhưỡng phì nhiêu của đồng ruộng.',
        pitchRange: 'Âm vực trầm (bass), hai đầu trống tạo ra hai âm cách nhau quãng năm tự nhiên.',
        characteristicSounds: ['Tiếng "Bưng" (đầu trầm)', 'Tiếng "Bặt" (đầu cao hơn)', 'Tiếng vỗ tay tạo nhịp thổ âm']
      },
      soulOfRhythm: 'Đại diện cho yếu tố "Thổ" (Đất) trong triết lý âm dương ngũ hành của người nông dân Bắc Bộ; tiếng trống cơm gợi nhắc đến mùa màng ấm no, hạt gạo nếp dẻo thơm dâng lên thần hoàng làng.',
      stageInteraction: 'Thường hòa âm trong các làn điệu trữ tình êm ả, đệm lót cho tiếng đàn nhị nỉ non trong các cảnh vợ chồng tâm sự sum vầy.',
      sampleAudioData: {
        soundPreviewLabel: 'Âm sắc thổ mộc Trống Cơm đệm điệu trữ tình',
        rhythmCadence: 'Nhịp êm ái, bổng trầm luân chuyển',
        durationHint: '0:38'
      },
      badges: [
        { label: 'Hồn Cơm Nếp Đất Mẹ', variant: 'emerald' },
        { label: 'Âm Trầm Nồng Ấm', variant: 'stone' }
      ]
    },
    {
      id: 'dan-nguyet',
      vietnameseName: 'Đàn Nguyệt',
      sinoVietnameseName: 'Nguyệt Cầm (Đàn Kìm)',
      classification: 'chordophone-plucked',
      acousticRole: 'Melodic Lead (Dẫn Giai Điệu)',
      physicalStructure: {
        materials: 'Hộp đàn tròn như trăng rằm làm bằng gỗ ngô đồng hoặc gỗ trắc, cần đàn dài bằng gỗ hương gắn 8 - 10 phím bấm rất cao.',
        shapeAndDimensions: 'Đường kính thùng đàn khoảng 36 - 38cm, cần đàn dài 85 - 90cm với 2 dây đàn bằng tơ tằm hoặc cước nilon.',
        soundboxDetail: 'Phím đàn gắn rất cao so với mặt cần giúp nghệ sĩ thoải mái nhấn nhá, vuốt ngón, tạo độ rung ngân vi tế đặc trưng.'
      },
      acousticsAndTimbre: {
        tonalQuality: 'Âm sắc trong sáng, thanh thoát, đĩnh đạc nhưng khi nhấn phím lại da diết, biến ảo khôn lường.',
        pitchRange: 'Rộng hơn hai quãng tám, diễn tả trọn vẹn mọi cung bậc từ trang trọng uy nghi đến tâm tình sâu lắng.',
        characteristicSounds: ['Tiếng "Tích tịch tình tang"', 'Kỹ thuật nhấn ngón rung sâu', 'Kỹ thuật vuốt ngón (glissando) mượt mà']
      },
      soulOfRhythm: 'Cây đàn dẫn dắt đường nét giai điệu cốt lõi cho giọng hát của diễn viên. Người đánh đàn nguyệt am tường từng luyến láy để nâng giọng người hát bay bổng trên sàn diễn.',
      stageInteraction: 'Xuất hiện trong hầu hết các làn điệu Chèo, đặc biệt tỏa sáng khi nâng đỡ giọng hát đĩnh đạc của Kép và vẻ đoan trang của Đào.',
      sampleAudioData: {
        soundPreviewLabel: 'Đàn nguyệt độc tấu dạo điệu Đào Liễu',
        rhythmCadence: 'Lối gảy móng nhịp nhàng, luyến láy cung bậc',
        durationHint: '0:50'
      },
      badges: [
        { label: 'Nguyệt Cầm Dẫn Điệu', variant: 'amber' },
        { label: 'Dây Tơ Thanh Thoát', variant: 'purple' }
      ]
    },
    {
      id: 'dan-nhi',
      vietnameseName: 'Đàn Nhị',
      sinoVietnameseName: 'Nhị Hồ (Đàn Cò)',
      classification: 'chordophone-bowed',
      acousticRole: 'Emotional Soul (Nỉ Non Cảm Xúc)',
      physicalStructure: {
        materials: 'Ống đàn bằng gỗ mun hoặc gỗ trắc bịt da trăn gấm hoặc da kỳ đà; cần đàn thẳng bằng gỗ cứng cắm xuyên qua bầu đàn.',
        shapeAndDimensions: 'Cần đàn dài khoảng 75cm, cung vĩ làm bằng cật tre uốn cong với chùm lông đuôi ngựa tẩm nhựa thông luồn vĩnh viễn giữa hai dây đàn.',
        soundboxDetail: 'Da trăn căng trên mặt ống đàn tạo độ rung cộng hưởng độc đáo, làm nên tiếng nỉ non nghẹn ngào.'
      },
      acousticsAndTimbre: {
        tonalQuality: 'Âm sắc gần gũi nhất với giọng nói và tiếng khóc than của con người: réo rắt, nỉ non, da diết, khi trầm buồn khi hóm hỉnh bỡn cợt.',
        pitchRange: 'Khoảng hai quãng tám rưỡi, khả năng vuốt nốt và rung âm (vibrato) vô cùng uyển chuyển.',
        characteristicSounds: ['Tiếng miết vĩ kéo dài như tiếng than thở', 'Tiếng rung ngón nỉ non như dòng nước mắt', 'Tiếng giật vĩ ngắt quãng mô phỏng tiếng cười nắc nẻ']
      },
      soulOfRhythm: 'Cây đàn chạm tới những góc khuất sâu thẳm nhất của số phận con người trên chiếu chèo. Không một làn điệu bi thương nào có thể lay động nếu thiếu tiếng đàn nhị.',
      stageInteraction: 'Đóng vai trò "đôi mắt thứ hai" của nhân vật Đào thương: nâng niu từng câu thơ hờn tủi của Thị Kính khi bị vu oan, hay sự cuồng loạn xé lòng của Xúy Vân giả dại.',
      sampleAudioData: {
        soundPreviewLabel: 'Tiếng Nhị nỉ non trong làn điệu Quân Tử Vu Dịch',
        rhythmCadence: 'Đường vĩ da diết nghẹn ngào',
        durationHint: '0:52'
      },
      badges: [
        { label: 'Tiếng Khóc Nỉ Non', variant: 'rose' },
        { label: 'Cung Vĩ Đuôi Ngựa', variant: 'red' }
      ]
    },
    {
      id: 'sao-truc',
      vietnameseName: 'Sáo Trúc',
      sinoVietnameseName: 'Địch / Tiêu',
      classification: 'aerophone-woodwind',
      acousticRole: 'Atmospheric Flute (Thanh Thoát)',
      physicalStructure: {
        materials: 'Ống trúc ngà lâu năm hoặc nứa tép mọc trên sườn đồi khô ráo, thớ thịt mỏng và già đanh.',
        shapeAndDimensions: 'Ống sáo dài khoảng 45 - 50cm, đường kính lòng ống 1.3 - 1.5cm, khoét 1 lỗ thổi, 6 lỗ bấm và các lỗ định âm cuối thân.',
        soundboxDetail: 'Khoảng cách giữa các lỗ bấm được tính toán chính xác theo hệ thống ngũ âm cổ truyền dân tộc.'
      },
      acousticsAndTimbre: {
        tonalQuality: 'Âm sắc trong trẻo, réo rắt, bay bổng, có khả năng gợi mở không gian đồng quê bát ngát, rặng tre dòng sông thanh bình.',
        pitchRange: 'Hai quãng tám đầy đặn, âm khu cao sắc sảo và âm khu trầm mờ ảo.',
        characteristicSounds: ['Kỹ thuật luyến hơi (glissando)', 'Kỹ thuật rung hơi (vibrato bằng cơ hoành)', 'Tiếng nhấn hơi mộc mạc như tiếng chim hót đầu xuân']
      },
      soulOfRhythm: 'Tạo nên "không khí nền trời" cho đêm Chèo: đưa người xem rời xa bụi trần để bước vào thế giới phong cảnh hữu tình của làng quê Bắc Bộ.',
      stageInteraction: 'Hòa tấu trong các cảnh du xuân hò hẹn của đôi lứa, cảnh chèo đò qua sông hay tiếng sáo dẫn lối cho tâm hồn thanh tịnh cửa thiền.',
      sampleAudioData: {
        soundPreviewLabel: 'Tiếng sáo trúc trong trẻo dạo khúc sông xuân',
        rhythmCadence: 'Hơi sáo ngân nga bay bổng',
        durationHint: '0:40'
      },
      badges: [
        { label: 'Âm Sắc Làng Quê', variant: 'emerald' },
        { label: 'Trúc Ngà Gió Mát', variant: 'sky' }
      ]
    },
    {
      id: 'thanh-la-mo',
      vietnameseName: 'Thanh La & Mõ Gỗ',
      sinoVietnameseName: 'Kim La & Mộc Mõ',
      classification: 'percussion-idiophone',
      acousticRole: 'Color & Punctuation (Điểm Xuyết)',
      physicalStructure: {
        materials: 'Thanh la đúc bằng hợp kim đồng thau pha thiếc nguyên chất; Mõ đục từ gỗ mít lõi khô khoét rỗng lòng tạo khe hở hình miệng cá.',
        shapeAndDimensions: 'Thanh la hình đĩa tròn có gờ thành sâu khoảng 3cm, đường kính 18 - 20cm; Mõ hình bầu tròn có tay cầm, gõ bằng dùi bọc dạ hoặc dùi gỗ tiện.',
        soundboxDetail: 'Sự kết hợp giữa Kim khí (Thanh la) và Mộc (Mõ) tạo nên sự cân bằng âm học âm - dương hoàn hảo.'
      },
      acousticsAndTimbre: {
        tonalQuality: 'Thanh la có âm vang đanh sáng, ngân rền; Mõ gỗ phát ra tiếng "cốc cốc" khô giòn, chắc nịch và định hình nhịp phách nghiêm ngặt.',
        pitchRange: 'Định âm kim loại và gỗ tự nhiên, tạo điểm nhấn chấm câu sắc sảo.',
        characteristicSounds: ['Tiếng "Choang!" ngân dài của Thanh la báo hiệu kịch tính gay cấn', 'Tiếng "Cốc cốc cốc" của Mõ giữ nhịp tụng kinh cửa Phật hoặc tiếng mõ làng giục giã']
      },
      soulOfRhythm: 'Được ví như "dấu chấm câu và dấu chấm than" của toàn bộ tác phẩm Chèo: khi báo hiệu quan huyện xuất hiện uy nghiêm, khi điểm nhịp thiền định u tịch.',
      stageInteraction: 'Tạo bối cảnh không gian tâm linh trong chùa khi Thị Kính tu hành, hoặc phối hợp cùng tiếng trống đế trong các pha rượt đuổi dở khóc dở cười của Nghêu Sò Ốc Hến.',
      sampleAudioData: {
        soundPreviewLabel: 'Thanh la điểm kịch tính & Mõ giữ nhịp thiền môn',
        rhythmCadence: 'Tiết tấu điểm xuyết, vang ngân',
        durationHint: '0:35'
      },
      badges: [
        { label: 'Điểm Nhịp Kim Mộc', variant: 'stone' },
        { label: 'Dấu Chấm Sân Khấu', variant: 'amber' }
      ]
    }
  ],
  classicMelodies: [
    {
      id: 'dao-lieu',
      name: 'Điệu Đào Liễu',
      melodySystem: 'Hệ Điệu Sa Lệch',
      characterArchetype: 'Đào lẳng duyên dáng (Thị Mầu), Đào duyên Bắc Bộ',
      vocalAesthetics: 'Trữ tình, e ấp, tình tứ, ngọt ngào, giàu sức sống xuân thì',
      meterType: 'Thể thơ Lục bát biến thể kết hợp tiếng đệm lót dân gian',
      dramaticContext: 'Diễn tả tâm trạng thiếu nữ độ xuân thì ngắm cảnh mùa xuân, khát khao duyên phận và tình yêu đôi lứa rạo rực.',
      poeticLyrics: {
        stanzas: [
          'Đào liễu có một mình, nọ ới duyên tầm,',
          'Rầy trông mai ngóng, giọt sương gieo nặng cành hoa...',
          'Gió xuân thổi lướt bay tà áo the thâm,',
          'Người đâu gặp gỡ ngỡ như duyên trời định trăm năm!'
        ],
        interpretation: 'Hình ảnh cành liễu đào mảnh mai trong sương sớm tượng trưng cho nhan sắc thanh xuân của người con gái khao khát thoát khỏi định kiến gò bó để đi tìm hạnh phúc đích thực.'
      },
      featuredInstruments: ['Đàn nguyệt', 'Đàn nhị', 'Trống đế', 'Sáo trúc'],
      audioMetadata: {
        performer: 'Nghệ nhân Nhân dân Dịu Hương & Dàn nhạc Nhà hát Chèo Việt Nam',
        recordingNote: 'Bản ghi âm kinh điển thập niên 1960 phục chế lọc nhiễu số',
        duration: '3:45'
      }
    },
    {
      id: 'quan-tu-vu-dich',
      name: 'Quân Tử Vu Dịch',
      melodySystem: 'Hệ Điệu Sử',
      characterArchetype: 'Đào thương chính trực, nhẫn nại (Thị Kính, Châu Long)',
      vocalAesthetics: 'Tự sự, trầm lắng, bi tráng, chất chứa nỗi niềm thương nhớ cách biệt',
      meterType: 'Cổ thi ngũ ngôn - thất ngôn kết hợp lục bát bi ai',
      dramaticContext: 'Cảnh người vợ trẻ tiễn chồng ra chiến trận phương xa hoặc than thở trong đêm khuya thanh vắng trước nỗi oan khiên ngút trời.',
      poeticLyrics: {
        stanzas: [
          'Quân tử vu dịch, bất tri kỳ kỳ, há như chi hà...',
          'Gà về chuồng lúc hoàng hôn buông xuống,',
          'Chàng đi muôn dặm ải quan chưa thấy bóng quay về...',
          'Tấc lòng son sắt nguyện giữ trọn câu thề non nước!'
        ],
        interpretation: 'Bài ca muôn thuở về lòng chung thủy và nỗi đau ly biệt của người phụ nữ trong thời phong kiến loạn lạc chiến chinh.'
      },
      featuredInstruments: ['Đàn nhị trầm', 'Đàn bầu', 'Trống cơm', 'Sáo trúc'],
      audioMetadata: {
        performer: 'NSND Thanh Hoài & Ban nhạc dân tộc Viện Âm nhạc',
        recordingNote: 'Âm thanh phòng thu hi-res chuẩn mực xướng âm cổ truyền',
        duration: '4:15'
      }
    },
    {
      id: 'luyen-nam-cung',
      name: 'Điệu Luyện Năm Cung',
      melodySystem: 'Hệ Điệu Luyện',
      characterArchetype: 'Đào thương & Kép chính trong cảnh tương phùng hạnh phúc',
      vocalAesthetics: 'Đằm thắm, thiết tha, bay bổng, uyển chuyển, dạt dào niềm vui tao ngộ',
      meterType: 'Song thất lục bát kết hợp ngâm vỉa ngũ cung',
      dramaticContext: 'Cảnh Lưu Bình tái ngộ nàng Châu Long ngày vinh quy bái tổ, hay giây phút vợ chồng Trương Viên đoàn tụ sau mười năm bão táp lưu lạc.',
      poeticLyrics: {
        stanzas: [
          'Bao năm cách trở phương trời xa xôi,',
          'Tấc lòng son sắt trọn đời chẳng phai mờ...',
          'Ơn sâu nghĩa nặng tựa biển trời mênh mông,',
          'Nay bõ lúc đắng cay, hưởng trọn ngày sum họp vinh hoa!'
        ],
        interpretation: 'Điệu hát kết tinh triết lý nhân quả của người Việt: Sau bao đắng cay hi sinh vì nghĩa lớn, con người sẽ được đền đáp bằng hạnh phúc đoàn viên viên mãn.'
      },
      featuredInstruments: ['Đàn nguyệt', 'Đàn nhị', 'Sáo trúc', 'Trống đế'],
      audioMetadata: {
        performer: 'NSND Thanh Ngoan & NSƯT Xuân Hinh',
        recordingNote: 'Bản thu trực tiếp tại Nhà hát Kim Mã, Hà Nội',
        duration: '3:58'
      }
    },
    {
      id: 'he-moi-he-gay',
      name: 'Điệu Hề Mồi (Hề Gậy)',
      melodySystem: 'Hệ Điệu Hề',
      characterArchetype: 'Hề Chèo dân gian (Hề áo ngắn, Hề gậy trào phúng)',
      vocalAesthetics: 'Trào phúng, hóm hỉnh, tiết tấu dồn dập, tiếng cười sảng khoái và sâu cay',
      meterType: 'Vè dân gian, nói lối dồn toa, thể tự do phóng khoáng',
      dramaticContext: 'Anh hề áo ngắn cầm cây gậy trúc bước ra sân đình xưng danh, bóc trần những mánh khóe bòn rút, đạo đức giả của quan lại tham nhũng.',
      poeticLyrics: {
        stanzas: [
          'Tôi ra đây có phải xưng danh không nhỉ? Không xưng danh thì ai biết là ai!',
          'Làng trên xóm dưới lắng tai mà nghe tôi kể sự đời nực cười...',
          'Quan lớn ăn trên ngồi trốc, bụng to như cái bồ sứt cạp,',
          'Dân nghèo cày cuốc thâu đêm, áo rách vá vai nhưng lòng ngay dạ thẳng!'
        ],
        interpretation: 'Tiếng cười trào lộng dân gian chính là vũ khí phản kháng sắc bén nhất của tầng lớp cần lao chống lại cường quyền áp bức.'
      },
      featuredInstruments: ['Trống đế tùng cắc', 'Mõ gỗ', 'Kèn bóp', 'Thanh la'],
      audioMetadata: {
        performer: 'Nghệ nhân Nhân dân Mạnh Tuấn (Đệ nhất danh hề)',
        recordingNote: 'Tư liệu quý của Đài Tiếng nói Việt Nam năm 1978',
        duration: '3:20'
      }
    }
  ]
}

// =========================================================================
// EXPANDED SCOPE: CROSS-MUSEUM DETAILED DATA
// =========================================================================

export const BACKSTAGE_ARTISTRY_DATA: BackstageArtistryData = {
  fourPillarsOfMastery: [
    {
      pillar: 'Thanh',
      slogan: 'Luyện giọng vàng ròng, tròn vành rõ chữ',
      explanation: 'Giọng hát Chèo phải vang, rền, nền, nảy. Người nghệ sĩ phải khổ luyện nhả chữ "chính tâm", lấy hơi từ đáy đan điền để câu ngâm vang thấu khắp sân đình mà không cần loa phóng thanh.',
      trainingDiscipline: 'Sáng sớm đứng trước giếng nước làng hoặc bờ sông luyện ngâm câu "a... ư... ơ" hàng giờ liền để mở khẩu hình.'
    },
    {
      pillar: 'Sắc',
      slogan: 'Diện mạo thần thái, ánh mắt liếc sắc như dao',
      explanation: 'Sắc là thần thái biểu cảm trên khuôn mặt. Đôi mắt trong Chèo được ví như cửa sổ của tâm hồn nhân vật: mắt Đào lẳng phải lúng liếng đưa tình, mắt Đào thương rủ buồn xa xăm, mắt Kép quắc thước chính trực.',
      trainingDiscipline: 'Tập đảo mắt theo hình số 8, nhìn theo ngọn đèn dầu lay động trong đêm tĩnh lặng.'
    },
    {
      pillar: 'Tinh',
      slogan: 'Nội tâm tinh tế, nhập hồn nhân vật',
      explanation: 'Người diễn viên phải thấu hiểu tận cùng nỗi đau và niềm vui của nhân vật, sống trọn vẹn trong khoảnh khắc của tích truyện để diễn mà như không diễn.',
      trainingDiscipline: 'Nghiên cứu kỹ lưỡng gia cảnh, bối cảnh lịch sử và tâm lý nhân vật trước khi bước lên chiếu chèo.'
    },
    {
      pillar: 'Nghệ',
      slogan: 'Vũ đạo điêu luyện, ngón tay hình búp sen',
      explanation: 'Tay múa quạt phải uyển chuyển, bước chân chữ Đinh (丁) vững chãi, tà áo vạt đũi bay lượn theo từng nhịp trống đế tung hứng nhịp nhàng.',
      trainingDiscipline: 'Uốn từng đốt ngón tay dẻo quẹo từ nhỏ, tập bước chân nhẹ nhàng như lướt trên mặt thảm cỏ sương.'
    }
  ],
  makeupCodex: [
    {
      characterType: 'Đào Thương (Thị Kính, Châu Long)',
      baseMakeup: 'Phấn trắng ngà mịn màng phủ kín mặt, má phết phấn hồng sen thoang thoảng.',
      eyebrowsAndEyes: 'Chân mày kẻ lá liễu thanh mảnh hơi cụp về đuôi mắt, viền mắt mềm mại diễn tả nỗi buồn nhẫn nhục.',
      mouthAndTeeth: 'Môi tô son cánh sen vừa phải, răng đen nhánh hạt na theo chuẩn mực phụ nữ cổ.',
      symbolicMeaning: 'Biểu tượng tối cao cho vẻ đẹp đoan trang, chịu thương chịu khó, nhẫn nhục chịu oan khiên.',
      keyExamples: 'Tiểu Kính Tâm, Châu Long, Nàng Sĩ'
    },
    {
      characterType: 'Đào Lẳng (Thị Mầu, Đào Huế)',
      baseMakeup: 'Mặt thoa phấn hồng rực rỡ, hai má ửng đỏ như quả bồ quân chín mọng.',
      eyebrowsAndEyes: 'Đuôi chân mày xếch ngược lên thái dương, đuôi mắt vẽ dài sắc sảo, có nốt ruồi duyên son ở khóe miệng.',
      mouthAndTeeth: 'Môi tô son đỏ thắm, miệng cười tươi hở hàm răng hạt huyền lúng liếng.',
      symbolicMeaning: 'Khát khao vượt rào lễ giáo, phóng khoáng, tình tứ và dám yêu dám sống thật với bản năng.',
      keyExamples: 'Thị Mầu lên chùa ghẹo Tiểu Kính Tâm, Đào Huế đánh ghen'
    },
    {
      characterType: 'Hề Chèo (Hề áo ngắn, Hề gậy)',
      baseMakeup: 'Quét hai quầng vôi trắng quanh hốc mắt hoặc chóp mũi hình tam giác ngược ngộ nghĩnh.',
      eyebrowsAndEyes: 'Chân mày một bên vểnh ngược, một bên cụp xuống như hình lưỡi câu giễu nhại.',
      mouthAndTeeth: 'Miệng thoa son lệch một bên, gắn chỏm râu dê vểnh lên râu chuột lúc lắc.',
      symbolicMeaning: 'Tiếng cười trào lộng dân gian; sự xộc xệch của tạo hình nhằm bóc trần sự kệch cỡm của xã hội phong kiến.',
      keyExamples: 'Hề Mồi, Hề Hoàn Bợm, Thầy Bói mù'
    }
  ],
  propsArtistry: [
    {
      id: 'quat-mo',
      name: 'Chiếc Quạt Mo & Quạt Giấy',
      folkName: 'Bảo Bối Sân Khấu Chèo',
      symbolicMeaning: 'Biểu tượng vĩ đại cho tính ước lệ sân khấu: một vật dụng giản dị làm bằng mo cau phơi khô hoặc tre dán giấy bản mà có thể biến hóa thành muôn vàn sự vật.',
      chameleonTransformations: [
        { transformation: 'Chiếc gương soi', meaningInPlay: 'Đào lẳng cầm quạt nghiêng ngắm nghía sửa sang nhan sắc', exampleScene: 'Thị Mầu soi gương ngắm má đào trước khi lên chùa' },
        { transformation: 'Phong thư tình bí mật', meaningInPlay: 'Gấp quạt ép vào ngực như trao gửi mối tình kín đáo', exampleScene: 'Kim Nhan trao thư cho Trần Phương' },
        { transformation: 'Mái chèo khua nước', meaningInPlay: 'Hai tay cầm quạt khoát nhịp nhàng như con thuyền trôi xuôi bến đò', exampleScene: 'Cảnh Đò đưa trên sông Lam' },
        { transformation: 'Vũ khí tự vệ', meaningInPlay: 'Gõ mạnh sống quạt xua đuổi kẻ gian tà trêu ghẹo', exampleScene: 'Đào Huế xua đuổi quân Tuần Ty' }
      ],
      craftsmanshipMaterial: 'Mo cau già ngâm nước vôi phơi khô ép phẳng, hoặc tre ngâm ba mùa dán giấy điệp ngũ sắc.'
    },
    {
      id: 'don-ganh',
      name: 'Đôi Đòn Gánh & Đôi Thúng',
      folkName: 'Gánh Nặng Thân Phận',
      symbolicMeaning: 'Hình tượng hóa đôi vai tần tảo của người phụ nữ nông thôn Việt Nam gánh cả gia đình qua giông bão thời gian.',
      chameleonTransformations: [
        { transformation: 'Gánh hàng rong chợ quê', meaningInPlay: 'Tái hiện không khí chợ phiên tấp nập sớm hôm', exampleScene: 'Cảnh chợ phiên trong Nghêu Sò Ốc Hến' },
        { transformation: 'Gánh nặng nợ đời', meaningInPlay: 'Uốn cong thân đòn gánh theo từng bước nhún nhảy kĩ nghệ', exampleScene: 'Mẹ Đốp đi rao mõ đầu làng' }
      ],
      craftsmanshipMaterial: 'Tre đực già uốn cong bằng lửa rơm.'
    }
  ],
  actorRehearsalRituals: [
    'Thắp hương cúng Tổ nghề Ưu Bà Phạm Thị Trân trước mỗi đêm diễn tại hậu trường đình làng',
    'Nhấp một ngụm nước chè tươi ấm pha mật ong để làm thông cổ họng trước giờ mở màn',
    'Chỉnh lại vạt áo mớ ba mớ bảy và quai nón thao trước gương đồng cổ truyền'
  ]
}

export const CULTURAL_PHILOSOPHY_DATA: CulturalPhilosophyData = {
  humanisticPillars: [
    {
      title: 'Đạo Lý Nhân Nghĩa & Bênh Vực Kẻ Yếu',
      corePhilosophy: 'Sân khấu Chèo luôn đứng về phía những con người cùng khổ, bị áp bức: người phụ nữ chịu oan khiên, người nông dân bần hàn, người học trò nghèo hiếu học.',
      manifestationInPlays: 'Trong "Quan Âm Thị Kính", dù bị vu oan giết chồng và mang tiếng chửa hoang, Thị Kính vẫn ôm đứa trẻ bỏ rơi vào lòng nuôi nấng để rồi đắc đạo thành Phật Bà Quan Âm.',
      enduringRelevance: 'Giáo dục lòng vị tha vô bờ bến và niềm tin tuyệt đối vào phẩm giá con người trong thời hiện đại.'
    },
    {
      title: 'Luật Nhân Quả: "Ở Hiền Gặp Lành, Ác Giả Ác Báo"',
      corePhilosophy: 'Niềm tin mộc mạc mà thiêng liêng của cư dân lúa nước sông Hồng: kẻ gian tà dù có quyền thế đến đâu cuối cùng cũng phải chịu quả báo nhục nhã.',
      manifestationInPlays: 'Trong "Lưu Bình Dương Lễ", tình bạn son sắt chí nghĩa được tôn vinh; trong "Nghêu Sò Ốc Hến", lũ quan tham ô dâm đãng đều phải chui gầm giường trốn nhục nhã.',
      enduringRelevance: 'Xây dựng nền tảng đạo đức xã hội công bằng, thượng tôn sự lương thiện và trung thực.'
    },
    {
      title: 'Tiếng Cười Trào Lộng: Vũ Khí Của Dân Gian',
      corePhilosophy: 'Người Việt dùng nụ cười không phải để buông xuôi mà để thanh lọc tâm hồn, để đứng cao hơn nghịch cảnh và dùng tiếng cười đả kích chế độ phong kiến bất công.',
      manifestationInPlays: 'Nhân vật Hề áo ngắn, Hề gậy luôn vạch trần thói dốt nát của thầy đồ, sự tham lam của quan tri huyện và lòng dạ hiểm độc của bọn cường hào địa chủ.',
      enduringRelevance: 'Tinh thần lạc quan vượt qua mọi nghịch cảnh thử thách của dân tộc Việt Nam.'
    }
  ],
  folkLaughterMechanisms: [
    {
      humorCategory: 'Tiếng cười châm biếm chính trị',
      targetOfSatire: 'Quan lại tham nhũng, hà hiếp dân lành',
      characterMedium: 'Hề Hoàn Bợm, Hề áo ngắn',
      catharsisEffect: 'Giải tỏa u uất của nhân dân, khẳng định công lý lòng dân'
    },
    {
      humorCategory: 'Tiếng cười đả kích mê tín dị đoan',
      targetOfSatire: 'Thầy bói mù bịp bợm, thầy cúng dối trá',
      characterMedium: 'Thầy bói Nghêu, Thầy cúng Lão say',
      catharsisEffect: 'Khai sáng nhận thức, vạch trần sự dối trá'
    }
  ],
  communityCohesionRole: 'Chiếu chèo sân đình là chất keo văn hóa cố kết cộng đồng làng xã Bắc Bộ. Mỗi độ xuân về, cả làng không phân biệt giàu nghèo cùng ngồi quây quần quanh manh chiếu hoa, cùng khóc cùng cười, xóa nhòa mọi ranh giới giai tầng.'
}

export const ARCHIVE_VAULT_DATA: ArchiveDocumentItem[] = [
  {
    id: 'dihavina-1958',
    title: 'Đĩa Than 78 Vòng: Điệu Đào Liễu & Sa Lệch Chênh - Cụ Cả Tam',
    mediaType: '78-rpm-vinyl',
    catalogNumber: 'DHV-78-1958-001',
    yearOrEra: '1958',
    custodianOrLabel: 'Hãng Đĩa Hát Việt Nam (Dihavina)',
    description: 'Bản ghi âm giọng hát nguyên bản của cụ Trịnh Thị Lan (Cả Tam) thu tại phòng thu âm Hà Nội thời kỳ đầu hòa bình lập lại, giữ trọn vẹn âm sắc mộc mạc và tiếng thở của nghệ nhân.',
    scholarlySignificance: 'Tài liệu âm thanh chuẩn mực số 1 để đối chiếu kỹ thuật xướng âm và nhả chữ Chèo cổ Bắc Bộ thế kỷ 20.',
    preservationStatus: 'Restored Binaural Audio'
  },
  {
    id: 'dihavina-1965',
    title: 'Đĩa Than 33 Vòng: Trích Đoạn Xúy Vân Giả Dại - NSND Dịu Hương',
    mediaType: '33-rpm-lp',
    catalogNumber: 'DHV-LP-1965-042',
    yearOrEra: '1965',
    custodianOrLabel: 'Đài Tiếng nói Việt Nam & Dihavina',
    description: 'Bản thu âm trọn vẹn màn diễn xướng múa mâm và điệu hát Con gà rừng, Quá giang của NSND Dịu Hương cùng dàn nhạc cổ truyền Nhà hát Chèo Việt Nam.',
    scholarlySignificance: 'Mẫu mực kinh điển của trường phái Đào thương kết hợp Đào điên trong nghệ thuật sân khấu truyền thống.',
    preservationStatus: 'Digitized High-Res'
  },
  {
    id: 'kich-ban-nom-thi-kinh',
    title: 'Bản Chép Tay Chữ Nôm Cổ: Vở Quan Âm Thị Kính Triều Tự Đức',
    mediaType: 'nom-manuscript',
    catalogNumber: 'MSS-NOM-TD-1875',
    yearOrEra: '1875 (Niên hiệu Tự Đức thứ 28)',
    custodianOrLabel: 'Viện Nghiên cứu Hán Nôm & Làng Chèo Khuốc (Thái Bình)',
    description: 'Bản thảo kịch bản viết bằng chữ Nôm trên giấy dó cổ, ghi lại đầy đủ lời thoại, chỉ dẫn vũ đạo và nhịp trống đế cho từng phân đoạn của vở diễn mẫu mực.',
    scholarlySignificance: 'Bằng chứng văn bản học quý giá khẳng định cấu trúc kịch bản Chèo đã đạt đến độ hoàn chỉnh từ thế kỷ 19.',
    preservationStatus: 'Physical Archival Vault'
  },
  {
    id: 'sach-tran-bang',
    title: 'Chuyên Khảo: "Nghệ Thuật Sân Khấu Chèo" - GS.NSND Trần Bảng',
    mediaType: 'monograph-book',
    catalogNumber: 'BOOK-TB-1995',
    yearOrEra: '1995',
    custodianOrLabel: 'Nhà xuất bản Sân Khấu Hà Nội',
    description: 'Công trình lý luận đồ sộ đúc kết toàn bộ thi pháp, ước lệ tạo hình, nghệ thuật diễn xuất và cấu trúc âm nhạc Chèo cổ của "ông trùm Chèo" GS.NSND Trần Bảng.',
    scholarlySignificance: 'Bộ sách gối đầu giường của mọi nhà nghiên cứu, đạo diễn và diễn viên Chèo đương đại.',
    preservationStatus: 'Digitized High-Res'
  }
]

export const MUSEUM_ZONES_DATA: MuseumZoneMapData[] = [
  {
    zoneId: 'zone-1',
    floorLevel: 'Tầng 1 - Mặt Bằng Sân Đình',
    zoneName: 'Sảnh Đón Tiếp & Không Gian Cội Nguồn Lịch Sử',
    historicalFocus: 'Khởi nguyên từ thế kỷ X tại Hoa Lư, bà tổ Phạm Thị Trân và chiếu chèo sân đình châu thổ sông Hồng.',
    highlightExhibits: ['Bia đá tôn vinh Nữ quan Ưu Bà Phạm Thị Trân', 'Mô hình 3D Chiếu chèo sân đình Bắc Bộ thời Lê - Nguyễn', 'Bản đồ các làng chèo cổ tiêu biểu'],
    estimatedTourMinutes: 15,
    audioGuideLanguages: ['Tiếng Việt', 'English', 'Français']
  },
  {
    zoneId: 'zone-2',
    floorLevel: 'Tầng 2 - Đại Gian Sân Khấu',
    zoneName: 'Khu Trưng Bày 5 Mẫu Nhân Vật & Phục Trang Mớ Ba Mớ Bảy',
    historicalFocus: 'Nghệ thuật tạo hình ước lệ, quy chuẩn phục trang ngũ sắc và mặt nạ hóa trang nhân vật.',
    highlightExhibits: ['Mô hình tương tác 3D Áo tứ thân mớ ba mớ bảy', 'Góc hóa trang nghệ thuật vẽ mặt Đào - Kép - Hề', 'Kho đạo cụ ước lệ: Quạt mo, đòn gánh, roi ngựa'],
    estimatedTourMinutes: 25,
    audioGuideLanguages: ['Tiếng Việt', 'English', 'Français']
  },
  {
    zoneId: 'zone-3',
    floorLevel: 'Tầng 2 - Phòng Thính Âm',
    zoneName: 'Phòng Thưởng Thức Âm Thanh & Dàn Nhạc Cổ',
    historicalFocus: 'Hơn 200 làn điệu Chèo và 6 cổ nhạc cụ cốt lõi của dàn nhạc truyền thống.',
    highlightExhibits: ['Hộp trưng bày 6 nhạc cụ: Trống đế, Trống cơm, Đàn nguyệt, Nhị, Sáo trúc, Thanh la/Mõ', 'Trạm nghe Timeline 4 giai đoạn đêm Chèo', 'Kho mẫu âm thanh phòng thu 24-bit'],
    estimatedTourMinutes: 20,
    audioGuideLanguages: ['Tiếng Việt', 'English', 'Français']
  },
  {
    zoneId: 'zone-4',
    floorLevel: 'Tầng 3 - Cánh Cung Đương Đại',
    zoneName: 'Gian Chèo Hiện Đại & Hồ Sơ UNESCO',
    historicalFocus: 'Từ cột mốc 1951 tại chiến khu Việt Bắc, kịch Chèo sử thi Tào Mạt đến sứ mệnh di sản thế giới.',
    highlightExhibits: ['Tư liệu thành lập Đoàn Chèo Cổ truyền VN 1951', 'Kỷ vật của NSND Dịu Hương, NSND Tào Mạt', 'Sa bàn 14 tỉnh thành hồ sơ UNESCO'],
    estimatedTourMinutes: 20,
    audioGuideLanguages: ['Tiếng Việt', 'English', 'Français']
  },
  {
    zoneId: 'zone-5',
    floorLevel: 'Tầng 3 - Thư Viện Di Sản',
    zoneName: 'Kho Tư Liệu Đĩa Than Cổ & Kịch Bản Chữ Nôm',
    historicalFocus: 'Lưu trữ phục chế các bản thu đĩa hát 78 vòng Dihavina và bản chép tay quý hiếm.',
    highlightExhibits: ['Kệ đĩa than cổ 78 vòng và máy hát đĩa loa kèn cổ', 'Bản chép tay chữ Nôm Quan Âm Thị Kính 1875', 'Thư viện số hóa tra cứu học thuật'],
    estimatedTourMinutes: 15,
    audioGuideLanguages: ['Tiếng Việt', 'English']
  }
]

export const CURATED_TOURS_DATA: CuratedTourData[] = [
  {
    tourId: 'tour-30min',
    title: 'Tour 30 Phút: Chạm Vào Tinh Hoa Chèo Cổ',
    durationMinutes: 30,
    targetAudience: 'Khách tham quan lần đầu, học sinh, sinh viên',
    itineraryStops: [
      { zoneName: 'Tầng 1', stopName: 'Cội nguồn thế kỷ X', highlightAction: 'Xem sa bàn khởi thủy bà tổ Phạm Thị Trân' },
      { zoneName: 'Tầng 2', stopName: 'Sàn diễn ước lệ', highlightAction: 'Ngắm mô hình Thị Mầu và chiếc quạt mo biến hóa' },
      { zoneName: 'Tầng 2', stopName: 'Phòng thính âm', highlightAction: 'Nghe thử tiếng trống đế và điệu Đào Liễu' }
    ]
  },
  {
    tourId: 'tour-60min',
    title: 'Tour 60 Phút: Hành Trình 10 Thế Kỷ Di Sản Đến UNESCO',
    durationMinutes: 60,
    targetAudience: 'Du khách yêu văn hóa truyền thống, gia đình',
    itineraryStops: [
      { zoneName: 'Tầng 1', stopName: 'Chiếu chèo sân đình', highlightAction: 'Trải nghiệm thực tế ảo VR chiếu chèo hội làng' },
      { zoneName: 'Tầng 2', stopName: 'Trang phục & 5 Mẫu nhân vật', highlightAction: 'Khám phá mớ ba mớ bảy và nghệ thuật vẽ mặt' },
      { zoneName: 'Tầng 2', stopName: 'Dàn nhạc 6 cổ nhạc cụ', highlightAction: 'Nghe timeline 4 giai đoạn âm thanh đêm Chèo' },
      { zoneName: 'Tầng 3', stopName: 'Mốc son 1951 & Tào Mạt', highlightAction: 'Khám phá bộ ba Bài ca giữ nước và hồ sơ UNESCO' }
    ]
  }
]
