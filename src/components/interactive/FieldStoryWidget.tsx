import React from 'react'

interface FieldEntry {
  id: string
  year: string
  location: string
  headline: string
  narrative: string
  fieldQuote: string
  image: string
}

const FIELD_ENTRIES: FieldEntry[] = [
  {
    id: 'lang-khuoc',
    year: 'Mùa xuân 2021',
    location: 'Làng Khuốc, Thái Bình',
    headline: 'Đi tìm mảnh ký ức bên manh chiếu cói',
    narrative:
      'Chuyến điền dã đầu tiên đưa chúng tôi về làng Khuốc — nơi lưu giữ hơn 280 làn điệu Chèo cổ. Ngồi giữa manh chiếu cói trải bên thềm đình, nghe các cụ bà ngoài tám mươi cất giọng hát mộc không micro, chúng tôi bàng hoàng nhận ra: phần lớn ngón nghề nảy hạt, vuốt hơi và tiếng đế độc đáo chỉ tồn tại trong trí nhớ truyền miệng, không một văn bản nào ghi chép trọn vẹn.',
    fieldQuote:
      '“Làn điệu thì còn trong sách vở, nhưng cái nảy hạt, cái liếc mắt thì sách nào chép xiết hở các cháu?” — Nghệ nhân lão thành',
    image: '/images/cheo_dinh_lang.jpg'
  },
  {
    id: 'yen-khanh',
    year: 'Mùa thu 2022',
    location: 'Yên Khánh & Hoa Lư, Ninh Bình',
    headline: 'Thu trọn khoảng vang tự nhiên dưới mái đình',
    narrative:
      'Chúng tôi mang theo thiết bị thu âm đa kênh về các ngôi đình rêu phong cố đô. Thử nghiệm thu âm trong phòng kín hoàn toàn thất bại vì mất đi cái hồn cốt của chiếu chèo. Tiếng đàn nhị réo rắt và tiếng trống đế chỉ thực sự sống động khi hòa cùng độ vang tự nhiên của gỗ mít, mái ngói cổ và tiếng gió đồng bằng thoảng qua thềm đình.',
    fieldQuote:
      '“Trống Chèo không phải để phô trương, dùi cau gõ vào tang gỗ trầm đục chính là nhịp đập của đất, của lòng người.”',
    image: '/images/cheo_hero.jpg'
  },
  {
    id: 'phuc-dung-so',
    year: '2023 — Nay',
    location: 'Phòng Số Hóa Di Sản, Hà Nội',
    headline: 'Dựng lại chiếu chèo không biên giới cho thế hệ mai sau',
    narrative:
      'Từ những trang kịch bản Nôm mục nát đến hàng trăm giờ thu âm thực địa, đội ngũ kỹ sư trẻ và các nhà nghiên cứu đã phục dựng từng mô hình 3D chiếc quạt nan, dải yếm thêu chỉ tơ và hệ thống ký âm mở. Mong muốn lớn nhất là biến những tinh hoa đang mờ dần trở thành một không gian sống động mà bất kỳ bạn trẻ nào cũng có thể tự do chạm vào.',
    fieldQuote:
      '“Bảo tồn không phải là giữ gìn tro tàn, mà là tiếp tục thắp lên ngọn lửa.”',
    image: '/images/cheo_instruments.jpg'
  }
]

export const FieldStoryWidget: React.FC = () => {
  return (
    <div className="text-left space-y-16 sm:space-y-20 animate-in fade-in duration-300">
      {/* ================= 1. BÚT KÝ MỞ ĐẦU ================= */}
      <section className="max-w-3xl space-y-5 border-b border-stone-800/60 pb-10">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
          Những Bước Chân Gõ Cửa Làng Chèo Cổ
        </h1>
        <div className="space-y-4 text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
          <p>
            Dự án này không khởi nguồn từ phòng máy tính với các thuật toán phần mềm. Nó bắt đầu từ một buổi sáng mùa xuân năm 2021, khi chúng tôi đặt chân về vùng châu thổ sông Hồng để tìm câu trả lời: Làm thế nào để một di sản ngàn năm không trở thành hoài niệm?
          </p>
          <p className="text-stone-400">
            Dưới đây là những trang nhật ký ghi chép thực địa trong hành trình hơn hai năm rong ruổi tìm về các báu vật sống của nghệ thuật Chèo dân tộc.
          </p>
        </div>
      </section>

      {/* ================= 2. SỔ TAY ĐIỀN DÃ (DOCUMENTARY LOGBOOK) ================= */}
      <div className="space-y-14 sm:space-y-18">
        {FIELD_ENTRIES.map((entry, idx) => (
          <article
            key={entry.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Cột ảnh nhật ký thực địa */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 shadow-xl">
                <img
                  src={entry.image}
                  alt={entry.headline}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono text-amber-400 border border-stone-800/80">
                  {entry.year}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-stone-300 bg-stone-950/70 px-2.5 py-1 rounded backdrop-blur-sm">
                  Tọa độ: {entry.location}
                </div>
              </div>
            </div>

            {/* Cột văn tự sự & Sổ tay ghi chép */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
                  Chặng {idx + 1} • {entry.location}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug">
                  {entry.headline}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                {entry.narrative}
              </p>

              {/* Trích chép sổ tay bên lề (Field Note Box) */}
              <div className="pt-2">
                <div className="p-4 rounded-xl bg-stone-900/40 border-l-2 border-amber-500/70 text-xs sm:text-sm font-serif italic text-amber-200/90 leading-relaxed">
                  {entry.fieldQuote}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
