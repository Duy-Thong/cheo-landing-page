import React, { useState } from 'react'
import { ArrowLeft, Play, Pause, Volume2, Music } from 'lucide-react'

interface Instrument {
  id: string
  name: string
  category: string
  role: string
  timbre: string
  technique: string
  verse: string
  soundPattern: string
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

const INSTRUMENTS_DATA: Instrument[] = [
  {
    id: 'trong-de',
    name: 'Trống Đế',
    category: 'Trưởng Ban Tiết Tấu',
    role: 'Nắm giữ sinh mệnh của toàn bộ đêm diễn. Gõ mặt tạo tiếng tùng trầm chắc, gõ tang tạo tiếng cắc đanh giòn chỉ huy từng bước chân đào kép.',
    timbre: 'Đanh giòn, dứt khoát, thúc giục',
    technique: 'Dùng hai dùi gỗ lim gõ mặt trống và gõ tang trống luân phiên',
    verse: 'Thùng thình trống đánh giòn tan / Chỉ huy đào kép vững vàng bước chân.',
    soundPattern: 'Tùng... Cắc! Tùng tùng cắc!'
  },
  {
    id: 'dan-nguyet',
    name: 'Đàn Nguyệt',
    category: 'Lãnh Tấu Giai Điệu',
    role: 'Hai dây tơ gảy nên những cung bậc khoan thai, dìu dặt, uốn lượn nâng niu từng câu hát nhả chữ và làn hơi của người nghệ sĩ.',
    timbre: 'Trong sáng, thanh tao, luyến láy',
    technique: 'Ngón nhấn, ngón rung, ngón luyến mềm mại theo hơi thở diễn viên',
    verse: 'Đàn nguyệt so dây nắn nót / Tình tang nâng cánh câu ca lững lờ.',
    soundPattern: 'Tích tịch tình tang, ngân vang dìu dặt'
  },
  {
    id: 'dan-nhi',
    name: 'Đàn Nhị',
    category: 'Biểu Cảm Nội Tâm',
    role: 'Cung vĩ lông ngựa miết trên hai dây tơ tạo nên thanh âm nỉ non, mùi mẫn như tiếng khóc than cho những thân phận oan khuất chìm nổi.',
    timbre: 'Nỉ non, da diết, trầm buồn',
    technique: 'Miết cung vĩ kết hợp rung ngón tay trên cần đàn',
    verse: 'Cung vĩ kéo khúc đoạn trường / Nỗi oan Thị Kính còn vương tháng ngày.',
    soundPattern: 'É e kéo nhị nỉ non oán than'
  },
  {
    id: 'sao-truc',
    name: 'Sáo Trúc',
    category: 'Thanh Âm Đồng Nội',
    role: 'Ống trúc mộc mạc thổi nên tiếng sáo vút cao thanh thoát, đưa hồn người nghe về với bờ tre gốc đa và dòng sông quê hương.',
    timbre: 'Vút cao, trong trẻo, khoáng đạt',
    technique: 'Thổi hơi rung vòm họng kết hợp ngón bấm láy hoa mỹ',
    verse: 'Tiếng sáo lơ lửng lưng trời / Đưa câu Chèo cổ về nơi cội nguồn.',
    soundPattern: 'Vi vu tiếng sáo lưng trời gió bay'
  },
  {
    id: 'trong-com',
    name: 'Trống Cơm',
    category: 'Âm Sắc Lúa Nước',
    role: 'Tạo nền âm trầm ấm áp, gắn liền với văn hóa nông nghiệp lúa nước và các màn giao duyên rộn rã.',
    timbre: 'Trầm đục, ấm, vang nhẹ',
    technique: 'Vỗ hai lòng bàn tay vào hai đầu trống có dán cơm nếp ấm',
    verse: 'Một bầy tang tình con sít / Tiếng trống cơm vỗ nhịp ngọt ngào.',
    soundPattern: 'Tang tình tang tính tình tang'
  },
  {
    id: 'thanh-la-mo',
    name: 'Thanh La & Mõ',
    category: 'Tiết Tấu Trào Lộng',
    role: 'Gõ ăn khớp theo từng câu châm biếm, tạo tiếng cười giòn giã cho các màn diễn của vai Hề Chèo.',
    timbre: 'Thanh la ngân xa vang; Mõ trầm đanh dứt khoát',
    technique: 'Gõ dập phách nhanh, nhấn nhá vào điểm rơi của câu pha trò',
    verse: 'Mõ gõ cốc cốc nhịp cười / Thanh la gióng tiếng mở lời phân minh.',
    soundPattern: 'Leng keng cốc cốc, giòn tan tiếng cười'
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
    rhythmSample: 'Tùng... cắc... tùng tùng cắc! / Tùng cắc tùng cắc tùng tùng tùng...',
    verse: 'Trống Chèo gióng giả đầu đình / Làng trên xóm dưới đượm tình nước non.'
  },
  {
    step: 2,
    name: 'Hát Xưng Danh',
    subtitle: 'Nhân vật bước ra manh chiếu',
    instruments: 'Đàn nguyệt, Sáo trúc, Trống đế',
    tempo: 'Khoan thai, đĩnh đạc',
    description: 'Nhân vật xuất hiện giữa manh chiếu, tay múa quạt miệng xưng tên tuổi và gia cảnh rõ ràng trước khán giả hội làng.',
    rhythmSample: 'Nói lối dồn phách, dứt câu bằng một tiếng tang cắc đanh gọn.',
    verse: 'Chẳng giấu gì tôi đây ra mắt / Xưng danh một câu cho rõ ngọn ngành.'
  },
  {
    step: 3,
    name: 'Làn Điệu Trữ Tình',
    subtitle: 'Chiều sâu tâm sự & bi kịch',
    instruments: 'Đàn nhị, Đàn nguyệt, Trống cơm',
    tempo: 'Chậm rãi, da diết',
    description: 'Bộc bạch nỗi oan khiên của Đào thương, khát khao của Đào lẳng hay tâm chí nam nhi của Kép quân tử trong dòng xoáy số phận.',
    rhythmSample: 'Dây tơ nhấn vuốt nỉ non, nhịp trống cơm đệm êm đềm.',
    verse: 'Quân tử vu dịch xa xôi / Thuyền ai neo bến ngậm ngùi nhớ thương.'
  },
  {
    step: 4,
    name: 'Trào Lộng Hề Chèo',
    subtitle: 'Tiếng cười dân gian giải tỏa',
    instruments: 'Trống đế, Mõ, Thanh la',
    tempo: 'Nhanh, nhảy nhót',
    description: 'Hề Chèo xuất hiện với bước chân sáo và câu pha trò hóm hỉnh, đả kích thói hư tật xấu bằng tiếng cười sảng khoái của người lao động.',
    rhythmSample: 'Cắc tùng tùng, cắc tùng tùng / Mõ gõ lách cách giòn giã.',
    verse: 'Kẻ cắp gặp bà già tham / Cười cho thấu lẽ nhân gian sự đời.'
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
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  // =========================================================================
  // TRANG CON 1: DÀN NHẠC BÁT ÂM (/kham-pha/san-khau/am-thanh/dan-nhac-bat-am)
  // =========================================================================
  if (currentPath?.endsWith('/dan-nhac-bat-am')) {
    return (
      <div className="space-y-12 sm:space-y-16 text-left animate-in fade-in duration-300">
        <div className="flex items-center justify-between pb-4 border-b border-stone-800/60">
          <button
            onClick={() => onNavigate?.('/kham-pha/san-khau/am-thanh')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Quay lại tổng quan âm thanh & làn điệu</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            Chương 01 &bull; Bát Âm
          </span>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[260px] sm:min-h-[360px] shadow-2xl">
          <img
            src="/images/cheo_instruments.jpg"
            alt="Dàn Nhạc Cụ Chèo Cổ Bát Âm"
            className="w-full h-full object-cover filter brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest mb-2 block">
              Nhạc Khí Cổ Truyền
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              Dàn Nhạc Bát Âm
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-2xl mt-2 leading-relaxed">
              Trống đế chỉ huy, đàn nguyệt dẫn dắt, đàn nhị nỉ non và sáo trúc vi vu cùng tạo nên linh hồn của chiếu Chèo sân đình.
            </p>
          </div>
        </div>

        {/* Khảo cứu sâu: 6 nhạc khí */}
        <section className="space-y-8">
          <div className="border-b border-stone-800/60 pb-3">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Sáu Nhạc Khí Hồn Cốt Của Chiếu Chèo
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-serif font-light mt-1">
              Khám phá cấu tạo, âm sắc và vị thế biểu diễn của từng nhạc cụ truyền thống
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 pt-2">
            {INSTRUMENTS_DATA.map((inst) => (
              <div key={inst.id} className="space-y-3">
                <div className="flex items-baseline justify-between border-b border-stone-800/50 pb-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {inst.name}
                  </h3>
                  <span className="text-xs font-mono text-amber-500 font-semibold">{inst.category}</span>
                </div>

                <p className="text-sm text-stone-300 font-serif font-light leading-relaxed">
                  {inst.role}
                </p>

                <div className="pt-2 text-xs text-stone-400 space-y-1.5">
                  <div>
                    <span className="text-stone-500 font-mono uppercase text-[10px] block">Đặc trưng âm sắc:</span>
                    <span className="text-amber-200/90 font-serif">{inst.timbre}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 font-mono uppercase text-[10px] block">Kỹ thuật diễn tấu:</span>
                    <span className="text-stone-300 font-light">{inst.technique}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 font-mono uppercase text-[10px] block">Khẩu quyết âm vang:</span>
                    <span className="font-mono text-amber-300">{inst.soundPattern}</span>
                  </div>
                  <p className="font-serif italic text-stone-400 pt-2 border-t border-stone-800/40">
                    &ldquo;{inst.verse}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Triết lý phối khí */}
        <section className="pt-8 border-t border-stone-800/60 text-center max-w-2xl mx-auto space-y-2">
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
  // TRANG CON 2: KHO TÀNG LÀN ĐIỆU (/kham-pha/san-khau/am-thanh/lan-dieu)
  // =========================================================================
  if (currentPath?.endsWith('/lan-dieu')) {
    return (
      <div className="space-y-12 sm:space-y-16 text-left animate-in fade-in duration-300">
        <div className="flex items-center justify-between pb-4 border-b border-stone-800/60">
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

        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[260px] sm:min-h-[360px] shadow-2xl">
          <img
            src="/images/cheo_instruments.jpg"
            alt="Kho Tàng Làn Điệu Chèo Cổ"
            className="w-full h-full object-cover filter brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest mb-2 block">
              Giai Điệu & Giọng Hát
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              Kho Tàng Hơn 200 Làn Điệu
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-2xl mt-2 leading-relaxed">
              Từ tiếng hát nỉ non ai oán của thân phận nàng dâu nghèo đến nhịp phách rộn ràng lúng liếng của đêm hội xuân trao duyên.
            </p>
          </div>
        </div>

        {/* Phòng thẩm âm */}
        <section className="space-y-8">
          <div className="border-b border-stone-800/60 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Phòng Thẩm Âm Tương Tác
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 font-serif font-light mt-1">
                Chọn một làn điệu mẫu mực để thưởng thức và tìm hiểu ca từ
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Thu âm thực địa nguyên bản</span>
            </div>
          </div>

          {/* 4 Làn Điệu Selector */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {MELODIES_DATA.map((melody) => {
              const isSelected = selectedMelody.id === melody.id
              return (
                <button
                  key={melody.id}
                  onClick={() => {
                    setSelectedMelody(melody)
                    setIsPlaying(true)
                  }}
                  className={`px-4 py-2.5 rounded-full text-left transition-all cursor-pointer flex items-center gap-2.5 ${
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
          <div className="py-8 border-y border-stone-800/60 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-amber-500 text-stone-950 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center shadow-xl shadow-amber-500/25 cursor-pointer shrink-0"
              aria-label={isPlaying ? 'Tạm dừng' : 'Phát âm thanh'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-stone-950 fill-stone-950" />
              ) : (
                <Play className="w-6 h-6 text-stone-950 fill-stone-950 ml-0.5" />
              )}
            </button>

            <div className="flex-1 w-full space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {selectedMelody.name}
                </h3>
                <span className="text-xs font-serif text-amber-300/90">{selectedMelody.type}</span>
              </div>

              <div className="flex items-center gap-1 h-7">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      isPlaying ? 'bg-amber-400 animate-pulse' : 'bg-stone-800/60 h-1'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.max(15, (i * 23) % 100)}%` : '2px'
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
        <section className="space-y-4 pt-4 border-t border-stone-800/60">
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
  // TRANG CON 3: TIẾT TẤU & NHỊP TRỐNG (/kham-pha/san-khau/am-thanh/tiet-tau)
  // =========================================================================
  if (currentPath?.endsWith('/tiet-tau')) {
    return (
      <div className="space-y-12 sm:space-y-16 text-left animate-in fade-in duration-300">
        <div className="flex items-center justify-between pb-4 border-b border-stone-800/60">
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

        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[260px] sm:min-h-[360px] shadow-2xl">
          <img
            src="/images/cheo_instruments.jpg"
            alt="Tiết Tấu Sân Khấu & Nhịp Trống Chèo"
            className="w-full h-full object-cover filter brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest mb-2 block">
              Nhịp Điệu Sân Khấu
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              Bốn Chặng Tiết Tấu Đêm Diễn
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-2xl mt-2 leading-relaxed">
              Quy luật phát triển kịch tính và tiết tấu từ tiếng trống mở màn giục giã đến cao trào bi thương và niềm vui trào lộng giải tỏa.
            </p>
          </div>
        </div>

        {/* 4 Chặng Tiết Tấu */}
        <section className="space-y-8">
          <div className="border-b border-stone-800/60 pb-3">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Bốn Chặng Phát Triển Kịch Tính
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-serif font-light mt-1">
              Mỗi chặng gắn liền với tốc độ nhịp phách và nhạc cụ chủ đạo riêng biệt
            </p>
          </div>

          <div className="space-y-8 pt-2">
            {STAGES_DATA.map((stage) => (
              <div key={stage.step} className="space-y-3 pb-6 border-b border-stone-800/50 last:border-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-amber-500 font-bold">Chặng 0{stage.step}</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {stage.name}
                    </h3>
                  </div>
                  <span className="text-xs font-serif text-amber-300/90">{stage.subtitle}</span>
                </div>

                <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                  {stage.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-stone-400">
                  <div>
                    <span className="text-stone-500 font-mono uppercase text-[10px] block">Mẫu nhịp gõ trống:</span>
                    <span className="font-mono text-amber-300">{stage.rhythmSample}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 font-mono uppercase text-[10px] block">Câu ca tiêu biểu:</span>
                    <span className="font-serif italic text-stone-300">&ldquo;{stage.verse}&rdquo;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ngôn ngữ tiếng trống */}
        <section className="pt-8 border-t border-stone-800/60 space-y-3">
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
  // GIAO DIỆN TỔNG QUAN HUB (/kham-pha/san-khau/am-thanh)
  // Ba chương trang con rõ ràng, không dồn ứ thông tin
  // =========================================================================
  return (
    <div className="space-y-12 sm:space-y-16 text-left animate-in fade-in duration-300">
      {/* Hero Banner */}
      <section className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[260px] sm:min-h-[340px] shadow-2xl">
        <img
          src="/images/cheo_instruments.jpg"
          alt="Thanh Âm & Làn Điệu Chèo Cổ"
          className="w-full h-full object-cover filter brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
        <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest mb-2 block">
            Âm Nhạc Chiếu Chèo Sân Đình
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Thanh Âm & Làn Điệu
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-2xl mt-2 leading-relaxed">
            Sự kết hợp tinh tế giữa dàn nhạc Bát Âm cổ truyền, kho tàng hơn 200 làn điệu và quy luật 4 chặng tiết tấu kịch tính.
          </p>
        </div>
      </section>

      {/* Dẫn nhập */}
      <section className="space-y-3 pb-8 border-b border-stone-800/60">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
          Ba Cột Trụ Của Nghệ Thuật Diễn Tấu
        </h2>
        <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed max-w-3xl">
          Chọn một chương dưới đây để khám phá chuyên sâu từng khía cạnh âm thanh của sân khấu Chèo cổ, từ dàn nhạc khí chuẩn mực đến không gian thẩm âm làn điệu và nghệ thuật điều phối nhịp trống.
        </p>
      </section>

      {/* 3 Chương Trang Con — Thiết kế thoáng, click chuyển trang trực tiếp */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {[
          {
            path: '/kham-pha/san-khau/am-thanh/dan-nhac-bat-am',
            num: '01',
            title: 'Dàn Nhạc Bát Âm',
            subtitle: 'Trống đế, đàn nguyệt, đàn nhị, sáo trúc',
            desc: 'Khám phá 6 nhạc cụ linh hồn nắm giữ tiết tấu và giai điệu, cùng triết lý hòa âm thở cùng diễn viên trên manh chiếu.',
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
      <section className="pt-8 border-t border-stone-800/60 text-center max-w-2xl mx-auto space-y-2">
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
