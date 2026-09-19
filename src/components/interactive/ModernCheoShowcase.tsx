import React, { useState } from 'react'

interface Milestone {
  year: string
  title: string
  significance: string
  description: string
  highlights: string[]
}

interface Masterpiece {
  title: string
  author: string
  year: string
  summary: string
  breakthrough: string
}

interface MasterArtist {
  name: string
  title: string
  contribution: string
  iconicRole: string
}

const MODERN_MILESTONES: Milestone[] = [
  {
    year: '1951',
    title: 'Thành Lập Đoàn Chèo Cổ Truyền Việt Nam',
    significance: 'Bước ngoặt sân khấu hóa chuyên nghiệp tại chiến khu Việt Bắc',
    description: 'Quy tụ các nghệ nhân tinh hoa (cụ Cả Tam, NSND Dịu Hương, cụ Trùm Thịnh) thành lập đoàn Chèo chuyên nghiệp đầu tiên của quốc gia, tiền thân của Nhà hát Chèo Việt Nam.',
    highlights: [
      'Chuyển từ chiếu chèo hội làng sang không gian rạp hát quy chuẩn',
      'Ghi âm, ghi hình và ký âm khoa học hàng trăm làn điệu mẫu mực',
      'Đào tạo thế hệ diễn viên Chèo cách mạng đầu tiên'
    ]
  },
  {
    year: '1970 - 1980',
    title: 'Kỷ Nguyên Kịch Chèo & Bộ Ba "Bài Ca Giữ Nước"',
    significance: 'Đỉnh cao kết hợp triết lý sử thi hiện đại và lề lối Chèo cổ',
    description: 'NSND Tào Mạt hoàn thành bộ ba vở Chèo bất hủ: "Thề qua sông", "Như những đỉnh núi", "Tiếng sấm Tây Nguyên", chứng minh sân khấu Chèo truyền thống đủ sức chuyển tải tư tưởng thời đại.',
    highlights: [
      'Xây dựng hình tượng nhân vật Hề Chèo trở thành tiếng nói lương tri',
      'Kết hợp kết cấu kịch bản hiện đại với âm nhạc Chèo nguyên bản',
      'Được trao tặng Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật'
    ]
  },
  {
    year: '1990 - 2010',
    title: 'Cách Tân Hòa Âm & Sân Khấu Hóa Đương Đại',
    significance: 'Mở rộng biên độ thể nghiệm dàn nhạc và đề tài xã hội mới',
    description: 'Các nhà hát Chèo đẩy mạnh thể nghiệm đưa dàn nhạc bán giao hưởng vào đệm hát Chèo, ứng dụng mỹ thuật ánh sáng hiện đại và dựng các vở kịch thời sự đương đại như "Nàng Sita".',
    highlights: [
      'Khai thác đề tài phản ánh số phận con người trong thời kỳ đổi mới',
      'Giao lưu văn hóa quốc tế tại Pháp, Đức, Nhật Bản, Hoa Kỳ',
      'Phát triển hệ thống các Nhà hát Chèo chuyên nghiệp vững mạnh'
    ]
  },
  {
    year: '2020 - Nay',
    title: 'Hồ Sơ Di Sản UNESCO & Kỷ Nguyên Số Hóa',
    significance: 'Bảo tồn đa phương tiện & khẳng định vị thế di sản thế giới',
    description: 'Xây dựng hồ sơ quốc gia đệ trình UNESCO ghi danh Nghệ thuật Chèo là Di sản Văn hóa Phi vật thể đại diện của nhân loại, đồng thời đẩy mạnh số hóa bảo tồn trên nền tảng số.',
    highlights: [
      'Xây dựng kho lưu trữ số hóa toàn diện băng âm thanh và kịch bản',
      'Dự án đưa Chèo vào học đường truyền lửa cho thế hệ trẻ',
      'Hồ sơ đệ trình UNESCO ghi danh di sản văn hóa nhân loại'
    ]
  }
]

const MODERN_MASTERPIECES: Masterpiece[] = [
  {
    title: 'Bài Ca Giữ Nước (Bộ Ba Vở)',
    author: 'Tác giả & Đạo diễn: NSND Tào Mạt',
    year: '1979 - 1983',
    summary: 'Bộ ba vở Chèo sử thi tái hiện thời kỳ hưng thịnh của nhà Lý, khắc họa cuộc đấu tranh bảo vệ cương thổ và triết lý khoan thư sức dân làm kế sâu rễ bền gốc.',
    breakthrough: 'Đưa nhân vật Hề Chèo trở thành tiếng nói của lương tâm, phản biện xã hội và bảo vệ thứ dân.'
  },
  {
    title: 'Nàng Sita',
    author: 'Kịch bản: Lưu Quang Vũ - NSND Doãn Hoàng Giang',
    year: '1984',
    summary: 'Chuyển thể từ sử thi Ramayana sang ngôn ngữ sân khấu Chèo, khắc họa lòng chung thủy và đức hy sinh son sắt của nàng Sita.',
    breakthrough: 'Kỷ lục hàng nghìn đêm diễn, dung hòa nhịp nhàng giữa vũ đạo Chèo truyền thống và kịch nghệ đương đại.'
  },
  {
    title: 'Hồ Xuân Hương',
    author: 'Tác giả: Bùi Đức Hạnh - Đạo diễn: NSND Bùi Đắc Sừ',
    year: '1988',
    summary: 'Khắc họa cuộc đời đầy trắc trở nhưng kiêu hãnh của nữ sĩ Hồ Xuân Hương, tiếng cười trào phúng sắc sảo đả kích định kiến nam quyền.',
    breakthrough: 'Sử dụng triệt để chất Chèo lẳng duyên dáng và làn điệu Hát Nói tài tình để thể hiện khí chất độc nhất vô nhị của Bà chúa thơ Nôm.'
  }
]

const MASTER_ARTISTS: MasterArtist[] = [
  {
    name: 'NSND Tào Mạt (1930 - 1993)',
    title: 'Đại thụ kịch tác gia sân khấu Chèo',
    contribution: 'Tác giả bộ ba kiệt tác Bài Ca Giữ Nước, người nâng tầm Chèo thành kịch thơ sử thi triết học.',
    iconicRole: 'Tác giả & Đạo diễn bộ ba kiệt tác Bài Ca Giữ Nước'
  },
  {
    name: 'NSND Dịu Hương (1919 - 1994)',
    title: 'Đệ nhất đào Chèo thế kỷ XX',
    contribution: 'Khuôn thước mẫu mực của Đào thương và Đào lẳng, truyền dạy hàng chục thế hệ nghệ sĩ rạp hát.',
    iconicRole: 'Vai diễn Thị Kính và Xúy Vân kinh điển'
  },
  {
    name: 'NSND Bùi Đắc Sừ (1948 - 2020)',
    title: 'Bậc thầy đạo diễn Chèo hiện đại',
    contribution: 'Đạo diễn hàng loạt vở diễn đoạt huy chương vàng, người đưa mỹ thuật ánh sáng hiện đại vào sân khấu Chèo.',
    iconicRole: 'Đạo diễn vở Chèo kinh điển Hồ Xuân Hương'
  }
]

export const ModernCheoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'masterpieces' | 'artists'>('timeline')
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone>(MODERN_MILESTONES[0])

  return (
    <div className="text-left space-y-12">
      {/* Banner ảnh hiện đại */}
      <section className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[260px] sm:min-h-[320px]">
        <img
          src="/images/cheo_hero.jpg"
          alt="Sân Khấu Chèo Hiện Đại"
          className="w-full h-full object-cover filter brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
        <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest mb-2 block">
            Bước Chuyển Mình Lịch Sử
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Chèo Trong Dòng Chảy Đương Đại
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-2xl mt-2 leading-relaxed">
            Từ chiếu chèo sân đình bước lên rạp hát chuyên nghiệp năm 1951, mở rộng thể nghiệm kịch bản sử thi hiện đại và hồ sơ di sản thế giới UNESCO.
          </p>
        </div>
      </section>

      {/* Dải chỉ số mở thoáng */}
      <section className="py-6 border-b border-stone-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
        <div>
          <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 block">1951</span>
          <span className="text-xs font-mono uppercase text-stone-400 tracking-wider mt-1 block">Thành Lập Đoàn Chèo QG</span>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-serif font-bold text-stone-200 block">14+</span>
          <span className="text-xs font-mono uppercase text-stone-400 tracking-wider mt-1 block">Tỉnh Thành Hồ Sơ UNESCO</span>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 block">03</span>
          <span className="text-xs font-mono uppercase text-stone-400 tracking-wider mt-1 block">Tập Sử Thi Bài Ca Giữ Nước</span>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-serif font-bold text-stone-200 block">100+</span>
          <span className="text-xs font-mono uppercase text-stone-400 tracking-wider mt-1 block">Vở Diễn Đề Tài Mới</span>
        </div>
      </section>

      {/* 3 Mục tab điều hướng — Tối giản, thanh thoát */}
      <section className="flex flex-wrap gap-4 border-b border-stone-800/60 pb-3">
        {[
          { id: 'timeline', label: 'Mốc Chuyển Mình Lịch Sử' },
          { id: 'masterpieces', label: 'Tác Phẩm Đương Đại Tiêu Biểu' },
          { id: 'artists', label: 'Danh Nhân & Bậc Thầy' }
        ].map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 text-sm sm:text-base font-serif transition-all cursor-pointer border-b-2 -mb-[13px] ${
                isActive
                  ? 'border-amber-500 text-white font-bold'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </section>

      {/* TAB 1: MỐC LỊCH SỬ — Mở thoáng, không khung hộp */}
      {activeTab === 'timeline' && (
        <div className="space-y-10 pt-2">
          {/* Hàng nút năm */}
          <div className="flex flex-wrap gap-3">
            {MODERN_MILESTONES.map((m) => {
              const isSel = selectedMilestone.year === m.year
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(m)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    isSel
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-stone-900/50 hover:bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  Năm {m.year}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-2">
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-amber-500 tracking-widest block font-semibold">
                  Mốc Son {selectedMilestone.year} &bull; {selectedMilestone.significance}
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  {selectedMilestone.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-stone-200 font-serif font-light leading-relaxed">
                {selectedMilestone.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-stone-800/60">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                  Dấu Ấn & Thành Tựu
                </span>
                <ul className="space-y-2">
                  {selectedMilestone.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:border-l lg:border-stone-800/60 lg:pl-8 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 block">
                  Tầm Vóc Thời Đại
                </span>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {selectedMilestone.significance}
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 block">
                  Sức Sống Tiếp Nối
                </span>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Từ chiến khu đến rạp hát hiện đại, nghệ thuật Chèo luôn khẳng định bản lĩnh thích ứng và phản ánh sâu sắc số phận dân tộc.
                </p>
              </div>
            </aside>
          </div>
        </div>
      )}

      {/* TAB 2: TÁC PHẨM ĐƯƠNG ĐẠI TIÊU BIỂU */}
      {activeTab === 'masterpieces' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-2">
          {MODERN_MASTERPIECES.map((mp, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-xs font-mono text-amber-500/80 block">{mp.year}</span>
              <h4 className="text-xl font-serif font-bold text-white">
                {mp.title}
              </h4>
              <p className="text-xs text-amber-200/90 font-serif">{mp.author}</p>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {mp.summary}
              </p>
              <div className="pt-2 border-t border-stone-800/60 text-xs text-stone-400 font-light leading-relaxed">
                <span className="text-stone-300 font-medium">Đột phá sân khấu:</span> {mp.breakthrough}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: DANH NHÂN & BẬC THẦY */}
      {activeTab === 'artists' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-2">
          {MASTER_ARTISTS.map((artist, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xl font-serif font-bold text-white">
                {artist.name}
              </h4>
              <p className="text-xs text-amber-400 font-serif">{artist.title}</p>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {artist.contribution}
              </p>
              <div className="pt-2 border-t border-stone-800/60 text-xs text-stone-400 font-light">
                <span className="text-stone-300 font-medium">Dấu ấn để đời:</span> {artist.iconicRole}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}