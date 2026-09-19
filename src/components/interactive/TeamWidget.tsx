import React from 'react'

interface TeamMember {
  id: string
  name: string
  title: string
  role: string
  bio: string
  contributions: string
  badge: string
}

const ADVISORS: TeamMember[] = [
  {
    id: 'tran-bang',
    name: 'GS.NSND Trần Bảng',
    title: 'Cố vấn Trưởng Khoa học & Sân khấu',
    role: 'Huyền thoại nghiên cứu Chèo học Việt Nam',
    bio: 'Được mệnh danh là "Trùm Chèo" thời hiện đại, người đã dành trọn cả cuộc đời hệ thống hóa lý luận sân khấu Chèo và phục dựng các kiệt tác Quan Âm Thị Kính, Xúy Vân.',
    contributions: 'Định hình cấu trúc khoa học và hệ thống phân tích nhân vật ước lệ cho toàn bộ nền tảng bảo tàng số.',
    badge: 'Cố Vấn Khoa Học'
  },
  {
    id: 'minh-thai',
    name: 'PGS.TS Nguyễn Thị Minh Thái',
    title: 'Chuyên gia Lý luận & Phê bình Sân khấu',
    role: 'Nhà nghiên cứu văn hóa nghệ thuật',
    bio: 'Tiến sĩ nghệ thuật học, nhà phê bình sân khấu uyên bác với hàng trăm công trình khảo cứu về mối giao hòa giữa văn hóa dân gian và sân khấu kịch hát đương đại.',
    contributions: 'Thẩm định tính chính xác của các bài nghiên cứu chuyên sâu và định hướng tiếp cận cho giới trẻ.',
    badge: 'Thẩm Định Văn Hóa'
  },
  {
    id: 'thanh-tram',
    name: 'NSND Thanh Trầm',
    title: 'Nguyên Giám đốc Nhà hát Chèo Việt Nam',
    role: 'Nghệ sĩ biểu diễn bậc thầy',
    bio: 'Nghệ nhân gạo cội có hơn 50 năm gắn bó với ánh đèn sân khấu Chèo, thuộc nằm lòng hàng trăm làn điệu và khẩu quyết vũ đạo cổ truyền.',
    contributions: 'Trực tiếp hướng dẫn thu âm các mẫu điệu hát chuẩn mực và tư vấn phục dựng chuẩn động tác múa quạt.',
    badge: 'Diễn Xướng Mẫu Mực'
  }
]

const MASTERS: TeamMember[] = [
  {
    id: 'nguyen-sinh',
    name: 'NNND Nguyễn Thị Sinh',
    title: 'Nghệ nhân Dân gian Làng Chèo Khuốc',
    role: 'Báu vật sống làng Chèo cổ Thái Bình',
    bio: 'Hơn 70 năm gìn giữ tiếng hát Chèo quê lúa, người nắm giữ kho tàng làn điệu cổ phong phú nhất xứ Đông Bắc.',
    contributions: 'Cung cấp hơn 40 bản thu giọng hát mộc không micro phục vụ số hóa di sản âm thanh nguyên bản.',
    badge: 'Nghệ Nhân Làng Cổ'
  },
  {
    id: 'thuy-mui',
    name: 'NSND Thúy Mùi',
    title: 'Chủ tịch Hội Nghệ sĩ Sân khấu Việt Nam',
    role: 'Người truyền lửa nghệ thuật Chèo',
    bio: 'Gương mặt tiêu biểu của sân khấu Chèo thủ đô với vai diễn kinh điển Mụ Quán, người tiên phong đưa Chèo giao lưu văn hóa quốc tế.',
    contributions: 'Hỗ trợ kết nối tư liệu biểu diễn từ các nhà hát Chèo chuyên nghiệp toàn quốc.',
    badge: 'Truyền Lửa Nghệ Thuật'
  },
  {
    id: 'xuan-hinh',
    name: 'NSƯT Xuân Hinh',
    title: 'Nghệ sĩ Hề Chèo Bậc Thầy',
    role: 'Kẻ lưu giữ tiếng cười trào phúng',
    bio: 'Nghệ sĩ đưa tiếng cười Hề Chèo dân gian đi sâu vào lòng hàng chục triệu khán giả Việt Nam suốt nhiều thập kỷ.',
    contributions: 'Cố vấn chuyên môn về nhịp trống đế và sự biến hóa linh hoạt của nhân vật Hề áo ngắn, Hề gậy.',
    badge: 'Tiếng Cười Sân Đình'
  }
]

export const TeamWidget: React.FC = () => {
  return (
    <div className="text-left space-y-16 animate-in fade-in duration-300">
      {/* ── 1. CINEMA OVERLAY HERO BANNER (100VW FULL VIEWPORT WIDTH & COMPACT HEIGHT) ── */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 sm:-mt-14 overflow-hidden shadow-2xl border-b border-stone-800 bg-stone-950 h-[280px] sm:h-[340px] lg:h-[380px] flex items-end group mb-12 sm:mb-16">
        <img
          src="/images/gioi-thieu/team.jpg"
          alt="Hội đồng di sản và các nghệ nhân Chèo"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/15" />

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1620px] w-full mx-auto px-6 sm:px-10 lg:px-12 pb-8 sm:pb-12 space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-md">
            Những Người Gìn Giữ Ngọn Lửa Chèo
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-serif font-light max-w-3xl leading-relaxed first-letter:text-3xl first-letter:font-bold first-letter:text-amber-400 drop-shadow">
            Nơi hội tụ của những bậc thầy Chèo học uyên bác, các nghệ nhân dân gian cả đời gắn bó với manh chiếu hội làng, cùng thế hệ trẻ tâm huyết ứng dụng công nghệ để bảo tồn hồn cốt dân tộc.
          </p>
        </div>
      </section>

      {/* 1. Hội Đồng Cố Vấn Khoa Học */}
      <section className="space-y-8">
        <div className="border-b border-stone-800/60 pb-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Hội Đồng Cố Vấn
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            Hội Đồng Khoa Học & Phê Bình Sân Khấu
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {ADVISORS.map((m) => (
            <div key={m.id} className="space-y-3">
              <h4 className="text-xl font-serif font-bold text-white">
                {m.name}
              </h4>
              <p className="text-xs text-amber-200/90 font-serif">
                {m.title}
              </p>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {m.bio}
              </p>
              <div className="pt-2 border-t border-stone-800/60">
                <span className="text-[10px] uppercase font-mono text-stone-500 block mb-0.5">Đóng góp cho bảo tàng số:</span>
                <p className="text-xs text-stone-400 font-light leading-relaxed">{m.contributions}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Nghệ Nhân Dân Gian & Truyền Dạy */}
      <section className="space-y-8 pt-8 border-t border-stone-800/60">
        <div className="border-b border-stone-800/60 pb-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Nghệ Nhân Diễn Xướng
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            Nghệ Nhân Dân Gian & Nghệ Sĩ Bậc Thầy
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {MASTERS.map((m) => (
            <div key={m.id} className="space-y-3">
              <h4 className="text-xl font-serif font-bold text-white">
                {m.name}
              </h4>
              <p className="text-xs text-emerald-200/90 font-serif">
                {m.title}
              </p>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {m.bio}
              </p>
              <div className="pt-2 border-t border-stone-800/60">
                <span className="text-[10px] uppercase font-mono text-stone-500 block mb-0.5">Đóng góp cho bảo tàng số:</span>
                <p className="text-xs text-stone-400 font-light leading-relaxed">{m.contributions}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
