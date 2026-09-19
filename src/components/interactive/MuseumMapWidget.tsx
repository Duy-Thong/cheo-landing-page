import React, { useState } from 'react'
import { MapPin, Layers, Compass, ArrowRight, Sparkles, BookOpen, Music, Users, Shield } from 'lucide-react'

interface Room {
  code: string
  name: string
  path: string
  theme: string
  description: string
  highlights: string[]
  icon: React.ElementType
  badge: string
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
    description: 'Không gian sảnh đón tiếp, giới thiệu câu chuyện điền dã sưu tầm và tôn vinh hội đồng nghệ nhân.',
    rooms: [
      {
        code: 'P.101',
        name: 'Cổng Chào & Sảnh Đón Tiếp',
        path: '/',
        theme: 'Cổng giao lưu văn hóa',
        description: 'Điểm khởi hành hành trình tham quan, hướng dẫn lộ trình và giới thiệu tổng quan kiến trúc bảo tàng.',
        highlights: ['Sơ đồ định vị toàn khu', 'Hướng dẫn viên ảo giới thiệu', 'Bảng chỉ dẫn tương tác'],
        icon: Compass,
        badge: 'Điểm Khởi Đầu'
      },
      {
        code: 'P.102',
        name: 'Ký Sự Điền Dã Làng Chèo Cổ',
        path: '/gioi-thieu/cau-chuyen-hinh-thanh',
        theme: 'Cội nguồn châu thổ sông Hồng',
        description: 'Lưu giữ tư liệu hành trình điền dã qua các nôi Chèo cổ: làng Khuốc (Thái Bình), Yên Khánh (Ninh Bình), Nam Trực (Nam Định).',
        highlights: ['Nhật ký điền dã 2 năm', 'Bản ghi âm lời nghệ nhân cao tuổi', 'Ảnh tư liệu đình làng Bắc Bộ'],
        icon: MapPin,
        badge: 'Tư Liệu Điền Dã'
      },
      {
        code: 'P.103',
        name: 'Không Gian Bảo Tàng Số',
        path: '/gioi-thieu/bao-tang-so-cheo',
        theme: 'Công nghệ phụng sự di sản',
        description: 'Giới thiệu tầm nhìn số hóa di sản nghệ thuật truyền thống, ứng dụng công nghệ hiện đại bảo tồn nguyên bản văn hóa.',
        highlights: ['Mô hình số hóa đa phương tiện', 'Chuẩn âm thanh nguyên bản', 'Thư viện mở học đường'],
        icon: Sparkles,
        badge: 'Bảo Tàng Số'
      },
      {
        code: 'P.104',
        name: 'Hội Đồng Cố Vấn & Nghệ Nhân',
        path: '/gioi-thieu/doi-ngu-nhom-thuc-hien',
        theme: 'Tôn vinh bậc thầy nghệ thuật',
        description: 'Nơi tri ân và giới thiệu các Nghệ nhân Nhân dân, nhà nghiên cứu văn hóa dân gian đồng hành cùng dự án.',
        highlights: ['Hồ sơ các bậc thầy nghệ nhân', 'Hội đồng cố vấn âm nhạc dân tộc', 'Nhóm chuyên gia phục chế'],
        icon: Users,
        badge: 'Bậc Thầy Nghệ Nhân'
      }
    ]
  },
  {
    id: 'tang-2',
    name: 'Đại Sảnh Khám Phá',
    level: 'Tầng 2',
    theme: 'Trọng Tâm Nghệ Thuật & Biểu Diễn Chèo',
    description: 'Trái tim của bảo tàng: trải nghiệm trọn vẹn 10 thế kỷ lịch sử, bước lên sàn diễn chiếu Chèo và giải mã các chuẩn mực ước lệ.',
    rooms: [
      {
        code: 'P.201',
        name: 'Phòng Lịch Sử 10 Thế Kỷ',
        path: '/kham-pha/tong-quan/lich-su-phat-trien',
        theme: 'Ngàn năm thăng trầm',
        description: 'Tái hiện niên biểu Chèo từ bà tổ Phạm Thị Trân thời vua Đinh thế kỷ thứ 10 đến Chèo sân đình và các nhà hát chuyên nghiệp.',
        highlights: ['Bia đá bà tổ nghề Phạm Thị Trân', 'Mô hình chiếu chèo sân đình TK 15', 'Tư liệu thời kỳ cách mạng 1954'],
        icon: BookOpen,
        badge: 'Lịch Sử 1000 Năm'
      },
      {
        code: 'P.202',
        name: 'Chiếu Chèo & 5 Mẫu Nhân Vật',
        path: '/kham-pha/san-khau/nhan-vat',
        theme: 'Quy chuẩn tạo hình ước lệ',
        description: 'Giải mã 5 dạng nhân vật chuẩn mực: Đào (nữ chính), Kép (quân tử), Hề (tiếng cười triết lý), Lão (trưởng thượng) và Mụ (phản diện).',
        highlights: ['Bộ tạo hình Thị Mầu & Thị Kính', 'Không gian Hề Chèo dân gian', 'Khẩu quyết vũ đạo bước chữ Đinh'],
        icon: Users,
        badge: '5 Mẫu Nhân Vật'
      },
      {
        code: 'P.203',
        name: 'Phòng Phục Trang & Hóa Trang',
        path: '/kham-pha/san-khau/trang-phuc',
        theme: 'Sắc màu lụa là Kinh Bắc',
        description: 'Trưng bày áo tứ thân mớ ba mớ bảy, yếm đào, nón quai thao, thắt lưng bao ngũ sắc và nghệ thuật vẽ mặt tạo hình.',
        highlights: ['Bộ áo the mớ ba mớ bảy nguyên bản', 'Kỹ thuật vấn khăn mỏ quạ', 'Quy ước màu sắc trang phục phong kiến'],
        icon: Shield,
        badge: 'Nghệ Thuật Tạo Hình'
      },
      {
        code: 'P.204',
        name: 'Thính Phòng Âm Sắc Bát Âm',
        path: '/kham-pha/san-khau/am-thanh',
        theme: 'Linh hồn điệu thức Chèo cổ',
        description: 'Không gian thẩm âm dàn nhạc cụ Bát âm (Trống đế, Trống cơm, Đàn nguyệt, Nhị, Sáo...) và nghe thử hơn 200 làn điệu tiêu biểu.',
        highlights: ['Hành trình 4 chặng âm thanh đêm Chèo', 'Bộ gõ Trống đế điều khiển nhịp phách', 'Bản ghi mẫu Đào liễu, Quân tử vu dịch'],
        icon: Music,
        badge: 'Dàn Nhạc & Điệu Hát'
      },
      {
        code: 'P.205',
        name: 'Gian Kiệt Tác Sân Khấu Cổ',
        path: '/kham-pha/san-khau/tac-pham-tieu-bieu',
        theme: 'Tứ đại danh tác Chèo',
        description: 'Phân tích chiều sâu nhân đạo và nghệ thuật biểu diễn của 4 vở Chèo cổ bất hủ: Quan Âm Thị Kính, Kim Nhan, Lưu Bình - Dương Lễ, Nghêu Sò Ốc Hến.',
        highlights: ['Trích đoạn Xúy Vân giả dại kinh điển', 'Vở diễn Quan Âm Thị Kính', 'Triết lý nhân nghĩa Á Đông'],
        icon: BookOpen,
        badge: 'Tứ Đại Kiệt Tác'
      },
      {
        code: 'P.206',
        name: 'Gian Chèo Hiện Đại & UNESCO',
        path: '/kham-pha/cheo-hien-dai',
        theme: 'Sức sống thế kỷ 20 - 21',
        description: 'Cột mốc thành lập Đoàn Chèo 1951, thời kỳ kịch Chèo NSND Tào Mạt với bộ ba Bài ca giữ nước, và tiến trình đệ trình UNESCO.',
        highlights: ['Cột mốc thành lập đoàn tại Việt Bắc 1951', 'Bộ ba vở chèo Bài ca giữ nước', 'Hồ sơ quốc gia đệ trình UNESCO'],
        icon: Sparkles,
        badge: 'Chuyển Mình Hiện Đại'
      }
    ]
  },
  {
    id: 'tang-3',
    name: 'Tầng Dịch Vụ & Lưu Trữ',
    level: 'Tầng 3',
    theme: 'Kho Tư Liệu Quý & Trải Nghiệm Khán Giả',
    description: 'Nơi kết nối trải nghiệm nghiên cứu chuyên sâu, nghe lại những đĩa than 78 vòng quý hiếm và hỗ trợ đặt vé xem diễn ngoài đời thực.',
    rooms: [
      {
        code: 'P.301',
        name: 'Kho Tư Liệu Đĩa Than & Kịch Bản Cổ',
        path: '/tien-ich/kho-tu-lieu',
        theme: 'Lưu trữ di sản quý hiếm',
        description: 'Thư viện số lưu giữ bản ghi âm đĩa than 78 vòng, bản chép tay kịch bản chữ Nôm cổ và các công trình điền dã khoa học.',
        highlights: ['Bộ sưu tập đĩa than thập niên 1950', 'Bản chép tay kịch bản Chèo cổ chữ Nôm', 'Băng ghi âm nghệ nhân lão thành'],
        icon: BookOpen,
        badge: 'Kho Báu Tư Liệu'
      },
      {
        code: 'P.302',
        name: 'Cổng Đặt Vé & Lịch Biểu Diễn',
        path: '/tien-ich/tham-quan-va-su-kien/dat-mua-ve',
        theme: 'Kết nối rạp hát thực tế',
        description: 'Tra cứu lịch diễn định kỳ cuối tuần của các nhà hát Chèo trên toàn quốc, chọn chỗ ngồi và đặt vé trực tuyến.',
        highlights: ['Lịch diễn Nhà hát Chèo Việt Nam', 'Sơ đồ khán phòng chọn ghế', 'Cổng thanh toán vé điện tử'],
        icon: Sparkles,
        badge: 'Vé & Sự Kiện'
      },
      {
        code: 'P.303',
        name: 'Cổng Tra Cứu & Đóng Góp Ý Kiến',
        path: '/tien-ich/danh-gia-cai-thien',
        theme: 'Đồng hành cùng công chúng',
        description: 'Bộ lọc tra cứu nhanh làn điệu, nhân vật và hòm thư tiếp nhận đóng góp quý báu của khách tham quan.',
        highlights: ['Bộ lọc thông minh theo tên làn điệu', 'Hòm thư cảm nghĩ khách tham quan', 'Đóng góp tư liệu quý cộng đồng'],
        icon: Users,
        badge: 'Tương Tác & Góp Ý'
      }
    ]
  }
]

export const MuseumMapWidget: React.FC = () => {
  const [activeFloorId, setActiveFloorId] = useState<string>('tang-2')
  const [selectedRoom, setSelectedRoom] = useState<Room>(FLOORS_DATA[1].rooms[0])

  const activeFloor = FLOORS_DATA.find(f => f.id === activeFloorId) || FLOORS_DATA[1]

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room)
  }

  const navigateToRoom = (path: string) => {
    window.location.hash = path
  }

  return (
    <div className="space-y-8 text-left">
      {/* Header & Floor Selection Bar */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#1c1613] via-stone-900 to-[#120f0d] border border-amber-500/30 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-1">
              <Layers className="w-4 h-4" />
              <span>Sơ Đồ Không Gian Tương Tác</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Bản Đồ Phân Tầng Bảo Tàng Chèo Số
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light mt-1">
              Chọn từng tầng và gian phòng trưng bày để định vị lộ trình tham quan chi tiết
            </p>
          </div>

          {/* Quick Floor Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/40 border border-stone-800">
            {FLOORS_DATA.map((floor) => {
              const isActive = floor.id === activeFloorId
              return (
                <button
                  key={floor.id}
                  onClick={() => {
                    setActiveFloorId(floor.id)
                    setSelectedRoom(floor.rooms[0])
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 shadow-md shadow-amber-600/30'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="block text-[10px] uppercase font-sans font-normal opacity-80">{floor.level}</span>
                  <span>{floor.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Floor Banner */}
        <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/30 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-amber-400 font-bold font-serif text-sm mr-2">{activeFloor.level}: {activeFloor.name}</span>
            <span className="text-stone-300">&mdash; {activeFloor.theme}</span>
          </div>
          <div className="text-stone-400">
            Số phòng trưng bày: <strong className="text-amber-400">{activeFloor.rooms.length} phòng</strong>
          </div>
        </div>

        {/* Floor Interactive Grid & Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Room Cards Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {activeFloor.rooms.map((room) => {
              const isSelected = selectedRoom.code === room.code
              const IconComp = room.icon
              return (
                <div
                  key={room.code}
                  onClick={() => handleSelectRoom(room)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-950/40 border-amber-500/80 shadow-lg shadow-amber-950/50 ring-1 ring-amber-400/40'
                      : 'bg-stone-900/40 hover:bg-stone-900/80 border-stone-800 hover:border-amber-700/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-stone-800 text-amber-400 border border-stone-700">
                        {room.code}
                      </span>
                      <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-stone-800/80 text-stone-300">
                        {room.badge}
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 mt-2">
                      <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-serif font-bold transition-colors ${isSelected ? 'text-amber-300' : 'text-stone-100'}`}>
                          {room.name}
                        </h4>
                        <p className="text-[11px] text-stone-400 line-clamp-2 mt-1 leading-relaxed">
                          {room.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-400">
                    <span>Xem thông số phòng</span>
                    <span className={`font-semibold ${isSelected ? 'text-amber-400' : 'text-stone-500'}`}>
                      {isSelected ? 'Đang chọn' : 'Nhấn để xem'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Room Inspector Panel (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-stone-800/90 text-left space-y-5 sticky top-28">
            <div className="flex items-center justify-between border-b border-stone-800/80 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-500">
                  {selectedRoom.code} &bull; {activeFloor.level}
                </span>
                <h4 className="text-lg font-serif font-bold text-white mt-1">
                  {selectedRoom.name}
                </h4>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                {selectedRoom.badge}
              </span>
            </div>

            <div className="space-y-3 text-xs text-stone-300 leading-relaxed">
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800/70">
                <span className="text-stone-400 block text-[10px] uppercase font-sans mb-1">Chủ đề không gian:</span>
                <span className="text-amber-200 font-serif font-bold text-sm">{selectedRoom.theme}</span>
              </div>

              <p className="text-stone-300">
                {selectedRoom.description}
              </p>
            </div>

            {/* Room Highlights */}
            <div className="space-y-2">
              <h5 className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                Hiện Vật & Trải Nghiệm Nổi Bật:
              </h5>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {selectedRoom.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">&bull;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Jump CTA */}
            <div className="pt-3 border-t border-stone-800/80">
              <button
                onClick={() => navigateToRoom(selectedRoom.path)}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-serif font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-900/30 cursor-pointer"
              >
                <span>Bước Vào Trưng Bày Chi Tiết</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
