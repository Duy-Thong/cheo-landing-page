import React, { useState } from 'react'
import {
  MapPin,
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  Music,
  Users,
  Shield
} from 'lucide-react'

interface Room {
  code: string
  name: string
  path: string
  theme: string
  description: string
  icon: React.ElementType
  image: string
  svgCoords: {
    x: number
    y: number
    width: number
    height: number
    rx?: number
    isCircle?: boolean
    cx?: number
    cy?: number
    r?: number
  }
}

interface Floor {
  id: string
  name: string
  level: string
  theme: string
  description: string
  rooms: Room[]
}

const FLOORS_DATA: Floor[] = [
  {
    id: 'tang-1',
    name: 'Tầng Khởi Nguồn',
    level: 'Tầng 1',
    theme: 'Sảnh Đón Tiếp & Khởi Thảo Di Sản',
    description: 'Không gian sảnh đón tiếp, hành trình điền dã sưu tầm và tôn vinh hội đồng nghệ nhân.',
    rooms: [
      {
        code: 'P.101',
        name: 'Cổng Chào & Sảnh Đón Tiếp',
        path: '/',
        theme: 'Cổng giao lưu văn hóa',
        description: 'Điểm khởi hành hành trình tham quan, định vị kiến trúc và hướng dẫn lộ trình thưởng lãm.',
        icon: Compass,
        image: '/images/cheo_hero.jpg',
        svgCoords: { x: 320, y: 350, width: 260, height: 110, rx: 18 }
      },
      {
        code: 'P.102',
        name: 'Ký Sự Điền Dã Làng Chèo Cổ',
        path: '/gioi-thieu/cau-chuyen-hinh-thanh',
        theme: 'Cội nguồn châu thổ sông Hồng',
        description: 'Tư liệu điền dã sưu tầm từ các nôi Chèo cổ: làng Khuốc (Thái Bình), Yên Khánh (Ninh Bình), Nam Định.',
        icon: MapPin,
        image: '/images/cheo_dinh_lang.jpg',
        svgCoords: { x: 50, y: 140, width: 250, height: 190, rx: 18 }
      },
      {
        code: 'P.103',
        name: 'Không Gian Bảo Tàng Số',
        path: '/gioi-thieu/bao-tang-so-cheo',
        theme: 'Công nghệ phụng sự di sản',
        description: 'Bảo tồn nguyên bản văn hóa Chèo qua công nghệ số hóa đa phương tiện hiện đại.',
        icon: Sparkles,
        image: '/images/cheo_gioi_thieu.jpg',
        svgCoords: { x: 600, y: 140, width: 250, height: 190, rx: 18 }
      },
      {
        code: 'P.104',
        name: 'Hội Đồng Nghệ Nhân & Cố Vấn',
        path: '/gioi-thieu/doi-ngu-nhom-thuc-hien',
        theme: 'Tôn vinh bậc thầy nghệ thuật',
        description: 'Nơi tri ân Nghệ nhân Nhân dân và các nhà nghiên cứu văn hóa dân gian đồng hành.',
        icon: Users,
        image: '/images/artist_hoa_tam.jpg',
        svgCoords: { x: 320, y: 40, width: 260, height: 120, rx: 18 }
      }
    ]
  },
  {
    id: 'tang-2',
    name: 'Đại Sảnh Khám Phá',
    level: 'Tầng 2',
    theme: 'Trọng Tâm Nghệ Thuật & Biểu Diễn Chèo',
    description: 'Trái tim của bảo tàng: trải nghiệm trọn vẹn 10 thế kỷ lịch sử, bước lên chiếu Chèo và giải mã ước lệ sân khấu.',
    rooms: [
      {
        code: 'P.201',
        name: 'Phòng Lịch Sử 10 Thế Kỷ',
        path: '/kham-pha/tong-quan/lich-su-phat-trien',
        theme: 'Ngàn năm thăng trầm',
        description: 'Tái hiện niên biểu Chèo từ bà tổ Phạm Thị Trân (TK 10) đến Chèo sân đình và nhà hát chuyên nghiệp.',
        icon: BookOpen,
        image: '/images/cheo_kham_pha.jpg',
        svgCoords: { x: 40, y: 40, width: 200, height: 110, rx: 16 }
      },
      {
        code: 'P.202',
        name: 'Gian Giá Trị Văn Hóa',
        path: '/kham-pha/tong-quan/gia-tri-van-hoa',
        theme: 'Triết lý nhân văn dân gian',
        description: 'Khám phá các giá trị tinh thần, tư tưởng đạo đức và bản sắc văn hóa đồng bằng Bắc Bộ.',
        icon: Sparkles,
        image: '/images/cheo_hero.jpg',
        svgCoords: { x: 260, y: 40, width: 200, height: 110, rx: 16 }
      },
      {
        code: 'P.203',
        name: 'Phía Sau Sân Khấu & Hậu Trường',
        path: '/kham-pha/tong-quan/phia-sau-san-khau',
        theme: 'Góc nhìn hậu trường nghệ sĩ',
        description: 'Khám phá hậu trường tập luyện, hóa trang và tâm tư thầm lặng của những người nghệ sĩ Chèo.',
        icon: Users,
        image: '/images/test_actor_tonkin.jpg',
        svgCoords: { x: 480, y: 40, width: 200, height: 110, rx: 16 }
      },
      {
        code: 'P.204',
        name: 'Phòng Phục Trang & Hóa Trang',
        path: '/kham-pha/san-khau/trang-phuc',
        theme: 'Sắc màu lụa là Kinh Bắc',
        description: 'Trưng bày áo tứ thân mớ ba mớ bảy, yếm đào, nón quai thao và nghệ thuật vẽ mặt tạo hình.',
        icon: Shield,
        image: '/images/costume_ao_tu_than.jpg',
        svgCoords: { x: 700, y: 40, width: 160, height: 210, rx: 16 }
      },
      {
        code: 'P.205',
        name: 'Chiếu Chèo & 5 Mẫu Nhân Vật',
        path: '/kham-pha/san-khau/nhan-vat',
        theme: 'Quy chuẩn tạo hình ước lệ',
        description: 'Giải mã 5 dạng nhân vật chuẩn mực: Đào, Kép, Hề, Lão và Mụ trong các tích cổ.',
        icon: Users,
        image: '/images/char_dao.jpg',
        svgCoords: { x: 360, y: 280, width: 0, height: 0, isCircle: true, cx: 360, cy: 280, r: 92 }
      },
      {
        code: 'P.206',
        name: 'Thính Phòng Âm Sắc Bát Âm',
        path: '/kham-pha/san-khau/am-thanh',
        theme: 'Linh hồn điệu thức Chèo cổ',
        description: 'Thẩm âm dàn nhạc cụ Bát âm (Trống đế, Trống cơm, Đàn nguyệt, Nhị, Sáo) và các điệu hát kinh điển.',
        icon: Music,
        image: '/images/sound_dan_nhac.jpg',
        svgCoords: { x: 700, y: 270, width: 160, height: 210, rx: 16 }
      },
      {
        code: 'P.207',
        name: 'Gian Kiệt Tác Sân Khấu Cổ',
        path: '/kham-pha/san-khau/tac-pham-tieu-bieu',
        theme: 'Tứ đại danh tác Chèo',
        description: 'Chiều sâu nghệ thuật của 4 vở Chèo cổ bất hủ: Quan Âm Thị Kính, Kim Nhan, Lưu Bình - Dương Lễ, Nghêu Sò Ốc Hến.',
        icon: BookOpen,
        image: '/images/play_quan_am_thi_kinh.jpg',
        svgCoords: { x: 40, y: 350, width: 230, height: 130, rx: 16 }
      },
      {
        code: 'P.208',
        name: 'Gian Chèo Hiện Đại & UNESCO',
        path: '/kham-pha/cheo-hien-dai',
        theme: 'Sức sống thế kỷ 20 - 21',
        description: 'Cột mốc thành lập Đoàn Chèo 1951, thời kỳ kịch Chèo NSND Tào Mạt và tiến trình đệ trình UNESCO.',
        icon: Sparkles,
        image: '/images/play_tienghatdaingan.jpg',
        svgCoords: { x: 290, y: 410, width: 390, height: 75, rx: 16 }
      }
    ]
  },
  {
    id: 'tang-3',
    name: 'Tầng Dịch Vụ & Lưu Trữ',
    level: 'Tầng 3',
    theme: 'Kho Tư Liệu Quý & Trải Nghiệm Khán Giả',
    description: 'Nơi nghiên cứu chuyên sâu đĩa than 78 vòng quý hiếm và hỗ trợ đặt vé xem biểu diễn thực tế.',
    rooms: [
      {
        code: 'P.301',
        name: 'Kho Tư Liệu Đĩa Than & Nôm Cổ',
        path: '/tien-ich/kho-tu-lieu',
        theme: 'Lưu trữ di sản quý hiếm',
        description: 'Bản ghi âm đĩa than 78 vòng thập niên 1950, kịch bản chữ Nôm cổ và tài liệu điền dã.',
        icon: BookOpen,
        image: '/images/play_ganh_hat.jpg',
        svgCoords: { x: 50, y: 90, width: 360, height: 320, rx: 20 }
      },
      {
        code: 'P.302',
        name: 'Cổng Đặt Vé & Lịch Biểu Diễn',
        path: '/tien-ich/tham-quan-va-su-kien/dat-mua-ve',
        theme: 'Kết nối rạp hát thực tế',
        description: 'Tra cứu lịch diễn định kỳ cuối tuần tại các nhà hát Chèo toàn quốc và đặt vé xem thực tế.',
        icon: Sparkles,
        image: '/images/play_truong_vien.jpg',
        svgCoords: { x: 450, y: 90, width: 400, height: 150, rx: 20 }
      },
      {
        code: 'P.303',
        name: 'Cổng Tra Cứu & Đóng Góp Ý Kiến',
        path: '/tien-ich/danh-gia-cai-thien',
        theme: 'Đồng hành cùng công chúng',
        description: 'Bộ lọc tra cứu làn điệu, nhân vật và hòm thư tiếp nhận ý kiến đóng góp từ công chúng.',
        icon: Users,
        image: '/images/artist_diu_huong.jpg',
        svgCoords: { x: 450, y: 260, width: 400, height: 150, rx: 20 }
      }
    ]
  }
]

interface MuseumMapWidgetProps {
  onNavigate?: (path: string) => void
}

export const MuseumMapWidget: React.FC<MuseumMapWidgetProps> = ({ onNavigate }) => {
  const [activeFloorId, setActiveFloorId] = useState<string>('tang-2')

  const activeFloor = FLOORS_DATA.find((f) => f.id === activeFloorId) || FLOORS_DATA[1]
  const [selectedRoomCode, setSelectedRoomCode] = useState<string>(activeFloor.rooms[0].code)

  const selectedRoom =
    activeFloor.rooms.find((r) => r.code === selectedRoomCode) ||
    FLOORS_DATA.flatMap((f) => f.rooms).find((r) => r.code === selectedRoomCode) ||
    activeFloor.rooms[0]

  const handleSelectRoom = (roomCode: string) => {
    setSelectedRoomCode(roomCode)
  }

  const navigateToPath = (path: string) => {
    if (onNavigate) {
      onNavigate(path)
    } else {
      window.location.hash = path.startsWith('/') ? path : `/${path}`
    }
  }

  return (
    <div className="w-full space-y-10 text-left">
      {/* ── 1. FULL-BLEED CINEMA OVERLAY HERO BANNER (100vw Wall-to-Wall) ── */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 sm:-mt-14 h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden flex items-end">
        <img
          src="/images/cheo_dinh_lang.jpg"
          alt="Bản đồ không gian bảo tàng chèo số"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.45] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a08] via-[#0d0a08]/70 via-50% to-transparent" />

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1620px] w-full mx-auto px-6 sm:px-10 lg:px-12 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-lg leading-tight">
            Sơ Đồ Kiến Trúc Bảo Tàng Số
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 font-serif font-light max-w-3xl leading-relaxed first-letter:text-3xl first-letter:font-bold first-letter:text-amber-400 drop-shadow">
            Mười thế kỷ nghệ thuật Chèo Bắc Bộ được quy hoạch trực quan qua 3 tầng kiến trúc.
            Nhấn trực tiếp vào các phòng trên bản đồ mặt bằng để định vị và chuyển tới vùng tham quan.
          </p>
        </div>
      </section>

      {/* ── 2. ĐIỀU HƯỚNG TẦNG TRỰC QUAN ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800/80">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">
            {activeFloor.level}: {activeFloor.name}
          </h2>
          <p className="text-xs text-stone-400 font-serif mt-1">
            {activeFloor.theme}
          </p>
        </div>

        {/* Floor selection tabs */}
        <div className="flex items-center gap-2 p-1 rounded-2xl bg-stone-900/90 border border-stone-800">
          {FLOORS_DATA.map((floor) => {
            const isActive = floor.id === activeFloorId
            return (
              <button
                key={floor.id}
                onClick={() => {
                  setActiveFloorId(floor.id)
                  setSelectedRoomCode(floor.rooms[0].code)
                }}
                className={`px-4 py-2 rounded-xl text-xs font-serif transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-600/30'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                }`}
              >
                <span className="block text-[10px] font-sans font-normal uppercase opacity-70">
                  {floor.level}
                </span>
                <span>{floor.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── 3. VISUAL ARCHITECTURAL MAP DIAGRAM (SVG 2D BLUEPRINT) & INSPECTOR ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ── LEFT (7 COLS): BẢN ĐỒ MẶT BẰNG SVG TƯƠNG TÁC THỰC SỰ ── */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl border border-amber-900/50 bg-[#14100d] p-4 sm:p-6 shadow-2xl overflow-hidden">
            {/* Blueprint Grid Lines Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#d9770615_1px,transparent_1px),linear-gradient(to_bottom,#d9770615_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

            {/* ── SVG INTERACTIVE MAP CANVAS ── */}
            <div className="relative z-10 w-full aspect-[8/5] bg-stone-950/90 rounded-2xl border border-stone-800 p-2 overflow-hidden shadow-inner flex items-center justify-center">
              <svg
                viewBox="0 0 900 500"
                className="w-full h-full select-none"
              >
                <defs>
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="centerStageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#78350f" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#451a03" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Outer Museum Wall Boundary */}
                <rect
                  x="20"
                  y="20"
                  width="860"
                  height="460"
                  rx="24"
                  fill="none"
                  stroke="#78350f"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  opacity="0.6"
                />

                {/* Corridor Pathways & Connecting Lines */}
                <line x1="140" y1="250" x2="760" y2="250" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <line x1="450" y1="90" x2="450" y2="410" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />

                {/* Center Stage Ring if Floor 2 */}
                {activeFloor.id === 'tang-2' && (
                  <g>
                    <circle cx="360" cy="280" r="110" fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                  </g>
                )}

                {/* Render Rooms on Map Layout */}
                {activeFloor.rooms.map((room) => {
                  const isSelected = selectedRoomCode === room.code
                  const { x, y, width, height, rx = 16, isCircle, cx = 360, cy = 280, r = 92 } = room.svgCoords

                  return (
                    <g
                      key={room.code}
                      onClick={() => handleSelectRoom(room.code)}
                      className="cursor-pointer group"
                    >
                      {/* Room Spatial Shape */}
                      {isCircle ? (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={r}
                          fill={isSelected ? 'url(#centerStageGrad)' : '#1c1917'}
                          stroke={isSelected ? '#f59e0b' : '#78350f'}
                          strokeWidth={isSelected ? '3' : '1.5'}
                          filter={isSelected ? 'url(#goldGlow)' : undefined}
                          className="transition-all duration-300 group-hover:stroke-amber-400"
                        />
                      ) : (
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height={height}
                          rx={rx}
                          fill={isSelected ? '#291e17' : '#1c1917'}
                          stroke={isSelected ? '#f59e0b' : '#44403c'}
                          strokeWidth={isSelected ? '2.5' : '1.5'}
                          filter={isSelected ? 'url(#goldGlow)' : undefined}
                          className="transition-all duration-300 group-hover:stroke-amber-400 group-hover:fill-[#261c16]"
                        />
                      )}

                      {/* Room Content Container using SVG foreignObject for natural text wrap without truncation */}
                      <foreignObject
                        x={isCircle ? cx - r + 8 : x}
                        y={isCircle ? cy - r + 8 : y}
                        width={isCircle ? (r - 8) * 2 : width}
                        height={isCircle ? (r - 8) * 2 : height}
                        className="pointer-events-none"
                      >
                        <div className="w-full h-full p-2.5 sm:p-3 flex flex-col justify-between select-none text-left overflow-hidden">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] sm:text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-stone-950/80 text-amber-400 border border-stone-800">
                              {room.code}
                            </span>
                          </div>

                          <div className="my-auto">
                            <h3 className={`font-serif font-bold text-stone-100 transition-colors leading-tight ${
                              isSelected ? 'text-amber-200' : 'group-hover:text-amber-300'
                            } ${isCircle ? 'text-center text-xs sm:text-sm' : width < 180 ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm'}`}>
                              {room.name}
                            </h3>
                            <p className={`text-stone-400 font-serif font-light mt-0.5 leading-tight ${
                              isCircle ? 'text-center text-[9px] sm:text-[10px]' : 'text-[9px] sm:text-[10px]'
                            }`}>
                              {room.theme}
                            </p>
                          </div>
                        </div>
                      </foreignObject>

                      {/* Active Indicator Pulse Ring */}
                      {isSelected && (
                        <circle
                          cx={isCircle ? cx : x + width - 14}
                          cy={isCircle ? cy - r + 14 : y + 14}
                          r="5"
                          fill="#f59e0b"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* ── RIGHT (5 COLS): ROOM INSPECTOR PANEL ── */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <div className="rounded-3xl border border-stone-800 bg-[#16120f] overflow-hidden shadow-2xl space-y-5">
            {/* Room Image Header */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-full object-cover filter brightness-[0.8] contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16120f] via-[#16120f]/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono font-bold text-amber-400 block mb-1">
                  {selectedRoom.code} &bull; {activeFloor.level}
                </span>
                <h3 className="text-xl font-serif font-bold text-white drop-shadow-md">
                  {selectedRoom.name}
                </h3>
                <span className="text-xs font-serif text-amber-300/90 block mt-0.5">
                  {selectedRoom.theme}
                </span>
              </div>
            </div>

            {/* Room Description & Direct Action Button */}
            <div className="px-6 pb-6 space-y-5">
              <p className="text-xs sm:text-sm text-stone-300 font-serif font-light leading-relaxed">
                {selectedRoom.description}
              </p>

              <div className="pt-2 border-t border-stone-800/80">
                <button
                  onClick={() => navigateToPath(selectedRoom.path)}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-900/30 cursor-pointer"
                >
                  <span>Bước Vào Trưng Bày Chi Tiết</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. DẢI NGHỈ THỊ GIÁC TOÀN CẢNH (PANORAMIC VISUAL CALLOUT) ── */}
      <section className="relative rounded-3xl overflow-hidden border border-amber-900/40 bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 p-8 sm:p-12 text-center space-y-4 shadow-2xl">
        <Sparkles className="w-8 h-8 text-amber-500/80 mx-auto animate-pulse" />
        <p className="text-lg sm:text-2xl font-serif italic text-amber-100 max-w-4xl mx-auto leading-relaxed">
          &ldquo;Mười thế kỷ diễn xướng dân tộc, đọng lại trong từng sải bước chân qua chiếu chèo.&rdquo;
        </p>
        <span className="text-xs font-serif text-amber-400/80 uppercase tracking-widest block">
          Triết Lý Không Gian &bull; Bảo Tàng Chèo Số
        </span>
      </section>
    </div>
  )
}
