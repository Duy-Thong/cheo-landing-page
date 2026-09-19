import React from 'react'
import { ArrowRight } from 'lucide-react'
import type { RouteNode } from '../../data/sitemapRoutes'
import { SITEMAP_ROUTES } from '../../data/sitemapRoutes'

interface EditorialHubWalkthroughProps {
  route: RouteNode
  onNavigate: (path: string) => void
}

interface ChapterEnrichment {
  chapterTag: string
  leadParagraph: string
  dropCap: string
  quote: string
  tags: string[]
  visualAccent?: string
  buttonText: string
  image: string
}

// Curated editorial enrichments with real local images
const EDITORIAL_ENRICHMENTS: Record<string, ChapterEnrichment> = {
  // Sân Khấu Chèo Hub (/kham-pha/san-khau)
  '/kham-pha/san-khau/nhan-vat': {
    chapterTag: 'CHƯƠNG 01 • LINH HỒN SÂN KHẤU',
    dropCap: 'H',
    leadParagraph: 'Hệ thống nhân vật Chèo cổ mang tính ước lệ và biểu trưng sâu sắc, phân định rõ thiện — ác, chính — tà. Năm mẫu hình Đào, Kép, Hề, Lão, Mụ phản ánh chân thực các tầng lớp xã hội nông thôn Bắc Bộ xưa từ cung đình đến gốc đa bến nước.',
    quote: 'Mầu ơi là Mầu! Nước giếng trong leo lẻo, con cá đớp đớp... Người đâu mà đẹp như trăng rằm thế!',
    tags: ['Đào thương', 'Đào lẳng', 'Kép quân tử', 'Hề chèo dân gian', 'Lão say', 'Mụ ác'],
    visualAccent: '5 Mẫu hình ước lệ',
    buttonText: 'Bước Vào Phòng Nhân Vật',
    image: '/images/cheo_hero.jpg'
  },
  '/kham-pha/san-khau/trang-phuc': {
    chapterTag: 'CHƯƠNG 02 • NGHỆ THUẬT TẠO HÌNH',
    dropCap: 'C',
    leadParagraph: 'Nghệ thuật phục trang lụa là Kinh Bắc với áo tứ thân mớ ba mớ bảy, yếm đào, nón quai thao ba tầm và thắt lưng bao ngũ sắc. Mỗi đường kim mũi chỉ đều phản ánh triết lý Ngũ Hành hòa hợp cùng thẩm mỹ tinh tế của người phụ nữ châu thổ.',
    quote: 'Nào đâu cái yếm lụa sồi / Cái dây lưng đũi nhuộm hồi sang xuân...',
    tags: ['Áo tứ thân mớ ba mớ bảy', 'Nón quai thao', 'Yếm đào khăn mỏ quạ', 'Ngũ sắc Kinh Bắc'],
    visualAccent: 'Sắc phục nhuộm thủ công',
    buttonText: 'Chiêm Ngưỡng Phục Trang',
    image: '/images/cheo_costume.jpg'
  },
  '/kham-pha/san-khau/am-thanh': {
    chapterTag: 'CHƯƠNG 03 • TIẾT TẤU & LÀN ĐIỆU',
    dropCap: 'T',
    leadParagraph: 'Tiếng trống đế giòn giã tùng cắc giữ nhịp cho diễn xướng, kết hợp cùng dàn nhạc Bát âm gồm Đàn nguyệt, Nhị, Sáo trúc và Trống cơm. Hơn 200 làn điệu cổ truyền tạo nên trường âm thanh độc nhất vô nhị.',
    quote: 'Trống Chèo gióng giả đầu đình / Làng trên xóm dưới đượm tình nước non.',
    tags: ['Dàn nhạc Bát âm', 'Nhịp trống đế chỉ huy', '200+ Làn điệu cổ', 'Âm sắc lúa nước'],
    visualAccent: 'Hành trình 4 chặng âm sắc',
    buttonText: 'Vào Thính Phòng Làn Điệu',
    image: '/images/cheo_instruments.jpg'
  },
  '/kham-pha/san-khau/tac-pham-tieu-bieu': {
    chapterTag: 'CHƯƠNG 04 • TÍCH TRÒ MẪU MỰC',
    dropCap: 'T',
    leadParagraph: 'Tứ đại tích Chèo cổ lưu truyền qua hàng trăm năm: Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nham và Trương Viên. Những vở diễn kinh điển kết tinh lòng nhân ái, đức hy sinh và nghĩa khí tri kỷ của tâm hồn người Việt.',
    quote: 'Nỗi oan Thị Kính thấu trời xanh / Lòng son dạ sắt trọn chữ tình non nước.',
    tags: ['Quan Âm Thị Kính', 'Lưu Bình Dương Lễ', 'Xúy Vân giả dại', 'Trương Viên'],
    visualAccent: 'Đỉnh cao kịch bản sân khấu',
    buttonText: 'Khám Phá Kiệt Tác Tích Trò',
    image: '/images/cheo_dinh_lang.jpg'
  },

  // Không Gian Khám Phá Hub (/kham-pha)
  '/kham-pha/tong-quan': {
    chapterTag: 'TRỤ CỘT 01 • CỘI NGUỒN VĂN HÓA',
    dropCap: 'K',
    leadParagraph: 'Khởi đi từ thế kỷ thứ X thời Đinh — Tiền Lê tại kinh đô Hoa Lư với bà tổ nghề Phạm Thị Trân, nghệ thuật Chèo đã bám rễ sâu vào đất phù sa, trở thành tiếng nói của người lao động qua bao thăng trầm lịch sử.',
    quote: 'Chẳng thèm ăn chả ăn nem / Thèm no cơm tẻ, thèm xem hát Chèo.',
    tags: ['Thế kỷ X Hoa Lư', 'Bà tổ Phạm Thị Trân', 'Chiếu chèo sân đình', 'Biên niên sử 1000 năm'],
    visualAccent: 'Biên niên sử 10 thế kỷ',
    buttonText: 'Khám Phá Cội Nguồn Di Sản',
    image: '/images/cheo_dinh_lang.jpg'
  },
  '/kham-pha/san-khau': {
    chapterTag: 'TRỤ CỘT 02 • NGHỆ THUẬT BIỂU DIỄN',
    dropCap: 'T',
    leadParagraph: 'Trưng bày toàn diện 4 yếu tố cấu thành nghệ thuật sân khấu Chèo: hệ thống 5 mẫu hình nhân vật ước lệ, kho tàng phục trang Kinh Bắc, dàn nhạc Bát âm và các kiệt tác tích trò mẫu mực.',
    quote: 'Chiếu chèo trải giữa sân đình / Trống rung một tiếng, muôn tình mở ra.',
    tags: ['5 Mẫu nhân vật', 'Sắc phục Kinh Bắc', 'Dàn nhạc Bát âm', 'Tứ đại tích trò'],
    visualAccent: 'Chiếu Chèo nguyên bản',
    buttonText: 'Bước Vào Không Gian Sân Khấu',
    image: '/images/cheo_costume.jpg'
  },
  '/kham-pha/cheo-hien-dai': {
    chapterTag: 'TRỤ CỘT 03 • BƯỚC CHUYỂN MÌNH',
    dropCap: 'T',
    leadParagraph: 'Tiến trình chuyển dịch lịch sử từ chiếu chèo sân đình sang nhà hát sân khấu chuyên nghiệp từ năm 1951, các thử nghiệm giao thoa đương đại và nỗ lực xây dựng hồ sơ ghi danh di sản UNESCO.',
    quote: 'Gìn giữ cội nguồn không phải là giữ tro tàn, mà là tiếp tục thổi bùng ngọn lửa.',
    tags: ['Mốc son 1951', 'Bộ ba Bài ca giữ nước', 'NSND Tào Mạt', 'Hồ sơ UNESCO'],
    visualAccent: 'Sức sống đương đại',
    buttonText: 'Khám Phá Chèo Hiện Đại',
    image: '/images/cheo_hero.jpg'
  },

  // Không Gian Giới Thiệu Hub (/gioi-thieu)
  '/gioi-thieu/bao-tang-so-cheo': {
    chapterTag: 'CHUYÊN ĐỀ 01 • CÔNG NGHỆ BẢO TỒN',
    dropCap: 'Ứ',
    leadParagraph: 'Ứng dụng công nghệ Web3D tương tác thời gian thực, âm thanh không gian đa kênh và kho lưu trữ mở nhằm đưa nghệ thuật Chèo cổ thoát khỏi nguy cơ mai một, tiếp cận tự nhiên với công chúng trẻ.',
    quote: 'Đem chiếu chèo sân đình xưa đặt lên không gian số của hôm nay.',
    tags: ['Mô hình 3D', 'Âm thanh 24-bit', 'Tương tác Web3D', 'Bảo tàng số'],
    visualAccent: 'Không gian số hóa tương tác',
    buttonText: 'Xem Dự Án Bảo Tàng Số',
    image: '/images/cheo_gioi_thieu.jpg'
  },
  '/gioi-thieu/cau-chuyen-hinh-thanh': {
    chapterTag: 'CHUYÊN ĐỀ 02 • KÝ SỰ ĐIỀN DÃ',
    dropCap: 'H',
    leadParagraph: 'Hành trình hơn 2 năm lặn lội qua các cái nôi chèo cổ vùng đồng bằng Bắc Bộ: làng Khuốc (Thái Bình), Yên Khánh (Ninh Bình), Nam Trực (Nam Định) để ghi chép từng làn điệu từ các nghệ nhân cao niên.',
    quote: 'Những bước chân điền dã thắp lên ngọn lửa hồi sinh di sản cha ông.',
    tags: ['2+ Năm điền dã', 'Làng Chèo Khuốc', 'Ghi âm nghệ nhân', 'Tư liệu quý'],
    visualAccent: 'Hành trình tìm về cội rễ',
    buttonText: 'Đọc Ký Sự Điền Dã',
    image: '/images/cheo_dinh_lang.jpg'
  },
  '/gioi-thieu/muc-tieu-va-y-nghia': {
    chapterTag: 'CHUYÊN ĐỀ 03 • SỨ MỆNH VĂN HÓA',
    dropCap: 'Đ',
    leadParagraph: 'Định vị vai trò cốt lõi của Chèo trong bản sắc văn hóa Việt: bảo tồn chuẩn mực nguyên bản, đưa di sản vào giáo dục học đường và kết nối mạng lưới bảo tàng quốc tế.',
    quote: 'Giữ lại nụ cười Hề Chèo là giữ lại lương tri và trí tuệ ngàn đời của người Việt.',
    tags: ['Bảo tồn nguyên bản', 'Học đường di sản', 'Hồ sơ UNESCO', 'Lan tỏa văn hóa'],
    visualAccent: 'Tầm nhìn 2025 — 2030',
    buttonText: 'Xem Sứ Mệnh Chiến Lược',
    image: '/images/cheo_kham_pha.jpg'
  },
  '/gioi-thieu/doi-ngu-nhom-thuc-hien': {
    chapterTag: 'CHUYÊN ĐỀ 04 • CON NGƯỜI DỰ ÁN',
    dropCap: 'S',
    leadParagraph: 'Sự chung tay tâm huyết giữa Hội đồng cố vấn khoa học hàng đầu (GS.NSND Trần Bảng, PGS.TS Nguyễn Thị Minh Thái), các nghệ nhân dân gian làng cổ và đội ngũ kỹ sư công nghệ trẻ.',
    quote: 'Sự tiếp nối thế hệ là chìa khóa duy nhất để di sản sống mãi cùng thời gian.',
    tags: ['GS.NSND Trần Bảng', 'Nghệ nhân Nhân dân', 'Kỹ sư Web3D', 'Nhóm sáng lập'],
    visualAccent: 'Hội đồng cố vấn & Nghệ nhân',
    buttonText: 'Xem Đội Ngũ Thực Hiện',
    image: '/images/cheo_hero.jpg'
  }
}

export const EditorialHubWalkthrough: React.FC<EditorialHubWalkthroughProps> = ({
  route,
  onNavigate
}) => {
  const children = (route.childrenPaths || [])
    .map(p => SITEMAP_ROUTES[p])
    .filter(Boolean)

  const isStageHub = route.path === '/kham-pha/san-khau'
  const isKhamPhaHub = route.path === '/kham-pha'
  const isGioiThieuHub = route.path === '/gioi-thieu'

  // Lời dẫn nhập mở đầu thanh thoát — Thay thế hoàn toàn dải số thống kê kiểu dashboard
  let leadIntroText = route.description
  if (isKhamPhaHub) {
    leadIntroText = 'Nghệ thuật Chèo là pho biên niên sử sống động của nền văn minh lúa nước sông Hồng, trải dài hơn mười thế kỷ từ kinh đô Hoa Lư đến các chiếu chèo sân đình hội làng. Nơi đây kết tinh vẻ đẹp ước lệ của nghệ thuật diễn xướng dân gian, những làn điệu thắm đượm tình quê và nụ cười lạc quan của tâm hồn người Việt.'
  } else if (isStageHub) {
    leadIntroText = 'Chiếu hoa trải giữa sân đình, tiếng trống đế gióng giả mở màn cho một thế giới ước lệ nhiệm màu. Bốn trụ cột nghệ thuật — Nhân vật, Phục trang, Âm sắc và Tích trò — hòa quyện tạo nên không gian diễn xướng kinh điển của kịch hát dân tộc.'
  } else if (isGioiThieuHub) {
    leadIntroText = 'Dự án Bảo tàng Chèo Số ra đời từ khát vọng gìn giữ và số hóa kho tàng diễn xướng dân gian Bắc Bộ. Bằng công nghệ tương tác hiện đại và các tư liệu điền dã quý giá, chúng tôi mong muốn đưa chiếu chèo truyền thống đến gần hơn với công chúng đương đại.'
  }

  return (
    <div className="text-left">
      {/* ================= 1. LỜI DẪN NHẬP MỞ ĐẦU THOÁNG ĐÃNG ================= */}
      <section className="pb-6 sm:pb-8 border-b border-stone-800/60 mb-6 sm:mb-10">
        <p className="text-sm sm:text-base font-serif font-light text-stone-300/90 leading-relaxed max-w-2xl">
          {leadIntroText}
        </p>
      </section>

      {/* ================= 2. CÁC SECTION MỞ THOÁNG (LANDING PAGE STYLE — KHÔNG ĐÓNG KHUNG HỘP) ================= */}
      <div className="divide-y divide-stone-800/60">
        {children.map((child, idx) => {
          const isEven = idx % 2 === 0
          const enrichment = EDITORIAL_ENRICHMENTS[child.path] || {
            chapterTag: `PHÂN KHU 0${idx + 1} • ${child.category.toUpperCase()}`,
            dropCap: child.title.charAt(0),
            leadParagraph: child.description,
            quote: 'Chẳng thèm ăn chả ăn nem / Thèm no cơm tẻ, thèm xem hát Chèo.',
            tags: child.tags || [],
            visualAccent: child.title,
            buttonText: `Bước Vào ${child.title}`,
            image: '/images/cheo_hero.jpg'
          }

          const chapterNum = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`

          return (
            <section
              key={child.path}
              className="py-16 sm:py-24 first:pt-4 last:pb-12 relative"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Image Column — Ảnh lớn, mở thoáng, không dán badge */}
                <div
                  className={`relative ${
                    isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'
                  }`}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-stone-900 shadow-2xl group cursor-pointer"
                    onClick={() => onNavigate(child.path)}
                  >
                    <img
                      src={enrichment.image}
                      alt={child.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Số Thứ Tự Nhẹ Nhàng */}
                    <div className="absolute top-4 right-5 text-4xl sm:text-6xl font-mono font-black text-white/20 select-none">
                      {chapterNum}
                    </div>
                  </div>
                </div>

                {/* Text Content Column — Chữ tự do, mở thoáng, chuẩn landing page */}
                <div
                  className={`space-y-5 ${
                    isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
                    {child.title}
                  </h3>

                  <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                    {enrichment.leadParagraph}
                  </p>



                  {/* Nút Chuyển Trang Chuẩn Landing Page */}
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate(child.path)}
                      className="inline-flex items-center gap-3 text-sm sm:text-base font-serif font-bold text-amber-400 hover:text-amber-300 transition-all cursor-pointer group/btn"
                    >
                      <span>{enrichment.buttonText}</span>
                      <ArrowRight className="w-4 h-4 text-amber-400 group-hover/btn:translate-x-2 transition-transform" />
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
