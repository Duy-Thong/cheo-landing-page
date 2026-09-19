import React from 'react'
import {
  ArrowRight,
  Drama,
  Music,
  Users,
  Shirt,
  Clock,
  Ticket,
  BookOpen,
  Headphones,
  MapPin
} from 'lucide-react'

interface HomePageProps {
  onNavigate: (path: string) => void
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full text-[#e7e0d8] bg-[#120f0d]">
      {/* =========================================================================
          1. HERO — Ảnh to full-width, tiêu đề overlay, CTA rõ ràng
          ========================================================================= */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] min-h-[500px] max-h-[900px]">
        <img
          src="/images/cheo_dinh_lang.jpg"
          alt="Diễn xướng Chèo sân đình truyền thống Bắc Bộ"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d] via-[#120f0d]/50 to-black/30" />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-5xl mx-auto px-4 sm:px-8 pb-12 sm:pb-16">
          <span className="text-[11px] sm:text-xs font-serif uppercase tracking-[0.2em] text-amber-400 mb-3">
            Di Sản Sân Khấu Dân Gian Việt Nam
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] max-w-3xl">
            Bảo Tàng Số{' '}
            <span className="text-amber-400 italic">Nghệ Thuật Chèo</span>
          </h1>

          <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-xl mt-4">
            Lưu giữ hơn 10 thế kỷ diễn xướng, 200+ làn điệu cổ và kho tàng tích trò kinh điển vùng đồng bằng sông Hồng.
          </p>

          {/* CTA — 2 nút rõ ràng */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={() => onNavigate('/kham-pha/san-khau')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-700 hover:to-amber-600 text-amber-100 font-semibold text-sm border border-amber-600/40 shadow-lg shadow-black/40 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Drama className="w-4 h-4" />
              <span>Khám Phá Sân Khấu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/tien-ich/tham-quan-va-su-kien/dat-mua-ve')}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Ticket className="w-4 h-4" />
              <span>Lịch Diễn & Đặt Vé</span>
            </button>
          </div>

          {/* Chỉ số nổi bật — dải ngang nhẹ */}
          <div className="flex items-center gap-6 mt-8 text-xs text-stone-400">
            <div>
              <span className="text-amber-400 font-serif font-bold text-lg block">Thế kỷ X</span>
              <span>Khởi nguyên</span>
            </div>
            <div className="w-px h-8 bg-stone-700/60" />
            <div>
              <span className="text-amber-400 font-serif font-bold text-lg block">200+</span>
              <span>Làn điệu cổ</span>
            </div>
            <div className="w-px h-8 bg-stone-700/60" />
            <div>
              <span className="text-amber-400 font-serif font-bold text-lg block">5</span>
              <span>Nhân vật ước lệ</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. KHÁM PHÁ SÂN KHẤU — 4 lối vào trực quan, click là đi thẳng
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20 sm:py-24">
        <div className="text-center mb-12">
          <span className="text-xs font-serif uppercase tracking-[0.15em] text-amber-500">
            Nghệ Thuật Biểu Diễn
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
            Bốn Trụ Cột Sân Khấu Chèo
          </h2>
          <p className="text-sm text-stone-400 mt-2 max-w-lg mx-auto font-light">
            Chọn một không gian để bắt đầu hành trình khám phá
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              path: '/kham-pha/san-khau/am-thanh',
              icon: Music,
              title: 'Âm Thanh & Làn Điệu',
              desc: 'Dàn nhạc Bát Âm, 4 chặng âm sắc đêm diễn và các làn điệu bất hủ.',
              accent: 'from-amber-600/20 to-amber-900/10',
              borderHover: 'hover:border-amber-500/60'
            },
            {
              path: '/kham-pha/san-khau/nhan-vat',
              icon: Users,
              title: 'Nhân Vật Ước Lệ',
              desc: 'Đào, Kép, Hề, Lão, Mụ — 5 mẫu hình kinh điển trên chiếu chèo.',
              accent: 'from-rose-600/20 to-rose-900/10',
              borderHover: 'hover:border-rose-500/60'
            },
            {
              path: '/kham-pha/san-khau/trang-phuc',
              icon: Shirt,
              title: 'Trang Phục Cổ Truyền',
              desc: 'Áo tứ thân, yếm đào, nón quai thao và ngũ sắc Ngũ Hành.',
              accent: 'from-emerald-600/20 to-emerald-900/10',
              borderHover: 'hover:border-emerald-500/60'
            },
            {
              path: '/kham-pha/san-khau/tac-pham-tieu-bieu',
              icon: BookOpen,
              title: 'Tác Phẩm Tiêu Biểu',
              desc: 'Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nham và tích trò xưa.',
              accent: 'from-sky-600/20 to-sky-900/10',
              borderHover: 'hover:border-sky-500/60'
            }
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${item.accent} border border-stone-800/80 ${item.borderHover} transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col`}
              >
                <div className="w-11 h-11 rounded-xl bg-stone-900/80 border border-stone-700/60 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-400 leading-relaxed font-light flex-1">
                  {item.desc}
                </p>

                <div className="mt-5 pt-3 border-t border-stone-800/50 flex items-center gap-1.5 text-xs text-amber-500/80 group-hover:text-amber-400 font-medium">
                  <span>Vào xem</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          3. ẢNH + GIỚI THIỆU NGẮN — Kể chuyện bằng hình ảnh
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Ảnh lớn bên trái */}
          <div
            onClick={() => onNavigate('/gioi-thieu/cau-chuyen-hinh-thanh')}
            className="relative rounded-2xl overflow-hidden border border-stone-800 group cursor-pointer aspect-[4/3]"
          >
            <img
              src="/images/cheo_costume.jpg"
              alt="Phục trang và nghệ thuật Chèo cổ truyền"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <span className="text-[10px] uppercase font-serif tracking-widest text-amber-400 block mb-1">
                Câu Chuyện Di Sản
              </span>
              <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                Từ Sân Đình Đến Bảo Tàng Số
              </h3>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                <span>Xem hành trình</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Nội dung bên phải */}
          <div className="space-y-6 text-left">
            <div>
              <span className="text-xs font-serif uppercase tracking-[0.15em] text-amber-500">
                Khởi Nguồn & Sứ Mệnh
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2 leading-snug">
                Lịch Sử & Nghệ Thuật Chèo
              </h2>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Chèo ra đời từ vùng đồng bằng châu thổ sông Hồng, gắn liền với đời sống nông nghiệp lúa nước. Qua hơn 10 thế kỷ, Chèo đã trở thành loại hình sân khấu dân gian đặc sắc nhất Việt Nam với hệ thống hơn 200 làn điệu và kho tàng tích trò phong phú.
            </p>

            {/* 3 điểm nhấn */}
            <div className="space-y-3">
              {[
                {
                  path: '/kham-pha/tong-quan/lich-su-phat-trien',
                  icon: Clock,
                  title: 'Lịch Sử Phát Triển',
                  desc: 'Dòng chảy 10 thế kỷ từ sân đình đến sân khấu hiện đại'
                },
                {
                  path: '/kham-pha/cheo-hien-dai',
                  icon: Drama,
                  title: 'Chèo Hiện Đại',
                  desc: 'Cách tân từ 1951, hồ sơ UNESCO và nghệ nhân tiêu biểu'
                },
                {
                  path: '/gioi-thieu/bao-tang-so-cheo',
                  icon: MapPin,
                  title: 'Bảo Tàng Số',
                  desc: 'Số hóa & phục dựng di sản bằng công nghệ tương tác'
                }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.path}
                    onClick={() => onNavigate(item.path)}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-900/50 transition-colors cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-stone-900/80 border border-stone-800 flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-500/10 group-hover:border-amber-600/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-serif font-bold text-stone-200 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-400 mt-0.5 font-light">
                        {item.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-amber-400 shrink-0 mt-1 group-hover:translate-x-0.5 transition-all" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ẢNH NHẠC CỤ + TIỆN ÍCH — Banner rộng + 3 card dịch vụ
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-24">
        {/* Banner ảnh nhạc cụ */}
        <div
          onClick={() => onNavigate('/kham-pha/san-khau/am-thanh')}
          className="relative rounded-2xl overflow-hidden border border-stone-800 h-56 sm:h-72 mb-12 cursor-pointer group"
        >
          <img
            src="/images/cheo_instruments.jpg"
            alt="Dàn nhạc cụ Chèo cổ truyền"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120f0d]/90 via-[#120f0d]/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center p-8 sm:p-12 max-w-md">
            <span className="text-[10px] font-serif uppercase tracking-widest text-amber-400 block mb-2">
              Âm Sắc Cổ Truyền
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
              Trống Đế, Đàn Nguyệt, Sáo Trúc...
            </h3>
            <p className="text-xs text-stone-300 font-light mt-2 leading-relaxed">
              Khám phá dàn nhạc Bát Âm và hành trình âm sắc của một đêm Chèo cổ.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
              <span>Nghe & Khám phá</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* 3 Card tiện ích */}
        <div className="text-center mb-10">
          <span className="text-xs font-serif uppercase tracking-[0.15em] text-emerald-400">
            Dịch Vụ & Tiện Ích
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
            Trải Nghiệm Tham Quan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              path: '/tien-ich/tham-quan-va-su-kien/lich-bieu-dien',
              icon: Ticket,
              title: 'Lịch Diễn & Đặt Vé',
              desc: 'Suất diễn cuối tuần, sơ đồ rạp hát và vé điện tử QR.'
            },
            {
              path: '/tien-ich/kho-tu-lieu',
              icon: Headphones,
              title: 'Kho Tư Liệu',
              desc: 'Đĩa than 78 vòng, kịch bản Hán Nôm cổ và ảnh tư liệu quý.'
            },
            {
              path: '/tien-ich/ban-do-bao-tang',
              icon: MapPin,
              title: 'Bản Đồ Bảo Tàng',
              desc: 'Sơ đồ phân tầng không gian trưng bày và hướng dẫn tham quan.'
            }
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className="group p-6 rounded-2xl bg-stone-900/30 hover:bg-stone-900/60 border border-stone-800/80 hover:border-amber-700/40 transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-600/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  {item.desc}
                </p>

                <div className="mt-5 pt-3 border-t border-stone-800/50 flex items-center gap-1.5 text-xs text-stone-500 group-hover:text-amber-400 font-medium">
                  <span>Xem chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
