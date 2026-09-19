import React from 'react'
import { ArrowRight } from 'lucide-react'

interface AboutMuseumWidgetProps {
  onNavigate?: (path: string) => void
}

interface SectionPortal {
  path: string
  chapter: string
  title: string
  story: string
  image: string
  actionLabel: string
}

const SECTION_PORTALS: SectionPortal[] = [
  {
    path: '/gioi-thieu/cau-chuyen-hinh-thanh',
    chapter: '01 • Ký Sự Điền Dã',
    title: 'Hành Trình Gõ Cửa Những Làng Chèo Cổ',
    story:
      'Dự án không bắt đầu từ phòng máy tính với các thuật toán phần mềm, mà khởi nguồn từ một buổi sớm mùa xuân bên bờ sông Trà Lý. Hơn hai năm rong ruổi khắp các làng quê Bắc Bộ (làng Khuốc, Yên Khánh, Nam Trực), chúng tôi ngồi bên manh chiếu cói cùng các cụ già ngoài tám mươi để chạy đua với thời gian, lưu giữ từng câu hát nảy hạt trước nguy cơ mai một.',
    image: '/images/cheo_dinh_lang.jpg',
    actionLabel: 'Đọc trọn vẹn ký sự điền dã'
  },
  {
    path: '/gioi-thieu/muc-tieu-va-y-nghia',
    chapter: '02 • Sứ Mệnh & Tầm Nhìn',
    title: 'Vì Sao Chiếu Chèo Cần Một Không Gian Số?',
    story:
      'Di sản ngàn năm chỉ có thể sống mãi khi nó được tiếp thêm hơi thở của thời đại mới và tìm được chỗ đứng trong trái tim thế hệ trẻ. Từ việc phục dựng chuẩn xác các làn điệu cổ truyền, mô hình hóa phục trang 3D đến việc đồng hành cùng hồ sơ UNESCO, bảo tàng số là chiếc cầu nối để nghệ thuật ước lệ dân tộc đàng hoàng bước ra thế giới.',
    image: '/images/cheo_costume.jpg',
    actionLabel: 'Tìm hiểu 3 tâm nguyện cốt lõi'
  },
  {
    path: '/gioi-thieu/doi-ngu-nhom-thuc-hien',
    chapter: '03 • Đội Ngũ Sáng Lập',
    title: 'Những Bậc Thầy & Thế Hệ Tiếp Bước',
    story:
      'Công trình là nơi hội tụ tâm huyết của những chuyên gia Chèo học hàng đầu, các Nghệ nhân Nhân dân cả đời gìn giữ tiếng hát quê hương, cùng thế hệ kỹ sư công nghệ và nhà thiết kế trẻ. Chúng tôi cùng chung một niềm tin: công nghệ phải phụng sự cho cái đẹp và hồn cốt của văn hóa cổ truyền.',
    image: '/images/cheo_hero.jpg',
    actionLabel: 'Gặp gỡ hội đồng cố vấn & nghệ nhân'
  }
]

export const AboutMuseumWidget: React.FC<AboutMuseumWidgetProps> = ({ onNavigate }) => {
  return (
    <div className="text-left space-y-16 sm:space-y-24 animate-in fade-in duration-300">
      {/* ================= 1. DẪN NHẬP TỔNG QUAN ================= */}
      <section className="max-w-3xl space-y-4 border-b border-stone-800/60 pb-10">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
          Không Gian Di Sản Bảo Tàng Số “Chèo”
        </h1>
        <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
          Bảo tàng Chèo Số là công trình văn hóa số hóa nhằm lưu giữ toàn vẹn nghệ thuật kịch hát dân tộc Việt Nam. Chúng tôi đưa manh chiếu chèo sân đình ngàn năm bước vào kỷ nguyên số — nơi tiếng trống hội, điệu hát nảy hạt và tâm tình cha ông có thể chạm đến bất kỳ ai, ở bất cứ nơi đâu.
        </p>
      </section>

      {/* ================= 2. CÁC SECTION KHÁM PHÁ (EDITORIAL SECTIONS) ================= */}
      <div className="space-y-16 sm:space-y-24">
        {SECTION_PORTALS.map((sec, idx) => {
          const isEven = idx % 2 === 0
          return (
            <section
              key={sec.path}
              className="border-b border-stone-800/60 pb-16 sm:pb-24 last:border-b-0 last:pb-0"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Image */}
                <div
                  className={`relative ${
                    isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'
                  }`}
                >
                  <div
                    onClick={() => onNavigate?.(sec.path)}
                    className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[16/10] bg-stone-900 shadow-2xl"
                  >
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Editorial Story & Link */}
                <div
                  className={`space-y-4 ${
                    isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold block">
                    {sec.chapter}
                  </span>

                  <h2
                    onClick={() => onNavigate?.(sec.path)}
                    className="text-2xl sm:text-3xl font-serif font-bold text-white hover:text-amber-300 transition-colors tracking-tight leading-snug cursor-pointer"
                  >
                    {sec.title}
                  </h2>

                  <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                    {sec.story}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate?.(sec.path)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-serif text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group"
                    >
                      <span className="underline underline-offset-4 decoration-amber-500/40 group-hover:decoration-amber-400">
                        {sec.actionLabel}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
