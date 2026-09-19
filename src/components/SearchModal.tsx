import React, { useState } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import { SITEMAP_ROUTES } from '../data/sitemapRoutes'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (path: string) => void
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('')

  if (!isOpen) return null

  const allRoutes = Object.values(SITEMAP_ROUTES).filter((r) => r.path !== '/sanh')

  const filtered = query.trim()
    ? allRoutes.filter(
        (n) =>
          n.title.toLowerCase().includes(query.toLowerCase().trim()) ||
          n.subtitle.toLowerCase().includes(query.toLowerCase().trim()) ||
          n.description.toLowerCase().includes(query.toLowerCase().trim()) ||
          n.path.toLowerCase().includes(query.toLowerCase().trim())
      )
    : allRoutes.slice(0, 8)

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150 font-sans">
      <div className="flex-1 absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#16120f] border border-stone-800 rounded-2xl shadow-2xl overflow-hidden z-10 text-left">
        {/* Search Bar */}
        <div className="p-4 border-b border-stone-800 flex items-center gap-3">
          <Search className="w-4 h-4 text-amber-500 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm nội dung (Âm thanh, Trang phục, Lịch biểu diễn, Nhân vật Chèo...)"
            className="w-full bg-transparent text-white placeholder:text-stone-500 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-0.5 rounded bg-stone-800 text-[11px] text-stone-400 hover:text-white cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          <div className="px-3 py-1.5 text-[11px] text-stone-500 uppercase tracking-wider">
            {query.trim() ? `Kết quả tìm kiếm (${filtered.length})` : 'Gợi ý khám phá'}
          </div>

          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path)
                  onClose()
                }}
                className="w-full text-left p-3 rounded-xl hover:bg-stone-800/80 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-stone-200 group-hover:text-amber-300">
                      {item.title}
                    </span>
                    {item.breadcrumbs && item.breadcrumbs[1] && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-stone-800/80 text-stone-400 font-sans">
                        {item.breadcrumbs[1].title}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-stone-400 line-clamp-1 mt-1">
                    {item.subtitle || item.description}
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-3" />
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-stone-500 text-xs">
              Không tìm thấy nội dung phù hợp với "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
