import React, { useState } from 'react'
import { Star, Send, CheckCircle2, ThumbsUp } from 'lucide-react'

export const FeedbackWidget: React.FC = () => {
  const [rating, setRating] = useState<number>(5)
  const [hoverRating, setHoverRating] = useState<number>(0)
  const [category, setCategory] = useState<string>('giao-dien')
  const [comment, setComment] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) {
      alert('Vui lòng nhập vài lời chia sẻ hoặc ý kiến đóng góp của bạn!')
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-md">
      <div className="mb-6 pb-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Hòm Thư Khảo Sát & Góp Ý Hoàn Thiện</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
              Đồng Sáng Tạo
            </span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Đóng góp của bạn là động lực giúp Bảo tàng Chèo Số cải tiến giao diện và làm giàu kho dữ liệu
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 font-medium">
          <ThumbsUp className="w-4 h-4" />
          <span>Hơn 1,420 lượt đánh giá tích cực</span>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 text-left">
          {/* Rating Stars */}
          <div className="text-center p-4 rounded-2xl bg-black/30 border border-white/5">
            <span className="text-xs font-semibold text-slate-300 block mb-2">
              Bạn đánh giá thế nào về trải nghiệm tại Bảo tàng Chèo Số?
            </span>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform hover:scale-125 cursor-pointer"
                >
                  <Star
                    className={`w-8 h-8 ${
                      (hoverRating || rating) >= star
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-600'
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="text-xs font-bold text-amber-300 mt-2 block">
              {rating === 5 && 'Tuyệt vời & Rất hữu ích (5/5)'}
              {rating === 4 && 'Rất tốt (4/5)'}
              {rating === 3 && 'Bình thường (3/5)'}
              {rating <= 2 && 'Cần cải thiện thêm'}
            </span>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              Chủ đề bạn muốn góp ý:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'giao-dien', label: 'Giao diện & 3D' },
                { id: 'tu-lieu', label: 'Độ chính xác tư liệu' },
                { id: 'am-thanh', label: 'Chất lượng âm thanh' },
                { id: 'tinh-nang', label: 'Đề xuất tính năng mới' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`p-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                    category === cat.id
                      ? 'bg-amber-400 text-slate-950 font-bold border-amber-400 shadow-md'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              Ý kiến hoặc cảm nghĩ chi tiết của bạn:
            </label>
            <textarea
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Chia sẻ cảm xúc của bạn khi nghe các làn điệu Chèo hoặc gợi ý thêm những vở diễn bạn yêu thích..."
              className="w-full p-3.5 text-xs sm:text-sm rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Gửi Đóng Góp Đến Ban Quản Trị</span>
          </button>
        </form>
      ) : (
        <div className="p-8 text-center max-w-lg mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-3xl animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
          <h4 className="text-xl font-bold text-emerald-300 mb-2">
            Cảm Ơn Đóng Góp Quý Báu Của Bạn!
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed mb-6">
            Ý kiến của bạn đã được ghi nhận vào hệ thống cải tiến của Bảo tàng Chèo Số. Chúng tôi sẽ tiếp tục nỗ lực vì sự trường tồn của nghệ thuật truyền thống.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setComment('')
            }}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white font-semibold transition-colors"
          >
            Gửi thêm đánh giá khác
          </button>
        </div>
      )}
    </div>
  )
}
