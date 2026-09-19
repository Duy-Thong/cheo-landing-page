import React from 'react'
import { Wind, Eye, Sparkles, Wrench } from 'lucide-react'

interface Pillar {
  num: string
  viKey: string
  label: string
  sub: string
  icon: React.ReactNode
}

const PILLARS: Pillar[] = [
  { num: '01', viKey: 'THANH', label: 'Voice', sub: 'Giọng hát tinh xảo', icon: <Wind className="w-5 h-5 text-amber-400/70" /> },
  { num: '02', viKey: 'SẮC', label: 'Presence', sub: 'Thần thái sân khấu', icon: <Eye className="w-5 h-5 text-amber-400/70" /> },
  { num: '03', viKey: 'TINH', label: 'Depth', sub: 'Chiều sâu nội tâm', icon: <Sparkles className="w-5 h-5 text-amber-400/70" /> },
  { num: '04', viKey: 'NGHỆ', label: 'Craft', sub: 'Kỹ nghệ rèn luyện', icon: <Wrench className="w-5 h-5 text-amber-400/70" /> }
]

interface TimelineEvent {
  time: string
  title: string
  desc: string
}

const TIMELINE: TimelineEvent[] = [
  { time: '14:00', title: 'Lễ Xin Phép Tổ', desc: 'Thắp hương bái Tổ nghề, xin phép được bước lên chiếu diễn trong đêm.' },
  { time: '15:00', title: 'Mặc Trang Phục', desc: 'Nghệ sĩ mặc phục trang theo vai diễn, từng lớp áo như lớp nhân vật dần hiện hình.' },
  { time: '16:30', title: 'Vẽ Mặt Hóa Trang', desc: 'Khoảng một tiếng ngồi trước gương — bút lông điểm từng nét màu biểu cảm lên khuôn mặt.' },
  { time: '17:30', title: 'Khởi Động Giọng & Vũ Đạo', desc: 'Luyện thanh, thả lỏng cơ thể và tập lại các động tác múa quan trọng cùng đồng nghiệp.' },
  { time: '19:00', title: 'Trống Khai — Màn Mở Chiếu', desc: 'Tiếng trống đế ba hồi vang lên — ánh đèn bừng sáng, màn chiếu bắt đầu.' },
  { time: '22:00', title: 'Lễ Tạ Tổ Sau Diễn', desc: 'Hoàn thành vai diễn, nghệ sĩ cùng đoàn thắp nén hương tạ ơn Tổ nghề.' }
]

interface MakeupColor {
  color: string
  label: string
  meaning: string
}

const MAKEUP_COLORS: MakeupColor[] = [
  { color: '#c0392b', label: 'Đỏ', meaning: 'Trung thành, dũng cảm' },
  { color: '#ecf0f1', label: 'Trắng', meaning: 'Xảo quyệt, gian hiểm' },
  { color: '#2c3e50', label: 'Đen', meaning: 'Hung hãn, thô bạo' },
  { color: '#7f8c8d', label: 'Xanh/Xám', meaning: 'U ám, đau buồn' }
]

const FAN_MEANINGS = [
  { sign: '🪞', meaning: 'Gương soi' },
  { sign: '💌', meaning: 'Phong thư tình' },
  { sign: '🚣', meaning: 'Mái chèo' },
  { sign: '⚔️', meaning: 'Vũ khí' },
  { sign: '😊', meaning: 'Che mặt e ấp' }
]

const FAN_LANGUAGE = [
  { gesture: 'Quạt mở', meaning: 'Vui vẻ, hân hoan' },
  { gesture: 'Che mặt', meaning: 'Xấu hổ, e ấp' },
  { gesture: 'Hất ngược', meaning: 'Tức giận, phẫn nộ' },
  { gesture: 'Trên đầu', meaning: 'Ra đi, chia ly' }
]

export const BackstageArtWidget: React.FC = () => {
  return (
    <div className="text-left space-y-20 animate-in fade-in duration-300">

      {/* ── 4 PILLARS STRIP ── */}
      <section className="space-y-5">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
          Nhất Thanh Nhị Sắc Tam Tinh Tứ Nghệ
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-800/60">
          {PILLARS.map((p) => (
            <div key={p.num} className="px-4 sm:px-6 py-6 space-y-2 first:pl-0">
              <div className="flex items-center gap-2 mb-3">
                {p.icon}
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">{p.label}</span>
              </div>
              <div className="font-mono text-2xl sm:text-3xl text-amber-500 font-bold leading-none">
                {p.num}
              </div>
              <div className="font-serif font-black text-2xl sm:text-3xl text-white leading-none">
                {p.viKey}
              </div>
              <div className="text-xs text-stone-400 font-light pt-1">
                {p.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            Hậu Trường
          </span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-white leading-snug">
            Một Ngày Trước Đêm Diễn
          </h2>
        </div>
        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-[5.5rem] sm:left-24 top-3 bottom-3 w-px bg-stone-800/70" />
          {TIMELINE.map((ev, idx) => (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-6 py-5">
              {/* Time badge */}
              <div className="shrink-0 w-20 sm:w-24 text-right">
                <span className="inline-block text-xs font-mono text-stone-500 bg-stone-900 border border-stone-800 px-2 py-1 rounded">
                  {ev.time}
                </span>
              </div>
              {/* Amber dot */}
              <div className="relative z-10 shrink-0 mt-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-amber-900/40" />
              </div>
              {/* Content */}
              <div className="space-y-1 min-w-0 pb-1">
                <h3 className="font-serif font-bold text-white text-sm sm:text-base leading-snug">
                  {ev.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  {ev.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3 CLOSE-UP PANELS ── */}
      <section className="space-y-8">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
          Cận Cảnh Nghề
        </span>

        {/* Panel 1 — Makeup Colors */}
        <div className="border-l-2 border-amber-600/50 pl-6 space-y-4">
          <h3 className="font-serif font-bold text-white text-lg sm:text-xl">
            Hóa Trang Mặt — Ngôn Ngữ Màu Sắc
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Màu sắc trên khuôn mặt nhân vật Chèo không phải trang điểm — đó là ký hiệu nhân cách được mã hóa.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MAKEUP_COLORS.map((mc) => (
              <div key={mc.label} className="flex items-center gap-3 bg-stone-900/40 rounded-lg px-3 py-2.5">
                <div
                  className="w-4 h-4 rounded-full shrink-0 border border-stone-700/60"
                  style={{ backgroundColor: mc.color }}
                />
                <div>
                  <div className="text-xs font-mono font-bold text-stone-200">{mc.label}</div>
                  <div className="text-[11px] text-stone-500 leading-tight">{mc.meaning}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 2 — Fan Meanings */}
        <div className="border-l-2 border-amber-600/50 pl-6 space-y-4">
          <h3 className="font-serif font-bold text-white text-lg sm:text-xl">
            Chiếc Quạt Mo — Đạo Cụ Vạn Năng
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Một chiếc quạt mo đơn giản, nhưng trong tay nghệ sĩ Chèo, nó biến thành vô số vật khác nhau tuỳ theo kịch tính.
          </p>
          <div className="flex flex-wrap gap-2">
            {FAN_MEANINGS.map((fm) => (
              <span
                key={fm.meaning}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-950/50 text-amber-200 border border-amber-800/40"
              >
                <span>{fm.sign}</span>
                <span>{fm.meaning}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Panel 3 — Fan Language */}
        <div className="border-l-2 border-amber-600/50 pl-6 space-y-4">
          <h3 className="font-serif font-bold text-white text-lg sm:text-xl">
            Múa Quạt — Ngôn Ngữ Không Lời
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Mỗi động tác quạt mang một ý nghĩa biểu cảm riêng, người xem thành thạo có thể "đọc" tâm trạng nhân vật qua từng cử chỉ.
          </p>
          <div className="space-y-0 rounded-xl overflow-hidden border border-stone-800/60">
            {FAN_LANGUAGE.map((fl, idx) => (
              <div
                key={fl.gesture}
                className={`flex items-center gap-4 px-4 py-3 text-sm ${
                  idx % 2 === 0 ? 'bg-stone-900/30' : 'bg-stone-900/10'
                }`}
              >
                <span className="font-mono text-amber-400 font-semibold w-28 sm:w-32 shrink-0 text-xs sm:text-sm">
                  {fl.gesture}
                </span>
                <span className="w-px h-4 bg-stone-700/60 shrink-0" />
                <span className="text-stone-300 font-light text-xs sm:text-sm">{fl.meaning}</span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}
