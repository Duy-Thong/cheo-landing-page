import React, { useState } from 'react'
import { Search } from 'lucide-react'

interface ArchiveItem {
  id: string
  code: string
  title: string
  category: 'dia-than' | 'kich-ban' | 'dien-da' | 'my-thuat'
  categoryName: string
  year: string
  source: string
  storageStatus: string
  description: string
  provenance: string
  specs: {
    format: string
    condition: string
    digitizedDate: string
  }
}

const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'dt-01',
    code: 'TL-1956-DT01',
    title: 'Đĩa Than 78 Vòng: Điệu Đào Liễu — NSND Cả Tam',
    category: 'dia-than',
    categoryName: 'Đĩa Than 78 Vòng',
    year: '1956',
    source: 'Hãng Dĩa Việt Nam (Hà Nội)',
    storageStatus: 'Đã số hóa chuẩn Master 24-bit / 96kHz',
    description: 'Bản thu âm chuẩn mực của nghệ nhân Trịnh Thị Lan (Cả Tam) thời kỳ thành lập Đoàn Chèo Cổ truyền Việt Nam, thể hiện trọn vẹn chất giọng nảy hạt, luyến láy trứ danh.',
    provenance: 'Hiến tặng bởi gia đình Nghệ nhân Cả Tam năm 2021',
    specs: {
      format: 'Đĩa Shellac 10 inch 78 RPM',
      condition: 'Bảo quản phòng lạnh tiêu chuẩn 18°C',
      digitizedDate: 'Tháng 10/2023'
    }
  },
  {
    id: 'kb-01',
    code: 'TL-1890-KB02',
    title: 'Bản Chép Tay Chữ Nôm: Vở Chèo Cổ "Quan Âm Thị Kính"',
    category: 'kich-ban',
    categoryName: 'Bản Chép Tay Kịch Bản',
    year: 'Khoảng 1890',
    source: 'Tủ sách Hán Nôm Chiếu chèo Cổ Lễ (Nam Định)',
    storageStatus: 'Phục chế chống ẩm & scan độ phân giải cao 600 DPI',
    description: 'Bản chép tay nguyên bản ghi lại lời thoại, chỉ dẫn vũ đạo và nhịp phách trống đế cho 8 màn của kiệt tác Quan Âm Thị Kính bằng chữ Nôm cổ.',
    provenance: 'Sưu tầm điền dã di sản Hán Nôm vùng đồng bằng Bắc Bộ',
    specs: {
      format: 'Giấy dó truyền thống bìa bồi biểu',
      condition: 'Nguyên vẹn 92%, chữ mực nho rõ nét',
      digitizedDate: 'Tháng 4/2024'
    }
  },
  {
    id: 'dd-01',
    code: 'TL-1965-DD03',
    title: 'Băng Từ Điền Dã: Làn Điệu Chèo Làng Khuốc (Thái Bình)',
    category: 'dien-da',
    categoryName: 'Băng Ghi Âm Điền Dã',
    year: '1965',
    source: 'Đoàn sưu tầm Viện Nghiên Cứu Sân Khấu',
    storageStatus: 'Khử từ, làm sạch băng gốc và chuyển đổi số',
    description: 'Bản ghi âm tại sân đình làng Khuốc, lưu giữ giọng hát mộc mạc và tiếng trống đế đặc trưng không lẫn với bất kỳ nôi chèo nào khác.',
    provenance: 'Kho lưu trữ tư liệu Viện Nghiên cứu Sân khấu Dân tộc',
    specs: {
      format: 'Băng cối Reel-to-Reel 1/4 inch',
      condition: 'Bảo quản trong hộp kim loại kín khí',
      digitizedDate: 'Tháng 12/2023'
    }
  },
  {
    id: 'mt-01',
    code: 'TL-1925-MT04',
    title: 'Bản Rập Mộc Bản Mỹ Thuật: Cảnh Hề Chèo Múa Quạt Dân Gian',
    category: 'my-thuat',
    categoryName: 'Mỹ Thuật & Mộc Bản',
    year: '1925',
    source: 'Bản khắc mộc bản làng tranh Đông Hồ (Bắc Ninh)',
    storageStatus: 'Bảo quản phẳng, đóng khung kính chống tia cực tím',
    description: 'Mộc bản khắc gỗ họa lại hình tượng chú Hề Chèo áo ngắn tay cầm quạt mo, miệng cười rạng rỡ giữa hội làng bên cạnh cây đa bến nước.',
    provenance: 'Gia đình nghệ nhân mộc bản Đông Hồ lưu truyền qua 3 đời',
    specs: {
      format: 'Bản rập mực nho trên giấy điệp lấp lánh',
      condition: 'Hoàn hảo, nét khắc sâu và sắc nét',
      digitizedDate: 'Tháng 8/2024'
    }
  },
  {
    id: 'dt-02',
    code: 'TL-1930-DT05',
    title: 'Đĩa Hát Pathé: Trích Đoạn "Xúy Vân Giả Dại"',
    category: 'dia-than',
    categoryName: 'Đĩa Than 78 Vòng',
    year: '1930',
    source: 'Hãng đĩa Pathé Frères (Đông Dương)',
    storageStatus: 'Đã số hóa khử nhiễu chuyên dụng di sản âm thanh',
    description: 'Một trong những bản ghi âm thương mại đầu tiên của nghệ thuật Chèo cổ truyền, tiếng cười và tiếng thở dài ai oán của Xúy Vân được thu thanh trọn vẹn.',
    provenance: 'Sưu tập tư liệu âm thanh Đông Dương cổ',
    specs: {
      format: 'Đĩa Shellac 10 inch',
      condition: 'Đã khử tạp âm bề mặt',
      digitizedDate: 'Tháng 5/2024'
    }
  }
]

export const ArchiveVaultWidget: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<ArchiveItem>(ARCHIVE_ITEMS[0])

  const categories = [
    { id: 'all', label: 'Tất Cả Tư Liệu' },
    { id: 'dia-than', label: 'Đĩa Than Cổ' },
    { id: 'kich-ban', label: 'Bản Chép Tay' },
    { id: 'dien-da', label: 'Băng Điền Dã' },
    { id: 'my-thuat', label: 'Mộc Bản Dân Gian' }
  ]

  const filteredItems = ARCHIVE_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <div className="text-left space-y-12">
      {/* Banner lưu trữ tư liệu */}
      <section className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[240px] sm:min-h-[300px]">
        <img
          src="/images/cheo_gioi_thieu.jpg"
          alt="Kho Tư Liệu Di Sản Chèo"
          className="w-full h-full object-cover filter brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
        <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest mb-2 block">
            Kho Lưu Trữ Hiện Vật Số Hóa
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Kho Tư Liệu & Cổ Bản Chèo
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-2xl mt-2 leading-relaxed">
            Hệ thống hóa hàng trăm đĩa than nguyên bản, bản chép tay chữ Nôm và băng từ điền dã từ thế kỷ XIX đến nay.
          </p>
        </div>
      </section>

      {/* Thanh bộ lọc & Tra cứu mở thoáng — Không đóng khung */}
      <section className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-800/60">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-serif transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-900/50 hover:bg-stone-800 text-stone-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tra cứu mã hoặc từ khóa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-full bg-stone-900/60 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
          />
        </div>
      </section>

      {/* Danh sách & Chi tiết trực tiếp In-Page (Master-Detail) — KHÔNG DÙNG MODAL, KHÔNG KHUNG HỘP */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-2">
        {/* Cột trái: Danh sách tư liệu thanh lịch */}
        <div className="lg:col-span-5 space-y-4 divide-y divide-stone-800/60">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-2">
            Danh Mục Hồ Sơ ({filteredItems.length})
          </span>

          {filteredItems.map((item) => {
            const isSelected = selectedItem.id === item.id
            return (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`w-full text-left pt-4 pb-4 transition-all cursor-pointer block ${
                  isSelected ? 'text-amber-400' : 'text-stone-300 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-stone-500'}>
                    {item.code}
                  </span>
                  <span className="text-stone-500">{item.year}</span>
                </div>
                <h4 className="text-base font-serif font-bold line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-400 line-clamp-1 font-light mt-1">
                  {item.categoryName} &bull; {item.source}
                </p>
              </button>
            )
          })}
        </div>

        {/* Cột phải: Chi tiết hồ sơ đang chọn — Chữ mở, tự do, thanh lịch */}
        <aside className="lg:col-span-7 lg:border-l lg:border-stone-800/60 lg:pl-10 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">
                {selectedItem.code}
              </span>
              <span className="text-xs text-stone-400">{selectedItem.categoryName} &bull; {selectedItem.year}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {selectedItem.title}
            </h3>
          </div>

          <p className="text-base text-stone-200 font-serif font-light leading-relaxed">
            {selectedItem.description}
          </p>

          <div className="space-y-4 pt-4 border-t border-stone-800/60 text-xs sm:text-sm">
            <div>
              <span className="text-[11px] uppercase font-mono text-stone-500 block mb-1">Xuất xứ & Nguồn lưu trữ:</span>
              <p className="text-stone-300 font-light">{selectedItem.source}</p>
            </div>

            <div>
              <span className="text-[11px] uppercase font-mono text-stone-500 block mb-1">Lịch sử thu thập:</span>
              <p className="text-stone-300 font-light">{selectedItem.provenance}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-[11px] uppercase font-mono text-stone-500 block mb-1">Định dạng vật lý:</span>
                <p className="text-amber-200/90 font-serif">{selectedItem.specs.format}</p>
              </div>
              <div>
                <span className="text-[11px] uppercase font-mono text-stone-500 block mb-1">Tình trạng bảo quản:</span>
                <p className="text-stone-300 font-light">{selectedItem.specs.condition}</p>
              </div>
            </div>

            <div className="pt-2 text-xs text-stone-400">
              Thời điểm số hóa: <span className="text-stone-300">{selectedItem.specs.digitizedDate}</span> &bull; {selectedItem.storageStatus}
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
