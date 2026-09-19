import React, { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  X,
  Award,
  History,
  Music,
} from 'lucide-react'

interface ModernChapter {
  id: string
  title: string
  leadParagraph: string
  deepAnalysis: string
  image: string
  imageCaption: string
  masterworks: {
    title: string
    creator: string
    historicalImpact: string
  }[]
  masterQuote: {
    line: string
    source: string
  }
  contemporaryLegacy: string
}

const MODERN_CHAPTERS: ModernChapter[] = [
  {
    id: 'modern-1951',
    title: 'Cột Mốc 1951 — Khói Lửa Chiến Khu & Thánh Đường Chuyên Nghiệp',
    leadParagraph:
      'Năm 1951, giữa bom đạn ngàn trùng của chiến khu Việt Bắc trong cuộc kháng chiến chống Pháp, Đoàn Chèo Cổ truyền Việt Nam (tiền thân của Nhà hát Chèo Việt Nam ngày nay) được chính thức thành lập. Đây là dấu mốc lịch sử mang tính bước ngoặt đưa nghệ thuật Chèo bước qua lũy thừa rạp hát: từ manh chiếu cói dân gian ba bề khán giả chuyển mình lên không gian sân khấu nhà hát hiện đại có kịch bản văn học bài bản, hệ thống ký âm khoa học và dàn nhạc quy chuẩn.',
    deepAnalysis:
      'Những nghệ nhân tinh hoa thế hệ vàng thời bấy giờ như cụ Cả Tam, NSND Dịu Hương, cụ Trùm Thịnh, nghệ nhân An Giai đã cùng các nhà nghiên cứu âm nhạc dốc lòng sưu tầm, ký âm hàng trăm làn điệu Chèo cổ truyền mẫu mực. Họ đặt nền móng cho công cuộc đào tạo thế hệ diễn viên Chèo cách mạng đầu tiên — những người vừa giữ trọn hồn cốt dân tộc vừa đưa hơi thở thời đại mới vào từng nhịp phách, từng câu hát nảy hạt.',
    image: '/images/artist_diu_huong.jpg',
    imageCaption: 'NSND Dịu Hương — Biểu tượng thế hệ vàng Chèo cách mạng trên sân khấu chuyên nghiệp từ mốc son 1951.',
    masterworks: [
      {
        title: 'Chị Trầm (Kịch bản Chèo cách mạng đầu tiên)',
        creator: 'Tác giả: Nguyễn Đình Lạp — Biểu diễn: Đoàn Chèo Việt Bắc',
        historicalImpact: 'Vở diễn đầu tiên khẳng định Chèo cổ truyền đủ sức phản ánh cuộc chiến đấu gian khổ của nhân dân trong chiến khu.'
      },
      {
        title: 'Quan Âm Thị Kính (Phục dựng chuẩn mực 1956)',
        creator: 'Đại thụ Cụ Cả Tam, NSND Dịu Hương chỉ đạo nghệ thuật',
        historicalImpact: 'Chuẩn hóa kịch bản văn học và ký âm âm nhạc dân gian thành giáo trình giảng dạy đại học chính quy.'
      }
    ],
    masterQuote: {
      line: 'Chúng tôi mang tiếng trống Chèo từ chiến khu về thủ đô, không phải để đóng khung di sản trong lồng kính, mà để Chèo đồng hành cùng vận mệnh dân tộc.',
      source: 'Ký ức nghệ nhân thế hệ vàng Chèo Việt Bắc'
    },
    contemporaryLegacy: 'Mở đường cho sự ra đời của hệ thống các Nhà hát Chèo chuyên nghiệp từ trung ương đến địa phương toàn đồng bằng Bắc Bộ.'
  },
  {
    id: 'modern-tao-mat',
    title: 'Kỷ Nguyên Tào Mạt — Sử Thi "Bài Ca Giữ Nước"',
    leadParagraph:
      'Thập niên 1970 - 1980 ghi dấu đỉnh cao sáng tạo tột cùng của cố tác giả, NSND Tào Mạt với bộ ba vở Chèo sử thi bất hủ: "Thề qua sông", "Như những đỉnh núi" và "Tiếng sấm Tây Nguyên". Tác phẩm chứng minh sức mạnh của thi pháp Chèo cổ truyền khi vươn tầm giải mã những xung đột chính trị, thời đại và triết lý sử thi tầm vóc dân tộc.',
    deepAnalysis:
      'Đột phá vĩ đại nhất của Tào Mạt là nâng tầm nhân vật Hề Chèo: từ vai hề mua vui dân dã trở thành biểu tượng của lương tri, phẩm giá và tiếng nói phản biện công lý của nhân dân trước triều đình phong kiến. Bộ ba kiệt tác được trao tặng Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật năm 1996 — phần thưởng cao quý ghi nhận sự dung hòa hoàn hảo giữa thi pháp cổ truyền và tư duy kịch bản hiện đại.',
    image: '/images/cheo_hero.jpg',
    imageCaption: 'Sân khấu kịch Chèo sử thi — Nơi tiếng trống Chèo hòa cùng hào khí dựng nước và giữ nước.',
    masterworks: [
      {
        title: 'Bộ ba sử thi "Bài ca giữ nước" (1979–1983)',
        creator: 'Tác giả & Đạo diễn: Cố NSND Tào Mạt',
        historicalImpact: 'Tượng đài kịch thơ sử thi triết học của sân khấu truyền thống Việt Nam thế kỷ XX.'
      }
    ],
    masterQuote: {
      line: 'Nghệ thuật Chèo chỉ thực sự sống khi nó bắt kịp nhịp thở của thời đại mà không đánh mất điệu thức ngàn năm của cha ông.',
      source: 'Cố tác giả, NSND Tào Mạt'
    },
    contemporaryLegacy: 'Khẳng định khả năng tải các đề tài chính trị - lịch sử lớn mà vẫn giữ vẹn nét duyên dáng, đậm đà chất Chèo.'
  },
  {
    id: 'modern-innovation',
    title: 'Thể Nghiệm Hòa Âm & Các Vở Diễn Cách Tân Thời Đại',
    leadParagraph:
      'Từ thập niên 1990 bước sang thế kỷ 21, các nhà hát Chèo chứng kiến những cuộc thể nghiệm táo bạo nhằm đưa Chèo tiếp cận thế hệ khán giả mới: ứng dụng mỹ thuật ánh sáng hiện đại, phối hợp dàn nhạc bán giao hưởng cùng ngũ âm dân tộc, và dựng các vở diễn chuyển thể từ kiệt tác thế giới hay đề tài thời sự đương đại.',
    deepAnalysis:
      'Những kiệt tác cách tân chấn động khán trường như "Nàng Sita" (Lưu Quang Vũ - NSND Doãn Hoàng Giang) lập kỷ lục hàng ngàn đêm diễn, hay "Hồ Xuân Hương" (Bùi Đức Hạnh - NSND Bùi Đắc Sừ) đã chứng minh khả năng thăng hoa của Chèo lẳng khi miêu tả khí chất thơ Nôm. Đồng thời, Chèo vượt ra khỏi biên giới quốc gia, lưu diễn rực rỡ tại Pháp, Đức, Nhật Bản, Hoa Kỳ, khiến bạn bè quốc tế trầm ồ trước nét mỹ học phương Đông độc đáo.',
    image: '/images/play_kim_nham.jpg',
    imageCaption: 'Vũ đạo và biểu cảm xuất thần trên sân khấu Chèo cách tân đương đại.',
    masterworks: [
      {
        title: 'Nàng Sita (1984)',
        creator: 'Kịch bản: Lưu Quang Vũ & NSND Doãn Hoàng Giang',
        historicalImpact: 'Chuyển thể sử thi Ramayana thành công rực rỡ, kết hợp vũ đạo Chèo truyền thống với kịch nghệ hiện đại.'
      },
      {
        title: 'Hồ Xuân Hương (1988)',
        creator: 'Tác giả: Bùi Đức Hạnh — Đạo diễn: NSND Bùi Đắc Sừ',
        historicalImpact: 'Khai thác chất Chèo lẳng sắc sảo để đả kích định kiến nam quyền phong kiến.'
      }
    ],
    masterQuote: {
      line: 'Cách tân không phải là lai căng hay xóa bỏ cội nguồn, mà là tìm ngôn ngữ mới để câu hát ngàn năm vang xa hơn.',
      source: 'GS. NSND Doãn Hoàng Giang'
    },
    contemporaryLegacy: 'Mở rộng biên độ thẩm mỹ Chèo, khẳng định tính hiện đại của nghệ thuật truyền thống.'
  },
  {
    id: 'modern-unesco',
    title: 'Kỷ Nguyên Số Hóa & Hành Trình Ghi Danh Di Sản UNESCO',
    leadParagraph:
      'Bước vào thập niên 2020, 14 tỉnh thành phố châu thổ sông Hồng đang cùng chung tay hoàn thiện hồ sơ đệ trình UNESCO ghi danh Nghệ thuật Chèo là Di sản Văn hóa Phi vật thể Đại diện của Nhân loại. Đây là hành trình tôn vinh vị thế đỉnh cao của nghệ thuật kịch hát dân tộc trên bản đồ văn hóa thế giới.',
    deepAnalysis:
      'Thế hệ nghệ sĩ đương đại — tiêu biểu như NSND Thanh Ngoan — cùng các nhà khoa học tiên phong đưa Chèo vào học đường và ứng dụng công nghệ số Web3D. Dự án Bảo Tàng Chèo Số ra đời nhằm lưu trữ toàn bộ kho tàng âm thanh, trang phục, kịch bản chữ Nôm cổ, mở ra cánh cửa cho thế hệ trẻ tiếp cận, cảm nhận và chung tay thắp tiếp ngọn lửa di sản của cha ông.',
    image: '/images/test_thanh_ngoan.png',
    imageCaption: 'NSND Thanh Ngoan — Cầu nối di sản đương đại đưa Chèo vươn tầm thế giới và lan tỏa trên nền tảng số.',
    masterworks: [
      {
        title: 'Hồ sơ đệ trình UNESCO Di sản Thế giới',
        creator: 'Bộ Văn hóa Thể thao & Du lịch phối hợp 14 tỉnh đồng bằng Bắc Bộ',
        historicalImpact: 'Khẳng định giá trị toàn cầu duy nhất của nghệ thuật Chèo cổ truyền Việt Nam.'
      },
      {
        title: 'Bảo Tàng Chèo Số (Digital Exhibition Sanctuary)',
        creator: 'Dự án số hóa đa phương tiện Web3D',
        historicalImpact: 'Bảo tồn vĩnh cửu âm thanh nảy hạt, thần thái nhân vật và tư liệu sân khấu Chèo trên không gian mạng.'
      }
    ],
    masterQuote: {
      line: 'Gìn giữ di sản hôm nay là thắp tiếp ngọn lửa rực rỡ cho mai sau, để con cháu dù ở bất kỳ đâu cũng tự hào về nguồn cội.',
      source: 'NSND Thanh Ngoan — Giám đốc Nhà hát Chèo Việt Nam'
    },
    contemporaryLegacy: 'Số hóa di sản Chèo toàn diện, tạo nguồn cảm hứng sáng tạo cho thế hệ trẻ trong kỷ nguyên số.'
  }
]

interface ModernCheoShowcaseProps {
  onNavigate?: (path: string) => void
}

export const ModernCheoShowcase: React.FC<ModernCheoShowcaseProps> = ({ onNavigate }) => {
  const [activeChapter, setActiveChapter] = useState<ModernChapter | null>(null)

  const currentChapterIndex = activeChapter
    ? MODERN_CHAPTERS.findIndex((c) => c.id === activeChapter.id)
    : -1

  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      setActiveChapter(MODERN_CHAPTERS[currentChapterIndex - 1])
    }
  }

  const handleNextChapter = () => {
    if (currentChapterIndex < MODERN_CHAPTERS.length - 1) {
      setActiveChapter(MODERN_CHAPTERS[currentChapterIndex + 1])
    }
  }

  return (
    <article className="text-left space-y-20 sm:space-y-28 animate-in fade-in duration-500 w-full font-serif">
      {/* =========================================================================
          1. WIDE LANDSCAPE CINEMA HERO BANNER (ẢNH NGANG PANORAMA KHỔ RỘNG)
      ========================================================================= */}
      {/* ── 1. CINEMA OVERLAY HERO BANNER (100VW FULL VIEWPORT WIDTH & COMPACT HEIGHT) ── */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 sm:-mt-14 overflow-hidden shadow-2xl border-b border-stone-800 bg-stone-950 h-[280px] sm:h-[340px] lg:h-[380px] flex items-end group mb-12 sm:mb-16">
        <img
          src="/images/play_tienghatdaingan.jpg"
          alt="Sân khấu Chèo đương đại rực rỡ ánh đèn"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/15" />

        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8 space-y-2.5">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md">
            Chèo Trong Dòng Chảy Đương Đại
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-stone-200 font-serif font-light leading-relaxed drop-shadow max-w-4xl">
            <span className="float-left text-3xl sm:text-4xl font-serif font-bold text-amber-400 leading-none pr-2.5 pt-0.5">T</span>
            ừ manh chiếu cói dân gian nơi sân đình rêu phong của làng quê châu thổ sông Hồng bước lên thánh đường rạp hát chuyên nghiệp năm 1951, nghệ thuật Chèo đã trải qua hơn bảy thập kỷ chuyển mình ngoạn mục. Đó không phải là cuộc từ bỏ cội nguồn, mà là một hành trình tự khẳng định bản lĩnh thích ứng diệu kỳ: đưa hơi thở thời đại vào từng kịch bản sử thi, cách tân âm nhạc và ánh sáng sân khấu mà vẫn giữ trọn nét duyên dáng, nảy hạt của điệu hát ngàn năm.
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. BỐN HỒI TỰ SỰ ĐƯƠNG ĐẠI SO LE (ALTERNATING 2-COLUMN SPLIT GRIDS)
      ========================================================================= */}
      <div className="space-y-24 sm:space-y-32">
        {MODERN_CHAPTERS.map((chapter, idx) => {
          const isEven = idx % 2 === 0
          return (
            <section
              key={chapter.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-stone-800/40 first:border-none first:pt-0"
            >
              {/* CỘT ẢNH TƯ LIỆU */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <figure className="relative rounded-3xl overflow-hidden border border-stone-800/90 bg-stone-950 shadow-xl group">
                  <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  </div>
                  <figcaption className="p-4 sm:p-5 text-xs sm:text-sm text-stone-400 italic bg-stone-900/90 border-t border-stone-800/60">
                    {chapter.imageCaption}
                  </figcaption>
                </figure>
              </div>

              {/* CỘT BÀI VIẾT TỰ SỰ */}
              <div
                className={`lg:col-span-7 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Tiêu đề chính */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                  {chapter.title}
                </h2>

                {/* Văn phong tự sự sâu lắng */}
                <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
                  <p>{chapter.leadParagraph}</p>
                  <p className="text-stone-400 text-sm sm:text-base">{chapter.deepAnalysis}</p>
                </div>

                {/* Khối tương tác mở Modal Chi Tiết */}
                <div className="pt-2">
                  <button
                    onClick={() => setActiveChapter(chapter)}
                    className="group inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#1a1512] hover:bg-amber-950/30 border border-stone-800 hover:border-amber-500/60 text-xs sm:text-sm font-medium text-amber-300 hover:text-amber-200 transition-all cursor-pointer shadow-md"
                  >
                    <BookOpen className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span>Chiêm ngưỡng tư liệu &amp; tác phẩm tiêu biểu</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* =========================================================================
          3. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC CALLOUT BAND)
      ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-stone-800/80 p-10 sm:p-14 2xl:p-16 text-center shadow-2xl my-16 sm:my-24">
        <Sparkles className="w-7 h-7 text-amber-400/80 mx-auto mb-3" />
        <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-amber-100 font-light leading-relaxed max-w-4xl mx-auto">
          &ldquo;Nghệ thuật Chèo chỉ thực sự sống khi nó bắt kịp nhịp thở của thời đại <br className="hidden sm:inline" />
          mà không đánh mất điệu thức ngàn năm của cha ông.&rdquo;
        </p>
        <div className="w-16 h-px bg-amber-500/60 mx-auto my-4" />
        <p className="text-xs sm:text-sm font-serif text-amber-400/90 font-medium">
          — Cố tác giả, NSND Tào Mạt —
        </p>
      </section>

      {/* =========================================================================
          4. LƯỚI KHÁM PHÁ TIẾP NỐI (EXHIBITION GATEWAYS - 3 CỘT)
      ========================================================================= */}
      <section className="space-y-8">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Khám Phá Chiều Sâu Sân Khấu Chèo
          </h3>
          <p className="text-sm sm:text-base text-stone-400 font-light mt-2 max-w-2xl">
            Tiếp nối hành trình thưởng lãm dòng chảy lịch sử và tác phẩm tiêu biểu của sân khấu Chèo:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Lịch sử phát triển */}
          <div
            onClick={() => onNavigate?.('/kham-pha/tong-quan/lich-su-phat-trien')}
            className="group p-6 sm:p-8 rounded-3xl bg-[#16120f] border border-stone-800/80 hover:border-amber-600/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between cursor-pointer space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-300">
                <History className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Lịch Sử Phát Triển
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Mười thế kỷ thăng trầm từ tiếng trống quân doanh Hoa Lư đến thánh đường sân khấu hộp và hành trình hồ sơ UNESCO.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Xem niên biểu di sản</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Card 2: Tứ đại kiệt tác */}
          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/tac-pham-tieu-bieu')}
            className="group p-6 sm:p-8 rounded-3xl bg-[#16120f] border border-stone-800/80 hover:border-amber-600/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between cursor-pointer space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-300">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Tứ Đại Kiệt Tác Sân Khấu
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Đắm chìm vào bốn pho tượng đài nghệ thuật bất hủ: Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nham và Trương Viên.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Thưởng lãm kiệt tác</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: Thanh âm & làn điệu */}
          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="group p-6 sm:p-8 rounded-3xl bg-[#16120f] border border-stone-800/80 hover:border-amber-600/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between cursor-pointer space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-300">
                <Music className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Thanh Âm &amp; Làn Điệu Cổ
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Lắng nghe tiếng đàn nhị nỉ non, tiếng nguyệt trong trẻo và nhịp trống đế giục giã của dàn nhạc ngũ âm.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Thưởng lãm thanh âm</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. LỜI KẾT THI VỊ (POETIC EPILOGUE)
      ========================================================================= */}
      <section className="text-center pt-10 border-t border-stone-800/80 max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-mono uppercase tracking-widest text-amber-500/80 font-semibold">
          Sức Sống Trường Tồn
        </p>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed italic">
          Bảy mươi năm chuyển mình trên sân khấu hiện đại chỉ là một chương mới trong trường thiên ký sự ngàn năm của Chèo — nơi ngọn lửa cội nguồn vẫn luôn bùng cháy trong tâm hồn thế hệ tương lai.
        </p>
      </section>

      {/* =========================================================================
          6. MODAL CHI TIẾT ĐƯƠNG ĐẠI (PROGRESSIVE DISCLOSURE MODAL)
      ========================================================================= */}
      {activeChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#16120f] border border-stone-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-stone-800/80 gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeChapter.title}
              </h3>

              <button
                onClick={() => setActiveChapter(null)}
                className="p-2 rounded-xl bg-stone-800/60 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: 2 cột */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Cột trái: Ảnh minh họa & Trích đoạn lời răn dạy */}
              <div className="md:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 aspect-[4/3]">
                  <img
                    src={activeChapter.image}
                    alt={activeChapter.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800/70 text-xs text-stone-400 italic">
                  {activeChapter.imageCaption}
                </div>

                {/* Hộp danh ngôn / trích đoạn */}
                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/40 space-y-2">
                  <p className="text-xs sm:text-sm font-serif italic text-amber-100/95 leading-relaxed">
                    &ldquo;{activeChapter.masterQuote.line}&rdquo;
                  </p>
                  <p className="text-xs font-serif text-amber-400/80 font-medium">
                    — {activeChapter.masterQuote.source} —
                  </p>
                </div>
              </div>

              {/* Cột phải: Chi tiết tác phẩm & Di sản trường tồn */}
              <div className="md:col-span-7 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-amber-300">
                    Bối Cảnh &amp; Đột Phá Sân Khấu
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {activeChapter.leadParagraph}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                    {activeChapter.deepAnalysis}
                  </p>
                </div>

                {/* Tác phẩm tiêu biểu */}
                <div className="space-y-3 pt-2 border-t border-stone-800/60">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                    Tác Phẩm &amp; Dấu Ấn Tiêu Biểu
                  </h4>
                  <div className="space-y-3">
                    {activeChapter.masterworks.map((mw, mIdx) => (
                      <div key={mIdx} className="space-y-1">
                        <div className="text-xs sm:text-sm font-bold text-white">
                          {mw.title}
                        </div>
                        <div className="text-xs font-serif text-amber-400/90">
                          {mw.creator}
                        </div>
                        <p className="text-xs text-stone-400 font-light leading-relaxed">
                          {mw.historicalImpact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Di sản trường tồn */}
                <div className="pt-3 border-t border-stone-800/60 text-xs text-stone-400">
                  <span className="text-amber-400 font-medium">Tầm ảnh hưởng: </span>
                  {activeChapter.contemporaryLegacy}
                </div>
              </div>
            </div>

            {/* Modal Footer: Chuyển chuyên đề trước / sau */}
            <div className="pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrevChapter}
                  disabled={currentChapterIndex <= 0}
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-stone-900 border border-stone-700 text-xs text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Chuyên đề trước</span>
                </button>
                <button
                  onClick={handleNextChapter}
                  disabled={currentChapterIndex >= MODERN_CHAPTERS.length - 1}
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-stone-900 border border-stone-700 text-xs text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>Chuyên đề tiếp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => setActiveChapter(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-xs sm:text-sm font-medium text-amber-300 transition-all cursor-pointer"
              >
                Khép lại cửa sổ
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}