import React, { useState } from 'react'

interface Milestone {
  era: string
  century: string
  title: string
  figure: string
  description: string
  keyMilestones: string[]
}

const MILESTONES: Milestone[] = [
  {
    era: 'Thời Đinh - Tiền Lê',
    century: 'Thế kỷ X',
    title: 'Bà Tổ Nghề Phạm Thị Trân & Khởi Nguyên Chiếu Chèo',
    figure: 'Phạm Thị Trân (Hải Dương) - Nữ quan Ưu Bà',
    description: 'Vua Đinh Tiên Hoàng phong bà Phạm Thị Trân chức Ưu Bà để dạy cung nữ, binh sĩ ca múa, đánh trống cổ vũ sĩ khí trong quân doanh Hoa Lư, đặt nền móng khởi thủy cho nghệ thuật Chèo dân tộc.',
    keyMilestones: [
      'Khởi thủy lối hát nói và nhịp trống quân Chèo',
      'Định hình hình thức diễn xướng phục vụ triều đình và dân chúng'
    ]
  },
  {
    era: 'Thời Lý - Trần',
    century: 'Thế kỷ XI - XIV',
    title: 'Hòa Nhập Vào Hội Làng Dân Gian & Sân Đình',
    figure: 'Các nghệ nhân dân gian châu thổ sông Hồng',
    description: 'Chèo rời chốn cung đình để bén rễ sâu rộng vào các làng quê, gắn liền với hội xuân đình làng cầu mùa màng tươi tốt, quốc thái dân an.',
    keyMilestones: [
      'Hình thành chiếu chèo sân đình truyền thống',
      'Giao thoa nghệ thuật diễn xướng dân gian và hoàn thiện cấu trúc tích trò'
    ]
  },
  {
    era: 'Thời Hậu Lê - Nguyễn',
    century: 'Thế kỷ XV - XIX',
    title: 'Đỉnh Cao Các Kiệt Tác Tích Chèo Cổ Điển',
    figure: 'Các gánh Chèo cổ làng Khuốc, Yên Khánh, Nam Trực',
    description: 'Thời kỳ hoàng kim với sự ra đời của những kiệt tác sân khấu bất hủ phản ánh sâu sắc số phận con người và ước vọng công bằng xã hội.',
    keyMilestones: [
      'Hoàn thiện hệ thống 5 mẫu nhân vật ước lệ: Đào, Kép, Hề, Lão, Mụ',
      'Quy chuẩn hóa kho tàng hơn 200 làn điệu âm nhạc cổ truyền',
      'Xuất hiện các vở kinh điển: Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nhan'
    ]
  },
  {
    era: 'Thời Kỳ Hiện Đại',
    century: 'Thế kỷ XX - Nay',
    title: 'Gìn Giữ Bản Sắc & Tỏa Sáng Sân Khấu Đương Đại',
    figure: 'NSND Dịu Hương, NSND Trịnh Thị Lan (Cả Tam), NSND Tào Mạt',
    description: 'Chèo bước lên sân khấu nhà hát chuyên nghiệp, chuẩn hóa dàn nhạc dân tộc, tiếp tục gìn giữ bản sắc cổ truyền song song với sáng tạo tác phẩm mới.',
    keyMilestones: [
      'Thành lập Đoàn Chèo Cổ truyền Việt Nam (1951)',
      'Ghi âm, lưu trữ khoa học hệ thống làn điệu và nghệ thuật diễn xuất mẫu mực',
      'Xây dựng hồ sơ đệ trình UNESCO ghi danh Nghệ thuật Chèo là Di sản Thế giới'
    ]
  }
]

export const TimelineWidget: React.FC = () => {
  const [activeEra, setActiveEra] = useState<Milestone>(MILESTONES[0])

  return (
    <div className="text-left space-y-12">
      {/* Banner thời gian */}
      <section className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[240px] sm:min-h-[300px]">
        <img
          src="/images/cheo_dinh_lang.jpg"
          alt="Biên Niên Sử Nghệ Thuật Chèo"
          className="w-full h-full object-cover filter brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
        <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest mb-2 block">
            10 Thế Kỷ Diễn Xướng
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Biên Niên Sử Nghệ Thuật Chèo
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-2xl mt-2 leading-relaxed">
            Hành trình từ quân doanh Hoa Lư thế kỷ thứ 10, qua chiếu chèo sân đình hội làng đến sân khấu rạp hát chuyên nghiệp hôm nay.
          </p>
        </div>
      </section>

      {/* 4 Thời kỳ — Thanh chọn tối giản dạng tab mở */}
      <section className="flex flex-wrap gap-4 border-b border-stone-800/60 pb-3">
        {MILESTONES.map((item) => {
          const isActive = activeEra.century === item.century
          return (
            <button
              key={item.century}
              onClick={() => setActiveEra(item)}
              className={`pb-3 text-left transition-all cursor-pointer border-b-2 -mb-[13px] ${
                isActive
                  ? 'border-amber-500 text-white font-bold'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <span className={`text-[10px] font-mono uppercase tracking-widest block mb-0.5 ${
                isActive ? 'text-amber-400' : 'text-stone-500'
              }`}>
                {item.century}
              </span>
              <span className="text-sm sm:text-base font-serif block">
                {item.era}
              </span>
            </button>
          )
        })}
      </section>

      {/* Chi tiết thời kỳ — Mở thoáng, không đóng khung hộp xám */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-2">
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-amber-500 tracking-widest block font-semibold">
              {activeEra.century} &bull; {activeEra.era}
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              {activeEra.title}
            </h3>
          </div>

          <p className="text-base sm:text-lg text-stone-200 font-serif font-light leading-relaxed">
            {activeEra.description}
          </p>

          <div className="space-y-3 pt-4 border-t border-stone-800/60">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
              Dấu Mốc Phát Triển Chính
            </span>
            <ul className="space-y-2">
              {activeEra.keyMilestones.map((km, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{km}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:border-l lg:border-stone-800/60 lg:pl-8 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 block">
              Nhân Vật & Đại Diện
            </span>
            <p className="text-base font-serif text-amber-300/90 leading-snug">
              {activeEra.figure}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 block">
              Ý Nghĩa Lịch Sử
            </span>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Mỗi chặng đường lịch sử của Chèo đều phản ánh trung thực tâm tư, đời sống tinh thần và ước vọng hòa bình, công lý của nhân dân qua từng triều đại.
            </p>
          </div>
        </aside>
      </section>
    </div>
  )
}
