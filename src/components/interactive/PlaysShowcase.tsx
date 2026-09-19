import React, { useState, useEffect } from 'react'
import { ArrowLeft, Sparkles } from 'lucide-react'

interface PlayAct {
  actNum: string
  title: string
  synopsis: string
}

interface PlayCharacter {
  name: string
  archetype: string
}

interface ChèoPlay {
  id: string
  title: string
  epoch: string
  origin: string
  image: string
  tagline: string
  coreOverview: string
  characters: PlayCharacter[]
  acts: PlayAct[]
  iconicVerse: {
    lines: string
    scene: string
  }
  scholarlyReview: string
  reviewer: string
}

const MASTERPIECES: ChèoPlay[] = [
  {
    id: 'quan-am-thi-kinh',
    title: 'Quan Âm Thị Kính',
    epoch: 'Thế kỷ XVII — Cổ bản khuyết danh',
    origin: 'Chiếng Chèo xứ Nam & xứ Đông',
    image: '/images/play_quan_am_thi_kinh.jpg',
    tagline: 'Kiệt tác bi kịch về chữ "Nhẫn", lòng từ bi vô lượng và thân phận người phụ nữ dưới thời phong kiến.',
    coreOverview:
      'Vở chèo mẫu mực đỉnh cao của nghệ thuật kịch hát dân tộc. Tác phẩm kể về cuộc đời gian truân và tấm lòng bồ tát của nàng Thị Kính — người ba lần chịu hàm oan tày trời nhưng vẫn dùng tình thương để cứu rỗi trần gian.',
    characters: [
      { name: 'Thị Kính', archetype: 'Đào thương mẫu mực, hiện thân của đức nhẫn nhịn và lòng từ bi.' },
      { name: 'Thị Mầu', archetype: 'Đào lẳng nổi loạn, táo bạo đòi quyền yêu tự do phá bỏ lễ giáo.' },
      { name: 'Sùng Bà', archetype: 'Mụ ác đại diện cho cường quyền phong kiến cay nghiệt, tàn bạo.' },
      { name: 'Mãng Ông', archetype: 'Lão thân bần hàn, người cha nghèo gánh chịu oan khiên cùng con.' },
      { name: 'Nô', archetype: 'Hề áo ngắn với tiếng cười trào lộng châm biếm thói trưởng giả làng xã.' }
    ],
    acts: [
      {
        actNum: 'I',
        title: 'Án Oan Giết Chồng',
        synopsis:
          'Đêm khuya ngồi may áo thấy râu mọc ngược trên cằm chồng toan xén bớt. Sự hiểu lầm tai hại khiến Thị Kính bị mẹ chồng Sùng Bà vu cho tội đoạt mạng, đuổi khỏi nhà trong tủi nhục khôn cùng.'
      },
      {
        actNum: 'II',
        title: 'Thị Mầu Lên Chùa',
        synopsis:
          'Giả trai nương náu cửa thiền lấy pháp danh Kính Tâm, nàng lại vướng vào mối tình cuồng nhiệt của Thị Mầu. Bị từ chối, Thị Mầu có thai hoang rồi đổ vấy cho chú tiểu. Kính Tâm cắn răng chịu đòn roi làng phạt để giữ thanh danh cho nhà chùa.'
      },
      {
        actNum: 'III',
        title: 'Nuôi Con & Hóa Phật',
        synopsis:
          'Nhận đứa trẻ bị ruồng bỏ nơi tam quan, Kính Tâm chịu miệng tiếng thế gian đi xin từng giọt sữa nuôi con suốt ba năm. Ngày nàng thị tịch, nỗi oan mới sáng tỏ, linh hồn hóa thân thành Đức Quán Thế Âm Bồ Tát ngự tòa sen.'
      }
    ],
    iconicVerse: {
      lines: '“Thầy như táo rụng sân đình,\nEm như gái dở đi rình của chua...”',
      scene: 'Trích đoạn Thị Mầu lên chùa ghẹo Tiểu Kính Tâm'
    },
    scholarlyReview:
      'Quan Âm Thị Kính là pho kinh Phật bằng nghệ thuật kịch hát của tâm hồn người Việt, nơi cái Thiện đi qua mọi thử thách trần gian để nở hoa bất tử.',
    reviewer: 'GS.NSND Trần Bảng'
  },
  {
    id: 'xuy-van-gia-dai',
    title: 'Xúy Vân Giả Dại',
    epoch: 'Thế kỷ XVII — Trích vở cổ "Kim Nhan"',
    origin: 'Cổ bản kịch hát ước lệ đỉnh cao',
    image: '/images/play_kim_nham.jpg',
    tagline: 'Tiếng thét đòi quyền sống và khát vọng tự do của người phụ nữ bị giam cầm trong cuộc hôn nhân sắp đặt.',
    coreOverview:
      'Đỉnh cao nghệ thuật diễn xuất nội tâm của sân khấu truyền thống Việt Nam. Vở diễn lột tả tấn bi kịch giằng xé của người phụ nữ tài hoa mượn cơn điên dại để phá bỏ vòng kim cô phong kiến.',
    characters: [
      { name: 'Xúy Vân', archetype: 'Đào pha kiệt xuất, tâm hồn nghệ sĩ khao khát tự do bị dồn vào bước đường cùng.' },
      { name: 'Kim Nhan', archetype: 'Kép thư sinh mải mê khoa cử, vô tình bỏ quên người vợ trẻ cô đơn.' },
      { name: 'Trần Phương', archetype: 'Kép lướt đào hoa, xảo trá dùng lời đường mật lừa gạt rồi bội bạc.' },
      { name: 'Mụ Quán', archetype: 'Mụ chèo đời thường, người chứng kiến bi kịch bên bến đò.' }
    ],
    acts: [
      {
        actNum: 'I',
        title: 'Bến Đợi Cô Phòng',
        synopsis:
          'Kim Nhan mải miết kinh kỳ thi cử nhiều năm ròng, bỏ lại Xúy Vân vò võ cô đơn nơi quê nghèo suốt những năm tháng thanh xuân tươi đẹp nhất.'
      },
      {
        actNum: 'II',
        title: 'Màn Giả Dại Bất Hủ',
        synopsis:
          'Nghe lời ngon ngọt của gã đào hoa Trần Phương, Xúy Vân mượn cơn điên dại múa quay tơ dệt cửi, hát điệu Con Gà Rừng ép chồng viết giấy ly hôn trả nàng về tự do.'
      },
      {
        actNum: 'III',
        title: 'Hóa Điên & Bi Kịch Bến Sông',
        synopsis:
          'Bị Trần Phương bội bạc rũ bỏ, cơn điên giả biến thành cơn điên thật. Nàng lang thang ăn mày, gặp lại Kim Nhan vinh quy rồi tủi nhục gieo mình xuống bến sông bi ai.'
      }
    ],
    iconicVerse: {
      lines: '“Tôi chắp tay lạy bạn lạy bè,\nCho tôi xin bát nước lã tôi đãi người tình nhân...”',
      scene: 'Khúc ca điên dại trích đoạn Xúy Vân múa quay tơ'
    },
    scholarlyReview:
      'Màn Xúy Vân giả dại là đỉnh cao chưa từng có của nghệ thuật ước lệ Á Đông — nơi diễn viên chuyển hóa từ khóc sang cười, từ tỉnh sang điên chỉ trong một tích tắc.',
    reviewer: 'PGS.TS Nguyễn Thị Minh Thái'
  },
  {
    id: 'luu-binh-duong-le',
    title: 'Lưu Bình — Dương Lễ',
    epoch: 'Thế kỷ XVIII — Cổ bản Nam Bộ & Bắc Bộ',
    origin: 'Tích chèo đạo lý mẫu mực',
    image: '/images/play_luu_binh_duong_le.jpg',
    tagline: 'Bản trường ca bất hủ về tình bằng hữu tri kỷ son sắt và đức hy sinh thầm lặng của nàng Châu Long.',
    coreOverview:
      'Tác phẩm tôn vinh tình bạn trong sáng, cao đẹp vượt qua hư danh trần thế, cùng bức tượng đài đức hạnh tuyệt mỹ của người phụ nữ Việt Nam qua nhân vật Châu Long.',
    characters: [
      { name: 'Dương Lễ', archetype: 'Kép đứng nghĩa khí, mượn sự khinh bạc bề ngoài để kích chí bạn vàng.' },
      { name: 'Lưu Bình', archetype: 'Kép vàng tài hoa, ngông nghênh nhưng biết thức tỉnh để dùi mài kinh sử.' },
      { name: 'Nàng Châu Long', archetype: 'Đào thương đức hạnh, nghe lời chồng nuôi bạn ăn học giữ vẹn chữ trinh.' }
    ],
    acts: [
      {
        actNum: 'I',
        title: 'Bữa Rượu Cà Thiu',
        synopsis:
          'Dương Lễ đỗ quan cao nhưng vờ đãi bạn cơm nguội cà thiu để sỉ nhục, khích lệ Lưu Bình nuốt hận dốc chí học hành thành tài.'
      },
      {
        actNum: 'II',
        title: 'Châu Long Nuôi Bạn Vàng',
        synopsis:
          'Nàng Châu Long vâng lời chồng dựng quán bên đồi, dệt cửi nuôi Lưu Bình ăn học suốt ba năm, giữ vẹn khoảng cách thanh tịnh và chữ trinh.'
      },
      {
        actNum: 'III',
        title: 'Vinh Quy Bái Tổ',
        synopsis:
          'Lưu Bình đỗ Trạng trở về dinh bạn toan hỏi tội, ngỡ ngàng nhận ra người thiếp tảo tần chính là phu nhân Dương Lễ, ôm nhau khóc ròng vì ân nghĩa sâu nặng.'
      }
    ],
    iconicVerse: {
      lines: '“Bấy lâu đội hạt trông mây,\nDuyên xưa chưa thỏa, dạ này chưa khuây...”',
      scene: 'Khúc ca nàng Châu Long khuyên bạn dùi mài kinh sử'
    },
    scholarlyReview:
      'Lưu Bình Dương Lễ là bài học luân lý nhân văn sâu sắc nhất của người Việt về tình bạn vong niên và đạo nghĩa vợ chồng.',
    reviewer: 'Nhà nghiên cứu Văn hóa Dân gian'
  },
  {
    id: 'truong-vien',
    title: 'Trương Viên',
    epoch: 'Thế kỷ XVI — Cổ xưa bậc nhất',
    origin: 'Cổ bản tích chèo dân gian',
    image: '/images/play_truong_vien.jpg',
    tagline: 'Bản hùng ca bi tráng về lòng hiếu thảo của người con dâu và tấm lòng thủy chung son sắt giữa thời loạn lạc.',
    coreOverview:
      'Một trong những vở chèo cổ xưa nhất còn giữ trọn vẹn văn bản. Tác phẩm lay động lòng người bởi những thử thách cùng cực mà con người sẵn sàng vượt qua để giữ trọn chữ Hiếu và chữ Tình.',
    characters: [
      { name: 'Thị Phương', archetype: 'Đào thương bi tráng, cắt thịt nuôi mẹ khoét mắt cứu mẹ mù lòa.' },
      { name: 'Trương Viên', archetype: 'Kép vàng hiếu thảo, tướng quân xông pha trận mạc giữ yên bờ cõi.' },
      { name: 'Bà mẹ Trương Viên', archetype: 'Lão mụ mù lòa, biểu tượng nỗi đau của người mẹ trong ly loạn.' }
    ],
    acts: [
      {
        actNum: 'I',
        title: 'Tòng Quân Đánh Giặc',
        synopsis:
          'Trương Viên nghe lệnh triều đình tòng quân ra chiến trận, gửi gắm người mẹ già mắt mù cho người vợ hiền Thị Phương chăm sóc.'
      },
      {
        actNum: 'II',
        title: 'Dắt Mẹ Chạy Loạn',
        synopsis:
          'Chạy giặc đói vào rừng sâu, Thị Phương cắt thịt đùi nấu cháo nuôi mẹ, tự khoét đôi mắt mình dâng cho quỷ dữ để bảo vệ mạng sống cho mẹ chồng.'
      },
      {
        actNum: 'III',
        title: 'Đoàn Tụ Vinh Quy',
        synopsis:
          'Trương Viên thắng trận trở về, lòng hiếu thảo của nàng làm cảm động trời cao, mắt nàng sáng lại, gia đình sum vầy trong tiếng trống khải hoàn.'
      }
    ],
    iconicVerse: {
      lines: '“Một ngày làm dâu nghìn ngày chịu nhục,\nChữ hiếu với mẹ già nặng tựa thái sơn...”',
      scene: 'Khúc ca Thị Phương dắt mẹ chồng mù chạy loạn'
    },
    scholarlyReview:
      'Trương Viên là viên ngọc cổ kính nhất của kịch hát dân gian, chứng minh người bình dân Việt Nam luôn đặt chữ Hiếu làm gốc của mọi đạo lý làm người.',
    reviewer: 'Viện Nghiên cứu Sân khấu'
  }
]

interface PlaysShowcaseProps {
  currentPath?: string
  onNavigate?: (path: string) => void
}

export const PlaysShowcase: React.FC<PlaysShowcaseProps> = ({
  currentPath,
  onNavigate
}) => {
  const pathId = currentPath?.split('/').pop()
  const foundPlay = MASTERPIECES.find((p) => p.id === pathId) || null
  const [selectedPlay, setSelectedPlay] = useState<ChèoPlay | null>(foundPlay)

  useEffect(() => {
    const pId = currentPath?.split('/').pop()
    const found = MASTERPIECES.find((p) => p.id === pId)
    setSelectedPlay(found || null)
  }, [currentPath])

  const handleSelect = (play: ChèoPlay) => {
    setSelectedPlay(play)
    if (onNavigate) {
      onNavigate(`/kham-pha/san-khau/tac-pham-tieu-bieu/${play.id}`)
    }
  }

  const handleBack = () => {
    setSelectedPlay(null)
    if (onNavigate) {
      onNavigate('/kham-pha/san-khau/tac-pham-tieu-bieu')
    }
  }

  // =========================================================================
  // GIAO DIỆN CHI TIẾT 1 VỞ DIỄN — EDITORIAL THEATER STORY (NO DASHBOARD BOXES)
  // =========================================================================
  if (selectedPlay) {
    return (
      <div className="w-full text-left animate-in fade-in duration-300 space-y-16 sm:space-y-20">
        {/* Nút quay lại tinh giản */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800/60">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-400/90 hover:text-amber-300 font-serif transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
            <span>Trở về danh sách kiệt tác</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500/90 font-medium">
            {selectedPlay.epoch}
          </span>
        </div>

        {/* ── 1. CINEMA OVERLAY HERO BANNER (100VW FULL VIEWPORT WIDTH) ── */}
        <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 sm:-mt-14 overflow-hidden shadow-2xl border-b border-stone-800 bg-stone-950 h-[280px] sm:h-[340px] lg:h-[380px] flex items-end group mb-12">
          <img
            src={selectedPlay.image}
            alt={selectedPlay.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/15" />

          <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8 space-y-2.5">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md">
              {selectedPlay.title}
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-stone-200 font-serif font-light leading-relaxed drop-shadow max-w-4xl">
              {selectedPlay.tagline}
            </p>
          </div>
        </section>

        {/* ── 2. DẪN NHẬP TỰ SỰ KỊCH BẢN ── */}
        <section className="rounded-3xl border border-stone-800 bg-stone-900/60 p-6 sm:p-10 shadow-2xl space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
            Cốt Truyện &bull; {selectedPlay.origin}
          </h2>
          <p className="text-base sm:text-lg text-stone-200 font-serif font-light leading-relaxed">
            <span className="float-left text-4xl sm:text-5xl font-serif font-bold text-amber-400 leading-none pr-3 pt-1">V</span>
            {selectedPlay.coreOverview.substring(1)}
          </p>
        </section>

        {/* ── 3. DIỄN TIẾN BA HỒI KỊCH ── */}
        <section className="space-y-8">
          <div className="border-b border-stone-800/60 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Diễn Tiến Ba Hồi Kịch Cổ Truyền
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {selectedPlay.acts.map((act) => (
              <div
                key={act.actNum}
                className="rounded-2xl border border-stone-800 bg-stone-900/40 p-6 space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-800/60 pb-3">
                    <span className="text-xs font-mono text-amber-500 font-bold uppercase tracking-widest">
                      Hồi {act.actNum}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white leading-snug">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed">
                    {act.synopsis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC VISUAL CALLOUT) ── */}
        <section className="relative rounded-3xl overflow-hidden border border-amber-900/40 bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 p-8 sm:p-14 text-center space-y-4 shadow-2xl">
          <Sparkles className="w-8 h-8 text-amber-500/80 mx-auto animate-pulse" />
          <p className="text-lg sm:text-2xl font-serif italic text-amber-100 max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
            {selectedPlay.iconicVerse.lines}
          </p>
          <span className="text-xs font-serif text-amber-400/80 uppercase tracking-widest block">
            {selectedPlay.iconicVerse.scene}
          </span>
        </section>

        {/* ── 5. TUYẾN NHÂN VẬT HÌNH MẪU ── */}
        <section className="space-y-6 pt-4 border-t border-stone-800/60">
          <div className="flex items-center justify-between border-b border-stone-800/60 pb-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Tuyến Nhân Vật Trung Tâm
            </h2>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              Niêm Luật Sân Đình
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedPlay.characters.map((c) => (
              <div
                key={c.name}
                className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800 space-y-2"
              >
                <h3 className="text-base font-serif font-bold text-white">
                  {c.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed">
                  {c.archetype}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. NHẬN ĐỊNH HỌC THUẬT ── */}
        <footer className="pt-6 pb-6 border-t border-stone-800/60 max-w-3xl mx-auto text-center space-y-2">
          <p className="font-serif italic text-sm sm:text-base text-stone-300 leading-relaxed">
            &ldquo;{selectedPlay.scholarlyReview}&rdquo;
          </p>
          <span className="text-xs font-mono text-amber-500 block uppercase tracking-widest">
            — {selectedPlay.reviewer} —
          </span>
        </footer>
      </div>
    )
  }

  // =========================================================================
  // GIAO DIỆN DANH SÁCH 4 KIỆT TÁC — EDITORIAL SHOWCASE (NO EMPTY TITLE-DESC CARDS)
  // =========================================================================
  return (
    <div className="space-y-12 sm:space-y-16 text-left animate-in fade-in duration-300">
      {/* ── 1. CINEMA OVERLAY HERO BANNER (100VW FULL VIEWPORT WIDTH & COMPACT HEIGHT) ── */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 sm:-mt-14 overflow-hidden shadow-2xl border-b border-stone-800 bg-stone-950 h-[280px] sm:h-[340px] lg:h-[380px] flex items-end group mb-12 sm:mb-16">
        <img
          src="/images/kham-pha/san-khau/tac_pham_hero.jpg"
          alt="Tứ Đại Kiệt Tác Sân Khấu Chèo"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/15" />

        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8 space-y-2.5">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md">
            Tứ Đại Kiệt Tác Sân Khấu Chèo
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-stone-200 font-serif font-light leading-relaxed drop-shadow max-w-4xl">
            <span className="float-left text-3xl sm:text-4xl font-serif font-bold text-amber-400 leading-none pr-2.5 pt-0.5">B</span>
            ốn pho kịch bản mẫu mực quy định niêm luật về ngôn ngữ hát nói, vũ đạo ước lệ và triết lý nhân sinh của nghệ thuật kịch hát dân gian Việt Nam suốt nhiều thế kỷ.
          </p>
        </div>
      </section>

      {/* ── 2. LƯỚI POSTER KIỆT TÁC 4 CỘT (4-COLUMN MASTERPIECE POSTER GRID) ── */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-stone-800/60 pb-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Bốn Pho Kịch Bản Mẫu Mực
          </h2>
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest font-semibold hidden sm:inline">
            Cổ Bản Cổ Truyền
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MASTERPIECES.map((play, idx) => (
            <article
              key={play.id}
              onClick={() => handleSelect(play)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 hover:border-amber-700/50 transition-all duration-500 flex flex-col shadow-xl"
            >
              <div className="aspect-[3/4] w-full overflow-hidden relative bg-stone-950">
                <img
                  src={play.image}
                  alt={play.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="absolute top-3 right-3 text-2xl sm:text-3xl font-mono font-black text-amber-400/30 select-none">
                  0{idx + 1}
                </div>

                <div className="absolute bottom-3 left-4 right-4 space-y-1">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
                    {play.epoch}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {play.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed line-clamp-3">
                  {play.tagline}
                </p>

                <div className="pt-2 border-t border-stone-800/60 flex items-center justify-between text-xs font-serif text-amber-400 font-medium">
                  <span>Khám phá diễn tiến hồi kịch</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
