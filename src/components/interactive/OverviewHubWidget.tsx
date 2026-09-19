import React from 'react'
import { ArrowRight, History, HeartHandshake, Sparkles } from 'lucide-react'

interface OverviewHubWidgetProps {
  onNavigate?: (path: string) => void
}

const HISTORICAL_ERAS = [
  {
    period: 'Năm 968',
    title: 'Cố Đô Hoa Lư',
    description: 'Bà tổ Phạm Thị Trân được phong chức Ưu Bà, đem lời ca điệu múa và nhịp trống quân doanh rèn luyện binh sĩ nhà Đinh, khai sinh cội nguồn Chèo.',
    image: '/images/cheo_dinh_lang.jpg'
  },
  {
    period: 'Thế kỷ XV – XVIII',
    title: 'Chiếu Chèo Sân Đình',
    description: 'Nghệ thuật Chèo hòa vào đất phù sa, bám rễ sâu trong hội làng Bắc Bộ. Các tích trò mẫu mực như Quan Âm Thị Kính, Lưu Bình Dương Lễ ra đời.',
    image: '/images/cheo_costume.jpg'
  },
  {
    period: 'Thế kỷ XIX – XX',
    title: 'Bước Ra Thành Thị',
    description: 'Sự xuất hiện của Chèo văn minh, Chèo cải lương tại các rạp hát phố cổ Hà Nội, thích ứng với nhịp sống đô thị thời cận đại.',
    image: '/images/cheo_hero.jpg'
  },
  {
    period: '1951 – Nay',
    title: 'Sân Khấu Hóa & UNESCO',
    description: 'Mốc son tái lập Đoàn Chèo Trung ương tại chiến khu Việt Bắc, tiến trình chuyên nghiệp hóa và hành trình đệ trình hồ sơ di sản UNESCO 14 tỉnh thành.',
    image: '/images/cheo_instruments.jpg'
  }
]

export const OverviewHubWidget: React.FC<OverviewHubWidgetProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path)
    }
  }

  return (
    <div className="text-left space-y-20 sm:space-y-28 animate-in fade-in duration-300">
      {/* ================= 1. DOCUMENTARY HERO: NGHÌN NĂM TIẾNG TRỐNG SÂN ĐÌNH ================= */}
      <section className="space-y-6">
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.2]">
            Nghìn Năm Tiếng Trống Sân Đình
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
            Từ kinh đô Hoa Lư thế kỷ thứ X đến không gian hội làng châu thổ sông Hồng, nghệ thuật Chèo là pho biên niên sử sống động về tâm tư, đạo lý và nụ cười của người dân cày Việt Nam qua bao triều đại.
          </p>
        </div>

        {/* Hero Panorama Banner */}
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[260px] sm:min-h-[360px]">
          <img
            src="/images/cheo_dinh_lang.jpg"
            alt="Không gian diễn xướng Chèo sân đình cổ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Câu Ca Dao Khắc Họa Tinh Thần */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10">
            <blockquote className="border-l-2 border-amber-400 pl-4 sm:pl-5 max-w-xl">
              <p className="text-base sm:text-lg font-serif italic text-white leading-snug">
                &ldquo;Chẳng thèm ăn chả ăn nem / Thèm no cơm tẻ, thèm xem hát Chèo.&rdquo;
              </p>
              <cite className="text-xs text-stone-400 font-mono mt-1.5 block not-italic">
                — Ca dao dân gian châu thổ Bắc Bộ
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ================= 2. CHUYÊN ĐỀ 1: BIÊN NIÊN SỬ 10 THẾ KỶ ================= */}
      <section className="space-y-8 pt-10 border-t border-stone-800/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-amber-500 text-xs font-mono uppercase tracking-widest font-semibold">
              <History className="w-4 h-4" />
              <span>Chuyên Đề 01 • Lịch Sử Phát Triển</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Biên Niên Sử Mười Thế Kỷ Diễn Xướng
            </h3>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
              Từ tiếng trống lệnh của bà tổ Phạm Thị Trân đến nhà hát hộp hiện đại, Chèo đã vượt qua ngàn năm dâu bể để giữ vẹn nguyên tinh hoa kịch hát truyền thống.
            </p>
          </div>

          <button
            onClick={() => handleNav('/kham-pha/tong-quan/lich-su-phat-trien')}
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-serif font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer shrink-0"
          >
            <span>Xem chi tiết dòng thời gian</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Mốc Thời Gian Trải Rộng Dạng Lưới Ngang */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          {HISTORICAL_ERAS.map((era, idx) => (
            <div
              key={idx}
              onClick={() => handleNav('/kham-pha/tong-quan/lich-su-phat-trien')}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-stone-900 relative">
                <img
                  src={era.image}
                  alt={era.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-4 text-xs font-mono font-semibold text-amber-400 bg-stone-950/70 px-2.5 py-1 rounded">
                  {era.period}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {era.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  {era.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. CHUYÊN ĐỀ 2: ĐỐI THOẠI TRIẾT LÝ NHÂN SINH ================= */}
      <section className="space-y-12 pt-12 border-t border-stone-800/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-amber-500 text-xs font-mono uppercase tracking-widest font-semibold">
              <HeartHandshake className="w-4 h-4" />
              <span>Chuyên Đề 02 • Chiều Sâu Văn Hóa</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Hai Mặt Đối Lập Trong Tâm Hồn Người Việt
            </h3>
            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed">
              Một buổi biểu diễn Chèo luôn dung chứa hai thái cực: nỗi đau xót xa trước số phận con người và tiếng cười giòn giã quật ngã mọi bất công xã hội.
            </p>
          </div>

          <button
            onClick={() => handleNav('/kham-pha/tong-quan/gia-tri-van-hoa')}
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-serif font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer shrink-0"
          >
            <span>Khám phá giá trị & triết lý</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hai Cột Đối Trọng: Bi Kịch Nhân Quả vs Tiếng Cười Trào Lộng */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-2">
          {/* Cột Trái: Bi Kịch & Lòng Trắc Ẩn */}
          <div className="space-y-6">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-stone-900">
              <img
                src="/images/cheo_costume.jpg"
                alt="Hình tượng người phụ nữ trong Chèo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-serif font-bold text-white">
                Bi Kịch Thân Phận & Đạo Lý Nhân Quả
              </h4>
              <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                Nỗi oan của Thị Kính nương nhờ cửa Phật, sự vùng vẫy muốn bứt phá tự do của Xúy Vân hay đức hy sinh của nàng Châu Long nuôi bạn của chồng ăn học. Chèo trắc ẩn trước nỗi đau thân phận và khẳng định chân lý &ldquo;ở hiền gặp lành&rdquo; sâu sắc.
              </p>
              <p className="text-xs sm:text-sm text-amber-400/90 font-mono">
                Đào thương • Lòng vị tha • Khát vọng giải phóng
              </p>
            </div>
          </div>

          {/* Cột Phải: Tiếng Cười Trào Lộng & Công Lý Dân Gian */}
          <div className="space-y-6">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-stone-900">
              <img
                src="/images/cheo_hero.jpg"
                alt="Tiếng cười Hề Chèo sân đình"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-serif font-bold text-white">
                Tiếng Cười Hề Chèo & Tòa Án Lương Tri
              </h4>
              <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                Chiếc quạt nan phe phẩy ngoáy mũi, bước chân sáo nhảy khập khiễng của anh Hề dám vỗ mặt quan tri huyện, bóc trần thói đạo đức giả của thầy bói, lý trưởng. Chiếu chèo chính là nơi người cùng đinh tự do cười cợt và phán xét cường quyền phong kiến.
              </p>
              <p className="text-xs sm:text-sm text-amber-400/90 font-mono">
                Hề gậy • Tiếng cười châm biếm • Dân chủ làng xã
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. CHUYÊN ĐỀ 3: BA LÁT CẮT HẬU TRƯỜNG ================= */}
      <section className="space-y-10 pt-12 border-t border-stone-800/60 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-amber-500 text-xs font-mono uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Chuyên Đề 03 • Phía Sau Sân Khấu</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Nghệ Thuật Luyện Nghề & Đời Gánh Hát
            </h3>
            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed">
              Để tỏa sáng trên chiếu hoa ba vuông, người nghệ nhân Chèo phải đổ mồ hôi hàng chục năm rèn khẩu thuật, luyện ánh mắt và gìn giữ đạo đức nghề nghiệp.
            </p>
          </div>

          <button
            onClick={() => handleNav('/kham-pha/tong-quan/phia-sau-san-khau')}
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-serif font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer shrink-0"
          >
            <span>Bước vào hậu trường</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Triptych 3 Lát Cắt Hậu Trường */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div
            onClick={() => handleNav('/kham-pha/tong-quan/phia-sau-san-khau')}
            className="group cursor-pointer space-y-4"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900">
              <img
                src="/images/cheo_costume.jpg"
                alt="Hóa trang mặt nạ ước lệ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                Hóa Trang Ước Lệ
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Nét vẽ lông mày xếch, môi thắm hạt sen, chòm râu bạc hay cái mụn ruồi trào lộng. Mỗi nét phấn son đều bộc lộ tính cách nhân vật ngay từ cái liếc mắt đầu tiên.
              </p>
            </div>
          </div>

          <div
            onClick={() => handleNav('/kham-pha/tong-quan/phia-sau-san-khau')}
            className="group cursor-pointer space-y-4"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900">
              <img
                src="/images/cheo_instruments.jpg"
                alt="Khẩu thuật và luyện thanh điệu"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                Khẩu Thuật & Luyện Thanh
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Kỹ thuật hát &ldquo;vang - rền - nền - nảy&rdquo;, nhả chữ nuốt hơi và điều khiển cơ hàm điêu luyện để câu hát vang xa khắp sân đình giữa trời lộng gió.
              </p>
            </div>
          </div>

          <div
            onClick={() => handleNav('/kham-pha/tong-quan/phia-sau-san-khau')}
            className="group cursor-pointer space-y-4"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900">
              <img
                src="/images/cheo_dinh_lang.jpg"
                alt="Nghi lễ cúng tổ & đời nghệ nhân du ca"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                Nghi Lễ Cúng Tổ & Đời Du Ca
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Nén hương thành kính dâng lên Bà tổ Phạm Thị Trân trước giờ mở màn, cùng những chuyến bè gánh đồ diễn xuôi ngược dòng sông đưa câu hát Chèo đến muôn phương.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
