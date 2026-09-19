import React, { useState } from 'react'
import { Ticket, MapPin, Check, QrCode } from 'lucide-react'

interface ShowOption {
  id: string
  title: string
  theater: string
  date: string
  time: string
  price: number
}

const AVAILABLE_SHOWS: ShowOption[] = [
  {
    id: 'show-1',
    title: 'Kiệt tác Chèo: Quan Âm Thị Kính',
    theater: 'Nhà hát Chèo Việt Nam - 71 Kim Mã, Hà Nội',
    date: 'Thứ Bảy, 25/10/2026',
    time: '20:00 - 22:15',
    price: 150000
  },
  {
    id: 'show-2',
    title: 'Trích đoạn kinh điển: Xúy Vân Giả Dại & Tuần Ty Đào Huế',
    theater: 'Rạp Đại Nam - 89 Phố Huế, Hà Nội',
    date: 'Chủ Nhật, 26/10/2026',
    time: '19:30 - 21:30',
    price: 120000
  },
  {
    id: 'show-3',
    title: 'Đêm Chèo Cổ Sân Đình: Tiếng Trống Hội Làng',
    theater: 'Sân đình làng chèo cổ Bắc Bộ (Không gian ngoài trời)',
    date: 'Thứ Sáu, 31/10/2026',
    time: '19:00 - 21:30',
    price: 100000
  }
]

export const TicketBookingWidget: React.FC = () => {
  const [selectedShow, setSelectedShow] = useState<ShowOption>(AVAILABLE_SHOWS[0])
  const [selectedSeats, setSelectedSeats] = useState<string[]>(['B4', 'B5'])
  const [isBooked, setIsBooked] = useState<boolean>(false)
  const [customerName, setCustomerName] = useState<string>('Nguyễn Văn An')
  const [customerPhone, setCustomerPhone] = useState<string>('0912 345 678')

  const rows = ['A', 'B', 'C', 'D']
  const seatsPerRow = 8

  const toggleSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId))
    } else {
      setSelectedSeats([...selectedSeats, seatId])
    }
    setIsBooked(false)
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSeats.length === 0) {
      alert('Vui lòng chọn ít nhất 1 ghế ngồi!')
      return
    }
    setIsBooked(true)
  }

  const totalPrice = selectedSeats.length * selectedShow.price

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-md">
      <div className="mb-6 pb-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Cổng Đặt Mua Vé Trực Tuyến & Giữ Chỗ</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Trực Tuyến 24/7
            </span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Chọn vở diễn, chọn ghế ngồi trực quan và nhận vé điện tử kèm mã QR quét tại cửa rạp
          </p>
        </div>

        <div className="text-xs text-slate-400 flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
          <Ticket className="w-4 h-4 text-emerald-400" />
          <span>Hỗ trợ vé học sinh/sinh viên (-50%)</span>
        </div>
      </div>

      {/* Select Show */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {AVAILABLE_SHOWS.map((show) => (
          <div
            key={show.id}
            onClick={() => {
              setSelectedShow(show)
              setIsBooked(false)
            }}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
              selectedShow.id === show.id
                ? 'bg-amber-400/15 border-amber-400 shadow-lg shadow-amber-400/10'
                : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
            }`}
          >
            <div>
              <span className="text-[11px] font-semibold text-amber-300 block mb-1">
                {show.date} &bull; {show.time}
              </span>
              <h4 className="text-sm font-bold text-white mb-2 line-clamp-2">
                {show.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 shrink-0" />
                {show.theater}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-400">Giá vé:</span>
              <span className="text-sm font-bold text-emerald-400">
                {show.price.toLocaleString('vi-VN')} đ
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Seat Map & Booking summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Theater Stage & Seats (col-span-7) */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center">
          {/* Stage Banner */}
          <div className="w-full max-w-sm py-2 px-4 rounded-xl bg-gradient-to-r from-red-600/30 via-amber-500/30 to-red-600/30 border border-amber-500/40 text-center text-xs font-bold text-amber-300 uppercase tracking-widest mb-8 shadow-lg shadow-amber-500/10">
            SÂN KHẤU CHÈO TRUNG TÂM
          </div>

          {/* Seat Grid */}
          <div className="space-y-3 w-full max-w-sm mb-6">
            {rows.map((row) => (
              <div key={row} className="flex items-center justify-center gap-2">
                <span className="w-5 text-xs font-bold text-slate-500 text-center">
                  {row}
                </span>
                <div className="flex gap-2">
                  {Array.from({ length: seatsPerRow }).map((_, idx) => {
                    const seatId = `${row}${idx + 1}`
                    const isSelected = selectedSeats.includes(seatId)
                    const isOccupied = row === 'A' && (idx === 3 || idx === 4) // mock occupied

                    return (
                      <button
                        key={seatId}
                        disabled={isOccupied}
                        onClick={() => toggleSeat(seatId)}
                        title={`Ghế ${seatId} ${isOccupied ? '(Đã có người đặt)' : ''}`}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                          isOccupied
                            ? 'bg-slate-800 text-slate-600 border border-white/5 cursor-not-allowed'
                            : isSelected
                            ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30 scale-105'
                            : 'bg-white/10 text-slate-300 border border-white/10 hover:bg-white/20'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Seat Legend */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-white/10 border border-white/10" />
              <span>Ghế trống</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-emerald-500" />
              <span>Đang chọn</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-800" />
              <span>Đã đặt</span>
            </div>
          </div>
        </div>

        {/* Right: Order Summary & QR Confirmation (col-span-5) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 text-left">
          <h4 className="text-base font-bold text-white mb-4 pb-2 border-b border-white/10">
            Thông Tin Đặt Chỗ
          </h4>

          <div className="space-y-3 text-xs mb-6">
            <div className="flex justify-between">
              <span className="text-slate-400">Vở diễn:</span>
              <strong className="text-white text-right max-w-[200px] line-clamp-1">
                {selectedShow.title}
              </strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Thời gian:</span>
              <span className="text-amber-300 font-medium">{selectedShow.date} ({selectedShow.time})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Địa điểm:</span>
              <span className="text-slate-300 text-right max-w-[200px] line-clamp-1">{selectedShow.theater}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Ghế đã chọn ({selectedSeats.length}):</span>
              <span className="text-emerald-400 font-bold">
                {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Chưa chọn'}
              </span>
            </div>
            <div className="flex justify-between text-sm pt-3 border-t border-white/10">
              <span className="font-semibold text-slate-200">Tổng thanh toán:</span>
              <span className="font-extrabold text-emerald-400 text-base">
                {totalPrice.toLocaleString('vi-VN')} đ
              </span>
            </div>
          </div>

          {!isBooked ? (
            <form onSubmit={handleBooking} className="space-y-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Họ và tên người nhận vé:</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Số điện thoại nhận mã QR:</label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all cursor-pointer mt-2"
              >
                Xác Nhận Đặt Ghế & Nhận Vé QR
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in duration-300">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <Check className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-emerald-300 text-sm mb-1">
                Đặt Vé Thành Công!
              </h5>
              <p className="text-xs text-slate-300 mb-4">
                Mã vé điện tử đã được gửi tới SĐT <strong>{customerPhone}</strong>
              </p>

              <div className="p-3 bg-white rounded-xl text-slate-950 inline-block shadow-lg mb-3">
                <QrCode className="w-24 h-24 mx-auto" />
                <span className="text-[10px] font-mono block mt-1 font-bold">CHEO-TICKET-2026-X8</span>
              </div>

              <button
                onClick={() => setIsBooked(false)}
                className="text-xs text-slate-400 hover:text-white underline block mx-auto"
              >
                Đặt thêm vé khác
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
