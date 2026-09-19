import React, { useState } from 'react'
import {
  X,
  Share2,
  Check,
  Sparkles,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react'
import type { SitemapNode } from '../data/sitemapData'

interface NodeDetailDrawerProps {
  node: SitemapNode | null
  onClose: () => void
  onSelectNode: (node: SitemapNode) => void
  onOpenPage: (pageId: string) => void
}

export const NodeDetailDrawer: React.FC<NodeDetailDrawerProps> = ({
  node,
  onClose,
  onSelectNode,
  onOpenPage
}) => {
  const [copied, setCopied] = useState(false)

  if (!node) return null

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-all duration-300">
      {/* Click outside to close backdrop */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer panel */}
      <div className="w-full max-w-lg bg-[#0d121f] border-l border-white/10 shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 bg-[#07090e]/80 backdrop-blur flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${
                  node.category === 'root'
                    ? 'bg-red-500/20 text-red-300 border-red-500/30'
                    : 'bg-amber-400/15 text-amber-300 border-amber-400/30'
                }`}
              >
                {node.badge || 'Không gian số'}
              </span>
              <span className="text-xs text-slate-400">ID: {node.id}</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              {node.title}
            </h2>
            {node.subtitle && (
              <p className="text-sm text-amber-200/80 font-medium">
                {node.subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleShare}
              title="Sao chép liên kết"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {copied ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <Share2 className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={onClose}
              title="Đóng cửa sổ"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-300 text-sm leading-relaxed">
          {/* Main Description */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-slate-200">
            <p>{node.description}</p>
          </div>

          {/* Key Highlights */}
          {node.highlights && node.highlights.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Điểm nổi bật & Tính năng
              </h3>
              <ul className="space-y-2.5">
                {node.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-slate-200 p-2.5 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Child Nodes if present */}
          {node.children && node.children.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-rose-400" />
                Các phân mục trực thuộc ({node.children.length})
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {node.children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => onSelectNode(child)}
                    className="w-full text-left p-3 rounded-xl bg-white/[0.02] hover:bg-amber-400/10 border border-white/5 hover:border-amber-400/30 transition-all group flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-amber-300 text-sm">
                        {child.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">
                        {child.subtitle || child.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cultural Chèo Context Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-rose-950/40 via-amber-950/20 to-transparent border border-rose-500/20">
            <h4 className="font-semibold text-rose-300 text-xs tracking-wider uppercase mb-1">
              Góc Di Sản & Nghệ Thuật Chèo
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mỗi thành phần trong Bảo tàng Chèo Số được xây dựng nhằm chuẩn hóa tư liệu di sản theo tiêu chuẩn lưu trữ UNESCO, giúp công chúng thế hệ mới dễ dàng tiếp cận và thêm tự hào về nghệ thuật sân khấu truyền thống dân tộc.
            </p>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-white/10 bg-[#07090e]/80 backdrop-blur flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-medium transition-colors"
          >
            Đóng
          </button>
          <button
            onClick={() => {
              onClose()
              onOpenPage(node.id)
            }}
            className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-sm font-semibold shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Xem Trang Chi Tiết</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
