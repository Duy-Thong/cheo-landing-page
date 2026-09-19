import React, { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Calendar,
  Landmark,
  X,
  Compass,
  Award,
} from 'lucide-react'

interface EraMilestone {
  id: string
  period: string
  years: string
  dynasty: string
  title: string
  figure: string
  summary: string
  leadParagraph: string
  deepAnalysis: string
  image: string
  imageCaption: string
  historicalArtifact: string
  lastingLegacy: string
  keyMilestones: string[]
}

const HISTORICAL_ERAS: EraMilestone[] = [
  {
    id: 'era-1',
    period: 'Thế kỷ X',
    years: '968 — 980',
    dynasty: 'Triều Đinh — Tiền Lê (Kinh đô Hoa Lư)',
    title: 'Khởi Nguyên Tiếng Trống Trận & Bà Tổ Phạm Thị Trân',
    figure: 'Ưu Bà Phạm Thị Trân (Đào Thị Huệ) — Người đặt nền móng',
    summary:
      'Vua Đinh Tiên Hoàng phong bà Phạm Thị Trân chức Ưu Bà, phụ trách việc ca múa, đánh trống cổ vũ sĩ khí quân sĩ giữa kinh thành Hoa Lư hiểm trở.',
    leadParagraph:
      'Vào thế kỷ thứ 10, non sông Đại Cồ Việt vừa thoát khỏi ách đô hộ ngàn năm Bắc thuộc dưới ngọn cờ dẹp loạn sứ quân của Đinh Bộ Lĩnh. Giữa kinh thành Hoa Lư non sông hùng vĩ, bà Phạm Thị Trân — người con gái tài sắc vẹn toàn vùng Hồng Châu (Hải Dương) — đã được phong chức Ưu Bà, trở thành nữ quan nghệ thuật đầu tiên trong chính sử Việt Nam.',
    deepAnalysis:
      'Bà Phạm Thị Trân đã sáng tạo nên những điệu múa, lời ca hào sảng kết hợp với nhịp trống trận uy dũng để khích lệ tinh thần chiến đấu của ba quân tướng sĩ. Tiếng trống quân doanh thời Đinh ấy chính là khởi thủy của nhịp trống đế Chèo sau này — một nhạc cụ linh hồn vừa giữ nhịp diễn xuất, vừa là tiếng nói đồng tình hay phản bác đầy thâm thúy nơi sân đình dân dã.',
    image: '/images/inst_trong_de.jpg',
    imageCaption: 'Tiếng trống đế Chèo — Khởi nguyên từ nhịp trống quân doanh thời Đinh thế kỷ X.',
    historicalArtifact: 'Sắc phong Ưu Bà và văn bia tưởng niệm tại đền thờ Tổ Chèo làng Đặng Xá (Hưng Yên).',
    lastingLegacy: 'Định hình vai trò trống đế trong dàn nhạc và xác lập vị thế tôn sư của người nghệ nhân trong lòng xã hội.',
    keyMilestones: [
      'Năm 968: Vua Đinh Tiên Hoàng định đô Hoa Lư, phong bà Phạm Thị Trân chức Ưu Bà',
      'Sáng tạo lối hát nói và nhịp trống quân cổ vũ nhuệ khí binh sĩ',
      'Hình thành hạt nhân diễn xướng kết hợp giữa âm nhạc, vũ đạo và kịch tích'
    ]
  },
  {
    id: 'era-2',
    period: 'Thế kỷ XI–XIV',
    years: '1010 — 1400',
    dynasty: 'Triều Lý — Trần (Thăng Long & Đồng bằng sông Hồng)',
    title: 'Rời Chốn Cung Cấm, Bén Rễ Vào Đất Mẹ Sân Đình',
    figure: 'Nghệ nhân dân gian làng xã châu thổ sông Hồng',
    summary:
      'Chèo rời chốn cung đình xa hoa để trở về với những làng quê mộc mạc, hòa vào lễ hội mùa xuân và chiếu chèo sân đình ba bề khán giả.',
    leadParagraph:
      'Khi Lý Công Uẩn dời đô về Thăng Long, đất nước bước vào kỷ nguyên thái bình thịnh trị. Nghệ thuật Chèo bắt đầu cuộc thiên di kỳ vĩ: rời khỏi những bức tường cung cấm nghiêm cẩn để trở về với đất mẹ đồng bằng sông Hồng. Nơi đây, giữa bến nước cây đa và thềm đình rêu phong, manh chiếu cói đơn sơ đã trở thành thánh đường nghệ thuật của người nông dân.',
    deepAnalysis:
      'Không gian diễn xướng sân đình ba bề bốn bên khán giả đã xóa nhòa mọi ranh giới giữa người diễn và người xem. Chèo hấp thu tinh hoa của các làn điệu dân ca, hát quan họ, hát ví, hát xẩm và những câu ca dao mộc mạc. Tiếng cười trào lộng bắt đầu manh nha, trở thành vũ khí sắc bén của người bình dân để châm biếm thói hư tật xấu và đòi quyền sống, quyền yêu đương tự do.',
    image: '/images/cheo_gioi_thieu.jpg',
    imageCaption: 'Chiếu Chèo hội làng — Không gian ba bề bốn bên khán giả xóa bỏ mọi rào cản giai cấp.',
    historicalArtifact: 'Các mảng chạm khắc gỗ đình làng thế kỷ 16–17 miêu tả cảnh diễn xướng dân gian và múa lụa.',
    lastingLegacy: 'Xác lập không gian diễn xướng sân đình mở ba phía và tinh thần trào phúng, nhân văn sâu sắc.',
    keyMilestones: [
      'Chèo hòa nhập sâu rộng vào các lễ hội hội làng mùa xuân cầu cho mưa thuận gió hòa',
      'Giao thoa mạnh mẽ với kho tàng ca dao, hát ví và các trò diễn xướng phồn thực dân gian',
      'Định hình cấu trúc tích trò kể chuyện phản ánh thế thái nhân tình làng quê Việt'
    ]
  },
  {
    id: 'era-3',
    period: 'Thế kỷ XV–XIX',
    years: '1428 — 1883',
    dynasty: 'Thời Hậu Lê — Nguyễn (Giai đoạn Hoàng kim)',
    title: 'Đỉnh Cao Hoàng Kim & Tứ Đại Kiệt Tác Bất Hủ',
    figure: 'Các phường Chèo cổ làng Khuốc (Thái Bình), Yên Khánh (Ninh Bình), Nam Trực (Nam Định)',
    summary:
      'Thời kỳ thăng hoa tột bậc với sự ra đời của Tứ đại kiệt tác sân khấu và hệ thống 5 mẫu nhân vật ước lệ chuẩn mực.',
    leadParagraph:
      'Trải qua những biến động dữ dội của lịch sử thời Lê trung hưng và triều Nguyễn, nghệ thuật Chèo đạt tới độ chín muồi hoàn hảo về cả nội dung văn học lẫn kỹ thuật biểu diễn. Đây là thời kỳ khai sinh của bốn kiệt tác sân khấu bất hủ: Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nham và Trương Viên — những pho tượng đài nghệ thuật khắc họa thân phận con người trong giông bão thời đại.',
    deepAnalysis:
      'Hệ thống 5 mẫu hình nhân vật ước lệ kinh điển — Đào, Kép, Hề, Lão, Mụ — được định hình vững chắc và truyền thụ nghiêm ngặt qua lối truyền khẩu ngón nghề. Hơn 200 làn điệu Chèo cổ truyền nảy hạt được chuẩn hóa, kết hợp cùng dàn nhạc ngũ âm (đàn nhị, đàn nguyệt, sáo trúc, trống đế, thanh la). Tiếng cười Hề Chèo thời kỳ này đã trở thành tiếng cười thanh lọc tâm hồn và đả kích sâu cay tầng lớp phong kiến cường hào.',
    image: '/images/test_actor_tonkin.jpg',
    imageCaption: 'Ảnh tư liệu cổ Bắc Kỳ xưa chụp nghệ nhân Chèo cổ truyền thế kỷ 19 — Cốt cách phong nhã nghìn năm.',
    historicalArtifact: 'Các bản kịch bản chép tay chữ Nôm cổ của vở Quan Âm Thị Kính và Lưu Bình Dương Lễ.',
    lastingLegacy: 'Hệ thống 5 mẫu hình nhân vật ước lệ chuẩn mực và kho tàng hơn 200 làn điệu mẫu mực.',
    keyMilestones: [
      'Sự ra đời của Tứ đại kiệt tác: Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nham, Trương Viên',
      'Hoàn thiện hệ thống ngũ hình ước lệ: Đào, Kép, Hề, Lão, Mụ',
      'Chuẩn hóa hơn 200 làn điệu Chèo nảy hạt và dàn nhạc ngũ âm cổ truyền',
      'Hình thành các làng Chèo cổ lừng danh: Làng Khuốc (Thái Bình), Yên Khánh (Ninh Bình)'
    ]
  },
  {
    id: 'era-4',
    period: 'Năm 1951 — XX',
    years: '1951 — 1985',
    dynasty: 'Thời kỳ Kháng chiến & Sân khấu chuyên nghiệp',
    title: 'Ngọn Lửa Chiến Khu Việt Bắc & Bước Lên Sân Khấu Hộp',
    figure: 'Cụ Cả Tam • NSND Dịu Hương • NSND Tào Mạt • GS. NSND Trần Bảng',
    summary:
      'Đoàn Chèo Cổ truyền Việt Nam thành lập tại chiến khu Việt Bắc năm 1951, mở ra kỷ nguyên sân khấu kịch hát chuyên nghiệp có kịch bản thành văn.',
    leadParagraph:
      'Năm 1951, giữa núi rừng chiến khu Việt Bắc rực lửa kháng chiến, Đoàn Chèo Cổ truyền Việt Nam được thành lập. Quyết định mang tính lịch sử này đã đưa nghệ thuật Chèo từ manh chiếu sân đình bước lên thánh đường sân khấu hộp hiện đại, đồng thời khởi đầu cho công cuộc ký âm, bảo tồn khoa học và xây dựng kịch bản văn học bài bản.',
    deepAnalysis:
      'Thế hệ vàng nghệ nhân tiền bối như Cụ Cả Tam, NSND Dịu Hương, NSND Hoa Tâm đã dốc trọn ngón nghề gia truyền để đào tạo nên những thế hệ diễn viên Chèo cách mạng. Đỉnh cao của thời kỳ này là bộ ba kịch bản sử thi bất hủ "Bài ca giữ nước" của tác giả Tào Mạt, đưa hình tượng nhân vật Hề Chèo vượt khỏi ranh giới vai hài dân gian để trở thành tiếng nói của lương tri, phẩm giá và bản lĩnh độc lập dân tộc.',
    image: '/images/artist_diu_huong.jpg',
    imageCaption: 'NSND Dịu Hương — Biểu tượng tài năng của thế hệ vàng Chèo cách mạng trên sân khấu chuyên nghiệp.',
    historicalArtifact: 'Kịch bản văn học và bản ghi âm đĩa nhựa thời kháng chiến lưu trữ tại Viện Nghiên cứu Sân khấu.',
    lastingLegacy: 'Chuyển hóa Chèo thành loại hình kịch hát dân tộc chuyên nghiệp và đưa Chèo vào đào tạo đại học chính quy.',
    keyMilestones: [
      'Năm 1951: Thành lập Đoàn Chèo Cổ truyền Việt Nam tại chiến khu Việt Bắc',
      'Công cuộc khai phóng, ký âm khoa học và hệ thống hóa bài bản các làn điệu cổ',
      'NSND Tào Mạt hoàn thành bộ ba sử thi kinh điển "Bài ca giữ nước" (1973–1983)',
      'Nghệ thuật Chèo được vinh danh các Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật'
    ]
  },
  {
    id: 'era-5',
    period: 'Thế kỷ XXI',
    years: '1986 — Hiện tại',
    dynasty: 'Thời kỳ Hội nhập, Khát vọng UNESCO & Không gian số',
    title: 'Khát Vọng Di Sản Nhân Loại & Hành Trình Số Hóa',
    figure: 'NSND Thanh Ngoan • Các nghệ sĩ đương đại • 14 tỉnh đồng bằng Bắc Bộ',
    summary:
      '14 tỉnh đồng bằng sông Hồng đồng thuận đệ trình UNESCO ghi danh Chèo là Di sản Văn hóa Thế giới; số hóa bảo tồn trên nền tảng Web3D.',
    leadParagraph:
      'Bước vào thế kỷ 21 giữa vòng xoáy toàn cầu hóa, nghệ thuật Chèo không hề lùi bước mà vươn mình mạnh mẽ với một vị thế mới. 14 tỉnh, thành phố châu thổ sông Hồng đã cùng chung tay xây dựng hồ sơ quốc gia trình UNESCO đề cử Nghệ thuật Chèo là Di sản Văn hóa Phi vật thể Đại diện của Nhân loại.',
    deepAnalysis:
      'Chèo đương đại không chỉ ngân vang tại các nhà hát lớn ở Paris, Berlin, Tokyo mà còn hồi sinh sống động trong lòng giới trẻ thông qua các dự án bảo tồn số hóa. Dự án Bảo Tàng Chèo Số ra đời nhằm kết nối kho tàng ngàn năm của ông cha với công nghệ tương tác hiện đại — nơi âm thanh đàn nhị, sắc áo tứ thân và từng câu hát nảy hạt được lưu giữ vĩnh cửu, truyền cảm hứng bất tận cho muôn đời sau.',
    image: '/images/test_thanh_ngoan.png',
    imageCaption: 'NSND Thanh Ngoan và ngọn lửa gìn giữ Chèo đương đại — Cầu nối di sản vươn ra biển lớn nhân loại.',
    historicalArtifact: 'Hồ sơ khoa học đệ trình UNESCO và kho lưu trữ âm thanh số hóa độ phân giải cao tại Bảo tàng Chèo Số.',
    lastingLegacy: 'Định vị Chèo là di sản văn hóa đỉnh cao của nhân loại và lan tỏa bền vững trong đời sống số.',
    keyMilestones: [
      'Nghệ thuật Chèo lưu diễn thành công vang dội tại nhiều quốc gia Âu, Mỹ, Á',
      '14 tỉnh thành phố châu thổ sông Hồng hợp lực xây dựng hồ sơ di sản đệ trình UNESCO',
      'Bảo Tàng Chèo Số ra đời — Tiên phong số hóa tương tác toàn diện di sản sân khấu cổ truyền'
    ]
  }
]

interface TimelineWidgetProps {
  onNavigate?: (path: string) => void
}

export const TimelineWidget: React.FC<TimelineWidgetProps> = ({ onNavigate }) => {
  const [activeEra, setActiveEra] = useState<EraMilestone | null>(null)
  const [selectedRibbonIndex, setSelectedRibbonIndex] = useState<number>(0)

  const currentEraIndex = activeEra
    ? HISTORICAL_ERAS.findIndex((e) => e.id === activeEra.id)
    : -1

  const handlePrevEra = () => {
    if (currentEraIndex > 0) {
      setActiveEra(HISTORICAL_ERAS[currentEraIndex - 1])
    }
  }

  const handleNextEra = () => {
    if (currentEraIndex < HISTORICAL_ERAS.length - 1) {
      setActiveEra(HISTORICAL_ERAS[currentEraIndex + 1])
    }
  }

  const handleScrollToEra = (idx: number) => {
    setSelectedRibbonIndex(idx)
    const element = document.getElementById(HISTORICAL_ERAS[idx].id)
    if (element) {
      const yOffset = -120
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <article className="text-left space-y-20 sm:space-y-28 animate-in fade-in duration-500 w-full font-serif">
      {/* =========================================================================
          1. SPLIT-SCREEN HERO BANNER (12 CỘT RỘNG MỞ)
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-b border-stone-800/80 pb-14 sm:pb-20">
        {/* Cột trái: Tiêu đề lớn & Đoạn tự sự mở đầu */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-100 tracking-tight leading-[1.15]">
            Mười Thế Kỷ Thăng Trầm <br className="hidden sm:inline" />
            <span className="text-amber-400 italic">Hồn Thiêng Chiếu Chèo</span>
          </h1>

          <p className="text-lg sm:text-xl text-amber-200/90 font-light italic leading-relaxed border-l-2 border-amber-500/60 pl-5">
            Từ tiếng trống quân doanh Hoa Lư thuở dựng nước đến thánh đường sân khấu dân tộc và khát vọng ghi danh di sản nhân loại.
          </p>

          <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed pt-2">
            <p className="first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              Trải qua hơn một ngàn năm lịch sử thăng trầm cùng vận mệnh non sông đất Việt, nghệ thuật Chèo đã bám rễ sâu xa vào từng tấc đất phù sa châu thổ sông Hồng. Đó không chỉ là câu hát giãi bày tâm sự của những người nông dân chân lấm tay bùn dưới bóng đa sân đình, mà còn là bản anh hùng ca mộc mạc lưu giữ linh hồn, cốt cách và bản lĩnh sinh tồn của cả một dân tộc.
            </p>
            <p className="text-stone-400 text-sm sm:text-base">
              Hành trình mười thế kỷ của Chèo là cuộc thiên di vĩ đại: khởi nguyên từ tiếng trống lệnh hào hùng thời vua Đinh Tiên Hoàng, hòa mình vào lễ hội xuân làng xã, thăng hoa tột đỉnh với Tứ đại kiệt tác, rồi hiên ngang vượt qua khói lửa chiến khu Việt Bắc để bước vào kỷ nguyên số hóa hôm nay.
            </p>
          </div>
        </div>

        {/* Cột phải: Khung ảnh tư liệu khổ lớn */}
        <div className="lg:col-span-5">
          <figure className="relative rounded-3xl overflow-hidden border border-stone-800/90 bg-stone-950 shadow-2xl group">
            <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden relative">
              <img
                src="/images/cheo_hero.jpg"
                alt="Không gian sân đình Chèo cổ truyền ngàn năm"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
            </div>
            <figcaption className="p-5 sm:p-6 absolute bottom-0 inset-x-0 text-xs sm:text-sm text-stone-300 italic bg-stone-950/80 backdrop-blur-md border-t border-stone-800/60">
              Chiếu Chèo sân đình châu thổ sông Hồng — Nơi lưu giữ ký ức văn hóa mười thế kỷ của dân tộc.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================================
          2. THANH ĐIỀU HƯỚNG NIÊN ĐẠI (EPOCH NAVIGATION RIBBON)
      ========================================================================= */}
      <section className="sticky top-32 z-20 bg-[#0d0a08]/95 backdrop-blur-md py-4 px-2 -mx-2 border-y border-stone-800/80">
        <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-1">
          {HISTORICAL_ERAS.map((era, idx) => {
            const isSelected = selectedRibbonIndex === idx
            return (
              <button
                key={era.id}
                onClick={() => handleScrollToEra(idx)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-500/70 text-amber-200 shadow-md'
                    : 'bg-stone-900/50 border-stone-800/80 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                }`}
              >
                <Calendar className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-stone-500'}`} />
                <span className="font-bold tracking-wide">{era.period}</span>
                <span className="hidden md:inline opacity-70 text-[11px] font-sans">({era.years})</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          3. DÒNG CHẢY 5 HỒI LỊCH SỬ SO LE (ALTERNATING 2-COLUMN SPLIT GRIDS)
      ========================================================================= */}
      <div className="space-y-24 sm:space-y-32">
        {HISTORICAL_ERAS.map((era, idx) => {
          const isEven = idx % 2 === 0
          return (
            <section
              key={era.id}
              id={era.id}
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
                      src={era.image}
                      alt={era.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  </div>
                  <figcaption className="p-4 sm:p-5 text-xs sm:text-sm text-stone-400 italic bg-stone-900/90 border-t border-stone-800/60">
                    {era.imageCaption}
                  </figcaption>
                </figure>
              </div>

              {/* CỘT BÀI VIẾT TỰ SỰ */}
              <div
                className={`lg:col-span-7 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Tiêu đề thời kỳ */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                  {era.period}: {era.title}
                </h2>

                {/* Nội dung tự sự văn hóa */}
                <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
                  <p>{era.leadParagraph}</p>
                  <p className="text-stone-400 text-sm sm:text-base">{era.deepAnalysis}</p>
                </div>

                {/* Khối tương tác mở chiều sâu Modal */}
                <div className="pt-2">
                  <button
                    onClick={() => setActiveEra(era)}
                    className="group inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#1a1512] hover:bg-amber-950/30 border border-stone-800 hover:border-amber-500/60 text-xs sm:text-sm font-medium text-amber-300 hover:text-amber-200 transition-all cursor-pointer shadow-md"
                  >
                    <BookOpen className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span>Chiêm ngưỡng tư liệu &amp; dấu mốc lịch sử</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* =========================================================================
          4. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC CALLOUT BAND)
      ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-stone-800/80 p-10 sm:p-14 2xl:p-16 text-center shadow-2xl my-16 sm:my-24">
        <Sparkles className="w-7 h-7 text-amber-400/80 mx-auto mb-3" />
        <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-amber-100 font-light leading-relaxed max-w-4xl mx-auto">
          &ldquo;Chẳng thèm ăn chả ăn nem <br className="hidden sm:inline" />
          Thèm no cơm tẻ, thèm xem hát Chèo.&rdquo;
        </p>
        <div className="w-16 h-px bg-amber-500/60 mx-auto my-4" />
        <p className="text-xs sm:text-sm font-serif text-amber-400/90 font-medium">
          — Ca dao cổ truyền châu thổ sông Hồng —
        </p>
      </section>

      {/* =========================================================================
          5. LƯỚI KHÁM PHÁ TIẾP NỐI (EXHIBITION GATEWAYS - 3 CỘT)
      ========================================================================= */}
      <section className="space-y-8">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Khám Phá Chiều Sâu Sân Khấu Chèo
          </h3>
          <p className="text-sm sm:text-base text-stone-400 font-light mt-2 max-w-2xl">
            Tiếp tục cuộc hành trình thưởng lãm những tầng vỉa nghệ thuật đặc sắc đã được kết tinh qua mười thế kỷ thăng trầm:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Nhân vật Chèo */}
          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/nhan-vat')}
            className="group p-6 sm:p-8 rounded-3xl bg-[#16120f] border border-stone-800/80 hover:border-amber-600/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between cursor-pointer space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-300">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Năm Mẫu Hình Vai Diễn
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Chiêm ngưỡng thần thái ước lệ của Đào, Kép, Hề, Lão, Mụ — đại diện trọn vẹn cho thế thái nhân tình làng quê Bắc Bộ.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Bước vào khám phá</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Card 2: Làn điệu & Âm thanh */}
          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="group p-6 sm:p-8 rounded-3xl bg-[#16120f] border border-stone-800/80 hover:border-amber-600/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between cursor-pointer space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Thanh Âm Ngũ Tuyệt &amp; Làn Điệu
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Lắng nghe tiếng đàn nhị nỉ non, tiếng trống đế giục giã và kho tàng hơn 200 làn điệu Chèo nảy hạt mượt mà.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Thưởng lãm thanh âm</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: Tác phẩm tiêu biểu */}
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
                Đắm chìm vào bốn vở Chèo cổ bất hủ: Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nham và Trương Viên.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Đọc tích truyện xưa</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LỜI KẾT THI VỊ (POETIC EPILOGUE)
      ========================================================================= */}
      <section className="text-center pt-10 border-t border-stone-800/80 max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-mono uppercase tracking-widest text-amber-500/80 font-semibold">
          Tâm Nguyện Gìn Giữ
        </p>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed italic">
          Ngàn năm trôi qua, sông Hồng có thể đổi dòng, nhưng tiếng trống Chèo dưới mái đình làng vẫn sẽ mãi là nhịp đập son sắt của cội nguồn dân tộc.
        </p>
      </section>

      {/* =========================================================================
          7. MODAL CHI TIẾT NIÊN BIỂU (PROGRESSIVE DISCLOSURE MODAL)
      ========================================================================= */}
      {activeEra && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#16120f] border border-stone-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-stone-800/80 gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeEra.period}: {activeEra.title}
                </h3>
                <p className="text-xs text-stone-400 italic">
                  {activeEra.dynasty} ({activeEra.years})
                </p>
              </div>

              <button
                onClick={() => setActiveEra(null)}
                className="p-2 rounded-xl bg-stone-800/60 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: 2 cột */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Cột trái: Ảnh tư liệu khổ lớn & hiện vật */}
              <div className="md:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 aspect-[4/3]">
                  <img
                    src={activeEra.image}
                    alt={activeEra.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800/70 text-xs text-stone-400 italic">
                  {activeEra.imageCaption}
                </div>

                {/* Hiện vật lịch sử */}
                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/40 space-y-1.5">
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>Dấu tích hiện vật &amp; Bia ký</span>
                  </div>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    {activeEra.historicalArtifact}
                  </p>
                </div>
              </div>

              {/* Cột phải: Chiều sâu lịch sử & dấu mốc chính */}
              <div className="md:col-span-7 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-amber-300">
                    Bối Cảnh Lịch Sử &amp; Ý Nghĩa Thời Đại
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {activeEra.leadParagraph}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                    {activeEra.deepAnalysis}
                  </p>
                </div>

                {/* Các mốc son cốt lõi */}
                <div className="space-y-2.5 pt-2 border-t border-stone-800/60">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                    Những Mốc Son Bước Ngoặt
                  </h4>
                  <ul className="space-y-2">
                    {activeEra.keyMilestones.map((ms, mi) => (
                      <li
                        key={mi}
                        className="text-xs sm:text-sm text-stone-300 font-light flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <span>{ms}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Di sản trường tồn */}
                <div className="pt-3 border-t border-stone-800/60 text-xs text-stone-400">
                  <span className="text-amber-400 font-medium">Di sản để lại: </span>
                  {activeEra.lastingLegacy}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrevEra}
                  disabled={currentEraIndex <= 0}
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-stone-900 border border-stone-700 text-xs text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Thời kỳ trước</span>
                </button>
                <button
                  onClick={handleNextEra}
                  disabled={currentEraIndex >= HISTORICAL_ERAS.length - 1}
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-stone-900 border border-stone-700 text-xs text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>Thời kỳ tiếp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => setActiveEra(null)}
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
