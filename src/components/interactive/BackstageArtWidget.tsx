import React, { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  X,
  Compass,
  Shirt,
  Music,
} from 'lucide-react'

interface CraftPillar {
  id: string
  title: string
  leadParagraph: string
  deepAnalysis: string
  image: string
  imageCaption: string
  technicalDetails: {
    heading: string
    description: string
  }[]
  masterQuote: {
    line: string
    source: string
  }
  aestheticPhilosophy: string
}

const CRAFT_PILLARS: CraftPillar[] = [
  {
    id: 'craft-four-pillars',
    title: 'Tứ Trụ Nghệ Thuật — Nhất Thanh, Nhị Sắc, Tam Tinh, Tứ Nghệ',
    leadParagraph:
      'Bước chân vào nghề Chèo, mỗi đào, kép từ thuở thiếu thời đều phải khắc cốt ghi tâm câu khẩu quyết tối thượng: “Nhất thanh, nhị sắc, tam tinh, tứ nghệ”. Bốn chữ vàng ấy không chỉ là thước đo chuẩn mực tài năng trên sàn diễn, mà là cả một hành trình khổ luyện ròng rã suốt cả đời người. Để có thể tự tin bước lên manh chiếu sân đình giữa ba bề khán giả, người nghệ sĩ phải đánh đổi bằng hàng ngàn giờ đổ mồ hôi sau cánh màn nhung rêu phong.',
    deepAnalysis:
      '“Thanh” là giọng hát phải đạt tới độ nảy hạt ngọt ngào, phát âm tròn vành rõ chữ; “Sắc” là thần thái xuất thần, ánh mắt liếc có đuôi và nụ cười làm đắm say lòng người; “Tinh” là sự thấu hiểu sâu sắc đến tận cùng ngõ ngách tâm lý và bi kịch nhân vật; “Nghệ” là kỹ năng biểu đạt toàn diện từ ngón tay búp măng đến bước chân chữ Đinh mềm mại. Người thầy Chèo xưa từng răn dạy: “Học mười năm chưa chắc đã đứng trọn manh chiếu, nhưng chỉ một câu hát trật nhịp là đủ để mất trọn thanh danh”.',
    image: '/images/test_actor_tonkin.jpg',
    imageCaption: 'Ảnh tư liệu cổ Bắc Kỳ xưa chụp nghệ nhân Chèo — Những ngón nghề truyền khẩu gia truyền qua muôn thế hệ.',
    technicalDetails: [
      {
        heading: 'Kỹ Thuật Luyện Thanh & Nhả Chữ Nảy Hạt',
        description: 'Luyện hơi thở đan điền sâu lắng, giữ cho âm sắc vang, rền, nền, nảy. Từng nguyên âm phải mở tròn vòm họng, từng phụ âm phải bật dứt khoát không lẫn tạp âm.'
      },
      {
        heading: 'Thân Pháp Vũ Đạo & Bước Chân Chữ Đinh',
        description: 'Bước đi nhẹ nhàng không phát ra tiếng động trên manh chiếu cói; lưng thẳng, gối khép e ấp; ngón tay uốn cong hình búp măng mềm mại theo từng nhịp trống đế.'
      },
      {
        heading: 'Thần Thái Nhãn Pháp — Ánh Mắt Liếc Có Đuôi',
        description: 'Ánh mắt là cửa sổ tâm hồn của nhân vật: Đào Thương nhìn cụp u hoài nén giọt lệ sầu, Đào Lẳng liếc sắc sảo đong đưa, Hề Chèo tròn xoe ngây ngô châm biếm.'
      }
    ],
    masterQuote: {
      line: 'Hát chèo mà không có ngọn lửa trong ruột thì chỉ như tiếng chuông rỗng gõ vào hư không.',
      source: 'Lời răn dạy của các nghệ nhân Chèo cổ làng Khuốc'
    },
    aestheticPhilosophy: 'Sự hòa quyện tuyệt đối giữa kỹ thuật điêu luyện và cảm xúc chân thực, đưa người nghệ sĩ thăng hoa hòa làm một với linh hồn nhân vật.'
  },
  {
    id: 'craft-makeup',
    title: 'Nghệ Thuật Hóa Trang Mặt — Ngôn Ngữ Ký Hiệu Ước Lệ',
    leadParagraph:
      'Hóa trang trong nghệ thuật Chèo cổ truyền hoàn toàn khác biệt với lối trang điểm làm đẹp tân thời hay nghệ thuật mặt nạ của sân khấu phương Tây. Mỗi nét cọ, mỗi mảng màu điểm xuyết trên khuôn mặt người nghệ sĩ là một hệ thống ký hiệu ước lệ chuẩn mực được đúc kết qua hàng thế kỷ: khán giả xưa chỉ cần nhìn vào diện mạo khi nhân vật vừa vén màn bước ra là đã tỏ tường ngay tính cách, thân phận và cả số phận cuộc đời.',
    deepAnalysis:
      'Mặt Đào Thương đoan trang với đôi lông mày cong nhẹ hiền thục và khóe mắt u hoài; mặt Đào Lẳng Thị Mầu son môi đỏ rực, nét mày liễu sắc sảo thách thức lề thói gia phong; mặt Hề Chèo vẽ những vệt son cong cường điệu vừa ngây ngô vừa thâm thúy; mặt Mụ Ác điểm những nét sắc nhọn đay nghiến. Màu sắc cũng chính là tuyên ngôn đạo đức: sắc đỏ đại diện cho lòng trung dũng nghĩa khí, sắc trắng bộc lộ sự thâm hiểm tráo trở, còn sắc đen khắc họa tính cách thô bạo ngang tàng.',
    image: '/images/cheo_costume.jpg',
    imageCaption: 'Góc hóa trang y phục cổ truyền — Nơi từng nét cọ màu biến dung mạo đời thường thành linh hồn nhân vật.',
    technicalDetails: [
      {
        heading: 'Mã Ngôn Ngữ Sắc Màu Biểu Cảm',
        description: 'Sắc đỏ tượng trưng cho trung thành nghĩa khí; sắc trắng đại diện cho xảo quyệt gian hiểm; sắc đen thể hiện tính cách thô bạo bộc trực; sắc xanh rêu gợi nỗi u uất sầu đau.'
      },
      {
        heading: 'Kỹ Thuật Họa Mặt Theo Ngũ Mẫu Vai',
        description: 'Mỗi diện mạo tuân thủ nghiêm ngặt quy ước tạo hình: chân mày bướm của Đào Lẳng, mắt phượng của Kép Văn, nét vẽ khóe miệng trễ xuống của Đào Thương chịu oan khuất.'
      },
      {
        heading: 'Chất Liệu Son Phấn Cổ Truyền',
        description: 'Sử dụng phấn nụ hoàng cung, sáp ong, nhọ nồi tán mịn và phẩm đỏ thiên nhiên từ cánh kiến, tạo nên lớp màu đằm thắm mộc mạc dưới ánh sáng ngọn đèn dầu xưa.'
      }
    ],
    masterQuote: {
      line: 'Vẽ mặt nhân vật không phải để che giấu con người mình, mà là để vẽ lên cái thần của lẽ phải và sự trừng phạt của nhân quả.',
      source: 'Nghệ nhân lão thành truyền khẩu hậu trường'
    },
    aestheticPhilosophy: 'Mỹ học ước lệ phương Đông: giản lược chi tiết rườm rà để cô đọng bản chất tinh thần và nhân cách của con người.'
  },
  {
    id: 'craft-props',
    title: 'Đạo Cụ Ước Lệ — Nghệ Thuật "Biến Vật Thành Hồn"',
    leadParagraph:
      'Sân khấu Chèo truyền thống vốn dĩ không cần phông bạt cầu kỳ hay cảnh trí tráng lệ. Tất cả không gian, thời gian và bối cảnh của vở diễn đều được kiến tạo kỳ diệu thông qua tài năng diễn xuất ước lệ của người nghệ sĩ cùng những đạo cụ mộc mạc nhất của làng quê Bắc Bộ: chiếc quạt nan, cây gậy tre, chiếc nón ba tầm, dải lụa đào và bình vôi cổ.',
    deepAnalysis:
      'Chiếc quạt nan trong tay cô Đào Chèo là hiện thân tuyệt đối cho nghệ thuật “biến vật thành hồn”. Khi quạt xòe nhẹ nửa mặt là nỗi xấu hổ e ấp; khi quạt gập lại là bức thư tình nồng thắm; khi phe phẩy dưới cằm lại hóa thành chiếc gương soi trăng; khi vung mạnh ngang ngực lại biến thành mái chèo lướt sóng trên bến sông vắng. Cây gậy tre mộc mạc của chú Hề lúc là đòn gánh mưu sinh, lúc là gậy chỉ đường, lúc lại là vũ khí trượng nghĩa quất vào cường quyền. Đạo cụ không còn là vật vô tri mà đã hòa vào máu thịt, cùng thở với nhịp thở của nhân vật.',
    image: '/images/costume_non_quai_thao.jpg',
    imageCaption: 'Chiếc quạt nan và nón quai thao — Đạo cụ ước lệ tối giản nhưng biến hóa khôn lường trên tay nghệ nhân.',
    technicalDetails: [
      {
        heading: '12 Ngôn Ngữ Biểu Cảm Của Chiếc Quạt Nan',
        description: 'Quạt mở rộng là niềm vui hân hoan; quạt che nửa mặt là duyên thầm e thẹn; quạt hất ngược ra sau là giận hờn phẫn nộ; quạt đội trên đầu là bước chân biệt ly chia cách.'
      },
      {
        heading: 'Cây Gậy Tre & Sức Mạnh Hề Chèo',
        description: 'Một khúc tre tầm vông mộc mạc biến hóa lúc làm mái chèo, lúc làm đòn gánh, lúc làm ngọn roi quất vào thói tham tàn của quan lại phong kiến.'
      },
      {
        heading: 'Nón Ba Tầm & Dải Lụa Đào Ước Lệ',
        description: 'Chiếc nón quai thao nghiêng che giấu giọt nước mắt nghẹn ngào; dải lụa đào bay bổng tượng trưng cho dòng sông cách trở hay sợi tơ hồng se duyên đôi lứa.'
      }
    ],
    masterQuote: {
      line: 'Trên manh chiếu hẹp, chiếc quạt nan mở ra cả bầu trời quê hương, khép lại cả một bể dâu nhân thế.',
      source: 'GS. NSND Trần Bảng — Cây đại thụ nghiên cứu Chèo'
    },
    aestheticPhilosophy: 'Lấy cái vô hình để diễn tả cái hữu hình, biến vật thể mộc mạc thành linh hồn sống động của nghệ thuật kịch hát dân tộc.'
  }
]

interface BackstageArtWidgetProps {
  onNavigate?: (path: string) => void
}

export const BackstageArtWidget: React.FC<BackstageArtWidgetProps> = ({ onNavigate }) => {
  const [activePillar, setActivePillar] = useState<CraftPillar | null>(null)

  const currentPillarIndex = activePillar
    ? CRAFT_PILLARS.findIndex((p) => p.id === activePillar.id)
    : -1

  const handlePrevPillar = () => {
    if (currentPillarIndex > 0) {
      setActivePillar(CRAFT_PILLARS[currentPillarIndex - 1])
    }
  }

  const handleNextPillar = () => {
    if (currentPillarIndex < CRAFT_PILLARS.length - 1) {
      setActivePillar(CRAFT_PILLARS[currentPillarIndex + 1])
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
          src="/images/artist_hoa_tam.jpg"
          alt="NSND Hoa Tâm — Cây đại thụ sân khấu Chèo cổ truyền"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/15" />

        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8 space-y-2.5">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md">
            Công Phu Sau Màn Nhung &amp; Tâm Hồn Nghệ Sĩ
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-stone-200 font-serif font-light leading-relaxed drop-shadow max-w-4xl">
            <span className="float-left text-3xl sm:text-4xl font-serif font-bold text-amber-400 leading-none pr-2.5 pt-0.5">N</span>
            gười xưa có câu: “Thao trường đổ mồ hôi, chiến trường bớt đổ máu”. Với người nghệ sĩ Chèo cổ truyền, câu nói ấy ứng nghiệm vào từng giờ từng phút sau cánh màn nhung rêu phong. Manh chiếu sân đình tuy hẹp nhưng đòi hỏi ngón nghề uyên bác khôn lường: một câu hát nảy hạt phải đổi bằng mười năm rèn giọng; một bước đi chữ Đinh phải tập từ thuở ngón chân còn trần trụi bám vào thềm đình rêu xanh.
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. BA HỒI TỰ SỰ HẬU TRƯỜNG SO LE (ALTERNATING 2-COLUMN SPLIT GRIDS)
      ========================================================================= */}
      <div className="space-y-24 sm:space-y-32">
        {CRAFT_PILLARS.map((pillar, idx) => {
          const isEven = idx % 2 === 0
          return (
            <section
              key={pillar.id}
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
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  </div>
                  <figcaption className="p-4 sm:p-5 text-xs sm:text-sm text-stone-400 italic bg-stone-900/90 border-t border-stone-800/60">
                    {pillar.imageCaption}
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
                  {pillar.title}
                </h2>

                {/* Văn phong tự sự sâu lắng */}
                <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
                  <p>{pillar.leadParagraph}</p>
                  <p className="text-stone-400 text-sm sm:text-base">{pillar.deepAnalysis}</p>
                </div>

                {/* Khối tương tác mở Modal Chi Tiết */}
                <div className="pt-2">
                  <button
                    onClick={() => setActivePillar(pillar)}
                    className="group inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#1a1512] hover:bg-amber-950/30 border border-stone-800 hover:border-amber-500/60 text-xs sm:text-sm font-medium text-amber-300 hover:text-amber-200 transition-all cursor-pointer shadow-md"
                  >
                    <BookOpen className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span>Chiêm ngưỡng công phu &amp; khẩu quyết diễn xướng</span>
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
          &ldquo;Học mười năm chưa chắc đã đứng trọn manh chiếu, <br className="hidden sm:inline" />
          nhưng chỉ một nhịp phách sai là phụ bạc tấm lòng khán giả.&rdquo;
        </p>
        <div className="w-16 h-px bg-amber-500/60 mx-auto my-4" />
        <p className="text-xs sm:text-sm font-serif text-amber-400/90 font-medium">
          — Lời răn dạy của các nghệ nhân Chèo cổ làng Khuốc —
        </p>
      </section>

      {/* =========================================================================
          4. LƯỚI KHÁM PHÁ TIẾP NỐI (EXHIBITION GATEWAYS - 3 CỘT)
      ========================================================================= */}
      <section className="space-y-8">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Khám Phá Toàn Diện Không Gian Sân Khấu
          </h3>
          <p className="text-sm sm:text-base text-stone-400 font-light mt-2 max-w-2xl">
            Tiếp nối hành trình khám phá những yếu tố cấu thành nên thánh đường kịch hát truyền thống:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Trang phục & Phục sức */}
          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/trang-phuc')}
            className="group p-6 sm:p-8 rounded-3xl bg-[#16120f] border border-stone-800/80 hover:border-amber-600/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between cursor-pointer space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-300">
                <Shirt className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Trang Phục &amp; Phục Sức
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Chiêm ngưỡng sắc màu mớ ba mớ bảy, áo tứ thân nền nã và dải thắt lưng xanh bay bổng theo từng bước nhún nhảy.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Xem y phục cổ truyền</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Card 2: Thanh âm & Làn điệu */}
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

          {/* Card 3: Năm mẫu hình nhân vật */}
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
                Đắm chìm vào thần thái ước lệ của Đào, Kép, Hề, Lão, Mụ — chiếc chìa khóa giải mã nhân sinh quan Việt.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Chiêm ngưỡng vai mẫu</span>
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
          Tâm Niệm Nghề Diễn
        </p>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed italic">
          Màn nhung có thể khép lại, son phấn có thể phai tàn, nhưng những giọt mồ hôi và lòng kiên trinh với nghề của người nghệ sĩ sẽ mãi lắng đọng trong từng thớ chiếu sân đình.
        </p>
      </section>

      {/* =========================================================================
          6. MODAL CHI TIẾT HẬU TRƯỜNG (PROGRESSIVE DISCLOSURE MODAL)
      ========================================================================= */}
      {activePillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#16120f] border border-stone-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-stone-800/80 gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activePillar.title}
              </h3>

              <button
                onClick={() => setActivePillar(null)}
                className="p-2 rounded-xl bg-stone-800/60 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: 2 cột */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Cột trái: Ảnh minh họa & Trích đoạn lời thoại */}
              <div className="md:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 aspect-[4/3]">
                  <img
                    src={activePillar.image}
                    alt={activePillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800/70 text-xs text-stone-400 italic">
                  {activePillar.imageCaption}
                </div>

                {/* Hộp danh ngôn / lời răn dạy */}
                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/40 space-y-2">
                  <p className="text-xs sm:text-sm font-serif italic text-amber-100/95 leading-relaxed">
                    &ldquo;{activePillar.masterQuote.line}&rdquo;
                  </p>
                  <p className="text-xs font-serif text-amber-400/80 font-medium">
                    — {activePillar.masterQuote.source} —
                  </p>
                </div>
              </div>

              {/* Cột phải: Kỹ thuật khổ luyện & Triết lý mỹ học */}
              <div className="md:col-span-7 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-amber-300">
                    Triết Lý Mỹ Học Ước Lệ
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {activePillar.aestheticPhilosophy}
                  </p>
                </div>

                {/* Chi tiết kỹ nghệ */}
                <div className="space-y-3 pt-2 border-t border-stone-800/60">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                    Quy Chuẩn Kỹ Nghệ Diễn Xướng
                  </h4>
                  <div className="space-y-3">
                    {activePillar.technicalDetails.map((td, tIdx) => (
                      <div key={tIdx} className="space-y-1">
                        <div className="text-xs sm:text-sm font-bold text-white">
                          {td.heading}
                        </div>
                        <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                          {td.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer: Chuyển chuyên đề trước / sau */}
            <div className="pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrevPillar}
                  disabled={currentPillarIndex <= 0}
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-stone-900 border border-stone-700 text-xs text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Chuyên đề trước</span>
                </button>
                <button
                  onClick={handleNextPillar}
                  disabled={currentPillarIndex >= CRAFT_PILLARS.length - 1}
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-stone-900 border border-stone-700 text-xs text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>Chuyên đề tiếp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => setActivePillar(null)}
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
