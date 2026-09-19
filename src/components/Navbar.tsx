import React, { useState, useEffect } from 'react'
import {
  Landmark,
  ChevronDown,
  Search,
  Ticket,
  Menu,
  X
} from 'lucide-react'

interface NavbarProps {
  currentPath: string
  onNavigate: (path: string) => void
  onOpenSearch: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (path: string) => {
    onNavigate(path)
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  const isCurrent = (prefix: string) => {
    if (prefix === '/' && (currentPath === '/' || currentPath === '/sanh')) return true
    if (prefix !== '/' && currentPath.startsWith(prefix)) return true
    return false
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 font-sans ${
        scrolled
          ? 'bg-[#0f0c0a]/95 backdrop-blur-md shadow-2xl border-b border-stone-800 py-3'
          : 'bg-[#120f0d] border-b border-stone-800/80 py-4'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div
          onClick={() => handleNav('/')}
          className="flex items-center gap-3.5 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-800 to-amber-700 border border-amber-500/40 flex items-center justify-center text-amber-200 shadow-md">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-serif font-bold tracking-wide text-[#f5f0e8] group-hover:text-amber-300 transition-colors">
                BẢO TÀNG CHÈO SỐ
              </span>
            </div>
            <p className="text-[11px] text-stone-400 font-light hidden md:block">
              Di Sản Nghệ Thuật Sân Khấu Dân Tộc
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium">
          {/* Sảnh */}
          <button
            onClick={() => handleNav('/')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
              isCurrent('/')
                ? 'text-amber-400 bg-stone-800/80 font-semibold'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
            }`}
          >
            Sảnh
          </button>

          {/* Giới Thiệu */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('gioi-thieu')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => handleNav('/gioi-thieu')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                isCurrent('/gioi-thieu')
                  ? 'text-amber-400 bg-stone-800/80 font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              <span>Giới Thiệu</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </button>

            {openDropdown === 'gioi-thieu' && (
              <div className="absolute top-full left-0 w-60 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2 rounded-xl bg-[#16120f] border border-stone-800 shadow-2xl space-y-0.5 text-left">
                  {[
                    { path: '/gioi-thieu/bao-tang-so-cheo', title: 'Bảo tàng số “Chèo”' },
                    { path: '/gioi-thieu/cau-chuyen-hinh-thanh', title: 'Câu chuyện hình thành' },
                    { path: '/gioi-thieu/muc-tieu-va-y-nghia', title: 'Mục tiêu và ý nghĩa' },
                    { path: '/gioi-thieu/doi-ngu-nhom-thuc-hien', title: 'Đội ngũ/ nhóm thực hiện' }
                  ].map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNav(item.path)}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-800/70 text-stone-200 hover:text-amber-300 font-serif text-xs transition-colors cursor-pointer block"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Khám Phá */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('kham-pha')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => handleNav('/kham-pha')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                isCurrent('/kham-pha')
                  ? 'text-amber-400 bg-stone-800/80 font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              <span>Khám Phá</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </button>

            {openDropdown === 'kham-pha' && (
              <div className="absolute top-full -left-12 w-[460px] pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-3.5 rounded-xl bg-[#16120f] border border-stone-800 shadow-2xl grid grid-cols-2 gap-3 text-left">
                  {/* Sân Khấu */}
                  <div className="space-y-0.5">
                    <button
                      onClick={() => handleNav('/kham-pha/san-khau')}
                      className="text-xs font-serif font-bold text-red-400 hover:text-red-300 px-3 py-1.5 block w-full text-left border-b border-stone-800/60 mb-1"
                    >
                      Sân Khấu &rarr;
                    </button>
                    {[
                      { path: '/kham-pha/san-khau/nhan-vat', title: 'Nhân vật' },
                      { path: '/kham-pha/san-khau/trang-phuc', title: 'Trang phục' },
                      { path: '/kham-pha/san-khau/am-thanh', title: 'Âm Thanh' },
                      { path: '/kham-pha/san-khau/tac-pham-tieu-bieu', title: 'Tác phẩm tiêu biểu' }
                    ].map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNav(item.path)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-800/70 text-stone-200 hover:text-amber-300 font-serif text-xs transition-colors cursor-pointer block"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>

                  {/* Tổng quan & Chèo hiện đại */}
                  <div className="space-y-0.5 border-l border-stone-800 pl-3">
                    <button
                      onClick={() => handleNav('/kham-pha/tong-quan')}
                      className="text-xs font-serif font-bold text-amber-400 hover:text-amber-300 px-3 py-1.5 block w-full text-left border-b border-stone-800/60 mb-1"
                    >
                      Tổng Quan &rarr;
                    </button>
                    {[
                      { path: '/kham-pha/tong-quan/lich-su-phat-trien', title: 'Lịch sử phát triển' },
                      { path: '/kham-pha/tong-quan/gia-tri-van-hoa', title: 'Giá trị văn hoá' },
                      { path: '/kham-pha/tong-quan/phia-sau-san-khau', title: 'Phía sau sân khấu' },
                      { path: '/kham-pha/cheo-hien-dai', title: 'Chèo hiện đại' }
                    ].map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNav(item.path)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-800/70 text-stone-200 hover:text-amber-300 font-serif text-xs transition-colors cursor-pointer block"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tiện Ích */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('tien-ich')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => handleNav('/tien-ich')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                isCurrent('/tien-ich')
                  ? 'text-amber-400 bg-stone-800/80 font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              <span>Tiện Ích</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </button>

            {openDropdown === 'tien-ich' && (
              <div className="absolute top-full right-0 w-[380px] pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-3.5 rounded-xl bg-[#16120f] border border-stone-800 shadow-2xl grid grid-cols-2 gap-3 text-left">
                  <div className="space-y-0.5">
                    <button
                      onClick={() => handleNav('/tien-ich/tham-quan-va-su-kien')}
                      className="text-xs font-serif font-bold text-amber-400 hover:text-amber-300 px-3 py-1.5 block w-full text-left border-b border-stone-800/60 mb-1"
                    >
                      Tham Quan & Sự Kiện &rarr;
                    </button>
                    {[
                      { path: '/tien-ich/tham-quan-va-su-kien/thong-bao-su-kien', title: 'Thông báo sự kiện' },
                      { path: '/tien-ich/tham-quan-va-su-kien/lich-bieu-dien', title: 'Lịch biểu diễn' },
                      { path: '/tien-ich/tham-quan-va-su-kien/dat-mua-ve', title: 'Đặt mua vé' },
                      { path: '/tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien', title: 'Địa điểm biểu diễn' },
                      { path: '/tien-ich/tham-quan-va-su-kien/thong-tin-tham-quan', title: 'Thông tin tham quan' }
                    ].map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNav(item.path)}
                        className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-stone-800/70 text-xs text-stone-200 hover:text-amber-300 cursor-pointer block font-serif"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-0.5 border-l border-stone-800 pl-3">
                    <span className="text-xs font-serif font-bold text-stone-400 px-3 py-1.5 block border-b border-stone-800/60 mb-1">
                      Công Cụ Số
                    </span>
                    {[
                      { path: '/tien-ich/tim-kiem', title: 'Tìm kiếm' },
                      { path: '/tien-ich/danh-gia-cai-thien', title: 'Đánh giá/ Cải thiện' },
                      { path: '/tien-ich/ban-do-bao-tang', title: 'Bản đồ bảo tàng' },
                      { path: '/tien-ich/kho-tu-lieu', title: 'Kho tư liệu' },
                      { path: '/tien-ich/thong-tin-va-ho-tro', title: 'Thông tin và hỗ trợ' }
                    ].map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNav(item.path)}
                        className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-stone-800/70 text-xs text-stone-200 hover:text-amber-300 cursor-pointer block font-serif"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-amber-700/50 transition-colors cursor-pointer flex items-center gap-2 text-xs"
            title="Tra cứu"
          >
            <Search className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden sm:inline">Tra cứu</span>
          </button>

          <button
            onClick={() => handleNav('/tien-ich/tham-quan-va-su-kien/dat-mua-ve')}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-800 via-amber-800 to-amber-700 hover:from-red-700 hover:to-amber-600 text-amber-100 font-semibold text-xs border border-amber-600/40 shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Ticket className="w-3.5 h-3.5 text-amber-300" />
            <span>Đặt Mua Vé</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-stone-900 text-stone-300 hover:text-white border border-stone-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#16120f] border-b border-stone-800 p-6 space-y-4 animate-in slide-in-from-top-4 duration-200 text-left">
          <div>
            <button
              onClick={() => handleNav('/')}
              className="w-full text-left p-3 rounded-lg bg-stone-900 text-amber-400 font-serif font-bold text-sm"
            >
              Sảnh Đón Tiếp
            </button>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-serif font-bold text-stone-400 px-3 block">
              Giới Thiệu
            </span>
            {[
              { path: '/gioi-thieu/bao-tang-so-cheo', title: 'Bảo tàng số “Chèo”' },
              { path: '/gioi-thieu/cau-chuyen-hinh-thanh', title: 'Câu chuyện hình thành' },
              { path: '/gioi-thieu/muc-tieu-va-y-nghia', title: 'Mục tiêu và ý nghĩa' },
              { path: '/gioi-thieu/doi-ngu-nhom-thuc-hien', title: 'Đội ngũ/ nhóm thực hiện' }
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-stone-300 hover:text-amber-400 hover:bg-stone-900/50"
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-serif font-bold text-red-400 px-3 block">
              Khám Phá Sân Khấu
            </span>
            {[
              { path: '/kham-pha/san-khau/nhan-vat', title: 'Nhân vật' },
              { path: '/kham-pha/san-khau/trang-phuc', title: 'Trang phục' },
              { path: '/kham-pha/san-khau/am-thanh', title: 'Âm Thanh' },
              { path: '/kham-pha/san-khau/tac-pham-tieu-bieu', title: 'Tác phẩm tiêu biểu' },
              { path: '/kham-pha/tong-quan/lich-su-phat-trien', title: 'Lịch sử phát triển' },
              { path: '/kham-pha/cheo-hien-dai', title: 'Chèo hiện đại' }
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-stone-300 hover:text-amber-400 hover:bg-stone-900/50"
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-serif font-bold text-amber-500 px-3 block">
              Tiện Ích & Dịch Vụ
            </span>
            {[
              { path: '/tien-ich/tham-quan-va-su-kien/lich-bieu-dien', title: 'Lịch biểu diễn' },
              { path: '/tien-ich/tham-quan-va-su-kien/dat-mua-ve', title: 'Đặt mua vé' },
              { path: '/tien-ich/ban-do-bao-tang', title: 'Bản đồ bảo tàng' },
              { path: '/tien-ich/kho-tu-lieu', title: 'Kho tư liệu' },
              { path: '/tien-ich/danh-gia-cai-thien', title: 'Đánh giá/ Cải thiện' }
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-stone-300 hover:text-amber-400 hover:bg-stone-900/50"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
