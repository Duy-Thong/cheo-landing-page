import React from 'react'
import {
  ArrowRight,
  Drama,
  Music,
  Users,
  Shirt,
  Ticket,
  BookOpen,
  Headphones,
  MapPin,
  Compass,
  Sparkles
} from 'lucide-react'

interface HomePageProps {
  onNavigate: (path: string) => void
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full text-[#e7e0d8] bg-[#120f0d] bg-[radial-gradient(ellipse_80%_50%_at_50%_15%,rgba(180,83,9,0.06),transparent_70%)]">
      {/* =========================================================================
          1. HERO — Bầu không khí sân đình truyền thống, tiêu đề tự sự, CTA trang trọng
          ========================================================================= */}
      <section className="relative w-full h-[75vh] sm:h-[82vh] min-h-[560px] max-h-[920px]">
        <img
          src="/images/cheo_dinh_lang.jpg"
          alt="Diễn xướng Chèo sân đình truyền thống Bắc Bộ"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Lớp phủ gradient sâu lắng */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d] via-[#120f0d]/55 to-black/35" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#120f0d]/20 to-[#120f0d]/90 pointer-events-none" />

        {/* Nội dung Hero */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pb-14 sm:pb-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] max-w-4xl">
            Bảo Tàng Số{' '}
            <span className="text-amber-400 italic font-serif">Nghệ Thuật Chèo</span>
          </h1>

          <p className="text-base sm:text-lg 2xl:text-xl text-stone-200 font-serif font-light leading-relaxed max-w-3xl mt-5 text-stone-300">
            Nơi lưu giữ mười thế kỷ diễn xướng, kết tinh của tiếng trống sân đình, câu hát giao duyên và nhịp đập tâm hồn của người nông dân châu thổ sông Hồng.
          </p>

          {/* CTA Hành động */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={() => onNavigate('/kham-pha/san-khau')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-700 hover:to-amber-600 text-amber-100 font-serif font-semibold text-sm border border-amber-600/40 shadow-xl shadow-black/50 transition-all flex items-center gap-2.5 cursor-pointer hover:scale-[1.02]"
            >
              <Drama className="w-4 h-4 text-amber-300" />
              <span>Khám Phá Sân Khấu</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>

            <button
              onClick={() => onNavigate('/tien-ich/tham-quan-va-su-kien/dat-mua-ve')}
              className="px-7 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 backdrop-blur-sm border border-stone-700/70 text-stone-200 hover:text-white font-serif font-medium text-sm transition-all flex items-center gap-2.5 cursor-pointer hover:border-amber-600/40"
            >
              <Ticket className="w-4 h-4 text-amber-400" />
              <span>Lịch Diễn & Đặt Vé</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. BỐN TRỤ CỘT SÂN KHẤU — Lưới 4 cột ảnh tư liệu giàu cảm xúc
          ========================================================================= */}
      <section className="max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Bốn Trụ Cột Sân Khấu Chèo
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light mt-3 leading-relaxed border-l-2 border-amber-600/60 pl-4">
            Mỗi yếu tố trên manh chiếu chèo cổ truyền đều là một thế giới biểu tượng độc đáo, gắn kết chặt chẽ giữa thanh âm, vũ đạo, sắc phục và hồn cốt nhân vật.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              path: '/kham-pha/san-khau/am-thanh',
              icon: Music,
              title: 'Âm Thanh & Làn Điệu',
              desc: 'Từ nhịp trống đế giòn giã thúc giục hội làng đến tiếng nhị réo rắt ru lòng, hòa trong dàn nhạc Bát âm cổ truyền.',
              image: '/images/sound_dan_nhac.jpg'
            },
            {
              path: '/kham-pha/san-khau/nhan-vat',
              icon: Users,
              title: 'Nhân Vật Ước Lệ',
              desc: 'Đào thương thanh cao, Kép phong nhã, Hề châm biếm sâu cay — những mẫu hình kinh điển soi bóng nhân tình thế thái.',
              image: '/images/char_dao.png'
            },
            {
              path: '/kham-pha/san-khau/trang-phuc',
              icon: Shirt,
              title: 'Trang Phục Cổ Truyền',
              desc: 'Tấm áo tứ thân mộc mạc, dải yếm đào thắm đượm cùng chiếc nón quai thao chuyên chở hồn quê Kinh Bắc ngàn năm.',
              image: '/images/costume_ao_tu_than.jpg'
            },
            {
              path: '/kham-pha/san-khau/tac-pham-tieu-bieu',
              icon: BookOpen,
              title: 'Tác Phẩm Tiêu Biểu',
              desc: 'Khát vọng nhân đạo và đức hy sinh son sắt kết tinh qua Quan Âm Thị Kính, Kim Nham và Lưu Bình Dương Lễ.',
              image: '/images/play_quan_am_thi_kinh.jpg'
            }
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className="group relative rounded-2xl overflow-hidden bg-[#16120f] border border-stone-800/90 hover:border-amber-600/50 transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 flex flex-col"
              >
                {/* Ảnh minh họa với tỷ lệ cân đối */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16120f] via-[#16120f]/30 to-transparent" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-500/50 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Nội dung thẻ */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-stone-100 group-hover:text-amber-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 font-serif font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-800/60 flex items-center justify-between text-xs text-amber-500/80 group-hover:text-amber-300 font-medium">
                    <span className="font-serif italic">Khám phá chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          3. HỒI TỰ SỰ I (SPLIT SO LE): Dòng Chảy Mười Thế Kỷ
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Cột trái (5 cột): Ảnh tư liệu lớn */}
          <div
            onClick={() => onNavigate('/kham-pha/tong-quan/lich-su-phat-trien')}
            className="lg:col-span-5 relative group cursor-pointer"
          >
            <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl aspect-[4/5] max-h-[500px]">
              <img
                src="/images/cheo_gioi_thieu.jpg"
                alt="Không gian diễn xướng Chèo dân gian Bắc Bộ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 inset-x-4 p-4 bg-stone-950/70 backdrop-blur-md rounded-2xl border border-stone-800/80">
                <p className="text-xs font-serif text-stone-300 italic">
                  Chiếu chèo sân đình — Nơi nghệ thuật cất lên từ hơi thở bùn đất và niềm tin tâm linh của làng xã.
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải (7 cột): Bài văn tự sự + Trích dẫn */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
              Từ Manh Chiếu Sân Đình Đến Ký Ức Dân Tộc
            </h2>

            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left">
              Khởi phát từ thế kỷ thứ mười dưới thời Đinh, Chèo đã bám rễ sâu bền vào tâm khảm người dân đất Việt. Chẳng cần rèm gấm lộng lẫy hay bục gỗ cao sang, chỉ cần một manh chiếu cói trải phẳng giữa sân đình, đôi ngọn đuốc thắp sáng đêm hội và tiếng trống đế giục giã liên hồi, cả làng đã có thể quây quần say sưa đón từng vai diễn.
            </p>

            {/* Trích dẫn nghệ nhân */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/25 via-stone-900/40 to-transparent border-l-4 border-amber-500/70 my-4">
              <p className="text-sm sm:text-base font-serif italic text-amber-200/90 leading-relaxed">
                &ldquo;Chiếu chèo mở ra là lòng người mở hội. Đứng trước mái đình rêu phong, người hát đem hết nỗi niềm của đất, của nước và ân tình làng xóm ra mà giãi bày.&rdquo;
              </p>
              <p className="text-xs font-serif text-stone-400 mt-2">
                — Lời tâm huyết của các bậc nghệ nhân chèo cổ truyền
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/kham-pha/tong-quan/lich-su-phat-trien')}
                className="inline-flex items-center gap-2 text-sm font-serif font-semibold text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer"
              >
                <span>Đọc tiếp hành trình lịch sử mười thế kỷ</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC CALLOUT BAND)
          ========================================================================= */}
      <section className="w-full bg-gradient-to-r from-[#14100d] via-amber-950/30 to-[#14100d] border-y border-stone-800/80 py-14 sm:py-18 my-4">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <Sparkles className="w-6 h-6 text-amber-400/80 mx-auto mb-2" />
          <p className="text-lg sm:text-2xl lg:text-3xl font-serif italic text-amber-100/90 font-light leading-relaxed">
            &ldquo;Chèo không chỉ là câu hát trên môi, Chèo là tiếng lòng của người nông dân Bắc Bộ — có nước mắt cảm thông, có tiếng cười trào lộng và có cả đạo lý nhân nghĩa muôn đời.&rdquo;
          </p>
          <div className="pt-2">
            <span className="text-xs sm:text-sm font-serif text-amber-400 font-medium">
              Nghệ nhân Nhân dân Dịu Hương (1919 – 1999)
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. HỒI TỰ SỰ II (SPLIT SO LE CHIỀU NGƯỢC): Nhịp Cầu Số Hóa & Đương Đại
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Cột trái (7 cột): Bài văn tự sự + Cổng dẫn chuyên đề */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
              Bảo Tàng Số — Đánh Thức Di Sản Giữa Thời Đại Mới
            </h2>

            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left">
              Bước vào kỷ nguyên công nghệ, không gian số hóa này được dựng xây không phải để cất giữ những trang tư liệu ngủ yên sau lớp kính, mà để hơi thở của Chèo tiếp tục ngân vang. Từng điệu hát cổ, từng nét vẽ mặt nạ và ngón đàn réo rắt được tái tạo sống động, trở thành cầu nối trao truyền tinh hoa cho thế hệ mai sau.
            </p>

            {/* Các chuyên đề liên quan */}
            <div className="space-y-3 pt-2">
              {[
                {
                  path: '/kham-pha/cheo-hien-dai',
                  title: 'Chèo Hiện Đại & Dấu Ấn UNESCO',
                  desc: 'Hành trình cách tân sân khấu từ năm 1951 và nỗ lực vươn tầm di sản văn hóa nhân loại.'
                },
                {
                  path: '/gioi-thieu/bao-tang-so-cheo',
                  title: 'Không Gian Bảo Tàng Số',
                  desc: 'Ứng dụng công nghệ tương tác phục dựng trọn vẹn dàn nhạc, phục trang và kho tích trò xưa.'
                }
              ].map((item) => (
                <div
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className="flex items-start gap-4 p-4 rounded-xl bg-stone-900/40 hover:bg-stone-900/80 border border-stone-800/80 hover:border-amber-700/50 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-600/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500/20 transition-colors mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-400 font-serif font-light mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-amber-400 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải (5 cột): Ảnh nhạc cụ & phục trang */}
          <div
            onClick={() => onNavigate('/kham-pha/san-khau/am-thanh')}
            className="lg:col-span-5 relative group cursor-pointer order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl aspect-[4/5] max-h-[500px]">
              <img
                src="/images/cheo_instruments.jpg"
                alt="Nhạc cụ truyền thống trong dàn nhạc Chèo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 inset-x-4 p-4 bg-stone-950/70 backdrop-blur-md rounded-2xl border border-stone-800/80">
                <p className="text-xs font-serif text-stone-300 italic">
                  Tiếng trống cơm bập bùng, tiếng nguyệt réo rắt — Thanh âm ngàn năm đang hòa vào nhịp điệu hôm nay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LƯỚI KHÁM PHÁ TIẾP NỐI (EXHIBITION GATEWAYS — 3 CỘT)
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-20 sm:pb-24">
        <div className="max-w-3xl mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Lối Vào Khám Phá & Trải Nghiệm
          </h2>
          <p className="text-sm text-stone-400 font-serif font-light mt-2 leading-relaxed">
            Các tiện ích hỗ trợ quý khách thưởng thức trực tiếp hoặc tra cứu nguồn tư liệu quý giá của bảo tàng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              path: '/tien-ich/tham-quan-va-su-kien/lich-bieu-dien',
              icon: Ticket,
              title: 'Lịch Diễn & Đặt Vé',
              desc: 'Cập nhật các suất diễn cuối tuần, hội đình làng truyền thống và đặt vé rạp trực tuyến thuận tiện.'
            },
            {
              path: '/tien-ich/kho-tu-lieu',
              icon: Headphones,
              title: 'Kho Tư Liệu Âm Thanh',
              desc: 'Thưởng thức những bản thu đĩa than 78 vòng, ký âm làn điệu cổ và kịch bản Hán Nôm nguyên bản.'
            },
            {
              path: '/tien-ich/ban-do-bao-tang',
              icon: MapPin,
              title: 'Bản Đồ Không Gian Trưng Bày',
              desc: 'Sơ đồ định vị phân tầng các phòng hiện vật, phục trang, nhạc cụ và phòng trải nghiệm thực tế ảo.'
            }
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className="group p-7 rounded-2xl bg-stone-900/30 hover:bg-stone-900/60 border border-stone-800/80 hover:border-amber-700/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500/10 group-hover:border-amber-600/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-400 font-serif font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center gap-2 text-xs text-stone-500 group-hover:text-amber-400 font-medium">
                  <span className="font-serif">Vào tra cứu</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          7. LỜI KẾT THI VỊ (POETIC EPILOGUE)
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-20 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16120f]/60 border border-stone-800/60">
          <p className="text-base sm:text-lg font-serif italic text-amber-200/90 leading-relaxed max-w-xl mx-auto">
            &ldquo;Về xem hội hát ngày xuân <br />
            Chiếu chèo trải rộng nghĩa nhân muôn đời.&rdquo;
          </p>
          <p className="text-xs font-serif text-stone-400 mt-4 tracking-wider uppercase">
            — Ca dao đồng bằng châu thổ sông Hồng —
          </p>
        </div>
      </section>
    </div>
  )
}
