import React from 'react'

interface Pillar {
  roman: string
  title: string
  story: string
  image: string
}

const PILLARS: Pillar[] = [
  {
    roman: 'I',
    title: 'Cứu Lấy Ký Ức Đang Mờ Dần',
    story: 'Lưu giữ nguyên vẹn từng câu hát nảy hạt và ngón nghề cổ truyền trước nguy cơ thất truyền của thời gian.',
    image: '/images/cheo_dinh_lang.jpg'
  },
  {
    roman: 'II',
    title: 'Để Người Trẻ Tự Hào Về Cội Nguồn',
    story: 'Giúp thế hệ hôm nay chạm vào di sản một cách tự nhiên nhất để thấu hiểu và yêu mến nghệ thuật cha ông.',
    image: '/images/cheo_costume.jpg'
  },
  {
    roman: 'III',
    title: 'Kể Câu Chuyện Nghệ Thuật Việt',
    story: 'Đồng hành cùng hồ sơ UNESCO, khẳng định vị thế độc bản của kịch hát dân tộc trong kho tàng văn hóa thế giới.',
    image: '/images/cheo_hero.jpg'
  }
]

export const GoalsWidget: React.FC = () => {
  return (
    <div className="text-left space-y-16 sm:space-y-20 animate-in fade-in duration-300">
      {/* ================= 1. BÀI LUẬN TUYÊN NGÔN VĂN HÓA ================= */}
      <section className="max-w-3xl space-y-5 border-b border-stone-800/60 pb-10">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
          Vì Sao Chiếu Chèo Cần Một Không Gian Số?
        </h1>
        <div className="space-y-4 text-sm sm:text-base text-stone-300 font-serif font-light leading-relaxed">
          <p>
            Chèo sinh ra từ đất phù sa và tiếng trống hội làng. Nhưng giữa nhịp sống hiện đại, một di sản ngàn năm chỉ có thể sống mãi khi nó được tiếp thêm hơi thở của thời đại mới và tìm được chỗ đứng trong trái tim thế hệ trẻ.
          </p>
          <p className="text-stone-400">
            Dự án này được dựng nên không phải từ những toan tính thương mại, mà xuất phát từ một tâm nguyện chân thành: làm sao để tiếng hát của cha ông không rơi vào quên lãng giữa dòng chảy số hóa vội vã.
          </p>
        </div>
      </section>

      {/* ================= 2. BA TRỤ CỘT TẦM NHÌN (EDITORIAL TRIPTYCH) ================= */}
      <section className="space-y-8">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
          Ba Tâm Nguyện Cốt Lõi
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PILLARS.map((p) => (
            <div key={p.roman} className="space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                {/* Ảnh khổ dọc nghệ thuật */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 shadow-xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 font-serif text-3xl font-bold text-amber-400/90 drop-shadow-md">
                    {p.roman}
                  </div>
                </div>

                {/* Nội dung tự sự */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight leading-snug pt-1">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed">
                  {p.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. ĐIỂM TỰA VĂN HÓA ================= */}
      <section className="pt-8 border-t border-stone-800/60 text-center max-w-2xl mx-auto">
        <p className="font-serif italic text-stone-400 text-sm sm:text-base leading-relaxed">
          “Chẳng thèm ăn chả ăn nem, thèm nghe tiếng trống chèo đem hội làng.”
        </p>
        <span className="text-xs font-mono text-amber-500/80 uppercase tracking-widest mt-2 block">
          Ca dao dân gian Bắc Bộ
        </span>
      </section>
    </div>
  )
}
