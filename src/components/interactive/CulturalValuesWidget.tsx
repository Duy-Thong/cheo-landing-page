import React, { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  X,
  Compass,
  Award,
  History,
  HeartHandshake,
  ShieldCheck,
  Smile,
} from 'lucide-react'

interface CulturalPillar {
  id: string
  title: string
  subtitle: string
  essence: string
  leadParagraph: string
  deepAnalysis: string
  image: string
  imageCaption: string
  exemplaryPlay: string
  philosophicalQuote: {
    line: string
    source: string
  }
  academicInsight: string
  contemporaryRelevance: string
  icon: React.ReactNode
}

const CULTURAL_PILLARS: CulturalPillar[] = [
  {
    id: 'pillar-humor',
    title: 'Tiếng Cười Trào Lộng — Vũ Khí Phản Biện Của Người Bình Dân',
    subtitle: 'Đặc quyền dân chủ dưới mái đình & Ngọn roi châm biếm cường quyền',
    essence: 'Tiếng cười Hề Chèo không cay độc mà thanh lọc tâm hồn, vạch trần thói đạo đức giả của tầng lớp thống trị và trao lại sự hả hê, niềm tin công lý cho dân nghèo.',
    leadParagraph:
      'Dưới chế độ phong kiến hà khắc xưa kia, người nông dân thấp cổ bé họng hầu như không có bất kỳ diễn đàn nào để cất lên tiếng nói phản kháng. Thế nhưng, khi bước chân lên manh chiếu chèo giữa sân đình làng, trật tự xã hội ấy bị đảo lộn hoàn toàn nhờ sự xuất hiện của nhân vật Hề Chèo. Đây là nhân vật duy nhất trong toàn bộ kịch bản được hưởng một “đặc quyền dân chủ vô song”: được tự do phá vỡ quy ước sân khấu, nhảy ra khỏi cốt truyện để nói thẳng, nói thật và châm biếm thói hư tật xấu của quan lại cường hào ngay trước mặt bàn dân thiên hạ.',
    deepAnalysis:
      'Tiếng cười của Hề Chèo — dù là Hề Gậy mộc mạc chịu đòn thay thiên hạ hay Hề Mồi đong đưa khéo léo dùng lời bóng gió — không bao giờ là tiếng cười cay độc hay hủy diệt nhân phẩm. Đó là tiếng cười thanh lọc tâm hồn (catharsis), biến nỗi đắng cay cơ cực của kiếp cùng đinh thành niềm vui sảng khoái và lòng lạc quan yêu đời vô hạn. Sau những trận cười nghiêng ngả sân đình, người xem như được giải tỏa muôn vàn uất ức dồn nén, để rồi lại vững tin bước tiếp trên hành trình mưu sinh nhọc nhằn.',
    image: '/images/char_he.jpg',
    imageCaption: 'Chú Hề Chèo với manh áo cộc và cây gậy tre — Hiện thân cho tinh thần tự do ngôn luận mộc mạc nơi sân đình.',
    exemplaryPlay: 'Hề Mồi trêu ghẹo Thị Mầu (Thị Mầu Lên Chùa); Hề Gậy châm biếm quan Tuần Ty (Tuần Ty Đào Huế).',
    philosophicalQuote: {
      line: 'Thầy như táo rụng sân đình, em như gái dở đi rình của chua... Làng nước ơi, ai làm cho bận lòng nhau?',
      source: 'Trích đoạn Hề Mồi trong Thị Mầu Lên Chùa'
    },
    academicInsight:
      'Nụ cười Chèo là cơ chế tự vệ văn hóa độc đáo của người nông dân Bắc Bộ. Khi không thể dùng quyền lực thực tế để chống lại cường quyền, họ dùng trí tuệ dân gian và tiếng cười trào phúng để tước bỏ tính thiêng liêng giả tạo của giai cấp thống trị.',
    contemporaryRelevance:
      'Trong thời đại hôm nay, tinh thần phản biện của Hề Chèo nhắc nhở chúng ta về sức mạnh của sự hài hước tinh tế, văn minh: chỉ trích cái xấu bằng sự thông tuệ và bao dung chứ không sa vào thù hằn cực đoan.',
    icon: <Smile className="w-6 h-6 text-amber-400" />
  },
  {
    id: 'pillar-karma',
    title: 'Nhân Quả Công Bằng — Triết Lý "Ở Hiền Gặp Lành"',
    subtitle: 'Hóa giải oan khiên bằng chữ Nhẫn & Điểm tựa niềm tin đạo trời',
    essence: 'Khác với bi kịch phương Tây thường khép lại trong tuyệt vọng, Chèo luôn hướng về sự viên mãn của luật nhân quả: người hiền dù chịu trăm đắng ngàn cay cuối cùng cũng được đền đáp xứng đáng.',
    leadParagraph:
      'Nếu bi kịch phương Tây thường đẩy số phận con người vào sự bế tắc không lối thoát kiểu số mệnh Hy Lạp cổ đại, thì sân khấu Chèo truyền thống châu thổ sông Hồng hầu như luôn khép lại trong sự viên mãn của đạo trời và luật nhân quả công bằng: Thiện hữu thiện báo, ác hữu ác báo. Người hiền lành dù phải nếm trải muôn vàn oan khuất, đắng cay tột cùng thì phẩm giá trong sạch vẫn sẽ được soi tỏ, kẻ tham tàn bạo ngược tất yếu phải gánh chịu nghiệp báo công minh.',
    deepAnalysis:
      'Hình tượng Thị Kính trong kiệt tác Quan Âm Thị Kính chính là đỉnh cao của triết lý nhân sinh này. Ba lần chịu hàm oan tày trời (nghi án giết chồng, án hoang thai, miệng đời nguyền rủa), Thị Kính không một lời oán trách số phận hay nung nấu thù hận trả thù. Nàng dùng trọn vẹn chữ Nhẫn và tấm lòng từ bi bác ái để chở che cho giọt máu vô tội của Thị Mầu. Sự thăng hóa của Thị Kính thành Phật Bà Quan Âm chính là lời tuyên ngôn đanh thép của lương tri dân gian: sự nhẫn nhịn vì lẽ phải không phải là hèn nhát, mà là sức mạnh cảm hóa vĩ đại nhất của con người.',
    image: '/images/play_quan_am_thi_kinh.jpg',
    imageCaption: 'Thị Kính bế con Thị Mầu trước cổng chùa — Biểu tượng tuyệt đối của đức nhẫn nại và lòng vị tha dân tộc.',
    exemplaryPlay: 'Quan Âm Thị Kính (Thị Kính thành Phật); Thạch Sanh (chém chằn tinh, cưới công chúa); Trương Viên (đoàn tụ mẹ con).',
    philosophicalQuote: {
      line: 'Trời cao có mắt soi tỏ dạ con, dù chết vẫn giữ tấm lòng trong sạch như gương soi đáy nước.',
      source: 'Lời thoại Thị Kính chịu hàm oan trước bàn dân thiên hạ'
    },
    academicInsight:
      'Triết lý nhân quả trong Chèo là sự dung hợp tài tình giữa luật Nghiệp báo Phật giáo với ước mơ công bằng xã hội thuần phác của cư dân nông nghiệp lúa nước. Đó là điểm tựa tâm linh giúp cộng đồng làng xã vượt qua những giai đoạn lịch sử khốc liệt nhất.',
    contemporaryRelevance:
      'Giữa xã hội xô bồ thực dụng hôm nay, niềm tin vào luật nhân quả nhắc nhở mỗi cá nhân giữ vững sự lương thiện, lòng kiên định trước nghịch cảnh và tin vào giá trị bất biến của sự tử tế.',
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />
  },
  {
    id: 'pillar-loyalty',
    title: 'Đạo Nghĩa Thủy Chung & Tình Tri Âm Làng Xã',
    subtitle: 'Chữ Tín làm đầu, tình bạn son sắt & Sợi dây cố kết cộng đồng',
    essence: 'Chuẩn mực đạo đức Á Đông được giản dị hóa thành tình bằng hữu tri kỷ và đạo vợ chồng son sắt, dệt nên sợi dây gắn kết cộng đồng bền chặt qua nghìn năm bão táp.',
    leadParagraph:
      'Nền văn minh lúa nước sông Hồng lấy gia đình và làng xã làm cội rễ sinh tồn. Trước thiên tai lũ lụt khắc nghiệt và giặc dã liên miên, người nông dân chỉ có thể đứng vững nhờ sự đùm bọc, tương trợ và chữ Tín chí tình chí nghĩa giữa con người với con người. Tinh thần nhân văn cao cả ấy đã được các nghệ nhân Chèo cổ truyền hóa thân thành những pho tượng đài nghệ thuật sáng chói về tình bằng hữu và đức hy sinh thầm lặng.',
    deepAnalysis:
      'Vở chèo kinh điển Lưu Bình Dương Lễ là khúc ca tuyệt mỹ về tình tri kỷ độc nhất vô nhị trong kho tàng sân khấu thế giới. Để cứu người bạn Lưu Bình khỏi sa ngã vào lối sống buông tuồng trụy lạc, Dương Lễ đã nén lòng đóng vai kẻ cạn tình hắt hủi, đồng thời âm thầm cử chính người vợ hiền thảo Châu Long thay mình lặn lội mười năm nuôi bạn ăn học thành tài. Không một chút toan tính vị kỷ, không màng danh lợi tầm thường — chỉ có tấm lòng son sắt vì sự nghiệp lập thân của tri âm. Chiếu chèo sân đình chính là chiếc nôi êm đềm gìn giữ và nuôi dưỡng những hạt mầm nghĩa hiệp cao đẹp ấy.',
    image: '/images/play_luu_binh_duong_le.jpg',
    imageCaption: 'Lưu Bình, Dương Lễ và nàng Châu Long — Tượng đài bất hủ của tình bạn tri kỷ và nghĩa vợ chồng son sắt.',
    exemplaryPlay: 'Lưu Bình Dương Lễ (tình tri kỷ bằng hữu); Trương Viên (lòng hiếu thảo mẫu mực); Thoại Khanh Châu Hưng (nghĩa tào khang).',
    philosophicalQuote: {
      line: 'Trai tráng vì nghĩa quên mình, gìn vàng giữ ngọc trọn tình tri âm... Sông có cạn, núi có mòn, lòng son chẳng đổi!',
      source: 'Trích đoạn Lưu Bình nhận ra ân tình của Dương Lễ và Châu Long'
    },
    academicInsight:
      'Đạo nghĩa trong Chèo không phải thứ luân lý giáo điều trừu tượng của Nho giáo kinh viện, mà là lẽ sống tình nghĩa mộc mạc của người Việt: “Ăn quả nhớ kẻ trồng cây”, “Bán anh em xa, mua láng giềng gần”.',
    contemporaryRelevance:
      'Trong thời đại các mối quan hệ dễ bị thương mại hóa, câu chuyện về tình bạn vị tha và sự hy sinh của Lưu Bình - Dương Lễ là bài học thức tỉnh sâu sắc về giá trị thiêng liêng của chữ Tín và lòng thủy chung.',
    icon: <HeartHandshake className="w-6 h-6 text-amber-400" />
  }
]

interface CulturalValuesWidgetProps {
  onNavigate?: (path: string) => void
}

export const CulturalValuesWidget: React.FC<CulturalValuesWidgetProps> = ({ onNavigate }) => {
  const [activePillar, setActivePillar] = useState<CulturalPillar | null>(null)

  const currentPillarIndex = activePillar
    ? CULTURAL_PILLARS.findIndex((p) => p.id === activePillar.id)
    : -1

  const handlePrevPillar = () => {
    if (currentPillarIndex > 0) {
      setActivePillar(CULTURAL_PILLARS[currentPillarIndex - 1])
    }
  }

  const handleNextPillar = () => {
    if (currentPillarIndex < CULTURAL_PILLARS.length - 1) {
      setActivePillar(CULTURAL_PILLARS[currentPillarIndex + 1])
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
            Đạo Lý Dân Gian <br className="hidden sm:inline" />
            <span className="text-amber-400 italic">Chiếc Gương Soi Nhân Thế</span>
          </h1>

          <p className="text-lg sm:text-xl text-amber-200/90 font-light italic leading-relaxed border-l-2 border-amber-500/60 pl-5">
            Chèo không thuyết giáo bằng những tín điều kinh viện xa xôi, mà gửi gắm triết lý nhân sinh vào từng tiếng cười trào lộng, giọt lệ cảm thương và niềm tin bất diệt vào đạo trời.
          </p>

          <div className="space-y-4 text-stone-300 font-light text-base sm:text-lg leading-relaxed pt-2">
            <p className="first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              Người nông dân châu thổ sông Hồng bước lên manh chiếu chèo không phải để rao giảng luân thường đạo lý một cách khô cứng, mà để soi tỏ lòng mình. Dưới mái đình rêu phong cổ kính, mỗi tích trò dân gian mở ra tựa như một phiên tòa công lý của lương tri — nơi lẽ phải được tôn vinh, kẻ ác phải chuốc lấy báo ứng, và những nỗi đau uất ức thầm kín nhất của kiếp người được giải tỏa trong sự hả hê, đồng cảm.
            </p>
            <p className="text-stone-400 text-sm sm:text-base">
              Hơn cả một hình thức diễn xướng sân khấu, Chèo chính là trường đạo lý dân gian của người Việt: dạy người ta biết nhẫn nhịn trước oan khiên, biết yêu thương đùm bọc kẻ cơ hàn, và biết dùng nụ cười hào sảng để vượt qua muôn vàn giông bão của kiếp nhân sinh.
            </p>
          </div>
        </div>

        {/* Cột phải: Khung ảnh tư liệu khổ lớn */}
        <div className="lg:col-span-5">
          <figure className="relative rounded-3xl overflow-hidden border border-stone-800/90 bg-stone-950 shadow-2xl group">
            <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden relative">
              <img
                src="/images/cheo_dinh_lang.jpg"
                alt="Mái đình làng Bắc Bộ — Chiếc nôi nuôi dưỡng đạo lý dân gian"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
            </div>
            <figcaption className="p-5 sm:p-6 absolute bottom-0 inset-x-0 text-xs sm:text-sm text-stone-300 italic bg-stone-950/80 backdrop-blur-md border-t border-stone-800/60">
              Mái đình rêu phong làng Bắc Bộ — Nơi neo đậu những giá trị tinh thần và đạo lý bất biến qua ngàn năm lúa nước.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================================
          2. BA HỒI TỰ SỰ VĂN HÓA SO LE (ALTERNATING 2-COLUMN SPLIT GRIDS)
      ========================================================================= */}
      <div className="space-y-24 sm:space-y-32">
        {CULTURAL_PILLARS.map((pillar, idx) => {
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
                    <span>Chiêm ngưỡng chiều sâu triết lý &amp; trích đoạn</span>
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
          &ldquo;Đất có lề, quê có thói <br className="hidden sm:inline" />
          Chiếu chèo mở lối, tỏ tỏ đục trong.&rdquo;
        </p>
        <div className="w-16 h-px bg-amber-500/60 mx-auto my-4" />
        <p className="text-xs sm:text-sm font-serif text-amber-400/90 font-medium">
          — Lời truyền tụng của các bậc túc nho châu thổ sông Hồng —
        </p>
      </section>

      {/* =========================================================================
          4. LƯỚI KHÁM PHÁ TIẾP NỐI (EXHIBITION GATEWAYS - 3 CỘT)
      ========================================================================= */}
      <section className="space-y-8">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Khám Phá Toàn Diện Không Gian Chèo
          </h3>
          <p className="text-sm sm:text-base text-stone-400 font-light mt-2 max-w-2xl">
            Tiếp nối hành trình thưởng lãm dòng chảy lịch sử và nghệ thuật diễn xướng đặc sắc:
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

          {/* Card 2: Năm mẫu hình nhân vật */}
          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/nhan-vat')}
            className="group p-6 sm:p-8 rounded-3xl bg-[#16120f] border border-stone-800/80 hover:border-amber-600/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between cursor-pointer space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-300">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Năm Mẫu Hình Nhân Vật
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Chiêm ngưỡng thần thái ước lệ của Đào, Kép, Hề, Lão, Mụ — đại diện trọn vẹn cho thế thái nhân tình làng quê Việt.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Khám phá vai mẫu</span>
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
                Đắm chìm vào bốn pho tượng đài nghệ thuật bất hủ: Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nham và Trương Viên.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs sm:text-sm text-amber-400 group-hover:text-amber-300 font-medium">
              <span className="italic">Thưởng lãm kiệt tác</span>
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
          Triết Lý Muôn Đời
        </p>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed italic">
          Dù cuộc đời lắm nỗi thăng trầm dâu bể, ngọn lửa hướng thiện và tiếng cười thanh sạch của Chèo sẽ mãi là ngọn đèn soi sáng tâm hồn dân tộc.
        </p>
      </section>

      {/* =========================================================================
          6. MODAL CHI TIẾT TRIẾT LÝ (PROGRESSIVE DISCLOSURE MODAL)
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

                {/* Hộp danh ngôn / lời thoại đắt giá */}
                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/40 space-y-2">
                  <p className="text-xs sm:text-sm font-serif italic text-amber-100/95 leading-relaxed">
                    &ldquo;{activePillar.philosophicalQuote.line}&rdquo;
                  </p>
                  <p className="text-xs font-serif text-amber-400/80 font-medium">
                    — {activePillar.philosophicalQuote.source} —
                  </p>
                </div>
              </div>

              {/* Cột phải: Chiều sâu văn hóa học & Bài học đương đại */}
              <div className="md:col-span-7 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-amber-300">
                    Bản Sắc Văn Hóa Dân Gian
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {activePillar.academicInsight}
                  </p>
                </div>

                {/* Dẫn chứng tích trò */}
                <div className="space-y-2 pt-2 border-t border-stone-800/60">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                    Tác Phẩm Dẫn Chứng Tiêu Biểu
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {activePillar.exemplaryPlay}
                  </p>
                </div>

                {/* Giá trị thời đại hôm nay */}
                <div className="space-y-2 pt-2 border-t border-stone-800/60">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                    Ý Nghĩa Đối Với Đời Sống Đương Đại
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {activePillar.contemporaryRelevance}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer: Chuyển trụ cột trước / sau */}
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
                  disabled={currentPillarIndex >= CULTURAL_PILLARS.length - 1}
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
