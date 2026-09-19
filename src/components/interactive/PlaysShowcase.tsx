import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

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
    image: '/images/cheo_costume.jpg',
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
    image: '/images/cheo_hero.jpg',
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
    image: '/images/cheo_dinh_lang.jpg',
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
    image: '/images/cheo_kham_pha.jpg',
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
      <div className="text-left animate-in fade-in duration-300 space-y-12 sm:space-y-16">
        {/* Nút quay lại tinh giản */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800/60">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-400 font-serif transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
            <span>Trở về danh sách tác phẩm</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-wider text-amber-500/90 font-medium">
            {selectedPlay.epoch}
          </span>
        </div>

        {/* Hero Panorama Vở Diễn */}
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[260px] sm:min-h-[340px] bg-stone-900 shadow-2xl">
          <img
            src={selectedPlay.image}
            alt={selectedPlay.title}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end space-y-2 sm:space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block">
              {selectedPlay.origin}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {selectedPlay.title}
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-2xl leading-relaxed">
              {selectedPlay.tagline}
            </p>
          </div>
        </div>

        {/* Dẫn nhập tự sự liền mạch */}
        <section className="max-w-3xl space-y-3 border-b border-stone-800/60 pb-8">
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
            {selectedPlay.coreOverview}
          </p>
        </section>

        {/* 3 Hồi kịch diễn tiến — Bố cục chữ thoáng đãng, KHÔNG đóng khung hộp xám */}
        <section className="space-y-10 max-w-3xl">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Diễn Tiến Ba Hồi Kịch
          </h2>

          <div className="space-y-8">
            {selectedPlay.acts.map((act) => (
              <div key={act.actNum} className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg sm:text-xl font-bold text-amber-500 shrink-0">
                    {act.actNum}.
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                    {act.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed pl-7 sm:pl-8">
                  {act.synopsis}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trích đoạn câu ca đắt giá — Thiết kế thoáng, không hộp xám */}
        <section className="py-8 border-y border-stone-800/60 my-8 max-w-2xl space-y-2">
          <p className="font-serif italic text-lg sm:text-xl text-amber-200/95 leading-relaxed whitespace-pre-line">
            {selectedPlay.iconicVerse.lines}
          </p>
          <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block pt-1">
            {selectedPlay.iconicVerse.scene}
          </span>
        </section>

        {/* Tuyến nhân vật trung tâm — Typography thuần túy, không thẻ card */}
        <section className="space-y-4 pt-4 border-t border-stone-800/60 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Hình Tượng Nhân Vật
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-xs sm:text-sm font-serif">
            {selectedPlay.characters.map((c) => (
              <div key={c.name} className="space-y-1">
                <span className="font-bold text-white block">{c.name}</span>
                <span className="text-stone-400 font-light block leading-relaxed">{c.archetype}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Nhận định học thuật — Chữ ký ngắn gọn */}
        <section className="pt-6 pb-6 border-t border-stone-800/60 max-w-2xl space-y-1.5">
          <p className="font-serif italic text-sm text-stone-400 leading-relaxed">
            &ldquo;{selectedPlay.scholarlyReview}&rdquo;
          </p>
          <span className="text-xs font-mono text-amber-500/80 block">
            — {selectedPlay.reviewer}
          </span>
        </section>
      </div>
    )
  }

  // =========================================================================
  // GIAO DIỆN DANH SÁCH 4 KIỆT TÁC — EDITORIAL SHOWCASE (NO EMPTY TITLE-DESC CARDS)
  // =========================================================================
  return (
    <div className="space-y-12 sm:space-y-16 text-left animate-in fade-in duration-300">
      {/* Mở đầu */}
      <section className="max-w-3xl space-y-3 border-b border-stone-800/60 pb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
          Tứ Đại Kiệt Tác Sân Khấu Chèo
        </h1>
        <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
          Bốn pho kịch bản mẫu mực quy định niêm luật về ngôn ngữ hát nói, vũ đạo ước lệ và triết lý nhân sinh của nghệ thuật kịch hát dân gian Việt Nam suốt nhiều thế kỷ.
        </p>
      </section>

      {/* Danh sách tác phẩm — Mỗi tác phẩm là một section mở, có tuyến nhân vật & link */}
      <div className="space-y-16 sm:space-y-24">
        {MASTERPIECES.map((play, idx) => {
          const isEven = idx % 2 === 0
          return (
            <article
              key={play.id}
              className="border-b border-stone-800/60 pb-16 sm:pb-24 last:border-b-0 last:pb-0"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Poster */}
                <div
                  className={`relative ${
                    isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'
                  }`}
                >
                  <div
                    onClick={() => handleSelect(play)}
                    className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[16/10] bg-stone-900 shadow-2xl"
                  >
                    <img
                      src={play.image}
                      alt={play.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 text-3xl sm:text-4xl font-mono font-black text-white/20 select-none">
                      0{idx + 1}
                    </div>
                  </div>
                </div>

                {/* Nội dung giàu chiều sâu văn hóa */}
                <div
                  className={`space-y-4 ${
                    isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
                      {play.epoch}
                    </span>
                    <h2
                      onClick={() => handleSelect(play)}
                      className="text-2xl sm:text-3xl font-serif font-bold text-white hover:text-amber-300 transition-colors tracking-tight leading-snug cursor-pointer"
                    >
                      {play.title}
                    </h2>
                  </div>

                  {/* Đề từ triết lý ngắn gọn */}
                  <p className="text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
                    {play.tagline}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
