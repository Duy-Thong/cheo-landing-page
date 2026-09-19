import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

interface CostumeArtifact {
  id: string
  name: string
  role: string
  image: string
  description: string
  materials: string
  colorSignificance: string
  accessories: string
  badge: string
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
    accessories: 'Khăn mỏ quạ đen tuyền vấn tóc, dải yếm lụa hồng đào, thắt lưng xanh hoa lý',
    badge: 'Trang Phục Biểu Tượng'
  },
  {
    id: 'non-quai-thao',
    name: 'Nón Ba Tầm (Nón Quai Thao)',
    role: 'Đạo cụ múa & biểu cảm của Đào Chèo',
    image: '/images/costume_non_quai_thao.jpg',
    description: 'Chiếc nón tròn phẳng rộng vành làm bằng lá cọ khâu chỉ guột. Nón không chỉ che nắng che mưa mà là đạo cụ diễn xuất che nửa khuôn mặt e ấp thẹn thùng, tạo khoảng cách ước lệ đầy duyên dáng.',
    materials: 'Lá gồi trắng phơi sương, sợi guột chuốt nhẵn, quai thao dệt bằng tơ tằm tết tua rua',
    colorSignificance: 'Màu trắng ngà của lá cọ đối lập với quai thao đen huyền, làm nổi bật khuôn mặt thanh tú của người diễn viên.',
    accessories: 'Quai thao dệt từ tơ tằm nguyên chất thả chùng dài ngang ngực',
    badge: 'Đạo Cụ Trữ Tình'
  },
  {
    id: 'ao-ngu-than-kep',
    name: 'Áo Ngũ Thân & Khăn Xếp',
    role: 'Trang phục đĩnh đạc của Kép Chèo',
    image: '/images/costume_ao_ngu_than.jpg',
    description: 'Năm thân áo tượng trưng cho ngũ thường (Nhân - Lễ - Nghĩa - Trí - Tín). Thân áo thẳng thớm, cổ đứng kín đáo thể hiện phong thái đĩnh đạc, nho nhã của đấng nam nhi quân tử.',
    materials: 'Gấm hoa chìm hoặc the dệt sợi tơ, cúc đồng bọc vải thủ công',
    colorSignificance: 'Sắc xanh lam, tím than hoặc đen bóng biểu thị sự điềm đạm, khiêm nhường và trí tuệ thâm sâu.',
    accessories: 'Khăn xếp vấn nhiều nếp ngay ngắn, quạt giấy viết thơ chữ Hán',
    badge: 'Phong Thái Nho Nhã'
  },
  {
    id: 'ao-ba-ba-he',
    name: 'Áo Cộc Hề Chèo & Gậy Tre',
    role: 'Trang phục trào lộng của Hề Sân Đình',
    image: '/images/costume_ao_ba_ba_he.jpg',
    description: 'Chiếc áo ngắn vá chằng vá đụp hoặc áo lửng cài lệch, ống quần xắn cao khập khiễng. Trang phục phản ánh thân phận dân nghèo tôi đòi nhưng chứa đựng sự tự do và tiếng cười châm biếm.',
    materials: 'Vải thô mộc nhuộm nâu gụ, sợi gai gai ráp',
    colorSignificance: 'Màu nâu đất mộc mạc gợi sự gắn bó máu thịt với đồng ruộng và giai cấp lao động bần hàn.',
    accessories: 'Gậy tre uốn cong tạo hình con rắn hoặc chiếc quạt nan rách tơi tả',
    badge: 'Dấu Ấn Trào Phúng'
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

  // GIAO DIỆN CHI TIẾT 1 HIỆN VẬT PHỤC TRANG
  if (selectedCostume) {
    return (
      <div className="text-left animate-in fade-in duration-300 space-y-10">
        {/* Nút quay lại tinh giản */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800/50">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Quay lại bộ sưu tập phục trang</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            {selectedCostume.role}
          </span>
        </div>

        {/* Giới thiệu phục trang — Gọn gàng, thoáng đãng, không choán hết màn hình */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center border-b border-stone-800/60 pb-8">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
              {selectedCostume.role}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              {selectedCostume.name}
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-2xl leading-relaxed">
              {selectedCostume.description}
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="aspect-[4/3] max-h-56 rounded-2xl overflow-hidden shadow-xl border border-stone-800/80 bg-stone-900">
              <img
                src={selectedCostume.image}
                alt={selectedCostume.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Nội dung phục trang */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-2">
          {/* Cột chính: Cấu tạo & Ý nghĩa màu sắc */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                Cấu Tạo & Điển Tích
              </h3>
              <p className="text-base sm:text-lg text-stone-200 font-serif font-light leading-relaxed">
                {selectedCostume.description}
              </p>
            </div>

            <div className="py-8 border-y border-stone-800/70 my-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400/90 font-semibold">
                Ý Nghĩa Màu Sắc Ngũ Hành
              </h3>
              <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                {selectedCostume.colorSignificance}
              </p>
            </div>
          </div>

          {/* Cột phụ: Chất liệu & Phụ kiện đi kèm */}
          <aside className="lg:col-span-4 lg:border-l lg:border-stone-800/60 lg:pl-8 space-y-8">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block">
                Chất Liệu Dệt May
              </span>
              <p className="text-sm font-serif text-amber-300/90 leading-snug">
                {selectedCostume.materials}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block">
                Phụ Kiện Đi Kèm
              </span>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                {selectedCostume.accessories}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block">
                Quy Chuẩn Ước Lệ
              </span>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Phục trang Chèo gắn chặt với quy ước sân khấu: nhìn sắc áo là thấu phận người, từ người giàu sang danh giá đến kẻ bần hàn tôi tớ.
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }

  // GIAO DIỆN DANH SÁCH 4 HIỆN VẬT PHỤC TRANG
  return (
    <div className="space-y-8 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-stone-800/40">
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Bộ Sưu Tập Sắc Phục Kinh Bắc
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Chọn một hiện vật để khám phá kỹ thuật dệt may và triết lý ngũ hành
          </p>
        </div>
        <span className="text-xs text-amber-500/80 font-mono">04 Hiện Vật</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COSTUMES_DATA.map((costume, idx) => (
          <div
            key={costume.id}
            onClick={() => handleSelect(costume)}
            className="group cursor-pointer space-y-3"
          >
            {/* Ảnh Hiện Vật */}
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-stone-900 relative">
              <img
                src={costume.image}
                alt={costume.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 text-3xl font-mono font-black text-white/20 select-none">
                0{idx + 1}
              </div>
            </div>

            {/* Thông tin hiện vật: Chỉ tên và phân vai ngắn gọn */}
            <div className="space-y-1">
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                {costume.name}
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-serif font-light">
                {costume.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
