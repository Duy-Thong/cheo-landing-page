import React, { useState, useEffect } from 'react'
import { ArrowLeft, Sparkles, ChevronRight } from 'lucide-react'

interface CostumeArtifact {
  id: string
  name: string
  role: string
  image: string
  description: string
  materials: string
  colorSignificance: string
  accessories: string
}

const COSTUMES_DATA: CostumeArtifact[] = [
  {
    id: 'ao-tu-than',
    name: 'Áo Tứ Thân & Yếm Đào',
    role: 'Phục trang chuẩn mực của Đào Chèo',
    image: '/images/costume_ao_tu_than.jpg',
    description: 'Bốn tà áo tượng trưng cho tứ thân phụ mẫu (cha mẹ mình và cha mẹ chồng). Hai vạt trước buộc vạt chéo tượng trưng cho tình nghĩa vợ chồng son sắt gắn bó. Yếm đào lụa tơ tằm thắm đượm nét duyên dáng người con gái thôn quê.',
    materials: 'Lụa tơ tằm Vạn Phúc dệt tay, nhuộm củ nâu, nhuộm lá chàm tự nhiên',
    colorSignificance: 'Màu nâu trầm thể hiện sự tần tảo chịu thương chịu khó; sắc thắm yếm đào hé lộ khát vọng tình yêu đôi lứa.',
    accessories: 'Khăn mỏ quạ đen tuyền vấn tóc, dải yếm lụa hồng đào, thắt lưng xanh hoa lý'
  },
  {
    id: 'non-quai-thao',
    name: 'Nón Ba Tầm (Nón Quai Thao)',
    role: 'Đạo cụ múa & biểu cảm của Đào Chèo',
    image: '/images/costume_non_quai_thao.jpg',
    description: 'Chiếc nón tròn phẳng rộng vành làm bằng lá cọ khâu chỉ guột. Nón không chỉ che nắng che mưa mà là đạo cụ diễn xuất che nửa khuôn mặt e ấp thẹn thùng, tạo khoảng cách ước lệ đầy duyên dáng.',
    materials: 'Lá gồi trắng phơi sương, sợi guột chuốt nhẵn, quai thao dệt bằng tơ tằm tết tua rua',
    colorSignificance: 'Màu trắng ngà của lá cọ đối lập với quai thao đen huyền, làm nổi bật khuôn mặt thanh tú của người diễn viên.',
    accessories: 'Quai thao dệt từ tơ tằm nguyên chất thả chùng dài ngang ngực'
  },
  {
    id: 'ao-ngu-than-kep',
    name: 'Áo Ngũ Thân & Khăn Xếp',
    role: 'Trang phục đĩnh đạc của Kép Chèo',
    image: '/images/costume_ao_ngu_than.jpg',
    description: 'Năm thân áo tượng trưng cho ngũ thường (Nhân - Lễ - Nghĩa - Trí - Tín). Thân áo thẳng thớm, cổ đứng kín đáo thể hiện phong thái đĩnh đạc, nho nhã của đấng nam nhi quân tử.',
    materials: 'Gấm hoa chìm hoặc the dệt sợi tơ, cúc đồng bọc vải thủ công',
    colorSignificance: 'Sắc xanh lam, tím than hoặc đen bóng biểu thị sự điềm đạm, khiêm nhường và trí tuệ thâm sâu.',
    accessories: 'Khăn xếp vấn nhiều nếp ngay ngắn, quạt giấy viết thơ chữ Hán'
  },
  {
    id: 'ao-ba-ba-he',
    name: 'Áo Cộc Hề Chèo & Gậy Tre',
    role: 'Trang phục trào lộng của Hề Sân Đình',
    image: '/images/costume_ao_ba_ba_he.jpg',
    description: 'Chiếc áo ngắn vá chằng vá đụp hoặc áo lửng cài lệch, ống quần xắn cao khập khiễng. Trang phục phản ánh thân phận dân nghèo tôi đòi nhưng chứa đựng sự tự do và tiếng cười châm biếm.',
    materials: 'Vải thô mộc nhuộm nâu gụ, sợi gai gai ráp',
    colorSignificance: 'Màu nâu đất mộc mạc gợi sự gắn bó máu thịt với đồng ruộng và giai cấp lao động bần hàn.',
    accessories: 'Gậy tre uốn cong tạo hình con rắn hoặc chiếc quạt nan rách tơi tả'
  }
]

interface CostumesShowcaseProps {
  currentPath?: string
  onNavigate?: (path: string) => void
}

export const CostumesShowcase: React.FC<CostumesShowcaseProps> = ({
  currentPath,
  onNavigate
}) => {
  const pathId = currentPath?.split('/').pop()
  const foundCostume = COSTUMES_DATA.find(c => c.id === pathId) || null
  const [selectedCostume, setSelectedCostume] = useState<CostumeArtifact | null>(foundCostume)

  useEffect(() => {
    const pId = currentPath?.split('/').pop()
    const found = COSTUMES_DATA.find(c => c.id === pId)
    setSelectedCostume(found || null)
  }, [currentPath])

  const handleSelect = (costume: CostumeArtifact) => {
    setSelectedCostume(costume)
    if (onNavigate) {
      onNavigate(`/kham-pha/san-khau/trang-phuc/${costume.id}`)
    }
  }

  const handleBack = () => {
    setSelectedCostume(null)
    if (onNavigate) {
      onNavigate('/kham-pha/san-khau/trang-phuc')
    }
  }

  // GIAO DIỆN CHI TIẾT KHI CHỌN 1 PHỤC TRANG (PROGRESSIVE DISCLOSURE)
  if (selectedCostume) {
    return (
      <div className="w-full text-left animate-in fade-in duration-300 space-y-10">
        {/* Thanh điều hướng quay lại */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800/60">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại bộ sưu tập phục trang</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500/90 font-medium">
            {selectedCostume.role}
          </span>
        </div>

        {/* Banner tiêu đề hiện vật */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-stone-800/60 pb-10">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {selectedCostume.name}
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed">
              {selectedCostume.description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-950 relative">
              <img
                src={selectedCostume.image}
                alt={selectedCostume.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Nội dung phân tích sâu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-2">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-amber-400">
                Ý Nghĩa Biểu Tượng & Điển Tích
              </h2>
              <p className="text-base sm:text-lg text-stone-200 font-serif font-light leading-relaxed">
                {selectedCostume.description}
              </p>
            </div>

            <div className="py-8 border-y border-stone-800/70 space-y-3">
              <h2 className="text-xl font-serif font-bold text-amber-400">
                Triết Lý Ngũ Hành Trong Sắc Áo
              </h2>
              <p className="text-base text-stone-300 font-serif font-light leading-relaxed">
                {selectedCostume.colorSignificance}
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-stone-800/60 lg:pl-8 space-y-8">
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Chất Liệu Dệt May
              </h3>
              <p className="text-sm font-serif text-amber-300/90 leading-snug">
                {selectedCostume.materials}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Phụ Kiện Đi Kèm
              </h3>
              <p className="text-sm text-stone-300 font-serif font-light leading-relaxed">
                {selectedCostume.accessories}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-stone-800/50">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500">
                Quy Chuẩn Ước Lệ Sân Đình
              </h3>
              <p className="text-xs text-stone-400 font-serif font-light leading-relaxed">
                Phục trang Chèo gắn chặt với quy ước sân khấu: nhìn sắc áo thấu phận người, từ bậc đài các phong lưu đến kẻ bần hàn tôi tớ.
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }

  // GIAO DIỆN TỔNG QUAN HỒI TỰ SỰ SO LE 12 CỘT (SPLIT-SCREEN EXHIBITION LAYOUT)
  return (
    <div className="w-full text-left space-y-16 sm:space-y-24 animate-in fade-in duration-300">
      {/* ── 1. CINEMA OVERLAY HERO BANNER (100VW FULL VIEWPORT WIDTH & COMPACT HEIGHT) ── */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 sm:-mt-14 overflow-hidden shadow-2xl border-b border-stone-800 bg-stone-950 h-[280px] sm:h-[340px] lg:h-[380px] flex items-end group mb-12 sm:mb-16">
        <img
          src="/images/kham-pha/san-khau/trang_phuc_hero.jpg"
          alt="Sắc Phục Chèo Cổ"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/15" />

        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8 space-y-2.5">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md">
            Sắc Phục &amp; Phục Sức Sân Đình
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-stone-200 font-serif font-light leading-relaxed drop-shadow max-w-4xl">
            <span className="float-left text-3xl sm:text-4xl font-serif font-bold text-amber-400 leading-none pr-2.5 pt-0.5">T</span>
            rong nghệ thuật Chèo cổ, phục trang không đơn thuần là trang phục biểu diễn mà là ngôn ngữ ước lệ thẩm mỹ sâu sắc. Từ dải yếm đào thắm đượm duyên xuân của nàng Đào đến nếp áo ngũ thân đĩnh đạc của Kép quân tử, mỗi đường kim mũi chỉ đều phản ánh căn tính, địa vị và tâm hồn nhân vật trên manh chiếu sân đình.
          </p>
        </div>
      </section>

      {/* ── 2. LƯỚI THẺ KHẢO CỨU PHỤC TRANG 4 CỘT (4-COLUMN EXHIBITION GALLERY GRID) ── */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-stone-800/60 pb-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Bộ Sưu Tập Phục Trang Mẫu Mực
          </h2>
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest font-semibold hidden sm:inline">
            4 Hiện Vật Tiêu Biểu
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COSTUMES_DATA.map((costume) => (
            <div
              key={costume.id}
              onClick={() => handleSelect(costume)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 hover:border-amber-700/50 transition-all duration-500 flex flex-col shadow-xl"
            >
              <div className="aspect-[3/4] w-full overflow-hidden relative bg-stone-950">
                <img
                  src={costume.image}
                  alt={costume.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {costume.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-serif text-amber-400 block font-medium">
                    {costume.role}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed line-clamp-3">
                    {costume.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-800/60 flex items-center justify-between text-xs font-serif text-amber-400 font-medium">
                  <span>Xem khảo cứu chi tiết</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC VISUAL CALLOUT) ── */}
      <section className="relative rounded-3xl overflow-hidden border border-amber-900/40 bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 p-8 sm:p-14 text-center space-y-4 shadow-2xl">
        <Sparkles className="w-8 h-8 text-amber-500/80 mx-auto animate-pulse" />
        <p className="text-lg sm:text-2xl font-serif italic text-amber-100 max-w-4xl mx-auto leading-relaxed">
          &ldquo;Tháo quai thao nghiêng nón trao tình, tà áo tứ thân gói trọn nỗi lòng người con gái Kinh Bắc.&rdquo;
        </p>
        <span className="text-xs font-serif text-amber-400/80 uppercase tracking-widest block">
          Khẩu quyết xưng danh sân khấu Chèo cổ
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
            onClick={() => onNavigate?.('/kham-pha/san-khau/vai-dien')}
            className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
          >
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
              Mẫu Hình Vai Diễn
            </h3>
            <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
              Khám phá năm mẫu hình nhân vật chuẩn mực: Đào, Kép, Lão, Mẫu và Hề Chèo trên sân đình.
            </p>
            <span className="text-xs text-amber-500 font-serif block group-hover:translate-x-1 transition-transform">
              Bắt đầu khám phá &rarr;
            </span>
          </div>

          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/vu-dao')}
            className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
          >
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
              Quy Ước Vũ Đạo & Cử Chỉ
            </h3>
            <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
              Thưởng thức nghệ thuật múa quạt, điệu vắt tà và ngôn ngữ hình thể ước lệ cổ truyền.
            </p>
            <span className="text-xs text-amber-500 font-serif block group-hover:translate-x-1 transition-transform">
              Bắt đầu khám phá &rarr;
            </span>
          </div>

          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
          >
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
              Thanh Âm & Làn Điệu
            </h3>
            <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
              Lắng nghe sáu nhạc khí Dàn Bát Âm cùng kho tàng hơn 200 làn điệu Chèo Kinh Bắc.
            </p>
            <span className="text-xs text-amber-500 font-serif block group-hover:translate-x-1 transition-transform">
              Bắt đầu khám phá &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* ── 5. LỜI KẾT THI VỊ (POETIC EPILOGUE) ── */}
      <footer className="pt-8 border-t border-stone-800/60 text-center space-y-3 max-w-2xl mx-auto">
        <p className="font-serif italic text-stone-400 text-sm sm:text-base leading-relaxed">
          &ldquo;Chiếu chèo trải rộng giữa sân đình / Phục sắc hoa thêu thắm nghĩa tình / Người về nhắn lại người đi / Áo nâu yếm thắm mãi ghi lòng người.&rdquo;
        </p>
        <span className="text-xs font-serif text-amber-500/80 block uppercase tracking-widest">
          Bảo Tàng Chèo Số &bull; Khảo Cứu Phục Trang Sân Đình
        </span>
      </footer>
    </div>
  )
}
