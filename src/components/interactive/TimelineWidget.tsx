import React, { useState } from "react"

interface Era {
  period: string
  years: string
  dynasty: string
  title: string
  figure: string
  description: string
  detail: string
  milestones: string[]
  accent: "amber" | "red" | "emerald" | "sky"
}

const TIMELINE: Era[] = [
  {
    period: "TK X",
    years: "968 — 980",
    dynasty: "Triều Đinh — Tiền Lê",
    title: "Bà Tổ Phạm Thị Trân & Khởi Nguyên Chèo",
    figure: "Ưu Bà Phạm Thị Trân — người đặt nền móng",
    description:
      "Vua Đinh Tiên Hoàng phong bà Phạm Thị Trân (người Hải Dương) chức Ưu Bà để dạy cung nữ, binh sĩ ca múa, đánh trống cổ vũ sĩ khí trong quân doanh Hoa Lư.",
    detail:
      "Tiếng trống quân doanh Hoa Lư được coi là khởi thuỷ của nhịp trống Chèo. Bà Phạm Thị Trân không chỉ đặt nền móng cho một nghệ thuật — bà định hình một ngôn ngữ văn hóa mà suốt 10 thế kỷ sau người Bắc Bộ vẫn nhận ra là của mình.",
    milestones: [
      "Khởi thủy lối hát nói và nhịp trống quân",
      "Hình thức diễn xướng phục vụ quân đội và triều đình",
      "Định hình vị trí trống đế — nhạc trưởng chiếu chèo",
    ],
    accent: "amber",
  },
  {
    period: "TK XI–XIV",
    years: "1010 — 1400",
    dynasty: "Triều Lý — Trần",
    title: "Chèo Xuống Sân Đình — Dân Gian Hóa",
    figure: "Nghệ nhân dân gian châu thổ sông Hồng",
    description:
      "Chèo rời chốn cung đình, bén rễ sâu vào các làng quê. Từ chiếu chèo hội xuân mừng mùa màng đến các tích tuồng nhuốm màu nhân sinh dân dã.",
    detail:
      "Đây là giai đoạn Chèo thực sự trở thành \"của dân\": không còn phục vụ vua chúa mà diễn giữa sân đình cho toàn làng xem miễn phí, không phân biệt giàu nghèo. Không gian chiếu tròn ba phía khán giả xóa bỏ mọi rào cản giữa nghệ sĩ và người xem.",
    milestones: [
      "Hình thành chiếu chèo sân đình — không gian ba phía",
      "Giao thoa với diễn xướng dân gian: hát quan họ, xẩm, ca dao",
      "Hoàn thiện cấu trúc tích trò kể chuyện dân gian",
    ],
    accent: "emerald",
  },
  {
    period: "TK XV–XIX",
    years: "1427 — 1883",
    dynasty: "Hậu Lê — Nguyễn",
    title: "Đỉnh Cao Nghệ Thuật — Tứ Đại Kiệt Tác Ra Đời",
    figure: "Các gánh Chèo cổ làng Khuốc, Yên Khánh, Nam Trực",
    description:
      "Thời kỳ hoàng kim với sự ra đời của những kiệt tác sân khấu bất hủ: Quan Âm Thị Kính, Lưu Bình Dương Lễ, Kim Nhan, Trương Viên — phản ánh sâu sắc số phận con người và khát vọng công bằng.",
    detail:
      "Hệ thống 5 mẫu nhân vật ước lệ (Đào — Kép — Hề — Lão — Mụ) được hoàn thiện và thống nhất toàn vùng Bắc Bộ. Hơn 200 làn điệu được quy chuẩn hóa, truyền miệng qua nhiều thế hệ. Đây cũng là thời kỳ tiếng cười Hề Chèo được nâng lên thành nghệ thuật đả kích quyền quý tinh tế nhất.",
    milestones: [
      "Quan Âm Thị Kính — kiệt tác bi kịch về đức nhẫn nại",
      "Hoàn thiện 5 mẫu nhân vật ước lệ: Đào, Kép, Hề, Lão, Mụ",
      "Quy chuẩn hơn 200 làn điệu Chèo cổ truyền",
      "Hình thành dàn Bát âm — ban nhạc chuẩn mực chiếu chèo",
    ],
    accent: "red",
  },
  {
    period: "TK XX",
    years: "1900 — 1975",
    dynasty: "Thời Pháp thuộc — Kháng chiến",
    title: "Bước Ngoặt 1951 — Lên Sân Khấu Chuyên Nghiệp",
    figure: "Cụ Cả Tam · NSND Dịu Hương · NSND Tào Mạt",
    description:
      "Năm 1951, giữa chiến khu Việt Bắc, Đoàn Chèo Cổ truyền Việt Nam được thành lập — dấu mốc đưa Chèo từ sân đình lên nhà hát chuyên nghiệp có kịch bản thành văn và hệ thống âm thanh ánh sáng.",
    detail:
      "NSND Tào Mạt viết bộ ba sử thi \"Bài ca giữ nước\" (1973–1983), nâng hình tượng Hề Chèo từ vai hài mua vui thành biểu tượng lương tâm thời đại. Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật 1996 ghi nhận công lao tạo dựng một nền kịch hát dân tộc hoàn chỉnh.",
    milestones: [
      "Thành lập Đoàn Chèo Cổ truyền Việt Nam tại Việt Bắc (1951)",
      "Chuẩn hóa kịch bản văn học và ký âm khoa học làn điệu",
      "Bộ ba \"Bài ca giữ nước\" của NSND Tào Mạt (1973–1983)",
      "Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật (1996)",
    ],
    accent: "sky",
  },
  {
    period: "Hiện tại",
    years: "1975 — Nay",
    dynasty: "Đương Đại & Tương Lai",
    title: "Cách Tân & Hành Trình UNESCO",
    figure: "Các nghệ sĩ đương đại · 14 tỉnh châu thổ sông Hồng",
    description:
      "Chèo đương đại vừa bảo tồn nguyên bản vừa không ngừng cách tân: phối hợp dàn nhạc giao hưởng với nhạc cụ dân tộc, lưu diễn quốc tế và chuẩn bị hồ sơ đệ trình UNESCO Di sản Nhân loại.",
    detail:
      "Bảo tàng Chèo Số là một trong những sáng kiến tiên phong số hóa toàn bộ di sản — từ âm thanh đến trang phục, từ làn điệu đến kịch bản chữ Nôm — nhằm truyền lửa cho thế hệ trẻ và giới thiệu Chèo ra thế giới bằng ngôn ngữ của thời đại số.",
    milestones: [
      "Lưu diễn thành công tại Pháp, Đức, Nhật, Hoa Kỳ",
      "14 tỉnh đồng bằng sông Hồng hợp lực làm hồ sơ UNESCO",
      "Số hóa kho tàng 200+ làn điệu, 6 nhạc khí, tứ đại kiệt tác",
      "Bảo tàng Chèo Số ra đời — bảo tồn bằng công nghệ Web3D",
    ],
    accent: "amber",
  },
]

const DOT_COLOR: Record<string, string> = {
  amber: "bg-amber-500 ring-amber-500/30",
  red: "bg-red-500 ring-red-500/30",
  emerald: "bg-emerald-500 ring-emerald-500/30",
  sky: "bg-sky-500 ring-sky-500/30",
}
const TEXT_COLOR: Record<string, string> = {
  amber: "text-amber-400",
  red: "text-red-400",
  emerald: "text-emerald-400",
  sky: "text-sky-400",
}
const BADGE_COLOR: Record<string, string> = {
  amber: "bg-amber-950/60 text-amber-300 border-amber-700/40",
  red: "bg-red-950/60 text-red-300 border-red-900/40",
  emerald: "bg-emerald-950/60 text-emerald-300 border-emerald-900/40",
  sky: "bg-sky-950/60 text-sky-300 border-sky-900/40",
}

export const TimelineWidget: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Central axis */}
      <div className="absolute left-[23px] sm:left-[35px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-600/70 via-stone-700/50 to-stone-800/20" />

      <div className="space-y-0">
        {TIMELINE.map((era, idx) => {
          const isOpen = expanded === idx
          const isLast = idx === TIMELINE.length - 1

          return (
            <div key={idx} className="relative flex gap-8 sm:gap-12 pl-14 sm:pl-20 pb-10">
              {/* Dot */}
              <div
                className={`absolute left-[15px] sm:left-[27px] top-5 w-[18px] h-[18px] rounded-full ring-4 z-10 ${DOT_COLOR[era.accent]}`}
              />

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Period badge */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${BADGE_COLOR[era.accent]}`}>
                    {era.period}
                  </span>
                  <span className="text-xs text-stone-600 font-mono">{era.years}</span>
                </div>

                {/* Dynasty */}
                <div className={`text-[11px] font-mono uppercase tracking-widest mb-1 ${TEXT_COLOR[era.accent]}`}>
                  {era.dynasty}
                </div>

                {/* Title */}
                <h2 className="font-serif font-bold text-lg sm:text-2xl text-white leading-snug mb-2">
                  {era.title}
                </h2>

                {/* Figure */}
                <p className="text-xs text-stone-500 italic mb-3">{era.figure}</p>

                {/* Description */}
                <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed mb-3">
                  {era.description}
                </p>

                {/* Toggle */}
                <button
                  onClick={() => setExpanded(isOpen ? null : idx)}
                  className={`flex items-center gap-1.5 text-xs font-medium mb-3 cursor-pointer transition-opacity hover:opacity-70 ${TEXT_COLOR[era.accent]}`}
                >
                  {isOpen ? "Thu gọn" : "Khám phá giai đoạn này"}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-sm text-stone-400 font-light leading-relaxed border-l-2 border-stone-700 pl-4 italic">
                      {era.detail}
                    </p>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-600 mb-2">Dấu mốc chính</p>
                      <ul className="space-y-1.5">
                        {era.milestones.map((m, mi) => (
                          <li key={mi} className="flex items-start gap-2.5 text-sm text-stone-300 font-light">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${DOT_COLOR[era.accent].split(" ")[0]}`} />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Divider */}
                {!isLast && <div className="mt-6 border-b border-stone-800/40" />}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
