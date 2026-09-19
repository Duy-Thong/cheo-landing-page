import React, { useState, useEffect } from 'react'
import { ArrowLeft, Play, Pause, Volume2, Music, Sparkles } from 'lucide-react'
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
    description: 'Âm điệu tươi vui, nẩy hạt đong đưa, bộc lộ khát khao tình yêu tự do phá bỏ mọi rào giậu lễ giáo.'
  },
  {
    id: 'quan-tu-vu-dich',
    name: 'Quân Tử Vu Dịch',
    type: 'Làn điệu tự sự & bi ai',
    character: 'Đào thương (Thị Kính)',
    lyrics: 'Quân tử vu dịch, bất tri kỳ kỳ, há như chi hà... Nỗi niềm nhớ thương xa xôi ngàn trùng vạn dặm...',
    description: 'Chuẩn mực của phong cách Đào thương, giai điệu chậm rãi nghẹn ngào diễn tả đức hy sinh và nỗi lòng son sắt.'
  },
  {
    id: 'sa-lech-chenh',
    name: 'Điệu Sa Lệch Chênh',
    type: 'Làn điệu vũ đạo & giao duyên',
    character: 'Hội xuân trai gái',
    lyrics: 'Cách một con sông, chứ đôi bên bờ liễu... Thuyền ai lơ lửng, đợi ai trao lời non nước...',
    description: 'Tiết tấu rộn ràng gắn với vũ đạo múa quạt lượn sóng trong những đêm hội làng vào xuân.'
  },
  {
    id: 'he-moi',
    name: 'Điệu Hề Mồi',
    type: 'Làn điệu trào phúng & giải tỏa',
    character: 'Hề Chèo dân gian',
    lyrics: 'Tôi ra đây có phải xưng danh không nhỉ? Không xưng danh thì ai biết tôi là ai! Làng trên xóm dưới lắng tai mà nghe...',
    description: 'Tiếng cười giòn tan châm biếm sâu cay thói hư tật xấu, mang lại sự hả hê và lạc quan cho người lao động.'
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

  // Kiểm tra xem có đang ở trang chi tiết của một nhạc cụ cụ thể không
  const matchedInstrument = INSTRUMENTS_DATA.find(inst => currentPath?.endsWith(`/${inst.id}`))

  // Dọn dẹp âm thanh khi component unmount
  useEffect(() => {
    return () => {
      cheoAudio.stopAll()
    }
  }, [])

  // Xử lý phát âm sắc nhạc cụ Bát Âm
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

  // Xử lý phát làn điệu trong phòng thẩm âm
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

  // Xử lý phát mẫu nhịp theo chặng tiết tấu
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
  // Giao diện bảo tàng chuyên sâu: Có audio thật, văn phong tự sự, KHÔNG database
  // =========================================================================
  if (matchedInstrument) {
    const isPlayingThis = playingInstrumentId === matchedInstrument.id
    return (
      <div className="space-y-8 sm:space-y-10 text-left animate-in fade-in duration-300">
        {/* Nút quay lại danh sách Dàn Bát Âm */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800/60">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/dan-nhac-bat-am')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Quay lại sáu nhạc khí Dàn Bát Âm</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            {matchedInstrument.category}
          </span>
        </div>

        {/* Giới thiệu nhạc cụ — Bố cục cân đối, gọn gàng, không choán hết màn hình */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center border-b border-stone-800/60 pb-8">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
              Nhạc Khí Cổ Truyền &bull; {matchedInstrument.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              {matchedInstrument.name}
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed max-w-2xl">
              {matchedInstrument.lead}
            </p>

            {/* Trình phát âm sắc trực tiếp ngay đầu trang */}
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
                    <span className="inline-flex items-center gap-0.5 h-3 ml-1">
                      <span className="w-1 bg-stone-950 animate-pulse h-2"></span>
                      <span className="w-1 bg-stone-950 animate-pulse h-3 delay-75"></span>
                      <span className="w-1 bg-stone-950 animate-pulse h-1.5 delay-150"></span>
                      <span className="w-1 bg-stone-950 animate-pulse h-2.5 delay-100"></span>
                    </span>
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

          {/* Ảnh chụp tư liệu thực tế của nhạc cụ */}
          <div className="md:col-span-4">
            <div className="aspect-[4/3] max-h-60 rounded-2xl overflow-hidden shadow-xl border border-stone-800/80 bg-stone-900">
              <img
                src={matchedInstrument.image}
                alt={matchedInstrument.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Thơ đề & Khẩu quyết dân gian */}
        <section className="py-4 border-b border-stone-800/60 text-center">
          <p className="font-serif italic text-amber-200/90 text-base sm:text-lg">
            &ldquo;{matchedInstrument.verse}&rdquo;
          </p>
        </section>

        {/* Bốn chương khảo cứu chuyên sâu viết văn xuôi tự sự */}
        <div className="space-y-8 pt-2">
          {/* Chương 1: Hồn cốt trong chiếu Chèo */}
          <section className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
              I. Hồn Cốt & Vị Thế Chiếu Chèo
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Vị Thế Của {matchedInstrument.name} Trong Dàn Bát Âm
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
              {matchedInstrument.history}
            </p>
          </section>

          {/* Chương 2: Cấu tạo & Chế tác */}
          <section className="space-y-3 pt-6 border-t border-stone-800/40">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
              II. Cấu Tạo & Nghệ Thuật Chế Tác
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Vật Liệu Cổ Truyền & Thẩm Mỹ Dân Gian
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
              {matchedInstrument.craftsmanship}
            </p>
          </section>

          {/* Chương 3: Kỹ thuật diễn tấu */}
          <section className="space-y-3 pt-6 border-t border-stone-800/40">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
              III. Kỹ Thuật Diễn Tấu & Ngón Nghề
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Sự Biến Hóa Của Đôi Bàn Tay Người Nghệ Nhân
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
              {matchedInstrument.technique}
            </p>
          </section>

          {/* Chương 4: Đối thoại với đào kép */}
          <section className="space-y-3 pt-6 border-t border-stone-800/40">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
              IV. Nhịp Thở Sân Đình & Tương Tác
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Đối Thoại Giữa Âm Nhạc Và Diễn Xuất
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
              {matchedInstrument.theatricalRole}
            </p>
          </section>
        </div>

        {/* Footer điều hướng nhạc cụ tiếp theo */}
        <div className="pt-8 border-t border-stone-800/60 flex items-center justify-between">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh/dan-nhac-bat-am')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer"
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
  // Giao diện dạng Card trực quan có hình ảnh, bấm vào chuyển sang trang chi tiết
  // =========================================================================
  if (currentPath?.endsWith('/dan-nhac-bat-am')) {
    return (
      <div className="space-y-8 sm:space-y-10 text-left animate-in fade-in duration-300">
        {/* Điều hướng quay lại */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800/60">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Quay lại tổng quan âm thanh & làn điệu</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            Chương 01 &bull; Dàn Nhạc Bát Âm
          </span>
        </div>

        {/* Tiêu đề thanh thoát, không chiếm hết màn hình */}
        <header className="space-y-2 pb-6 border-b border-stone-800/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-semibold">
              Triển Lãm Âm Sắc
            </span>
            <span className="text-stone-600">&bull;</span>
            <span className="text-xs font-mono text-stone-400">06 Nhạc Khí Hồn Cốt</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Sáu Nhạc Khí Cốt Lõi Của Chiếu Chèo Sân Đình
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-3xl leading-relaxed">
            Dàn nhạc Chèo không bao giờ chơi lấn át con người mà sinh ra để thở cùng hơi thở của đào kép trên manh chiếu. Bấm vào từng thẻ bên dưới để xem khảo cứu chi tiết và lắng nghe âm thanh độc bản của từng nhạc khí.
          </p>
        </header>

        {/* LƯỚI 6 CARD NHẠC KHÍ CÓ ẢNH CHỤP TƯ LIỆU THẬT */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTRUMENTS_DATA.map((inst, idx) => {
            const isPlayingThis = playingInstrumentId === inst.id
            return (
              <div
                key={inst.id}
                onClick={() => onNavigate?.(`/kham-pha/san-khau/am-thanh/dan-nhac-bat-am/${inst.id}`)}
                className="group cursor-pointer space-y-3.5 bg-stone-900/40 hover:bg-stone-900/80 p-4 rounded-2xl border border-stone-800/60 hover:border-amber-700/40 transition-all duration-300"
              >
                {/* Ảnh nhạc cụ với Watermark số thứ tự */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-950 relative border border-stone-800/50">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 text-2xl font-mono font-black text-white/30 select-none">
                    0{idx + 1}
                  </div>

                  {/* Nút nghe thử nhanh trên góc ảnh */}
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

                {/* Thông tin nhạc cụ */}
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {inst.name}
                    </h3>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-500/90 font-medium">
                      {inst.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-400 font-serif font-light line-clamp-2 leading-relaxed">
                    {inst.lead}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500 border-t border-stone-800/40">
                    <span className="font-mono text-amber-300/80">{inst.soundPattern}</span>
                    <span className="group-hover:text-amber-400 font-serif transition-colors">
                      Khám phá chi tiết &rarr;
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        {/* Triết lý hòa âm */}
        <section className="pt-6 border-t border-stone-800/60 text-center max-w-2xl mx-auto space-y-2">
          <p className="font-serif italic text-stone-400 text-sm sm:text-base leading-relaxed">
            &ldquo;Dàn nhạc Chèo không bao giờ chơi lấn át con người. Tiếng đàn, tiếng trống sinh ra là để thở cùng hơi thở của đào kép trên manh chiếu.&rdquo;
          </p>
          <span className="text-xs font-mono text-amber-500/80 uppercase tracking-widest block">
            Quy chuẩn hòa thanh sân khấu Chèo cổ
          </span>
        </section>
      </div>
    )
  }

  // =========================================================================
  // TRƯỜNG HỢP 3: KHO TÀNG LÀN ĐIỆU (/lan-dieu)
  // =========================================================================
  if (currentPath?.endsWith('/lan-dieu')) {
    return (
      <div className="space-y-8 sm:space-y-10 text-left animate-in fade-in duration-300">
        <div className="flex items-center justify-between pb-3 border-b border-stone-800/60">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Quay lại tổng quan âm thanh & làn điệu</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            Chương 02 &bull; Làn Điệu
          </span>
        </div>

        <header className="space-y-2 pb-6 border-b border-stone-800/60">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-semibold block">
              Giai Điệu & Giọng Hát
            </span>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Mô phỏng âm sắc điệu thức cổ</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Kho Tàng Hơn 200 Làn Điệu Chèo Cổ
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-3xl leading-relaxed">
            Từ tiếng hát nỉ non ai oán của thân phận nàng dâu nghèo đến nhịp phách rộn ràng lúng liếng của đêm hội xuân trao duyên. Bấm vào một làn điệu bên dưới để lắng nghe giai điệu và thưởng thức lời ca cổ truyền.
          </p>
        </header>

        {/* Phòng thẩm âm tương tác */}
        <section className="space-y-6">
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {MELODIES_DATA.map((melody) => {
              const isSelected = selectedMelody.id === melody.id
              return (
                <button
                  key={melody.id}
                  onClick={() => handleToggleMelody(melody)}
                  className={`px-4 py-2 rounded-full text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/20'
                      : 'bg-stone-900/60 hover:bg-stone-800 text-stone-300'
                  }`}
                >
                  <Music className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-950' : 'text-amber-500'}`} />
                  <div>
                    <span className="text-xs sm:text-sm font-serif block leading-snug">{melody.name}</span>
                    <span className={`text-[10px] ${isSelected ? 'text-stone-900/80 font-normal' : 'text-stone-500'}`}>
                      {melody.character}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Player Controller */}
          <div className="py-6 border-y border-stone-800/60 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button
              onClick={() => handleToggleMelody(selectedMelody)}
              className="w-14 h-14 rounded-full bg-amber-500 text-stone-950 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center shadow-xl shadow-amber-500/25 cursor-pointer shrink-0"
              aria-label={isPlayingMelody ? 'Tạm dừng' : 'Phát âm thanh'}
            >
              {isPlayingMelody ? (
                <Pause className="w-5 h-5 text-stone-950 fill-stone-950" />
              ) : (
                <Play className="w-5 h-5 text-stone-950 fill-stone-950 ml-0.5" />
              )}
            </button>

            <div className="flex-1 w-full space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {selectedMelody.name}
                </h3>
                <span className="text-xs font-serif text-amber-300/90">{selectedMelody.type}</span>
              </div>

              {/* Animated Equalizer Wave */}
              <div className="flex items-center gap-1 h-6">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      isPlayingMelody ? 'bg-amber-400 animate-pulse' : 'bg-stone-800/60 h-1'
                    }`}
                    style={{
                      height: isPlayingMelody ? `${Math.max(15, (i * 23) % 100)}%` : '2px'
                    }}
                  />
                ))}
              </div>

              <div className="space-y-1 pt-1">
                <p className="text-base sm:text-lg font-serif italic text-amber-200/95 leading-relaxed">
                  &ldquo;{selectedMelody.lyrics}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-stone-400 font-serif font-light leading-relaxed">
                  {selectedMelody.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kỹ thuật thanh nhạc */}
        <section className="space-y-3 pt-4 border-t border-stone-800/60">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Kỹ Thuật Ca Diễn
          </span>
          <h3 className="text-2xl font-serif font-bold text-white">
            Nghệ Thuật Nhả Chữ: Nảy Hạt, Buông Bắt & Luyến Láy
          </h3>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed max-w-3xl">
            Người hát Chèo không ngân tự do theo cảm tính mà tuân thủ nghiêm ngặt kỹ thuật ém hơi, nảy hạt ở từng âm tiết. Câu hát cất lên phải vừa tròn vành rõ chữ, vừa đượm hồn ca dao và mở ra không gian văn hóa Kinh Bắc đặc trưng.
          </p>
        </section>
      </div>
    )
  }

  // =========================================================================
  // TRƯỜNG HỢP 4: TIẾT TẤU & NHỊP TRỐNG (/tiet-tau)
  // =========================================================================
  if (currentPath?.endsWith('/tiet-tau')) {
    return (
      <div className="space-y-8 sm:space-y-10 text-left animate-in fade-in duration-300">
        <div className="flex items-center justify-between pb-3 border-b border-stone-800/60">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Quay lại tổng quan âm thanh & làn điệu</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            Chương 03 &bull; Tiết Tấu
          </span>
        </div>

        <header className="space-y-2 pb-6 border-b border-stone-800/60">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-semibold block">
            Quy Luật Kịch Tính
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Bốn Chặng Tiết Tấu Của Đêm Diễn Chèo
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-3xl leading-relaxed">
            Tiết tấu Chèo biến ảo tài tình theo cảm xúc kịch bản: từ tiếng trống giục hội náo nức, lời hát xưng danh đĩnh đạc, khúc tự sự da diết cho đến tiếng cười trào lộng sảng khoái.
          </p>
        </header>

        {/* 4 Chặng Tiết Tấu */}
        <section className="space-y-8">
          {STAGES_DATA.map((stage) => {
            const isPlayingThisStage = playingStageStep === stage.step
            return (
              <div key={stage.step} className="space-y-3 pb-6 border-b border-stone-800/50 last:border-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-amber-500 font-bold">Chặng 0{stage.step}</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {stage.name}
                    </h3>
                    <span className="text-xs font-serif text-amber-300/90 hidden sm:inline">&bull; {stage.subtitle}</span>
                  </div>

                  <button
                    onClick={() => handleToggleStageSound(stage.step, stage.soundInstrumentId)}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      isPlayingThisStage
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-800/80 hover:bg-stone-800 text-amber-400 hover:text-amber-300 border border-amber-900/30'
                    }`}
                  >
                    {isPlayingThisStage ? (
                      <>
                        <Pause className="w-3 h-3 fill-current" />
                        <span>Đang vang nhịp</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Nghe mẫu nhịp</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                  {stage.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs border-t border-stone-800/40">
                  <p className="font-serif italic text-amber-200/90">
                    &ldquo;{stage.verse}&rdquo;
                  </p>
                  <div className="inline-flex items-center gap-1.5 font-mono text-stone-400 bg-stone-900/60 px-2.5 py-1 rounded-md border border-stone-800/60">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>{stage.rhythmSample}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        {/* Khảo cứu tiếng trống */}
        <section className="pt-6 border-t border-stone-800/60 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Ngôn Ngữ Tiếng Trống
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            “Phi Trống Bất Thành Chèo”
          </h3>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed max-w-3xl">
            Tiếng trống Chèo không chỉ giữ nhịp mà còn là tiếng nói phân minh công lý của người xem hội làng. Nhịp tang gõ dập biểu thị sự tán thưởng, tiếng tùng thúc giục chuyển màn, và tiếng cắc giòn tan chốt lại câu thoại xưng danh của nhân vật.
          </p>
        </section>
      </div>
    )
  }

  // =========================================================================
  // TRƯỜNG HỢP 5: GIAO DIỆN TỔNG QUAN HUB (/kham-pha/san-khau/am-thanh)
  // =========================================================================
  return (
    <div className="space-y-10 sm:space-y-12 text-left animate-in fade-in duration-300">
      <header className="border-b border-stone-800/60 pb-6 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            Sân Khấu &bull; Âm Nhạc & Làn Điệu
          </span>
          <span className="text-stone-600">&bull;</span>
          <span className="text-xs font-mono text-stone-400">3 Không Gian Khảo Cứu</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Thanh Âm & Làn Điệu Chiếu Chèo Sân Đình
        </h1>
        <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed max-w-3xl">
          Nghệ thuật Chèo truyền thống được nâng đỡ bởi sự kết hợp tinh tế giữa dàn nhạc Bát Âm cổ truyền, kho tàng hơn 200 làn điệu mẫu mực và quy luật tiết tấu 4 chặng kịch tính. Bấm vào một chuyên mục bên dưới để bước vào không gian thính phòng tương tác.
        </p>
      </header>

      {/* 3 Chương Trang Con */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {[
          {
            path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am',
            num: '01',
            title: 'Dàn Nhạc Bát Âm',
            subtitle: 'Trống đế, đàn nguyệt, đàn nhị, sáo trúc',
            desc: 'Khám phá 6 nhạc cụ linh hồn nắm giữ tiết tấu và giai điệu qua bộ thẻ trực quan và các trang chi tiết chuyên khảo.',
            tag: 'Nhạc Khí Chuẩn Mực'
          },
          {
            path: '/kham-pha/san-khau/am-thanh/lan-dieu',
            num: '02',
            title: 'Kho Tàng Làn Điệu',
            subtitle: 'Hơn 200 làn điệu mẫu mực',
            desc: 'Phòng thẩm âm tương tác với các làn điệu kinh điển: Đào Liễu, Quân Tử Vu Dịch, Sa Lệch Chênh, Hề Mồi.',
            tag: 'Phòng Thẩm Âm'
          },
          {
            path: '/kham-pha/san-khau/am-thanh/tiet-tau',
            num: '03',
            title: 'Tiết Tấu & Nhịp Trống',
            subtitle: 'Bốn chặng phát triển kịch tính',
            desc: 'Quy luật tiết tấu từ tiếng trống mở màn giục giã hội làng đến hát xưng danh, cao trào bi kịch và tiếng cười trào lộng.',
            tag: 'Ngôn Ngữ Nhịp Phách'
          }
        ].map((item) => (
          <div
            key={item.path}
            onClick={() => onNavigate?.(item.path)}
            className="group cursor-pointer space-y-3"
          >
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-stone-900 relative">
              <img
                src="/images/cheo_instruments.jpg"
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 text-3xl font-mono font-black text-white/20 select-none">
                {item.num}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
                {item.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-amber-200/90 font-serif">
                {item.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed pt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Triết lý âm thanh */}
      <section className="pt-6 border-t border-stone-800/60 text-center max-w-2xl mx-auto space-y-2">
        <p className="font-serif italic text-stone-400 text-sm sm:text-base leading-relaxed">
          &ldquo;Dàn nhạc Chèo không bao giờ chơi lấn át con người. Tiếng đàn, tiếng trống sinh ra là để thở cùng hơi thở của đào kép trên manh chiếu.&rdquo;
        </p>
        <span className="text-xs font-mono text-amber-500/80 uppercase tracking-widest block">
          Triết lý hòa âm sân khấu Chèo cổ
        </span>
      </section>
    </div>
  )
}
