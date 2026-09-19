import React from 'react'
import { Scale, Smile, Users } from 'lucide-react'

interface ValuePillar {
  icon: React.ReactNode
  title: string
  body: string
}

const VALUE_PILLARS: ValuePillar[] = [
  {
    icon: <Scale className="w-6 h-6 text-amber-400" />,
    title: 'Công Lý & Nhân Quả',
    body: 'Mỗi tích Chèo đều dẫn đến một phán quyết đạo đức rõ ràng: thiện thắng ác, oan được giải, kẻ tham lam chuốc lấy báo oán. Triết lý nhân quả không phải giáo điều — mà là hơi thở của tích truyện.'
  },
  {
    icon: <Smile className="w-6 h-6 text-amber-400" />,
    title: 'Tiếng Cười Trào Lộng',
    body: 'Hề Chèo được phép nói những điều mà người khác không dám nói. Tiếng cười sân đình là hình thức phản biện xã hội tinh tế nhất — châm biếm mà không gây thù, đả kích mà vẫn vui vẻ.'
  },
  {
    icon: <Users className="w-6 h-6 text-amber-400" />,
    title: 'Cố Kết Cộng Đồng',
    body: 'Chiếu chèo là nơi cả làng ngồi lại — không phân biệt già trẻ, giàu nghèo. Hội làng mùa xuân dệt nên sợi dây gắn kết vô hình nhưng bền chặt hơn bất kỳ hợp đồng pháp lý nào.'
  }
]

interface StorySectionOdd {
  kind: 'narrative'
  chapter: string
  heading: string
  body: string
}

interface StorySectionEven {
  kind: 'pullquote'
  quote: string
}

type StorySection = StorySectionOdd | StorySectionEven

const STORY_SECTIONS: StorySection[] = [
  {
    kind: 'narrative',
    chapter: '01',
    heading: 'Hề Chèo — Vũ Khí Của Kẻ Yếu',
    body: 'Hề Chèo là nhân vật duy nhất được phép phá vỡ quy tắc, nói thẳng với khán giả, châm biếm quan lại ngay giữa sân đình. Không có tự do ngôn luận — nhưng có Hề Chèo. Tiếng cười không chỉ giải trí mà còn là liều thuốc thanh tẩy tâm hồn, là lời phán xét của dân gian trước bất công.'
  },
  {
    kind: 'pullquote',
    quote: '"Ở hiền gặp lành, ở ác gặp ác" — Câu khẩu hiệu đạo đức dân gian thâm thúy nhất, được Chèo truyền tải không bằng giáo điều mà bằng cảm xúc sống động.'
  },
  {
    kind: 'narrative',
    chapter: '03',
    heading: 'Xúy Vân & Những Người Bị Lịch Sử Bỏ Quên',
    body: 'Xúy Vân chọn cái điên như một cuộc đào thoát duy nhất có thể. Thị Mầu táo bạo yêu mà không xin phép ai. Chèo luôn dành sân khấu cho những số phận mà xã hội phong kiến muốn bịt miệng — và để họ nói, múa, hát trước hàng nghìn người.'
  },
  {
    kind: 'pullquote',
    quote: '"Chiếu chèo không có tường — khán giả ngồi quanh ba phía, nghệ sĩ diễn giữa họ. Đó là dân chủ văn hóa trước khi có khái niệm dân chủ."'
  }
]

const STATS = [
  { value: '1000+', label: 'năm lịch sử' },
  { value: '200+', label: 'làn điệu' },
  { value: '5', label: 'mẫu nhân vật' }
]

export const CulturalValuesWidget: React.FC = () => {
  return (
    <div className="text-left space-y-20 animate-in fade-in duration-300">

      {/* ── HERO QUOTE ── */}
      <section className="relative py-10">
        <span className="absolute -top-4 left-0 font-serif text-[8rem] leading-none text-amber-500/20 select-none">"</span>
        <blockquote className="relative border-l-4 border-amber-500 pl-8 sm:pl-12 max-w-3xl">
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-stone-100 leading-snug tracking-tight">
            Chèo là tấm gương dân gian — phản chiếu ước mơ, nỗi đau và tiếng cười của người Bắc Bộ suốt mười thế kỷ.
          </p>
        </blockquote>
      </section>

      {/* ── 3 VALUE PILLARS ── */}
      <section className="space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
          Ba Trụ Cột Giá Trị
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PILLARS.map((pillar) => (
            <div key={pillar.title} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-800/30">
                  {pillar.icon}
                </div>
                <h3 className="font-serif font-bold text-white text-base sm:text-lg leading-tight">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY SECTIONS ── */}
      <section className="space-y-0 border-t border-stone-800/50">
        {STORY_SECTIONS.map((sec, idx) => {
          if (sec.kind === 'narrative') {
            return (
              <div
                key={idx}
                className="grid grid-cols-[64px_1fr] sm:grid-cols-[96px_1fr] gap-4 sm:gap-8 py-12 border-b border-stone-800/40"
              >
                <div className="pt-1">
                  <span className="font-serif font-black text-7xl sm:text-8xl leading-none text-stone-800 select-none">
                    {sec.chapter}
                  </span>
                </div>
                <div className="space-y-3 pt-2">
                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-amber-200 leading-snug">
                    {sec.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              </div>
            )
          }
          return (
            <div
              key={idx}
              className="py-12 border-b border-stone-800/40 flex gap-4 sm:gap-6 items-start"
            >
              <span className="font-serif text-5xl sm:text-6xl text-amber-500/60 leading-none select-none shrink-0 -mt-2">
                "
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-stone-300 leading-relaxed">
                {sec.quote}
              </p>
            </div>
          )
        })}
      </section>

      {/* ── STATS ROW ── */}
      <section className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 border-t border-stone-800/60">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center space-y-1">
            <div className="font-serif font-black text-3xl sm:text-5xl text-amber-400 leading-none">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-mono text-stone-500 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}
