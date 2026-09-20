import { useState, useEffect } from 'react'
import {
  Landmark,
  Network,
  MapPin,
  Phone,
  Mail,
  ArrowUp
} from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from './components/Navbar'
import { HomePage } from './components/HomePage'
import { MuseumView } from './components/MuseumView'
import { SearchModal } from './components/SearchModal'
import { SitemapTree } from './components/SitemapTree'
import { matchRoute, SITEMAP_ROUTES } from './data/sitemapRoutes'

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/')
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
  const [showSitemapModal, setShowSitemapModal] = useState<boolean>(false)

  // Listen to hash changes for browser back/forward and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '')
      const path = hash ? `/${hash}` : '/'
      setCurrentPath(path)
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    setCurrentPath(cleanPath)
    window.location.hash = cleanPath === '/' || cleanPath === '/sanh' ? '' : `#${cleanPath}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeRoute = matchRoute(currentPath)
  const isHome = currentPath === '/' || currentPath === '/sanh'

  return (
    <div className="min-h-screen bg-[#120f0d] text-[#e7e0d8] flex flex-col selection:bg-[#991b1b] selection:text-white relative font-sans">
      <Analytics />
      {/* Universal Museum Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {isHome ? (
          /* TRANG CHỦ: SẢNH ĐÓN TIẾP */
          <HomePage onNavigate={navigateTo} />
        ) : (
          /* TRANG CHI TIẾT THEO ĐÚNG CẤU TRÚC PHÂN CẤP SITEMAP */
          <MuseumView
            route={activeRoute}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Optional Architecture Tree Modal */}
      {showSitemapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-6xl max-h-[90vh] bg-[#16120f] border border-stone-800 rounded-2xl p-6 flex flex-col shadow-2xl overflow-hidden text-left">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-amber-500" />
                <h3 className="font-serif font-bold text-white text-base">
                  Sơ Đồ Cấu Trúc Không Gian Bảo Tàng
                </h3>
              </div>
              <button
                onClick={() => setShowSitemapModal(false)}
                className="px-3 py-1 rounded bg-stone-800 text-xs font-semibold text-stone-300 hover:text-white cursor-pointer"
              >
                Đóng
              </button>
            </div>
            <div className="flex-1 overflow-hidden mt-4">
              <SitemapTree
                onSelectNode={(node) => {
                  setShowSitemapModal(false)
                  // Find path corresponding to ID
                  const target = Object.values(SITEMAP_ROUTES).find((r) => r.id === node.id)
                  navigateTo(target ? target.path : `/${node.id}`)
                }}
                searchQuery=""
              />
            </div>
          </div>
        </div>
      )}

      {/* Editorial Museum Footer */}
      <footer className="border-t border-stone-800 bg-[#0e0b09] text-stone-400 text-xs mt-auto font-sans">
        <div className="max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-800 to-amber-700 border border-amber-600/40 flex items-center justify-center text-amber-200">
                <Landmark className="w-4 h-4" />
              </div>
              <span className="text-lg font-serif font-bold text-white tracking-tight">
                BẢO TÀNG CHÈO SỐ
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm font-light">
              Không gian lưu trữ, nghiên cứu và quảng bá nghệ thuật Chèo cổ truyền Việt Nam, kết nối các thế hệ khán giả với tinh hoa sân khấu dân tộc.
            </p>

            <div className="pt-2 space-y-1 text-stone-400 text-[11px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Số 71 Kim Mã, Ba Đình, TP. Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Hotline: 1900 6868 (8:00 - 21:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>di-san@baotangcheoso.vn</span>
              </div>
            </div>
          </div>

          {/* Col 1: Giới thiệu */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold text-amber-400 uppercase tracking-wider">
              Giới Thiệu Di Sản
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { path: '/gioi-thieu/bao-tang-so-cheo', label: 'Bảo tàng số “Chèo”' },
                { path: '/gioi-thieu/cau-chuyen-hinh-thanh', label: 'Câu chuyện hình thành' },
                { path: '/gioi-thieu/muc-tieu-va-y-nghia', label: 'Mục tiêu và ý nghĩa' },
                { path: '/gioi-thieu/doi-ngu-nhom-thuc-hien', label: 'Đội ngũ/ nhóm thực hiện' }
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigateTo(item.path)}
                    className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Khám phá */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold text-red-400 uppercase tracking-wider">
              Khám Phá Sân Khấu
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { path: '/kham-pha/san-khau/nhan-vat', label: 'Nhân vật Chèo' },
                { path: '/kham-pha/san-khau/trang-phuc', label: 'Trang phục & Phục sức' },
                { path: '/kham-pha/san-khau/am-thanh', label: 'Âm Thanh & Làn điệu' },
                { path: '/kham-pha/san-khau/tac-pham-tieu-bieu', label: 'Tác phẩm tiêu biểu' },
                { path: '/kham-pha/tong-quan/lich-su-phat-trien', label: 'Lịch sử phát triển' },
                { path: '/kham-pha/cheo-hien-dai', label: 'Chèo hiện đại' }
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigateTo(item.path)}
                    className="hover:text-red-300 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tiện ích */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold text-amber-500 uppercase tracking-wider">
              Tiện Ích & Dịch Vụ
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { path: '/tien-ich/tham-quan-va-su-kien/lich-bieu-dien', label: 'Lịch biểu diễn' },
                { path: '/tien-ich/tham-quan-va-su-kien/dat-mua-ve', label: 'Đặt mua vé' },
                { path: '/tien-ich/ban-do-bao-tang', label: 'Bản đồ bảo tàng' },
                { path: '/tien-ich/kho-tu-lieu', label: 'Kho tư liệu' },
                { path: '/tien-ich/danh-gia-cai-thien', label: 'Đánh giá/ Cải thiện' }
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigateTo(item.path)}
                    className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => setShowSitemapModal(true)}
                className="inline-flex items-center gap-1.5 text-stone-500 hover:text-amber-400 text-[11px] transition-colors cursor-pointer"
              >
                <Network className="w-3 h-3" />
                <span>Sơ đồ không gian bảo tàng</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sub-bar */}
        <div className="border-t border-stone-800/80 py-5 px-6 sm:px-10 lg:px-12 text-[11px] text-stone-500">
          <div className="max-w-7xl 2xl:max-w-[1620px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              &copy; {new Date().getFullYear()} Bảo Tàng Chèo Số Việt Nam. Gìn giữ và lan tỏa tinh hoa văn hóa dân tộc.
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-stone-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
