import React from 'react'
import {
  Sparkles,
  ArrowRight,
  Landmark,
  Wrench,
  Drama,
  Calendar
} from 'lucide-react'
import type { SitemapNode } from '../data/sitemapData'
import { SITEMAP_DATA } from '../data/sitemapData'

interface SitemapDirectoryProps {
  onSelectNode: (node: SitemapNode) => void
  searchQuery: string
}

export const SitemapDirectory: React.FC<SitemapDirectoryProps> = ({
  onSelectNode,
  searchQuery
}) => {
  const isMatched = (node: SitemapNode) => {
    if (!searchQuery.trim()) return false
    const q = searchQuery.toLowerCase().trim()
    return (
      node.title.toLowerCase().includes(q) ||
      (node.subtitle && node.subtitle.toLowerCase().includes(q)) ||
      node.description.toLowerCase().includes(q)
    )
  }

  const sanh = SITEMAP_DATA.children?.[0]
  const gioiThieu = sanh?.children?.[0]
  const khamPha = sanh?.children?.[1]
  const tienIch = sanh?.children?.[2]

  return (
    <div className="space-y-10">
      {/* SECTION 1: SẢNH & GIỚI THIỆU */}
      <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 md:p-8 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Không Gian Giới Thiệu</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-300 border border-red-500/20">
                  Sảnh Chính
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Khởi đầu hành trình, mục tiêu và đội ngũ sáng lập Bảo tàng Chèo Số
              </p>
            </div>
          </div>

          <button
            onClick={() => gioiThieu && onSelectNode(gioiThieu)}
            className="text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors"
          >
            <span>Xem chi tiết chuyên mục</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gioiThieu?.children?.map((node) => {
            const matched = isMatched(node)
            return (
              <div
                key={node.id}
                onClick={() => onSelectNode(node)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  matched
                    ? 'bg-amber-400/15 border-amber-400 shadow-lg shadow-amber-400/10 scale-[1.02]'
                    : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-amber-400/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {node.badge || 'Giới thiệu'}
                    </span>
                    <Sparkles className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5">
                    {node.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {node.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                  <span>Khám phá</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* SECTION 2: KHÔNG GIAN KHÁM PHÁ & SÂN KHẤU */}
      <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 md:p-8 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Drama className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Không Gian Khám Phá Nghệ Thuật</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Trọng Tâm
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Tổng quan lịch sử, các trụ cột sân khấu (Nhân vật, Trang phục, Âm thanh, Tác phẩm) & Chèo hiện đại
              </p>
            </div>
          </div>

          <button
            onClick={() => khamPha && onSelectNode(khamPha)}
            className="text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors"
          >
            <span>Toàn cảnh không gian</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Group 2.1: Tổng quan */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Phân mục 1: Tổng Quan (Lịch sử & Chiều sâu văn hóa)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {khamPha?.children?.[0]?.children?.map((node) => {
              const matched = isMatched(node)
              return (
                <div
                  key={node.id}
                  onClick={() => onSelectNode(node)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    matched
                      ? 'bg-amber-400/15 border-amber-400 shadow-lg shadow-amber-400/10 scale-[1.02]'
                      : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-amber-400/40'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-2.5 inline-block">
                      {node.badge}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                      {node.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {node.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                    <span>Xem tư liệu</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Group 2.2: Sân Khấu */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            Phân mục 2: Sân Khấu (Trụ cột nghệ thuật biểu diễn)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {khamPha?.children?.[1]?.children?.map((node) => {
              const matched = isMatched(node)
              return (
                <div
                  key={node.id}
                  onClick={() => onSelectNode(node)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    matched
                      ? 'bg-rose-500/15 border-rose-400 shadow-lg shadow-rose-500/10 scale-[1.02]'
                      : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-rose-400/40'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-rose-400/10 text-rose-300 border border-rose-400/20 mb-2.5 inline-block">
                      {node.badge}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors mb-1">
                      {node.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {node.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                    <span>Xem mô hình 3D</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Group 2.3: Chèo hiện đại */}
        <div>
          {(() => {
            const modernNode = khamPha?.children?.[2]
            if (!modernNode) return null
            const matched = isMatched(modernNode)
            return (
              <div
                onClick={() => onSelectNode(modernNode)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group ${
                  matched
                    ? 'bg-violet-500/15 border-violet-400 shadow-lg scale-[1.01]'
                    : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-violet-400/40'
                }`}
              >
                <div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-violet-400/10 text-violet-300 border border-violet-400/20 mb-1.5 inline-block">
                    {modernNode.badge}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                    {modernNode.title} &mdash; {modernNode.subtitle}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-3xl">
                    {modernNode.description}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 text-xs text-violet-300 font-medium">
                  <span>Khám phá tiếp biến</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })()}
        </div>
      </div>

      {/* SECTION 3: TIỆN ÍCH & DỊCH VỤ SỰ KIỆN */}
      <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 md:p-8 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Không Gian Tiện Ích & Dịch Vụ Khách</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Dịch Vụ
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Tra cứu, đánh giá, bản đồ bảo tàng, kho tư liệu cổ, lịch biểu diễn và hỗ trợ khách
              </p>
            </div>
          </div>

          <button
            onClick={() => tienIch && onSelectNode(tienIch)}
            className="text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors"
          >
            <span>Tổng quan tiện ích</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Utilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {tienIch?.children?.slice(0, 4).map((node) => {
            const matched = isMatched(node)
            return (
              <div
                key={node.id}
                onClick={() => onSelectNode(node)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  matched
                    ? 'bg-emerald-400/15 border-emerald-400 shadow-lg scale-[1.02]'
                    : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-emerald-400/40'
                }`}
              >
                <div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 mb-2.5 inline-block">
                    {node.badge}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {node.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {node.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                  <span>Mở công cụ</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}

          {/* Tiện ích số 6: Thông tin và hỗ trợ */}
          {(() => {
            const supportNode = tienIch?.children?.[5]
            if (!supportNode) return null
            const matched = isMatched(supportNode)
            return (
              <div
                key={supportNode.id}
                onClick={() => onSelectNode(supportNode)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  matched
                    ? 'bg-emerald-400/15 border-emerald-400 shadow-lg scale-[1.02]'
                    : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-emerald-400/40'
                }`}
              >
                <div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 mb-2.5 inline-block">
                    {supportNode.badge}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {supportNode.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {supportNode.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                  <span>Liên hệ hỗ trợ</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })()}
        </div>

        {/* Sub-branch 5: Tham quan và sự kiện with its 5 children */}
        <div className="p-6 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-bold text-amber-300">
                Chuyên mục: Tham Quan & Sự Kiện (5 Dịch Vụ)
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Cập nhật lịch diễn, mua vé và cẩm nang tham quan
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {tienIch?.children?.[4]?.children?.map((node) => {
              const matched = isMatched(node)
              return (
                <div
                  key={node.id}
                  onClick={() => onSelectNode(node)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    matched
                      ? 'bg-amber-400/20 border-amber-400 shadow-md scale-105'
                      : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-amber-400/40'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-2 inline-block">
                      {node.badge}
                    </span>
                    <h5 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                      {node.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-amber-300">
                    <span>Chi tiết</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
