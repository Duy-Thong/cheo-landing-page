import React, { useState, useEffect } from 'react'
import { ArrowLeft, Play, Pause, Music, Sparkles, ChevronRight } from 'lucide-react'
import { cheoAudio } from '../../utils/cheoAudioSynthesizer'

interface InstrumentItem {
  id: string
  name: string
  category: string
  image: string
  lead: string
  verse: string
  soundPattern: string
  history: string
  craftsmanship: string
  technique: string
  theatricalRole: string
}

interface Melody {
  id: string
  name: string
  type: string
  character: string
  lyrics: string
  description: string
  image: string
}

interface StageStep {
  step: number
  name: string
  subtitle: string
  instruments: string
  tempo: string
  description: string
  rhythmSample: string
  verse: string
  soundInstrumentId: string
}

const MELODIES_DATA: Melody[] = [
  {
    id: 'dao-lieu',
    name: 'Điệu Đào Liễu',
    type: 'Làn điệu trữ tình & lúng liếng',
    character: 'Đào lẳng (Thị Mầu)',
    lyrics: 'Đào liễu có một mình, nọ ới duyên tầm... Rầy trông mai ngóng, giọt sương gieo nặng cành...',
    description: 'Âm điệu tươi vui, nẩy hạt đong đưa, bộc lộ khát khao tình yêu tự do phá bỏ mọi rào giậu lễ giáo.',
    image: '/images/sound_dan_nhac.jpg'
  },
  {
    id: 'quan-tu-vu-dich',
    name: 'Quân Tử Vu Dịch',
    type: 'Làn điệu tự sự & bi ai',
    character: 'Đào thương (Thị Kính)',
    lyrics: 'Quân tử vu dịch, bất tri kỳ kỳ, há như chi hà... Nỗi niềm nhớ thương xa xôi ngàn trùng vạn dặm...',
    description: 'Chuẩn mực của phong cách Đào thương, giai điệu chậm rãi nghẹn ngào diễn tả đức hy sinh và nỗi lòng son sắt.',
    image: '/images/cheo_history.jpg'
  },
  {
    id: 'sa-lech-chenh',
    name: 'Điệu Sa Lệch Chênh',
    type: 'Làn điệu vũ đạo & giao duyên',
    character: 'Hội xuân trai gái',
    lyrics: 'Cách một con sông, chứ đôi bên bờ liễu... Thuyền ai lơ lửng, đợi ai trao lời non nước...',
    description: 'Tiết tấu rộn ràng gắn với vũ đạo múa quạt lượn sóng trong những đêm hội làng vào xuân.',
    image: '/images/cheo_characters.jpg'
  },
  {
    id: 'he-moi',
    name: 'Điệu Hề Mồi',
    type: 'Làn điệu trào phúng & giải tỏa',
    character: 'Hề Chèo dân gian',
    lyrics: 'Tôi ra đây có phải xưng danh không nhỉ? Không xưng danh thì ai biết tôi là ai! Làng trên xóm dưới lắng tai mà nghe...',
    description: 'Tiếng cười giòn tan châm biếm sâu cay thói hư tật xấu, mang lại sự hả hê và lạc quan cho người lao động.',
    image: '/images/backstage_art.jpg'
  }
]

const INSTRUMENTS_DATA: InstrumentItem[] = [
  {
    id: 'trong-de',
    name: 'Trống Đế',
    category: 'Trưởng Ban Tiết Tấu',
    image: '/images/inst_trong_de.jpg',
    lead: 'Được mệnh danh là “trái tim” của đêm diễn, Trống Đế nắm giữ sinh mệnh và điều phối toàn bộ nhịp thở của chiếu Chèo. Không một bước chân, ánh mắt hay câu hát nào của đào kép có thể tách rời tiếng tùng cắc giòn giã của chiếc trống nhỏ này.',
    verse: 'Thùng thình trống đánh giòn tan / Chỉ huy đào kép vững vàng bước chân.',
    soundPattern: 'Tùng... Cắc! Tùng tùng cắc!',
    history: 'Từ thuở bà tổ Phạm Thị Trân định hình lối diễn xướng cung đình thời Hoa Lư thế kỷ thứ X, tiếng trống đã là chuẩn mực tối thượng để giữ trật tự sân khấu. Trải qua hàng trăm năm bám rễ nơi sân đình làng quê Bắc Bộ, Trống Đế trở thành nhạc cụ không thể thay thế trong mọi gánh chèo cổ.',
    craftsmanship: 'Thân trống (tang trống) được tiện từ gỗ mít già hoặc gỗ lim nguyên khối, cao chừng 18–20cm, đường kính mặt khoảng 15–18cm. Hai mặt bịt da trâu nạo mỏng căng thật căng bằng đinh tre già hoặc chốt gỗ để đạt độ vang đanh dứt khoát. Cặp dùi trống làm từ gỗ lim hoặc gỗ ổi đặc, tiện thuôn dần về đầu gõ.',
    technique: 'Nghệ nhân dùng hai tay cầm hai dùi lim, một tay gõ vào tâm mặt da tạo tiếng “tùng” trầm chắc điểm nhịp, tay kia gõ vào thành tang gỗ tạo tiếng “cắc” đanh giòn, sắc lẹm. Ngón nghề đỉnh cao nằm ở kỹ thuật gõ dập, gõ điểm rơi, bịt mặt trống tạo tiếng “cụp” và dồn phách như thác đổ khi nhân vật bước vào cao trào cảm xúc.',
    theatricalRole: 'Trong các màn diễn kinh điển như “Xúy Vân giả dại” hay “Thị Mầu lên chùa”, nhịp trống đế vừa đệm theo điệu cười lúng liếng, vừa chốt hạ từng câu xưng danh, đồng thời thay mặt khán giả chấm điểm tán thưởng hoặc phê phán từng hành vi của nhân vật trên manh chiếu.'
  },
  {
    id: 'dan-nguyet',
    name: 'Đàn Nguyệt',
    category: 'Lãnh Tấu Giai Điệu',
    image: '/images/inst_dan_nguyet.jpg',
    lead: 'Chiếc đàn tròn vành vạnh như mặt trăng rằm, giữ vai trò rường cột dẫn dắt toàn bộ hệ thống giai điệu Chèo cổ. Hai dây tơ nâng cánh câu ca, hòa quyện mật thiết cùng hơi thở của người nghệ sĩ.',
    verse: 'Đàn nguyệt so dây nắn nót / Tình tang nâng cánh câu ca lững lờ.',
    soundPattern: 'Tích tịch tình tang, ngân vang dìu dặt',
    history: 'Xuất hiện lâu đời trong âm nhạc truyền thống Việt Nam với tên gọi dân gian là Nguyệt Cầm hay Đàn Kìm, Đàn Nguyệt là nhạc cụ dây gảy quan trọng nhất trong dàn Bát Âm, có mặt từ chèo sân đình đến ca trù và hát văn.',
    craftsmanship: 'Hộp cộng hưởng tròn dẹt làm từ gỗ ngô đồng nhẹ và xốp để khuếch đại âm thanh trong trẻo, cần đàn dài bằng gỗ trắc hoặc gỗ mun gắn 8–10 phím đàn khá cao. Hai dây đàn xưa làm bằng tơ tằm xe chặt, nay dùng dây nilon hoặc tơ tổng hợp, được lên dây theo khoảng âm quãng bốn hoặc quãng năm.',
    technique: 'Kỹ thuật diễn tấu Đàn Nguyệt phong phú bậc nhất với các ngón gảy móng rùa, ngón vê dồn dập, ngón rung mềm mại, ngón vuốt luyến láy và đặc biệt là ngón nhấn phím cao (tạo ra các vi âm lơ lớ đặc trưng của thang âm Ngũ Cung Bắc Bộ: Hò, Xự, Xang, Xê, Cống).',
    theatricalRole: 'Đàn Nguyệt không đơn thuần đánh giai điệu độc lập mà luôn “bám” theo từng dấu giọng, uốn lượn theo từng làn hơi của đào kép. Tiếng đàn lót đệm khi hát nói, ngân vang khi hát làn điệu, và trở thành chiếc cầu nối cảm xúc đưa người nghe vào cõi mộng mơ Kinh Bắc.'
  },
  {
    id: 'dan-nhi',
    name: 'Đàn Nhị',
    category: 'Biểu Cảm Nội Tâm',
    image: '/images/inst_dan_nhi.jpg',
    lead: 'Cung vĩ lông ngựa miết trên hai dây tơ tạo nên thanh âm nỉ non, da diết như tiếng lòng trắc ẩn của những kiếp người chìm nổi trong xã hội cũ.',
    verse: 'Cung vĩ kéo khúc đoạn trường / Nỗi oan Thị Kính còn vương tháng ngày.',
    soundPattern: 'É e kéo nhị nỉ non oán than',
    history: 'Đàn Nhị (còn gọi là Đàn Cò ở phương Nam) gắn liền với đời sống tâm linh và nghệ thuật diễn xướng của người Việt. Trong Chèo cổ, tiếng nhị là linh hồn của những khúc hát tự sự, ai oán và bi thương nhất.',
    craftsmanship: 'Ống cộng hưởng hình trụ hoặc bát giác tiện từ gỗ trắc, một đầu bịt da trăn hoặc da rắn khô. Cần đàn thẳng tắp cắm xuyên qua ống cộng hưởng. Cung vĩ làm từ cật tre uốn cong căng chùm lông đuôi ngựa luồn kẹp giữa hai dây đàn, được bôi sáp thông để tăng ma sát.',
    technique: 'Bằng cách đẩy và kéo cung vĩ kết hợp ngón tay rung, miết và vuốt trên cần đàn không có phím, nghệ sĩ Đàn Nhị có thể tái hiện chính xác ngữ điệu than khóc, tiếng nấc nghẹn hay tiếng nỉ non ru hời của con người.',
    theatricalRole: 'Tiếng Đàn Nhị là chiếc đòn bẩy tâm lý dữ dội trong các vở Chèo bi kịch. Khi Thị Kính chịu nỗi oan giết chồng hay ôm con Thị Mầu giữa chợ đời, từng tiếng kéo nhị như cứa vào lòng người xem hội, đẩy nỗi xót thương lên đến đỉnh điểm.'
  },
  {
    id: 'sao-truc',
    name: 'Sáo Trúc',
    category: 'Thanh Âm Đồng Nội',
    image: '/images/inst_sao_truc.jpg',
    lead: 'Ống nứa già mộc mạc cất lên tiếng sáo vút cao thanh thoát, đưa hồn người nghe về với bóng tre làng, bến nước bờ đê và cánh đồng lúa chín.',
    verse: 'Tiếng sáo lơ lửng lưng trời / Đưa câu Chèo cổ về nơi cội nguồn.',
    soundPattern: 'Vi vu tiếng sáo lưng trời gió bay',
    history: 'Là nhạc khí hơi lâu đời nhất của người nông dân châu thổ sông Hồng, tiếng sáo trúc bắt nguồn từ những điệu lý, tiếng hò trên đồng ruộng trước khi bước lên chiếu chèo sân đình.',
    craftsmanship: 'Được chế tác từ ống trúc hoặc ống nứa già có đốt dài, thành mỏng đều và lòng bóng mịn. Thân sáo khoét 1 lỗ thổi hình bầu dục và 6 lỗ bấm cách đều, ở đuôi có lỗ định âm để điều chỉnh độ cao chuẩn xác.',
    technique: 'Kỹ thuật thổi hơi phối hợp rung vòm họng, ngón bấm láy hoa mỹ, vuốt hơi và ngắt hơi bằng lưỡi (staccato) giúp tiếng sáo bay bổng, lả lơi và có độ rung tự nhiên như ngọn gió đồng.',
    theatricalRole: 'Sáo Trúc tạo nên không gian bối cảnh đồng quê thanh bình, thường xuất hiện trong các đoạn dạo đầu mở màn, dẫn lối cho những làn điệu trữ tình như Sa Lệch Chênh, Đào Liễu hay những màn hội xuân rộn rã.'
  },
  {
    id: 'trong-com',
    name: 'Trống Cơm',
    category: 'Âm Sắc Lúa Nước',
    image: '/images/inst_trong_com.jpg',
    lead: 'Mang cái tên đượm mùi rơm rạ đồng ruộng, Trống Cơm tạo nên nền âm trầm ấm áp, rộn ràng gắn liền với các màn hát múa giao duyên trai gái.',
    verse: 'Một bầy tang tình con sít / Tiếng trống cơm vỗ nhịp ngọt ngào.',
    soundPattern: 'Tang tình tang tính tình tang',
    history: 'Gắn liền với tích cổ và nền văn minh lúa nước, Trống Cơm là biểu tượng cho sự trù phú, no ấm và tình yêu đôi lứa trong ngày hội làng.',
    craftsmanship: 'Thân trống thon dài chừng 50–60cm, phình ở giữa và thuôn dần về hai đầu, tiện bằng gỗ mít. Hai mặt bịt da kín, đặc biệt trước khi diễn tấu nghệ nhân phải lấy cơm nếp ấm nghiền nhuyễn miết vào giữa mặt trống để làm trầm tiếng và tăng độ dẻo của âm.',
    technique: 'Trống được đeo chéo ngang bụng bằng dải yếm lụa. Nghệ nhân dùng hai bàn tay trần vỗ luân phiên: tay phải vỗ mặt lớn tạo tiếng trầm ấm, tay trái vỗ mặt nhỏ tạo tiếng thanh nhẹ, vừa đánh vừa nhún nhảy theo vũ đạo.',
    theatricalRole: 'Trống Cơm xuất hiện rực rỡ trong các điệu múa xuân, cảnh rước dâu hay các bài hát đối đáp vui tươi, mang lại bầu không khí rộn rã, đằm thắm cho đêm Chèo.'
  },
  {
    id: 'thanh-la-mo',
    name: 'Thanh La & Mõ',
    category: 'Tiết Tấu Trào Lộng',
    image: '/images/inst_thanh_la_mo.jpg',
    lead: 'Bộ đôi nhạc khí gõ dập phách ăn khớp châm biếm, tạo nên những tràng cười sảng khoái và hả hê nhất trong các tích trò của vai Hề Chèo.',
    verse: 'Mõ gõ cốc cốc nhịp cười / Thanh la gióng tiếng mở lời phân minh.',
    soundPattern: 'Cốc cốc... Cheng! Giòn tan tiếng cười',
    history: 'Là tiếng gõ thân thuộc nơi cổng làng và đình chùa, Thanh La và Mõ được dân gian đưa vào sân khấu Chèo để đại diện cho sự tỉnh táo, cảnh tỉnh và tiếng cười đả kích.',
    craftsmanship: 'Thanh la đúc bằng đồng thau hình đĩa tròn có gờ gập, dùng dùi gỗ bọc dạ để gõ tạo tiếng kim loại ngân xa. Mõ đục từ gốc tre già hoặc khối gỗ mít hình cá hóa rồng, lòng rỗng có khe hẹp để tạo tiếng cốc cốc đanh giòn.',
    technique: 'Kỹ thuật dập phách lệch, nhấn nhá đột ngột vào đuôi câu thoại hoặc bước chân ngã bổ ngửa của nhân vật Hề áo ngắn, tạo hiệu ứng giật mình hài hước.',
    theatricalRole: 'Thanh La và Mõ là “bạn diễn ăn ý” của vai Hề. Mỗi câu châm chọc quan lại tham nhũng hay kẻ trọc phú đều được chốt lại bằng tiếng mõ cốc cốc và tiếng thanh la cheng đanh thép phân minh lẽ phải.'
  }
]

const STAGES_DATA: StageStep[] = [
  {
    step: 1,
    name: 'Khởi Nhạc & Mở Màn',
    subtitle: 'Náo nức tiếng trống giục hội làng',
    instruments: 'Trống cái, Trống đế',
    tempo: 'Dồn dập, thúc giục',
    description: 'Tiếng trống cái vang rền từng chặp kết hợp nhịp trống đế giòn tan báo hiệu đêm chèo bắt đầu, mời gọi bà con khắp làng trên xóm dưới tụ hội về sân đình.',
    rhythmSample: 'Tùng... cắc... tùng tùng cắc! Tùng cắc tùng cắc...',
    verse: 'Trống Chèo gióng giả đầu đình / Làng trên xóm dưới đượm tình nước non.',
    soundInstrumentId: 'trong-de'
  },
  {
    step: 2,
    name: 'Hát Xưng Danh',
    subtitle: 'Nhân vật bước ra manh chiếu',
    instruments: 'Đàn nguyệt, Sáo trúc, Trống đế',
    tempo: 'Khoan thai, đĩnh đạc',
    description: 'Nhân vật xuất hiện giữa manh chiếu, tay múa quạt miệng xưng tên tuổi và gia cảnh rõ ràng trước khán giả hội làng.',
    rhythmSample: 'Nói lối dồn phách, dứt câu bằng một tiếng tang cắc đanh gọn.',
    verse: 'Chẳng giấu gì tôi đây ra mắt / Xưng danh một câu cho rõ ngọn ngành.',
    soundInstrumentId: 'dan-nguyet'
  },
  {
    step: 3,
    name: 'Làn Điệu Trữ Tình',
    subtitle: 'Chiều sâu tâm sự & bi kịch',
    instruments: 'Đàn nhị, Đàn nguyệt, Trống cơm',
    tempo: 'Chậm rãi, da diết',
    description: 'Bộc bạch nỗi oan khiên của Đào thương, khát khao của Đào lẳng hay tâm chí nam nhi của Kép quân tử trong dòng xoáy số phận.',
    rhythmSample: 'Dây tơ nhấn vuốt nỉ non, nhịp trống cơm đệm êm đềm.',
    verse: 'Quân tử vu dịch xa xôi / Thuyền ai neo bến ngậm ngùi nhớ thương.',
    soundInstrumentId: 'dan-nhi'
  },
  {
    step: 4,
    name: 'Trào Lộng Hề Chèo',
    subtitle: 'Tiếng cười dân gian giải tỏa',
    instruments: 'Trống đế, Mõ, Thanh la',
    tempo: 'Nhanh, nhảy nhót',
    description: 'Hề Chèo xuất hiện với bước chân sáo và câu pha trò hóm hỉnh, đả kích thói hư tật xấu bằng tiếng cười sảng khoái của người lao động.',
    rhythmSample: 'Cốc cốc... cheng! Cốc cốc cốc... giòn tan tiếng cười.',
    verse: 'Kẻ cắp gặp bà già tham / Cười cho thấu lẽ nhân gian sự đời.',
    soundInstrumentId: 'thanh-la-mo'
  }
]

interface AudioSamplePlayerProps {
  currentPath?: string
  onNavigate?: (path: string) => void
}

export const AudioSamplePlayer: React.FC<AudioSamplePlayerProps> = ({
  currentPath,
  onNavigate
}) => {
  const [selectedMelody, setSelectedMelody] = useState<Melody>(MELODIES_DATA[0])
  const [isPlayingMelody, setIsPlayingMelody] = useState<boolean>(false)
  const [playingInstrumentId, setPlayingInstrumentId] = useState<string | null>(null)
  const [playingStageStep, setPlayingStageStep] = useState<number | null>(null)

  const matchedInstrument = INSTRUMENTS_DATA.find(inst => currentPath?.endsWith(`/${inst.id}`))

  useEffect(() => {
    return () => {
      cheoAudio.stopAll()
    }
  }, [])

  const handleToggleInstrument = (instId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (playingInstrumentId === instId) {
      cheoAudio.stopAll()
      setPlayingInstrumentId(null)
    } else {
      cheoAudio.stopAll()
      setIsPlayingMelody(false)
      setPlayingStageStep(null)
      setPlayingInstrumentId(instId)
      cheoAudio.playInstrument(instId, () => {
        setPlayingInstrumentId(null)
      })
    }
  }

  const handleToggleMelody = (melody: Melody) => {
    if (selectedMelody.id === melody.id && isPlayingMelody) {
      cheoAudio.stopAll()
      setIsPlayingMelody(false)
    } else {
      cheoAudio.stopAll()
      setPlayingInstrumentId(null)
      setPlayingStageStep(null)
      setSelectedMelody(melody)
      setIsPlayingMelody(true)
      cheoAudio.playMelody(melody.id, () => {
        setIsPlayingMelody(false)
      })
    }
  }

  const handleToggleStageSound = (step: number, instId: string) => {
    if (playingStageStep === step) {
      cheoAudio.stopAll()
      setPlayingStageStep(null)
    } else {
      cheoAudio.stopAll()
      setIsPlayingMelody(false)
      setPlayingInstrumentId(null)
      setPlayingStageStep(step)
      cheoAudio.playInstrument(instId, () => {
        setPlayingStageStep(null)
      })
    }
  }

  // =========================================================================
  // TRƯỜNG HỢP 1: TRANG CHI TIẾT 1 NHẠC CỤ CỤ THỂ (/dan-nhac-bat-am/:id)
  // =========================================================================
  if (matchedInstrument) {
    const isPlayingThis = playingInstrumentId === matchedInstrument.id
    return (
      <div className="w-full space-y-10 text-left animate-in fade-in duration-300">
        <div className="flex items-center justify-between pb-4 border-b border-stone-800/60">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/dan-nhac-bat-am')}
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại sáu nhạc khí Dàn Bát Âm</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500/90 font-medium">
            {matchedInstrument.category}
          </span>
        </div>

        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-stone-800/60 pb-10">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              {matchedInstrument.name}
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed max-w-2xl">
              {matchedInstrument.lead}
            </p>

            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <button
                onClick={(e) => handleToggleInstrument(matchedInstrument.id, e)}
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                  isPlayingThis
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/25'
                    : 'bg-stone-800 hover:bg-stone-700 text-amber-400 border border-amber-800/40'
                }`}
              >
                {isPlayingThis ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Đang vang âm...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Lắng nghe âm sắc thực tế</span>
                  </>
                )}
              </button>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 bg-stone-900/60 px-3 py-1.5 rounded-md border border-stone-800/60">
                <Music className="w-3.5 h-3.5 text-amber-500" />
                <span>{matchedInstrument.soundPattern}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-stone-800 bg-stone-950">
              <img
                src={matchedInstrument.image}
                alt={matchedInstrument.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        <section className="py-4 border-b border-stone-800/60 text-center">
          <p className="font-serif italic text-amber-200/90 text-base sm:text-lg">
            &ldquo;{matchedInstrument.verse}&rdquo;
          </p>
        </section>

        <div className="space-y-8 pt-2">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Vị Thế Của {matchedInstrument.name} Trong Dàn Bát Âm
            </h2>
            <p className="text-base text-stone-300 font-serif font-light leading-relaxed">
              {matchedInstrument.history}
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-stone-800/40">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Vật Liệu Cổ Truyền & Thẩm Mỹ Dân Gian
            </h2>
            <p className="text-base text-stone-300 font-serif font-light leading-relaxed">
              {matchedInstrument.craftsmanship}
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-stone-800/40">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Sự Biến Hóa Của Đôi Bàn Tay Người Nghệ Nhân
            </h2>
            <p className="text-base text-stone-300 font-serif font-light leading-relaxed">
              {matchedInstrument.technique}
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-stone-800/40">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Đối Thoại Giữa Âm Nhạc Và Diễn Xuất
            </h2>
            <p className="text-base text-stone-300 font-serif font-light leading-relaxed">
              {matchedInstrument.theatricalRole}
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-stone-800/60 flex items-center justify-between">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/dan-nhac-bat-am')}
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Xem tất cả nhạc khí Bát Âm</span>
          </button>
          <span className="text-xs font-mono text-stone-500">
            Bảo Tàng Chèo Số &bull; Kho Tư Liệu Âm Thanh
          </span>
        </div>
      </div>
    )
  }

  // =========================================================================
  // TRƯỜNG HỢP 2: TRANG DANH SÁCH 6 CARD NHẠC KHÍ (/dan-nhac-bat-am)
  // =========================================================================
  if (currentPath?.endsWith('/dan-nhac-bat-am')) {
    return (
      <div className="w-full space-y-10 text-left animate-in fade-in duration-300">
        <div className="flex items-center justify-between pb-4 border-b border-stone-800/60">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại tổng quan âm thanh & làn điệu</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500/90 font-medium">
            06 Nhạc Khí Linh Hồn
          </span>
        </div>

        <header className="space-y-3 pb-8 border-b border-stone-800/60">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Sáu Nhạc Khí Cốt Lõi Của Chiếu Chèo Sân Đình
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-serif font-light max-w-3xl leading-relaxed">
            Dàn nhạc Chèo không bao giờ chơi lấn át con người mà sinh ra để thở cùng hơi thở của đào kép trên manh chiếu. Bấm vào từng nhạc khí bên dưới để xem khảo cứu chi tiết và lắng nghe âm thanh thực tế.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTRUMENTS_DATA.map((inst, idx) => {
            const isPlayingThis = playingInstrumentId === inst.id
            return (
              <div
                key={inst.id}
                onClick={() => onNavigate?.(`/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/${inst.id}`)}
                className="group cursor-pointer space-y-4 bg-stone-900/40 hover:bg-stone-900 p-5 rounded-2xl border border-stone-800/80 hover:border-amber-700/40 transition-all duration-300"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-950 relative border border-stone-800/60">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 text-2xl font-mono font-black text-white/30 select-none">
                    0{idx + 1}
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <button
                      onClick={(e) => handleToggleInstrument(inst.id, e)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer shadow-lg backdrop-blur-md ${
                        isPlayingThis
                          ? 'bg-amber-500 text-stone-950 font-bold shadow-amber-500/30'
                          : 'bg-black/70 hover:bg-black text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {isPlayingThis ? (
                        <>
                          <Pause className="w-3 h-3 fill-current" />
                          <span>Đang vang âm</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current" />
                          <span>Nghe âm</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {inst.name}
                    </h3>
                    <span className="text-[11px] font-mono text-amber-500/90 font-medium">
                      {inst.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-400 font-serif font-light line-clamp-2 leading-relaxed">
                    {inst.lead}
                  </p>

                  <div className="pt-3 flex items-center justify-between text-xs text-stone-500 border-t border-stone-800/40">
                    <span className="font-mono text-amber-400/80">{inst.soundPattern}</span>
                    <span className="group-hover:text-amber-400 font-serif transition-colors flex items-center gap-1">
                      Khảo cứu <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        <section className="pt-8 border-t border-stone-800/60 text-center max-w-2xl mx-auto space-y-2">
          <p className="font-serif italic text-stone-400 text-sm sm:text-base leading-relaxed">
            &ldquo;Dàn nhạc Chèo không bao giờ chơi lấn át con người. Tiếng đàn, tiếng trống sinh ra là để thở cùng hơi thở của đào kép trên manh chiếu.&rdquo;
          </p>
          <span className="text-xs font-serif text-amber-500/80 uppercase tracking-widest block">
            Quy chuẩn hòa thanh sân khấu Chèo cổ
          </span>
        </section>
      </div>
    )
  }

  // =========================================================================
  // TRƯỜNG HỢP 3: KHO TÀNG LÀN ĐIỆU (/lan-dieu)
  // Giao diện triển lãm 12 cột: Split Hero, Phòng thẩm âm 2 cột, Hồi ca diễn, Callout, Gateways & Epilogue
  // =========================================================================
  if (currentPath?.endsWith('/lan-dieu')) {
    return (
      <div className="w-full text-left space-y-16 sm:space-y-24 animate-in fade-in duration-300">
        {/* Điều hướng quay lại */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800/60">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại tổng quan âm thanh & làn điệu</span>
          </button>
        </div>

        {/* ── 1. SPLIT-SCREEN HERO BANNER ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-stone-800/60 pb-12 sm:pb-16">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Kho Tàng Làn Điệu Chèo Cổ
            </h1>

            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed">
              <span className="float-left text-4xl sm:text-5xl font-serif font-bold text-amber-500 leading-none pr-3 pt-1">L</span>
              àn điệu Chèo không chỉ là giai điệu hát xướng đơn thuần mà là tiếng lòng, triết lý sống và khát vọng của người lao động qua bao thế hệ. Từ điệu Đào Liễu lúng liếng trao duyên đến khúc Quân Tử Vu Dịch nghẹn ngào thương nhớ, mỗi làn điệu đều đượm thắm hơi thở ca dao đồng bằng sông Hồng.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-950 relative group">
              <img
                src="/images/sound_dan_nhac.jpg"
                alt="Kho Tàng Làn Điệu Chèo Cổ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-serif text-amber-300/90 block">Bảo Tàng Chèo Số &bull; Khai Thư Âm Thanh</span>
                <p className="text-sm font-serif text-white font-medium">Làn điệu Kinh Bắc cổ truyền</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. PHÒNG THẨM ÂM TƯƠNG TÁC 2 CỘT ── */}
        <section className="space-y-8">
          <div className="border-b border-stone-800/60 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Phòng Thẩm Âm Làn Điệu Kinh Điển
            </h2>
            <p className="text-sm text-stone-400 font-serif font-light mt-1">
              Chọn một làn điệu mẫu mực bên dưới để lắng nghe giai điệu và thưởng thức lời ca
            </p>
          </div>

          {/* Selector nút chọn làn điệu */}
          <div className="flex flex-wrap gap-3">
            {MELODIES_DATA.map((melody) => {
              const isSelected = selectedMelody.id === melody.id
              return (
                <button
                  key={melody.id}
                  onClick={() => handleToggleMelody(melody)}
                  className={`px-5 py-2.5 rounded-full text-left transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/20'
                      : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800'
                  }`}
                >
                  <Music className={`w-4 h-4 ${isSelected ? 'text-stone-950' : 'text-amber-500'}`} />
                  <div>
                    <span className="text-sm font-serif block leading-snug">{melody.name}</span>
                    <span className={`text-[11px] ${isSelected ? 'text-stone-900/80 font-normal' : 'text-stone-500'}`}>
                      {melody.character}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Lưới 2 cột: Bộ điều khiển âm thanh + Ảnh diễn xướng trực quan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900/40 p-6 sm:p-8 rounded-3xl border border-stone-800/80">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleToggleMelody(selectedMelody)}
                  className="w-16 h-16 rounded-full bg-amber-500 text-stone-950 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center shadow-xl shadow-amber-500/25 cursor-pointer shrink-0"
                  aria-label={isPlayingMelody ? 'Tạm dừng' : 'Phát âm thanh'}
                >
                  {isPlayingMelody ? (
                    <Pause className="w-6 h-6 text-stone-950 fill-stone-950" />
                  ) : (
                    <Play className="w-6 h-6 text-stone-950 fill-stone-950 ml-0.5" />
                  )}
                </button>

                <div className="space-y-1">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {selectedMelody.name}
                  </h3>
                  <span className="text-xs font-serif text-amber-400">{selectedMelody.type}</span>
                </div>
              </div>

              {/* Sóng âm nhạc */}
              <div className="flex items-center gap-1 h-6">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      isPlayingMelody ? 'bg-amber-400 animate-pulse' : 'bg-stone-800 h-1'
                    }`}
                    style={{
                      height: isPlayingMelody ? `${Math.max(15, (i * 23) % 100)}%` : '2px'
                    }}
                  />
                ))}
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-lg sm:text-xl font-serif italic text-amber-200/95 leading-relaxed border-l-2 border-amber-600/60 pl-4">
                  &ldquo;{selectedMelody.lyrics}&rdquo;
                </p>
                <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                  {selectedMelody.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-stone-800 bg-stone-950 relative">
                <img
                  src={selectedMelody.image}
                  alt={selectedMelody.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-serif text-amber-300/90 block">Bối cảnh diễn xướng</span>
                  <p className="text-xs font-serif text-stone-200">{selectedMelody.character}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. HỒI KHẢO CỨU NGHỆ THUẬT CA DIỄN (2 CỘT SO LE) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-4">
          <div className="lg:col-span-6 lg:order-1">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-800 bg-stone-950 relative">
              <img
                src="/images/cheo_instruments.jpg"
                alt="Nghệ Thuật Hát Chèo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:order-2">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Nghệ Thuật Nhả Chữ: Nảy Hạt, Buông Bắt & Luyến Láy
            </h2>
            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed">
              <span className="float-left text-4xl sm:text-5xl font-serif font-bold text-amber-500 leading-none pr-3 pt-1">N</span>
              ghệ sĩ hát Chèo không ngân tự do theo cảm tính mà tuân thủ nghiêm ngặt kỹ thuật ém hơi, nảy hạt ở từng âm tiết. Câu hát cất lên phải vừa tròn vành rõ chữ, vừa đượm hồn ca dao và mở ra không gian văn hóa Kinh Bắc đặc trưng.
            </p>
          </div>
        </section>

        {/* ── 4. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC VISUAL CALLOUT) ── */}
        <section className="relative rounded-3xl overflow-hidden border border-amber-900/40 bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 p-8 sm:p-14 text-center space-y-4 shadow-2xl">
          <Sparkles className="w-8 h-8 text-amber-500/80 mx-auto animate-pulse" />
          <p className="text-lg sm:text-2xl font-serif italic text-amber-100 max-w-4xl mx-auto leading-relaxed">
            &ldquo;Hát Chèo phải tròn vành rõ chữ, ém hơi nhả chữ sao cho đượm hồn ca dao Kinh Bắc.&rdquo;
          </p>
          <span className="text-xs font-serif text-amber-400/80 uppercase tracking-widest block">
            Khẩu quyết truyền dạy của các nghệ nhân tiền bối
          </span>
        </section>

        {/* ── 5. LƯỚI KHÁM PHÁ 3 CỘT (EXHIBITION GATEWAYS) ── */}
        <section className="space-y-8 pt-4">
          <div className="border-b border-stone-800/60 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Các Không Gian Khảo Cứu Liên Quan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/dan-nhac-bat-am')}
              className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                Dàn Nhạc Bát Âm
              </h3>
              <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
                Khám phá sáu nhạc khí linh hồn: trống đế, đàn nguyệt, đàn nhị, sáo trúc.
              </p>
              <span className="text-xs text-amber-500 font-serif block group-hover:translate-x-1 transition-transform">
                Bắt đầu khám phá &rarr;
              </span>
            </div>

            <div
              onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/tiet-tau')}
              className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                Tiết Tấu & Nhịp Trống
              </h3>
              <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
                Bốn chặng phát triển kịch tính từ tiếng trống giục hội đến tiếng cười trào phúng.
              </p>
              <span className="text-xs text-amber-500 font-serif block group-hover:translate-x-1 transition-transform">
                Bắt đầu khám phá &rarr;
              </span>
            </div>

            <div
              onClick={() => onNavigate?.('/kham-pha/san-khau/vai-dien')}
              className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                Mẫu Hình Vai Diễn
              </h3>
              <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
                Khám phá năm mẫu hình nhân vật chuẩn mực: Đào, Kép, Lão, Mẫu và Hề Chèo.
              </p>
              <span className="text-xs text-amber-500 font-serif block group-hover:translate-x-1 transition-transform">
                Bắt đầu khám phá &rarr;
              </span>
            </div>
          </div>
        </section>

        {/* ── 6. LỜI KẾT THI VỊ (POETIC EPILOGUE) ── */}
        <footer className="pt-8 border-t border-stone-800/60 text-center space-y-3 max-w-2xl mx-auto">
          <p className="font-serif italic text-stone-400 text-sm sm:text-base leading-relaxed">
            &ldquo;Tiếng hát nỉ non giữa xóm làng / Làn điệu cổ truyền gợi mênh mang / Người về gửi lại câu Chèo cũ / Đượm thắm tình quê mãi suốt đời.&rdquo;
          </p>
          <span className="text-xs font-serif text-amber-500/80 block uppercase tracking-widest">
            Bảo Tàng Chèo Số &bull; Thẩm Âm Làn Điệu Kinh Bắc
          </span>
        </footer>
      </div>
    )
  }

  // =========================================================================
  // TRƯỜNG HỢP 4: TIẾT TẤU & NHỊP TRỐNG (/tiet-tau)
  // =========================================================================
  if (currentPath?.endsWith('/tiet-tau')) {
    return (
      <div className="w-full space-y-10 text-left animate-in fade-in duration-300">
        <div className="flex items-center justify-between pb-4 border-b border-stone-800/60">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại tổng quan âm thanh & làn điệu</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500/90 font-medium">
            04 Chặng Tiết Tấu
          </span>
        </div>

        <header className="space-y-3 pb-8 border-b border-stone-800/60">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Bốn Chặng Tiết Tấu Của Đêm Diễn Chèo
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-serif font-light max-w-3xl leading-relaxed">
            Tiết tấu Chèo biến ảo tài tình theo cảm xúc kịch bản: từ tiếng trống giục hội náo nức, lời hát xưng danh đĩnh đạc, khúc tự sự da diết cho đến tiếng cười trào lộng sảng khoái.
          </p>
        </header>

        <section className="space-y-8">
          {STAGES_DATA.map((stage) => {
            const isPlayingThisStage = playingStageStep === stage.step
            return (
              <div key={stage.step} className="space-y-4 pb-8 border-b border-stone-800/50 last:border-0">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-mono text-amber-500 font-bold">Chặng 0{stage.step}</span>
                    <h2 className="text-2xl font-serif font-bold text-white">
                      {stage.name}
                    </h2>
                    <span className="text-sm font-serif text-amber-300/90 hidden sm:inline">&bull; {stage.subtitle}</span>
                  </div>

                  <button
                    onClick={() => handleToggleStageSound(stage.step, stage.soundInstrumentId)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      isPlayingThisStage
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-800 hover:bg-stone-700 text-amber-400 border border-amber-800/40'
                    }`}
                  >
                    {isPlayingThisStage ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>Đang vang nhịp</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Nghe mẫu nhịp</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-base text-stone-300 font-serif font-light leading-relaxed">
                  {stage.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs border-t border-stone-800/40">
                  <p className="font-serif italic text-amber-200/90 text-sm">
                    &ldquo;{stage.verse}&rdquo;
                  </p>
                  <div className="inline-flex items-center gap-1.5 font-mono text-stone-400 bg-stone-900 px-3 py-1.5 rounded-md border border-stone-800">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{stage.rhythmSample}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        <section className="pt-6 border-t border-stone-800/60 space-y-3">
          <h2 className="text-2xl font-serif font-bold text-white">
            “Phi Trống Bất Thành Chèo” — Ngôn Ngữ Nhịp Phách Sân Đình
          </h2>
          <p className="text-base text-stone-300 font-serif font-light leading-relaxed max-w-3xl">
            Tiếng trống Chèo không chỉ giữ nhịp mà còn là tiếng nói phân minh công lý của người xem hội làng. Nhịp tang gõ dập biểu thị sự tán thưởng, tiếng tùng thúc giục chuyển màn, và tiếng cắc giòn tan chốt lại câu thoại xưng danh của nhân vật.
          </p>
        </section>
      </div>
    )
  }

  // =========================================================================
  // TRƯỜNG HỢP 5: GIAO DIỆN TỔNG QUAN HỒI TỰ SỰ SO LE 12 CỘT (/kham-pha/san-khau/am-thanh)
  // =========================================================================
  return (
    <div className="w-full text-left space-y-16 sm:space-y-24 animate-in fade-in duration-300">
      {/* ── 1. CINEMA OVERLAY HERO BANNER (100VW FULL VIEWPORT WIDTH & COMPACT HEIGHT) ── */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 sm:-mt-14 overflow-hidden shadow-2xl border-b border-stone-800 bg-stone-950 h-[280px] sm:h-[340px] lg:h-[380px] flex items-end group mb-12 sm:mb-16">
        <img
          src="/images/sound_dan_nhac.jpg"
          alt="Dàn Nhạc Chèo Cổ"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/15" />

        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8 space-y-2.5">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md">
            Hồn Cốt Âm Thanh &amp; Làn Điệu Chiếu Chèo
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-stone-200 font-serif font-light leading-relaxed drop-shadow max-w-4xl">
            <span className="float-left text-3xl sm:text-4xl font-serif font-bold text-amber-400 leading-none pr-2.5 pt-0.5">Â</span>
            m nhạc Chèo không bao giờ trình diễn độc lập hay phô trương kỹ thuật, mà sinh ra để thở cùng từng nhịp thở của đào kép trên manh chiếu. Sự hòa quyện giữa dàn nhạc Bát Âm cổ truyền, kho tàng hơn 200 làn điệu phong phú và nhịp phách biến ảo tạo nên dòng chảy cảm xúc mãnh liệt xuyên suốt đêm diễn sân đình.
          </p>
        </div>
      </section>

      {/* ── 2. KHÔNG GIANG ÂM THANH TRIỂN LÃM ĐA DẠNG BỐ CỤC ── */}
      <section className="space-y-20 sm:space-y-28">
        {/* Hồi 1: Dàn Nhạc Bát Âm — Interactive Spotlight Card */}
        <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
                Sáu Nhạc Khí Linh Hồn • Dàn Nhạc Cổ Truyền
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Dàn Nhạc Bát Âm Cổ Truyền
              </h2>
              <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed">
                Trống đế, đàn nguyệt, đàn nhị, sáo trúc, trống cơm và thanh la mõ hòa thanh nắn nót, dẫn dắt cao trào bi kịch và mở lối cho lời ca đào kép trên manh chiếu sân đình.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/dan-nhac-bat-am')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold text-sm transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <span>Khám phá sáu nhạc khí &amp; nghe âm sắc</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/dan-nhac-bat-am')}
                className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-800/80 bg-stone-950 relative cursor-pointer group"
              >
                <img
                  src="/images/cheo_instruments.jpg"
                  alt="Dàn Nhạc Bát Âm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-serif text-amber-300/90 italic">
                  Trống đế &bull; Đàn nguyệt &bull; Đàn nhị &bull; Sáo trúc &bull; Trống cơm &bull; Thanh la
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hồi 2: Kho Tàng Làn Điệu — Panorama Overlapping Glass Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-950 min-h-[420px] sm:min-h-[460px] flex items-center p-6 sm:p-10 lg:p-14 group">
          <img
            src="/images/sound_dan_nhac.jpg"
            alt="Kho Tàng Làn Điệu Chèo Cổ"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent" />

          <div className="relative z-10 max-w-2xl bg-stone-900/85 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-stone-800/90 space-y-4 shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
              Hơn 200 Làn Điệu Mẫu Mực
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Kho Tàng Làn Điệu Chèo Cổ
            </h2>
            <p className="text-sm sm:text-base text-stone-200 font-serif font-light leading-relaxed">
              Từ điệu Đào Liễu lúng liếng trao duyên đến khúc Quân Tử Vu Dịch ai oán nỉ non xé lòng. Kho tàng làn điệu Chèo là kết tinh của ca dao dân gian, tái hiện trọn vẹn những buồn vui và ước mơ của người lao động.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/lan-dieu')}
                className="inline-flex items-center gap-2 text-sm font-serif font-medium text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group"
              >
                <span>Vào phòng thẩm âm lắng nghe giai điệu</span>
                <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Hồi 3: Tiết Tấu & Nhịp Trống — 4-Stage Rhythm Flow Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl border border-stone-800 bg-stone-900/40 p-6 sm:p-10">
          <div className="lg:col-span-5 lg:order-2">
            <div
              onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/tiet-tau')}
              className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-800 bg-stone-950 relative cursor-pointer group"
            >
              <img
                src="/images/inst_trong_de.jpg"
                alt="Tiết Tấu & Nhịp Trống"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 lg:order-1">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
                Ngôn Ngữ Nhịp Phách Sân Đình
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Tiết Tấu &amp; Nhịp Trống Sân Đình
              </h2>
            </div>

            <p className="text-base sm:text-lg text-stone-300 font-serif font-light leading-relaxed">
              Nhịp trống Chèo giữ vai trò điều phối toàn bộ nhịp thở sân khấu: từ tiếng trống cái dồn dập giục hội làng, lời hát xưng danh đĩnh đạc, khúc tự sự nỉ non đến tiếng cười trào phúng sảng khoái hả hê.
            </p>

            <div className="pt-3">
              <button
                onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/tiet-tau')}
                className="inline-flex items-center gap-2 text-sm font-serif font-medium text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group"
              >
                <span>Trải nghiệm ngôn ngữ nhịp phách</span>
                <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC VISUAL CALLOUT) ── */}
      <section className="relative rounded-3xl overflow-hidden border border-amber-900/40 bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 p-8 sm:p-14 text-center space-y-4 shadow-2xl">
        <Sparkles className="w-8 h-8 text-amber-500/80 mx-auto animate-pulse" />
        <p className="text-lg sm:text-2xl font-serif italic text-amber-100 max-w-4xl mx-auto leading-relaxed">
          &ldquo;Dàn nhạc Chèo không bao giờ chơi lấn át con người. Tiếng đàn, tiếng trống sinh ra là để nâng đỡ và thở cùng hơi thở của đào kép trên manh chiếu.&rdquo;
        </p>
        <span className="text-xs font-serif text-amber-400/80 uppercase tracking-widest block">
          Triết lý hòa âm sân khấu Chèo cổ
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
            onClick={() => onNavigate?.('/kham-pha/san-khau/trang-phuc')}
            className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
          >
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
              Trang Phục & Phục Sức
            </h3>
            <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
              Khám phá áo tứ thân, yếm đào, nón quai thao và áo ngũ thân đĩnh đạc của Kép Chèo.
            </p>
            <span className="text-xs text-amber-500 font-serif block group-hover:translate-x-1 transition-transform">
              Bắt đầu khám phá &rarr;
            </span>
          </div>

          <div
            onClick={() => onNavigate?.('/kham-pha/san-khau/vai-dien')}
            className="group cursor-pointer space-y-3 bg-stone-900/40 hover:bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
          >
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
              Mẫu Hình Vai Diễn
            </h3>
            <p className="text-sm text-stone-400 font-serif font-light leading-relaxed">
              Khám phá năm mẫu hình nhân vật chuẩn mực: Đào, Kép, Lão, Mẫu và Hề Chèo.
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
        </div>
      </section>

      {/* ── 5. LỜI KẾT THI VỊ (POETIC EPILOGUE) ── */}
      <footer className="pt-8 border-t border-stone-800/60 text-center space-y-3 max-w-2xl mx-auto">
        <p className="font-serif italic text-stone-400 text-sm sm:text-base leading-relaxed">
          &ldquo;Tiếng trống đầu đình thúc hội xuân / Dây tơ nắn nót khúc ca tần / Làn điệu cổ truyền vang xóm sẻ / Hồn quê thắm đượm mãi ngàn năm.&rdquo;
        </p>
        <span className="text-xs font-serif text-amber-500/80 block uppercase tracking-widest">
          Bảo Tàng Chèo Số &bull; Khai Thư Âm Thanh & Làn Điệu
        </span>
      </footer>
    </div>
  )
}
