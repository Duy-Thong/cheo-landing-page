import React from 'react'
import { Sparkles, ChevronRight, MapPin } from 'lucide-react'

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
      'Chuyến điền dã đầu tiên đưa chúng tôi về làng Khuốc — nơi lưu giữ hơn 280 làn điệu Chèo cổ. Ngồi giữa manh chiếu cói trải bên thềm đình, nghe các cụ bà ngoài tám mươi cất giọng hát mộc không micro, chúng tôi bàng hoàng nhận ra: phần lớn ngón nghề nảy hạt, vuốt hơi và tiếng đế độc đáo chỉ tồn tại trong trí nhớ truyền miệng của các thế hệ nghệ nhân lão thành.',
    fieldQuote:
      'Làn điệu thì còn trong sách vở, nhưng cái nảy hạt, cái liếc mắt thì sách nào chép xiết hở các cháu?',
    image: '/images/gioi-thieu/field_story.jpg'
  },
  {
    id: 'yen-khanh',
    year: 'Mùa thu 2022',
    location: 'Yên Khánh & Hoa Lư, Ninh Bình',
    headline: 'Thu trọn khoảng vang tự nhiên dưới mái đình cổ',
    narrative:
      'Chúng tôi mang theo thiết bị thu âm đa kênh về các ngôi đình rêu phong cố đô. Thử nghiệm thu âm trong phòng kín hoàn toàn thất bại vì mất đi cái hồn cốt của chiếu chèo. Tiếng đàn nhị réo rắt và tiếng trống đế chỉ thực sự sống động khi hòa cùng độ vang tự nhiên của gỗ mít, mái ngói cổ và tiếng gió đồng bằng thoảng qua thềm đình.',
    fieldQuote:
      'Trống Chèo không phải để phô trương, dùi cau gõ vào tang gỗ trầm đục chính là nhịp đập của đất, của lòng người.',
    image: '/images/gioi-thieu/hero.jpg'
  },
  {
    id: 'phuc-dung-so',
    year: '2023 — Hiện tại',
    location: 'Phòng Số Hóa Di Sản, Hà Nội',
    headline: 'Dựng lại chiếu chèo không biên giới cho thế hệ mai sau',
    narrative:
      'Từ những trang kịch bản Nôm mục nát đến hàng trăm giờ thu âm thực địa, đội ngũ kỹ sư trẻ và các nhà nghiên cứu đã phục dựng từng mô hình 3D chiếc quạt nan, dải yếm thêu chỉ tơ và hệ thống ký âm mở. Mong muốn lớn nhất là biến những tinh hoa đang mờ dần trở thành một không gian sống động mà bất kỳ bạn trẻ nào cũng có thể tự do trải nghiệm.',
    fieldQuote:
      'Bảo tồn không phải là giữ gìn tro tàn, mà là tiếp tục thắp lên ngọn lửa truyền đời.',
    image: '/images/gioi-thieu/digital_sanctuary.jpg'
  }
]

interface FieldStoryWidgetProps {
  onNavigate?: (path: string) => void
}

export const FieldStoryWidget: React.FC<FieldStoryWidgetProps> = ({ onNavigate }) => {
  return (
    <div className="w-full text-left space-y-16 sm:space-y-24 animate-in fade-in duration-300">
      {/* ── 1. CINEMA OVERLAY HERO BANNER (100VW FULL VIEWPORT WIDTH & COMPACT HEIGHT) ── */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 sm:-mt-14 overflow-hidden shadow-2xl border-b border-stone-800 bg-stone-950 h-[280px] sm:h-[340px] lg:h-[380px] flex items-end group mb-12 sm:mb-16">
        <img
          src="/images/gioi-thieu/field_story.jpg"
          alt="Những Bước Chân Gõ Cửa Làng Chèo Cổ"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/15" />

        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8 space-y-2.5">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md">
            Những Bước Chân Gõ Cửa Làng Chèo Cổ
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-stone-200 font-serif font-light leading-relaxed drop-shadow max-w-4xl">
            <span className="float-left text-3xl sm:text-4xl font-serif font-bold text-amber-400 leading-none pr-2.5 pt-0.5">D</span>
            ự án này không khởi nguồn từ phòng máy tính với các thuật toán phần mềm khô cứng. Nó bắt đầu từ một buổi sáng mùa xuân năm 2021, khi chúng tôi đặt chân về vùng châu thổ sông Hồng để ghi chép lại những nhịp trống, lời ca và thần thái đang mờ dần theo thời gian.
          </p>
        </div>
      </section>

      {/* ── 2. NHẬT KÝ ĐIỀN DÃ — ĐA DẠNG BỐ CỤC TRIỂN LÃM ── */}
      <section className="space-y-20 sm:space-y-28">
        {/* Chặng 1: Làng Khuốc — Spotlight Card */}
        <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3 text-xs font-mono text-amber-400">
                <span className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                  Chặng 01 &bull; {FIELD_ENTRIES[0].year}
                </span>
                <span className="text-stone-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {FIELD_ENTRIES[0].location}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                {FIELD_ENTRIES[0].headline}
              </h2>

              <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed">
                {FIELD_ENTRIES[0].narrative}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-950 relative group">
                <img
                  src={FIELD_ENTRIES[0].image}
                  alt={FIELD_ENTRIES[0].headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-stone-300">
                  Làng Khuốc (Thái Bình) — Chiếc nôi lưu giữ 280 làn điệu Chèo cổ truyền.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chặng 2: Yên Khánh & Hoa Lư — Panorama Overlapping Glass Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-950 min-h-[420px] sm:min-h-[460px] flex items-center p-6 sm:p-10 lg:p-14 group">
          <img
            src={FIELD_ENTRIES[1].image}
            alt={FIELD_ENTRIES[1].headline}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent" />

          <div className="relative z-10 max-w-2xl bg-stone-900/85 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-stone-800/90 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3 text-xs font-mono text-amber-400">
              <span className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Chặng 02 &bull; {FIELD_ENTRIES[1].year}
              </span>
              <span className="text-stone-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {FIELD_ENTRIES[1].location}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {FIELD_ENTRIES[1].headline}
            </h2>

            <p className="text-sm sm:text-base text-stone-200 font-serif font-light leading-relaxed">
              {FIELD_ENTRIES[1].narrative}
            </p>
          </div>
        </div>

        {/* Chặng 3: Phục Dựng Số — Interactive Digital Lab Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl border border-stone-800 bg-stone-900/40 p-6 sm:p-10">
          <div className="lg:col-span-5 lg:order-2">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-800 bg-stone-950 relative group">
              <img
                src={FIELD_ENTRIES[2].image}
                alt={FIELD_ENTRIES[2].headline}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 lg:order-1">
            <div className="flex items-center gap-3 text-xs font-mono text-amber-400">
              <span className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Chặng 03 &bull; {FIELD_ENTRIES[2].year}
              </span>
              <span className="text-stone-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {FIELD_ENTRIES[2].location}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {FIELD_ENTRIES[2].headline}
            </h2>

            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed">
              {FIELD_ENTRIES[2].narrative}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC VISUAL CALLOUT) ── */}
      <section className="relative rounded-3xl overflow-hidden border border-amber-900/40 bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 p-8 sm:p-14 text-center space-y-4 shadow-2xl">
        <Sparkles className="w-8 h-8 text-amber-500/80 mx-auto animate-pulse" />
        <p className="text-lg sm:text-2xl font-serif italic text-amber-100 max-w-4xl mx-auto leading-relaxed">
          &ldquo;Bảo tồn không phải là giữ gìn tro tàn, mà là tiếp tục thắp lên ngọn lửa truyền đời của cội nguồn dân tộc.&rdquo;
        </p>
        <span className="text-xs font-serif text-amber-400/80 uppercase tracking-widest block">
          Tuyên ngôn điền dã số Bảo Tàng Chèo Số
        </span>
      </section>

      {/* ── 4. LƯỚI KHÁM PHÁ 3 CỘT (EXHIBITION GATEWAYS) ── */}
      <section className="space-y-8 pt-4">
        <div className="border-b border-stone-800/60 pb-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Các Không Gian Khảo Cứu Liên Quan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            onClick={() => onNavigate?.('/gioi-thieu/ve-bao-tang')}
            className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
          >
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
              Về Bảo Tàng Chèo Số
            </h3>
            <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
              Khám phá sứ mệnh số hóa di sản và triết lý lưu giữ ký ức văn hóa dân tộc trong kỷ nguyên mới.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-serif text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Tìm hiểu thêm</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
          >
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
              Không Gian Âm Thanh
            </h3>
            <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
              Lắng nghe sáu nhạc khí Dàn Bát Âm và hơn 200 làn điệu Chèo cổ truyền được thu âm trực tiếp tại thềm đình.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-serif text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Vào phòng thẩm âm</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/tac-pham-tieu-bieu')}
            className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
          >
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
              Tứ Đại Kiệt Tác Sân Khấu
            </h3>
            <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
              Thưởng thức bốn pho kịch bản mẫu mực quy định niêm luật và triết lý nhân sinh của kịch hát Chèo.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-serif text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Chiêm ngưỡng kiệt tác</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
