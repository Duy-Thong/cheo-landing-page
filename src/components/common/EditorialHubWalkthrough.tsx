import React from 'react'
import { ArrowRight, Sparkles, Quote } from 'lucide-react'
import type { RouteNode } from '../../data/sitemapRoutes'
import { SITEMAP_ROUTES } from '../../data/sitemapRoutes'

interface EditorialHubWalkthroughProps {
  route: RouteNode
  onNavigate: (path: string) => void
}

interface ChapterEnrichment {
  title: string
  leadParagraph: string
  quote: string
  quoteAuthor?: string
  buttonText: string
  image: string
  imageCaption: string
}

interface HubMeta {
  title: string
  epigraph: string
  leadText: string
  heroImage: string
  heroCaption: string
  panoramicQuote: {
    text: string
    author: string
  }
  epilogue: {
    poem: string
    source: string
  }
}

// Dữ liệu nội dung tự sự chuẩn hóa cho các không gian Hub triển lãm
const HUB_METADATA: Record<string, HubMeta> = {
  // Hub: Không Gian Sân Khấu Chèo (/kham-pha/san-khau)
  '/kham-pha/san-khau': {
    title: 'Không Gian Sân Khấu Chèo',
    epigraph: 'Chiếu hoa trải giữa sân đình, tiếng trống đế gióng giả mở màn cho một thế giới ước lệ nhiệm màu.',
    leadText: 'Bốn trụ cột nghệ thuật — Nhân vật ước lệ, Phục trang ngũ sắc, Dàn nhạc Bát âm và Tích trò kinh điển — hòa quyện chặt chẽ trên manh chiếu cói mộc mạc. Không cần bục cao rèm lộng, Chèo kéo người xem và người diễn lại gần nhau trong một trường thẩm mỹ dân gian độc nhất vô nhị.',
    heroImage: '/images/cheo_hero.jpg',
    heroCaption: 'Toàn cảnh diễn xướng Chèo cổ truyền — Nơi thanh âm, sắc màu và điệu múa hòa quyện giữa lòng hội làng.',
    panoramicQuote: {
      text: 'Chèo là nghệ thuật tổng hợp độc nhất vô nhị: hát để nói, múa để đi, diễn để gợi mở — tất cả quy về cái Tâm và cái Tình của con người Việt Nam.',
      author: 'GS. NSND Trần Bảng — Trùm Chèo thời hiện đại'
    },
    epilogue: {
      poem: 'Chẳng thèm ăn chả ăn nem\nThèm no cơm tẻ, thèm xem hát Chèo.',
      source: 'Ca dao cổ truyền châu thổ sông Hồng'
    }
  },

  // Hub: Không Gian Khám Phá Di Sản (/kham-pha)
  '/kham-pha': {
    title: 'Không Gian Khám Phá Di Sản',
    epigraph: 'Mười thế kỷ bồi đắp câu hát, nuôi dưỡng nhịp đập tâm hồn của bao thế hệ người Việt.',
    leadText: 'Hành trình khám phá nghệ thuật Chèo là chuyến hành hương về cội nguồn văn hóa sông Hồng. Từ mốc son khởi thủy thời nhà Đinh tại kinh đô Hoa Lư, qua manh chiếu sân đình hội làng, đến bước chuyển mình rực rỡ trên sân khấu đương đại — mỗi thời kỳ đều để lại những trầm tích văn hóa thiêng liêng bất tử.',
    heroImage: '/images/cheo_dinh_lang.jpg',
    heroCaption: 'Mái đình rêu phong — Chiếc nôi nuôi dưỡng và chở che tiếng hát Chèo qua mười thế kỷ thăng trầm.',
    panoramicQuote: {
      text: 'Gìn giữ cội nguồn không phải là gìn giữ đống tro tàn, mà là tiếp tục thắp lên và trao truyền ngọn lửa thiêng của cha ông.',
      author: 'Lời tâm niệm của các nghệ nhân dân gian làng Chèo Khuốc'
    },
    epilogue: {
      poem: 'Hỡi cô thắt dải lưng xanh\nCó nghe tiếng trống chèo quanh mái đình.',
      source: 'Hát ví dân gian Bắc Bộ'
    }
  },

  // Hub: Không Gian Giới Thiệu (/gioi-thieu)
  '/gioi-thieu': {
    title: 'Câu Chuyện Bảo Tàng Số',
    epigraph: 'Kết nối quá khứ với tương lai bằng nhịp cầu công nghệ và tấm lòng trân quý cội nguồn.',
    leadText: 'Dự án Bảo Tàng Chèo Số ra đời từ những bước chân điền dã không mỏi qua các làng chèo cổ vùng đồng bằng Bắc Bộ. Chúng tôi gom nhặt từng làn điệu mộc, từng manh áo phục trang xưa và lời răn dạy của các nghệ nhân cao niên để dựng xây một không gian văn hóa mở — nơi di sản tiếp tục sống trong tâm thức người trẻ.',
    heroImage: '/images/cheo_gioi_thieu.jpg',
    heroCaption: 'Số hóa tư liệu di sản — Hành trình phụng sự và bảo tồn di sản văn hóa phi vật thể cho muôn đời sau.',
    panoramicQuote: {
      text: 'Một dân tộc biết lắng nghe và tự hào về câu hát của tổ tiên là một dân tộc có cội rễ vững bền trước mọi đổi thay của thời đại.',
      author: 'Lời đề tựa Không gian Bảo Tàng Chèo Số'
    },
    epilogue: {
      poem: 'Về xem hội hát ngày xuân\nChiếu chèo trải rộng nghĩa nhân muôn đời.',
      source: 'Ca dao đồng bằng châu thổ sông Hồng'
    }
  }
}

// Chi tiết từng chương tự sự so le với hình ảnh tư liệu đích thực
const EDITORIAL_ENRICHMENTS: Record<string, ChapterEnrichment> = {
  // Sân Khấu Chèo Hub (/kham-pha/san-khau)
  '/kham-pha/san-khau/nhan-vat': {
    title: 'Hệ Thống Nhân Vật Ước Lệ',
    leadParagraph: 'Hệ thống nhân vật Chèo cổ mang tính ước lệ và biểu trưng sâu sắc: Đào đoan trang hay lẳng lơ, Kép chính trực nho nhã, Hề châm biếm sâu cay, Lão từng trải và Mụ cay nghiệt. Mỗi bước đi, cái liếc mắt, nụ cười đều phản ánh chân thực các tầng lớp xã hội nông thôn Bắc Bộ xưa từ cửa đình đến gốc đa bến nước.',
    quote: 'Mầu ơi là Mầu! Nước giếng trong leo lẻo, con cá đớp đớp... Người đâu mà đẹp như trăng rằm thế!',
    quoteAuthor: 'Trích tích trò cổ Quan Âm Thị Kính',
    buttonText: 'Bước Vào Gian Nhân Vật',
    image: '/images/char_dao.jpg',
    imageCaption: 'Tạo hình Đào thương thanh cao — Đỉnh cao biểu cảm ước lệ của sân khấu Chèo cổ.'
  },
  '/kham-pha/san-khau/trang-phuc': {
    title: 'Phục Trang & Tố Chất Kinh Bắc',
    leadParagraph: 'Nghệ thuật phục trang lụa là Kinh Bắc với áo tứ thân mớ ba mớ bảy, yếm đào, nón quai thao ba tầm và thắt lưng bao ngũ sắc. Mỗi đường kim mũi chỉ, mỗi gam màu đều tuân thủ triết lý Ngũ Hành hòa hợp, vừa kín đáo mộc mạc lại vừa tôn vinh nét duyên ngầm của người phụ nữ châu thổ sông Hồng.',
    quote: 'Nào đâu cái yếm lụa sồi / Cái dây lưng đũi nhuộm hồi sang xuân...',
    quoteAuthor: 'Nhà thơ Nguyễn Bính',
    buttonText: 'Chiêm Ngưỡng Gian Phục Trang',
    image: '/images/costume_ao_tu_than.jpg',
    imageCaption: 'Áo tứ thân và dải yếm thắm — Biểu tượng vẻ đẹp đoan trang của người phụ nữ Kinh Bắc.'
  },
  '/kham-pha/san-khau/am-thanh': {
    title: 'Âm Sắc Tiếng Trống & Dàn Bát Âm',
    leadParagraph: 'Tiếng trống đế giòn giã tùng cắc giữ nhịp chỉ huy cho toàn bộ diễn xướng, kết hợp cùng đàn nguyệt réo rắt, đàn nhị thiết tha, sáo trúc trong trẻo và trống cơm bập bùng. Hơn 200 làn điệu cổ truyền tạo nên trường âm thanh độc nhất vô nhị, gắn liền với nhịp thở lúa nước và tâm tình làng quê.',
    quote: 'Trống Chèo gióng giả đầu đình / Làng trên xóm dưới đượm tình nước non.',
    quoteAuthor: 'Dân ca đồng bằng Bắc Bộ',
    buttonText: 'Vào Thính Phòng Làn Điệu',
    image: '/images/sound_dan_nhac.jpg',
    imageCaption: 'Dàn nhạc Bát âm cổ truyền — Hòa tấu thanh âm mộc mạc ngàn năm của làng quê Việt.'
  },
  '/kham-pha/san-khau/tac-pham-tieu-bieu': {
    title: 'Tứ Đại Tích Trò Mẫu Mực',
    leadParagraph: 'Bốn pho tích Chèo cổ lưu truyền qua hàng trăm năm: Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nham và Trương Viên. Những vở diễn kinh điển kết tinh khát vọng công lý, lòng nhân ái bao la, đức hy sinh son sắt và nghĩa khí tri kỷ sâu đậm của tâm hồn người Việt trước những giông bão thời cuộc.',
    quote: 'Nỗi oan Thị Kính thấu trời xanh / Lòng son dạ sắt trọn chữ tình non nước.',
    quoteAuthor: 'Trích kịch bản Nôm cổ Quan Âm Thị Kính',
    buttonText: 'Khám Phá Kiệt Tác Tích Trò',
    image: '/images/play_quan_am_thi_kinh.jpg',
    imageCaption: 'Thị Kính bế con Thị Mầu trước cửa tam quan — Bi kịch và tấm lòng từ bi vô lượng.'
  },

  // Không Gian Khám Phá Hub (/kham-pha)
  '/kham-pha/tong-quan': {
    title: 'Cội Nguồn & Lịch Sử Diễn Xướng',
    leadParagraph: 'Khởi đi từ thế kỷ thứ mười thời Đinh — Tiền Lê tại kinh đô Hoa Lư với bà tổ nghề Phạm Thị Trân, nghệ thuật Chèo đã bám rễ sâu vào đất phù sa, trở thành tiếng nói của người lao động qua bao thăng trầm lịch sử.',
    quote: 'Chẳng thèm ăn chả ăn nem / Thèm no cơm tẻ, thèm xem hát Chèo.',
    quoteAuthor: 'Ca dao dân gian Bắc Bộ',
    buttonText: 'Khám Phá Cội Nguồn Di Sản',
    image: '/images/cheo_dinh_lang.jpg',
    imageCaption: 'Chiếu chèo sân đình hội làng — Nơi nghệ thuật bắt rễ sâu bền trong lòng dân tộc.'
  },
  '/kham-pha/san-khau': {
    title: 'Bốn Trụ Cột Nghệ Thuật Sân Khấu',
    leadParagraph: 'Trưng bày toàn diện 4 yếu tố cấu thành nghệ thuật sân khấu Chèo: hệ thống 5 mẫu hình nhân vật ước lệ, kho tàng phục trang Kinh Bắc, dàn nhạc Bát âm và các kiệt tác tích trò mẫu mực.',
    quote: 'Chiếu chèo trải giữa sân đình / Trống rung một tiếng, muôn tình mở ra.',
    quoteAuthor: 'Lời truyền khẩu của nghệ nhân tiền bối',
    buttonText: 'Bước Vào Không Gian Sân Khấu',
    image: '/images/cheo_hero.jpg',
    imageCaption: 'Sân khấu Chèo truyền thống — Sự kết tinh của ước lệ, vũ đạo và thanh âm.'
  },
  '/kham-pha/cheo-hien-dai': {
    title: 'Chèo Hiện Đại & Dấu Ấn Đương Đại',
    leadParagraph: 'Tiến trình chuyển dịch lịch sử từ chiếu chèo sân đình sang nhà hát sân khấu chuyên nghiệp từ năm 1951, các thử nghiệm giao thoa đương đại và nỗ lực bảo tồn hồ sơ di sản văn hóa phi vật thể đại diện của nhân loại.',
    quote: 'Gìn giữ cội nguồn không phải là giữ tro tàn, mà là tiếp tục thổi bùng ngọn lửa.',
    quoteAuthor: 'Tâm huyết của thế hệ nghệ sĩ Chèo đương đại',
    buttonText: 'Khám Phá Chèo Hiện Đại',
    image: '/images/cheo_kham_pha.jpg',
    imageCaption: 'Sân khấu Chèo đương đại — Nỗ lực gìn giữ cốt cách truyền thống trong không gian mới.'
  },

  // Không Gian Giới Thiệu Hub (/gioi-thieu)
  '/gioi-thieu/bao-tang-so-cheo': {
    title: 'Không Gian Bảo Tàng Số “Chèo”',
    leadParagraph: 'Ứng dụng công nghệ tương tác thời gian thực, âm thanh không gian đa kênh và kho tư liệu mở nhằm đưa nghệ thuật Chèo cổ thoát khỏi nguy cơ mai một, tiếp cận tự nhiên và hấp dẫn với công chúng trẻ.',
    quote: 'Đem manh chiếu chèo sân đình xưa đặt lên không gian số của hôm nay.',
    quoteAuthor: 'Tuyên ngôn sáng lập Bảo Tàng Chèo Số',
    buttonText: 'Xem Dự Án Bảo Tàng Số',
    image: '/images/cheo_gioi_thieu.jpg',
    imageCaption: 'Giao diện số hóa di sản — Phục dựng không gian văn hóa bằng công nghệ hiện đại.'
  },
  '/gioi-thieu/cau-chuyen-hinh-thanh': {
    title: 'Ký Sự Những Chuyến Điền Dã',
    leadParagraph: 'Hành trình hơn 2 năm lặn lội qua các cái nôi chèo cổ vùng châu thổ sông Hồng: làng Khuốc (Thái Bình), Yên Khánh (Ninh Bình), Nam Trực (Nam Định) để ghi chép từng làn điệu và câu hát từ các nghệ nhân lão thành.',
    quote: 'Những bước chân điền dã thắp lên ngọn lửa hồi sinh di sản cha ông.',
    quoteAuthor: 'Nhật ký điền dã nhóm nghiên cứu',
    buttonText: 'Đọc Ký Sự Điền Dã',
    image: '/images/test_actor_tonkin.jpg',
    imageCaption: 'Nghệ nhân cao niên Bắc Bộ — Những pho tư liệu sống lưu giữ ký ức Chèo cổ.'
  },
  '/gioi-thieu/muc-tieu-va-y-nghia': {
    title: 'Sứ Mệnh Bảo Tồn & Trao Truyền',
    leadParagraph: 'Định vị vai trò cốt lõi của Chèo trong bản sắc văn hóa Việt: bảo tồn chuẩn mực nguyên bản, đưa di sản vào giáo dục học đường và kết nối mạng lưới bảo tàng quốc tế.',
    quote: 'Giữ lại nụ cười Hề Chèo là giữ lại lương tri và trí tuệ ngàn đời của người Việt.',
    quoteAuthor: 'PGS. TS Nguyễn Thị Minh Thái',
    buttonText: 'Xem Sứ Mệnh Chiến Lược',
    image: '/images/cheo_costume.jpg',
    imageCaption: 'Trao truyền di sản cho thế hệ mai sau — Sứ mệnh xuyên suốt của bảo tàng.'
  },
  '/gioi-thieu/doi-ngu-nhom-thuc-hien': {
    title: 'Đội Ngũ & Hội Đồng Nghệ Nhân',
    leadParagraph: 'Sự chung tay tâm huyết giữa Hội đồng cố vấn khoa học hàng đầu, các nghệ nhân dân gian làng cổ và đội ngũ kỹ sư công nghệ trẻ đam mê văn hóa truyền thống.',
    quote: 'Sự tiếp nối thế hệ là chìa khóa duy nhất để di sản sống mãi cùng thời gian.',
    quoteAuthor: 'Hội đồng cố vấn nghệ thuật',
    buttonText: 'Xem Đội Ngũ Thực Hiện',
    image: '/images/artist_hoa_tam.jpg',
    imageCaption: 'Bậc thầy sân khấu Chèo cổ — Những cánh chim đầu đàn thắp sáng nghệ thuật kịch hát dân tộc.'
  }
}

export const EditorialHubWalkthrough: React.FC<EditorialHubWalkthroughProps> = ({
  route,
  onNavigate
}) => {
  const children = (route.childrenPaths || [])
    .map(p => SITEMAP_ROUTES[p])
    .filter(Boolean)

  const hubMeta = HUB_METADATA[route.path] || {
    title: route.title,
    epigraph: route.subtitle || 'Không gian văn hóa truyền thống đồng bằng sông Hồng.',
    leadText: route.description,
    heroImage: '/images/cheo_hero.jpg',
    heroCaption: 'Không gian văn hóa Chèo truyền thống Bắc Bộ.',
    panoramicQuote: {
      text: 'Chèo là tiếng lòng của người nông dân Bắc Bộ — thắm đượm tình quê và đạo lý muôn đời.',
      author: 'Nghệ nhân Nhân dân Dịu Hương'
    },
    epilogue: {
      poem: 'Về xem hội hát ngày xuân\nChiếu chèo trải rộng nghĩa nhân muôn đời.',
      source: 'Ca dao đồng bằng châu thổ sông Hồng'
    }
  }

  return (
    <div className="text-left w-full space-y-16 sm:space-y-24">
      {/* =========================================================================
          1. SPLIT-SCREEN HERO BANNER (12 CỘT RỘNG MỞ) — Chuẩn UI-Craft
          ========================================================================= */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-18 items-center pb-12 border-b border-stone-800/60">
        {/* Cột trái (7 cột): Tiêu đề H1, Đề từ in nghiêng, Đoạn văn Drop-Cap */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-serif font-bold text-stone-100 tracking-tight leading-[1.12]">
            {hubMeta.title}
          </h1>

          <p className="text-lg sm:text-xl 2xl:text-2xl text-amber-200/90 font-serif italic border-l-2 border-amber-500/70 pl-5 leading-relaxed">
            &ldquo;{hubMeta.epigraph}&rdquo;
          </p>

          <p className="text-base sm:text-lg 2xl:text-xl text-stone-300 font-serif font-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left">
            {hubMeta.leadText}
          </p>
        </div>

        {/* Cột phải (5 cột): Khung ảnh nghệ thuật tỉ lệ vàng, viền mộc, bóng đổ */}
        <div className="lg:col-span-5 relative group">
          <div className="relative w-full rounded-3xl overflow-hidden border border-stone-800 shadow-2xl aspect-[4/3] 2xl:aspect-[16/11]">
            <img
              src={hubMeta.heroImage}
              alt={hubMeta.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 inset-x-4 p-4 bg-stone-950/75 backdrop-blur-md rounded-2xl border border-stone-800/80">
              <p className="text-xs sm:text-sm font-serif text-stone-300 italic">
                {hubMeta.heroCaption}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. DÒNG CHẢY TỰ SỰ SO LE (ALTERNATING 2-COLUMN SPLIT GRIDS)
          ========================================================================= */}
      <div className="space-y-20 sm:space-y-28 2xl:space-y-36">
        {children.map((child, idx) => {
          const isEven = idx % 2 === 0
          const enrichment = EDITORIAL_ENRICHMENTS[child.path] || {
            title: child.title,
            leadParagraph: child.description,
            quote: 'Chẳng thèm ăn chả ăn nem / Thèm no cơm tẻ, thèm xem hát Chèo.',
            quoteAuthor: 'Ca dao dân gian Bắc Bộ',
            buttonText: `Bước Vào ${child.title}`,
            image: '/images/cheo_hero.jpg',
            imageCaption: child.title
          }

          const chapterNumber = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`

          return (
            <React.Fragment key={child.path}>
              <section className="relative">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-18 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Cột Ảnh Tư Liệu Lớn (5 cột) */}
                  <div
                    className={`relative ${
                      isEven ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5 lg:order-2'
                    }`}
                  >
                    <div
                      className="relative w-full rounded-3xl overflow-hidden border border-stone-800 shadow-2xl aspect-[4/3] 2xl:aspect-[16/11] bg-stone-900 group cursor-pointer"
                      onClick={() => onNavigate(child.path)}
                    >
                      <img
                        src={enrichment.image}
                        alt={child.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d]/90 via-transparent to-transparent" />

                      {/* Số thứ tự hồi mộc mạc góc trên */}
                      <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-serif font-black text-amber-500/20 select-none">
                        {chapterNumber}
                      </div>

                      {/* Chú thích ảnh tư liệu */}
                      <div className="absolute bottom-4 inset-x-4 p-3.5 bg-stone-950/75 backdrop-blur-md rounded-2xl border border-stone-800/80">
                        <p className="text-xs sm:text-sm font-serif text-stone-300 italic">
                          {enrichment.imageCaption}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cột Bài Văn Tự Sự + Trích Dẫn (7 cột) */}
                  <div
                    className={`space-y-6 ${
                      isEven ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7 lg:order-1'
                    }`}
                  >
                    <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-serif font-bold text-white tracking-tight leading-snug">
                      {enrichment.title}
                    </h2>

                    <p className="text-base sm:text-lg 2xl:text-xl text-stone-300 font-serif font-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left">
                      {enrichment.leadParagraph}
                    </p>

                    {/* Hộp Trích Dẫn Tác Phẩm / Lời Nói Nghệ Nhân */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/25 via-stone-900/40 to-transparent border-l-4 border-amber-500/70 my-4">
                      <div className="flex items-start gap-3.5">
                        <Quote className="w-5 h-5 text-amber-500/70 shrink-0 mt-1" />
                        <div>
                          <p className="text-sm sm:text-base 2xl:text-lg font-serif italic text-amber-200/90 leading-relaxed">
                            &ldquo;{enrichment.quote}&rdquo;
                          </p>
                          {enrichment.quoteAuthor && (
                            <p className="text-xs sm:text-sm font-serif text-stone-400 mt-2 font-medium">
                              — {enrichment.quoteAuthor}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Nút Điều Hướng Trực Tiếp Sang Trang Con */}
                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate(child.path)}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-900/40 to-stone-900 hover:from-amber-800/60 hover:to-stone-850 text-amber-300 hover:text-amber-200 border border-amber-700/40 font-serif text-sm font-semibold transition-all cursor-pointer group/btn shadow-md hover:shadow-lg"
                      >
                        <span>{enrichment.buttonText}</span>
                        <ArrowRight className="w-4 h-4 text-amber-400 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC CALLOUT BAND) — Xuất hiện giữa chương 2 và 3 */}
              {idx === 1 && (
                <div className="w-full my-16 sm:my-20 2xl:my-24 rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-stone-800/80 p-10 sm:p-14 2xl:p-16 text-center space-y-4 shadow-2xl">
                  <Sparkles className="w-7 h-7 text-amber-400/80 mx-auto mb-1" />
                  <p className="text-xl sm:text-2xl 2xl:text-3xl font-serif italic text-amber-100/90 font-light leading-relaxed max-w-4xl mx-auto">
                    &ldquo;{hubMeta.panoramicQuote.text}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm font-serif text-amber-400/90 font-medium pt-1">
                    — {hubMeta.panoramicQuote.author} —
                  </p>
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* =========================================================================
          3. LỜI KẾT THI VỊ (POETIC EPILOGUE) — Đúc kết văn hóa Bắc Bộ
          ========================================================================= */}
      <footer className="pt-12 pb-6 text-center">
        <div className="max-w-3xl 2xl:max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#16120f]/60 border border-stone-800/60 shadow-lg">
          <p className="text-base sm:text-lg 2xl:text-xl font-serif italic text-amber-200/90 leading-relaxed whitespace-pre-line">
            &ldquo;{hubMeta.epilogue.poem}&rdquo;
          </p>
          <p className="text-xs sm:text-sm font-serif text-stone-400 mt-4 tracking-wider uppercase">
            — {hubMeta.epilogue.source} —
          </p>
        </div>
      </footer>
    </div>
  )
}
