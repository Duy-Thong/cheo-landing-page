import { useState, useRef } from 'react'
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Info
} from 'lucide-react'
import type { SitemapNode } from '../data/sitemapData'
import { SITEMAP_DATA } from '../data/sitemapData'

interface SitemapTreeProps {
  onSelectNode: (node: SitemapNode) => void
  searchQuery: string
}

export const SitemapTree: React.FC<SitemapTreeProps> = ({
  onSelectNode,
  searchQuery
}) => {
  const [zoom, setZoom] = useState<number>(1)
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)

  // Zoom handlers
  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.15, 1.8))
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.15, 0.45))
  const handleResetZoom = () => {
    setZoom(0.85)
    setPan({ x: 0, y: 0 })
  }

  // Pan / Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return
    setIsDragging(true)
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }

  const handleMouseUp = () => setIsDragging(false)


  const isMatched = (node: SitemapNode) => {
    if (!searchQuery.trim()) return false
    const q = searchQuery.toLowerCase().trim()
    return (
      node.title.toLowerCase().includes(q) ||
      (node.subtitle && node.subtitle.toLowerCase().includes(q)) ||
      node.description.toLowerCase().includes(q)
    )
  }

  // Helper render for Leaf / Sub-node
  const renderLeaf = (node: SitemapNode) => {
    const matched = isMatched(node)
    return (
      <button
        key={node.id}
        onClick={() => onSelectNode(node)}
        className={`relative px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer text-slate-950 shadow-md ${
          matched
            ? 'ring-4 ring-rose-500 scale-105 bg-amber-300 shadow-rose-500/50'
            : 'bg-[#ffde00] hover:bg-[#ffd000] hover:scale-105 hover:shadow-lg'
        }`}
        style={{
          boxShadow: '0 4px 14px rgba(254, 222, 0, 0.25)'
        }}
      >
        {node.title}
        {matched && (
          <span className="absolute -top-2 -right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 text-[9px] text-white items-center justify-center font-bold">
              ★
            </span>
          </span>
        )}
      </button>
    )
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`relative w-full h-[760px] bg-[#0c101a] rounded-3xl border border-white/10 overflow-hidden select-none cursor-grab active:cursor-grabbing shadow-2xl transition-colors`}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
        backgroundSize: '28px 28px'
      }}
    >
      {/* Top Floating Controls Bar */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#07090e]/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/10 shadow-xl">
        <span className="text-xs font-semibold text-slate-300 hidden sm:inline">
          Thu phóng & Di chuyển:
        </span>
        <button
          onClick={handleZoomIn}
          title="Phóng to"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <span className="text-xs font-mono text-amber-400 px-1 min-w-12 text-center">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={handleZoomOut}
          title="Thu nhỏ"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <div className="w-[1px] h-4 bg-white/15 mx-1" />
        <button
          onClick={handleResetZoom}
          title="Đặt lại góc nhìn"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Đặt lại</span>
        </button>
      </div>

      {/* Guide Note on Top Right */}
      <div className="absolute top-4 right-4 z-20 hidden md:flex items-center gap-2 text-xs text-slate-400 bg-[#07090e]/85 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/10">
        <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>Kéo chuột để di chuyển canvas • Click vào nút để xem thông tin chi tiết</span>
      </div>

      {/* Tree Canvas Layer */}
      <div
        className="w-full h-full flex items-start justify-center pt-10 transition-transform duration-75 origin-top"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`
        }}
      >
        <div className="flex flex-col items-center min-w-[1750px] pb-32">
          {/* ================= LEVEL 0: ROOT (BẢO TÀNG CHÈO SỐ) ================= */}
          <div className="relative flex flex-col items-center z-10">
            <button
              onClick={() => onSelectNode(SITEMAP_DATA)}
              className={`relative px-7 py-3.5 rounded-2xl font-extrabold text-sm sm:text-base tracking-wider text-white transition-all duration-200 cursor-pointer shadow-xl ${
                isMatched(SITEMAP_DATA)
                  ? 'ring-4 ring-amber-400 scale-105 shadow-amber-400/50'
                  : 'hover:scale-105'
              }`}
              style={{
                backgroundColor: '#e60000',
                boxShadow: '0 8px 24px rgba(230, 0, 0, 0.45)'
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span>BẢO TÀNG CHÈO SỐ</span>
              </div>
            </button>

            {/* Vertical connector to Sảnh */}
            <div className="w-[3px] h-10 bg-slate-500 relative flex justify-center items-end">
              <div className="w-0 h-0 border-x-4 border-x-transparent border-t-[7px] border-t-slate-500 mb-[-6px]" />
            </div>
          </div>

          {/* ================= LEVEL 1: SẢNH ================= */}
          <div className="relative flex flex-col items-center z-10">
            <button
              onClick={() => {
                const sanh = SITEMAP_DATA.children?.[0]
                if (sanh) onSelectNode(sanh)
              }}
              className="px-6 py-2.5 rounded-2xl font-bold text-sm tracking-wide text-slate-950 bg-[#ffde00] hover:bg-[#ffd000] hover:scale-105 transition-all shadow-lg cursor-pointer"
              style={{
                boxShadow: '0 4px 16px rgba(254, 222, 0, 0.3)'
              }}
            >
              Sảnh
            </button>

            {/* SVG Connecting Branches: Sảnh -> [Giới thiệu, Khám phá, Tiện ích] */}
            {/* Width ~ 1700px, Height ~ 60px */}
            <svg
              className="w-[1550px] h-[50px] pointer-events-none overflow-visible"
              viewBox="0 0 1550 50"
            >
              <defs>
                <marker
                  id="tree-arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#71717a" />
                </marker>
              </defs>

              {/* Branch Center Down: Sảnh (x=775) -> Khám phá (x=775, y=50) */}
              <line
                x1="775"
                y1="0"
                x2="775"
                y2="50"
                stroke="#71717a"
                strokeWidth="2.5"
                markerEnd="url(#tree-arrow)"
              />

              {/* Branch Left: Sảnh (x=775) -> Giới thiệu (x=210) */}
              <path
                d="M 775 0 H 220 Q 210 0 210 10 V 50"
                fill="none"
                stroke="#71717a"
                strokeWidth="2.5"
                markerEnd="url(#tree-arrow)"
              />

              {/* Branch Right: Sảnh (x=775) -> Tiện ích (x=1340) */}
              <path
                d="M 775 0 H 1330 Q 1340 0 1340 10 V 50"
                fill="none"
                stroke="#71717a"
                strokeWidth="2.5"
                markerEnd="url(#tree-arrow)"
              />
            </svg>
          </div>

          {/* ================= LEVEL 2 & BELOW: 3 MAIN BRANCHES ================= */}
          <div className="w-[1600px] grid grid-cols-12 gap-6 items-start mt-2">
            {/* =======================================================
                NHÁNH 1 (TRÁI): GIỚI THIỆU (col-span-3: ~380px)
                ======================================================= */}
            <div className="col-span-3 flex flex-col items-center">
              {/* Giới thiệu Node */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => {
                    const node = SITEMAP_DATA.children?.[0]?.children?.[0]
                    if (node) onSelectNode(node)
                  }}
                  className="px-6 py-2.5 rounded-2xl font-bold text-sm tracking-wide text-slate-950 bg-[#ffde00] hover:bg-[#ffd000] hover:scale-105 transition-all shadow-md cursor-pointer"
                  style={{
                    boxShadow: '0 4px 16px rgba(254, 222, 0, 0.3)'
                  }}
                >
                  Giới thiệu
                </button>

                {/* SVG Connectors to 4 children of Giới thiệu */}
                <svg
                  className="w-[360px] h-[55px] pointer-events-none overflow-visible"
                  viewBox="0 0 360 55"
                >
                  {/* Child 1: Bảo tàng số “Chèo” (x=45) */}
                  <path
                    d="M 180 0 H 55 Q 45 0 45 10 V 55"
                    fill="none"
                    stroke="#71717a"
                    strokeWidth="2.5"
                    markerEnd="url(#tree-arrow)"
                  />
                  {/* Child 2: Câu chuyện hình thành (x=135) */}
                  <path
                    d="M 180 0 H 145 Q 135 0 135 10 V 55"
                    fill="none"
                    stroke="#71717a"
                    strokeWidth="2.5"
                    markerEnd="url(#tree-arrow)"
                  />
                  {/* Child 3: Mục tiêu và ý nghĩa (x=225) */}
                  <path
                    d="M 180 0 H 215 Q 225 0 225 10 V 55"
                    fill="none"
                    stroke="#71717a"
                    strokeWidth="2.5"
                    markerEnd="url(#tree-arrow)"
                  />
                  {/* Child 4: Đội ngũ/ nhóm thực hiện (x=315) */}
                  <path
                    d="M 180 0 H 305 Q 315 0 315 10 V 55"
                    fill="none"
                    stroke="#71717a"
                    strokeWidth="2.5"
                    markerEnd="url(#tree-arrow)"
                  />
                </svg>
              </div>

              {/* 4 Children of Giới thiệu */}
              <div className="w-[380px] grid grid-cols-4 gap-2 mt-1">
                {SITEMAP_DATA.children?.[0]?.children?.[0]?.children?.map(
                  (child) => (
                    <div key={child.id} className="flex justify-center">
                      {renderLeaf(child)}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* =======================================================
                NHÁNH 2 (GIỮA): KHÁM PHÁ (col-span-6: ~760px)
                ======================================================= */}
            <div className="col-span-6 flex flex-col items-center">
              {/* Khám phá Node */}
              <button
                onClick={() => {
                  const node = SITEMAP_DATA.children?.[0]?.children?.[1]
                  if (node) onSelectNode(node)
                }}
                className="px-6 py-2.5 rounded-2xl font-bold text-sm tracking-wide text-slate-950 bg-[#ffde00] hover:bg-[#ffd000] hover:scale-105 transition-all shadow-md cursor-pointer"
                style={{
                  boxShadow: '0 4px 16px rgba(254, 222, 0, 0.3)'
                }}
              >
                Khám phá
              </button>

              {/* SVG Connectors: Khám phá -> [Tổng quan (x=130), Sân Khấu (x=410), Chèo hiện đại (x=680)] */}
              <svg
                className="w-[780px] h-[55px] pointer-events-none overflow-visible"
                viewBox="0 0 780 55"
              >
                {/* Branch Left to Tổng quan (x=130) */}
                <path
                  d="M 390 0 H 140 Q 130 0 130 10 V 55"
                  fill="none"
                  stroke="#71717a"
                  strokeWidth="2.5"
                  markerEnd="url(#tree-arrow)"
                />
                {/* Branch Center to Sân Khấu (x=390) */}
                <line
                  x1="390"
                  y1="0"
                  x2="390"
                  y2="55"
                  stroke="#71717a"
                  strokeWidth="2.5"
                  markerEnd="url(#tree-arrow)"
                />
                {/* Branch Right to Chèo hiện đại (x=650) */}
                <path
                  d="M 390 0 H 640 Q 650 0 650 10 V 55"
                  fill="none"
                  stroke="#71717a"
                  strokeWidth="2.5"
                  markerEnd="url(#tree-arrow)"
                />
              </svg>

              {/* Sub-branches of Khám phá */}
              <div className="w-[780px] grid grid-cols-12 gap-3 mt-1 items-start">
                {/* 2.1: Tổng quan (col-span-4) */}
                <div className="col-span-4 flex flex-col items-center">
                  <button
                    onClick={() => {
                      const node = SITEMAP_DATA.children?.[0]?.children?.[1]?.children?.[0]
                      if (node) onSelectNode(node)
                    }}
                    className="px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide text-slate-950 bg-[#ffde00] hover:bg-[#ffd000] hover:scale-105 transition-all shadow-md cursor-pointer"
                  >
                    Tổng quan
                  </button>

                  {/* SVG connectors to 3 children of Tổng quan */}
                  <svg
                    className="w-[240px] h-[50px] pointer-events-none overflow-visible"
                    viewBox="0 0 240 50"
                  >
                    {/* Child 1: Lịch sử phát triển (x=40) */}
                    <path
                      d="M 120 0 H 50 Q 40 0 40 10 V 50"
                      fill="none"
                      stroke="#71717a"
                      strokeWidth="2.5"
                      markerEnd="url(#tree-arrow)"
                    />
                    {/* Child 2: Giá trị văn hoá (x=120) */}
                    <line
                      x1="120"
                      y1="0"
                      x2="120"
                      y2="50"
                      stroke="#71717a"
                      strokeWidth="2.5"
                      markerEnd="url(#tree-arrow)"
                    />
                    {/* Child 3: Phía sau sân khấu (x=200) */}
                    <path
                      d="M 120 0 H 190 Q 200 0 200 10 V 50"
                      fill="none"
                      stroke="#71717a"
                      strokeWidth="2.5"
                      markerEnd="url(#tree-arrow)"
                    />
                  </svg>

                  {/* 3 Children of Tổng quan */}
                  <div className="w-[260px] grid grid-cols-3 gap-2 mt-1">
                    {SITEMAP_DATA.children?.[0]?.children?.[1]?.children?.[0]?.children?.map(
                      (child) => (
                        <div key={child.id} className="flex justify-center">
                          {renderLeaf(child)}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* 2.2: Sân Khấu (col-span-5) */}
                <div className="col-span-5 flex flex-col items-center">
                  <button
                    onClick={() => {
                      const node = SITEMAP_DATA.children?.[0]?.children?.[1]?.children?.[1]
                      if (node) onSelectNode(node)
                    }}
                    className="px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide text-slate-950 bg-[#ffde00] hover:bg-[#ffd000] hover:scale-105 transition-all shadow-md cursor-pointer"
                  >
                    Sân Khấu
                  </button>

                  {/* SVG connectors to 4 children of Sân Khấu */}
                  <svg
                    className="w-[340px] h-[50px] pointer-events-none overflow-visible"
                    viewBox="0 0 340 50"
                  >
                    {/* Child 1: Nhân vật (x=45) */}
                    <path
                      d="M 170 0 H 55 Q 45 0 45 10 V 50"
                      fill="none"
                      stroke="#71717a"
                      strokeWidth="2.5"
                      markerEnd="url(#tree-arrow)"
                    />
                    {/* Child 2: Trang phục (x=125) */}
                    <path
                      d="M 170 0 H 135 Q 125 0 125 10 V 50"
                      fill="none"
                      stroke="#71717a"
                      strokeWidth="2.5"
                      markerEnd="url(#tree-arrow)"
                    />
                    {/* Child 3: Âm Thanh (x=215) */}
                    <path
                      d="M 170 0 H 205 Q 215 0 215 10 V 50"
                      fill="none"
                      stroke="#71717a"
                      strokeWidth="2.5"
                      markerEnd="url(#tree-arrow)"
                    />
                    {/* Child 4: Tác phẩm tiêu biểu (x=295) */}
                    <path
                      d="M 170 0 H 285 Q 295 0 295 10 V 50"
                      fill="none"
                      stroke="#71717a"
                      strokeWidth="2.5"
                      markerEnd="url(#tree-arrow)"
                    />
                  </svg>

                  {/* 4 Children of Sân Khấu */}
                  <div className="w-[360px] grid grid-cols-4 gap-2 mt-1">
                    {SITEMAP_DATA.children?.[0]?.children?.[1]?.children?.[1]?.children?.map(
                      (child) => (
                        <div key={child.id} className="flex justify-center">
                          {renderLeaf(child)}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* 2.3: Chèo hiện đại (col-span-3) */}
                <div className="col-span-3 flex flex-col items-center">
                  {(() => {
                    const node = SITEMAP_DATA.children?.[0]?.children?.[1]?.children?.[2]
                    return node ? renderLeaf(node) : null
                  })()}
                </div>
              </div>
            </div>

            {/* =======================================================
                NHÁNH 3 (PHẢI): TIỆN ÍCH (col-span-3: ~460px)
                ======================================================= */}
            <div className="col-span-3 flex flex-col items-center">
              {/* Tiện ích Node */}
              <button
                onClick={() => {
                  const node = SITEMAP_DATA.children?.[0]?.children?.[2]
                  if (node) onSelectNode(node)
                }}
                className="px-6 py-2.5 rounded-2xl font-bold text-sm tracking-wide text-slate-950 bg-[#ffde00] hover:bg-[#ffd000] hover:scale-105 transition-all shadow-md cursor-pointer"
                style={{
                  boxShadow: '0 4px 16px rgba(254, 222, 0, 0.3)'
                }}
              >
                Tiện ích
              </button>

              {/* SVG Connectors to 6 children of Tiện ích */}
              <svg
                className="w-[450px] h-[55px] pointer-events-none overflow-visible"
                viewBox="0 0 450 55"
              >
                {/* Child 1: Tìm kiếm (x=35) */}
                <path
                  d="M 225 0 H 45 Q 35 0 35 10 V 55"
                  fill="none"
                  stroke="#71717a"
                  strokeWidth="2.5"
                  markerEnd="url(#tree-arrow)"
                />
                {/* Child 2: Đánh giá/ Cải thiện (x=110) */}
                <path
                  d="M 225 0 H 120 Q 110 0 110 10 V 55"
                  fill="none"
                  stroke="#71717a"
                  strokeWidth="2.5"
                  markerEnd="url(#tree-arrow)"
                />
                {/* Child 3: Bản đồ bảo tàng (x=185) */}
                <path
                  d="M 225 0 H 195 Q 185 0 185 10 V 55"
                  fill="none"
                  stroke="#71717a"
                  strokeWidth="2.5"
                  markerEnd="url(#tree-arrow)"
                />
                {/* Child 4: Kho tư liệu (x=260) */}
                <path
                  d="M 225 0 H 250 Q 260 0 260 10 V 55"
                  fill="none"
                  stroke="#71717a"
                  strokeWidth="2.5"
                  markerEnd="url(#tree-arrow)"
                />
                {/* Child 5: Tham quan và sự kiện (x=335) */}
                <path
                  d="M 225 0 H 325 Q 335 0 335 10 V 55"
                  fill="none"
                  stroke="#71717a"
                  strokeWidth="2.5"
                  markerEnd="url(#tree-arrow)"
                />
                {/* Child 6: Thông tin và hỗ trợ (x=415) */}
                <path
                  d="M 225 0 H 405 Q 415 0 415 10 V 55"
                  fill="none"
                  stroke="#71717a"
                  strokeWidth="2.5"
                  markerEnd="url(#tree-arrow)"
                />
              </svg>

              {/* 6 Children of Tiện ích */}
              <div className="w-[460px] grid grid-cols-6 gap-2 mt-1 items-start">
                {/* 1: Tìm kiếm */}
                <div className="flex justify-center">
                  {(() => {
                    const node = SITEMAP_DATA.children?.[0]?.children?.[2]?.children?.[0]
                    return node ? renderLeaf(node) : null
                  })()}
                </div>
                {/* 2: Đánh giá/ Cải thiện */}
                <div className="flex justify-center">
                  {(() => {
                    const node = SITEMAP_DATA.children?.[0]?.children?.[2]?.children?.[1]
                    return node ? renderLeaf(node) : null
                  })()}
                </div>
                {/* 3: Bản đồ bảo tàng */}
                <div className="flex justify-center">
                  {(() => {
                    const node = SITEMAP_DATA.children?.[0]?.children?.[2]?.children?.[2]
                    return node ? renderLeaf(node) : null
                  })()}
                </div>
                {/* 4: Kho tư liệu */}
                <div className="flex justify-center">
                  {(() => {
                    const node = SITEMAP_DATA.children?.[0]?.children?.[2]?.children?.[3]
                    return node ? renderLeaf(node) : null
                  })()}
                </div>

                {/* 5: Tham quan và sự kiện (With its 5 sub-children!) */}
                <div className="flex flex-col items-center">
                  {(() => {
                    const node = SITEMAP_DATA.children?.[0]?.children?.[2]?.children?.[4]
                    if (!node) return null
                    return (
                      <div className="flex flex-col items-center">
                        {renderLeaf(node)}

                        {/* SVG connectors to 5 sub-children of Tham quan và sự kiện */}
                        <svg
                          className="w-[320px] h-[50px] pointer-events-none overflow-visible"
                          viewBox="0 0 320 50"
                        >
                          {/* Sub 1: Thông báo sự kiện (x=30) */}
                          <path
                            d="M 160 0 H 40 Q 30 0 30 10 V 50"
                            fill="none"
                            stroke="#71717a"
                            strokeWidth="2.5"
                            markerEnd="url(#tree-arrow)"
                          />
                          {/* Sub 2: Lịch biểu diễn (x=95) */}
                          <path
                            d="M 160 0 H 105 Q 95 0 95 10 V 50"
                            fill="none"
                            stroke="#71717a"
                            strokeWidth="2.5"
                            markerEnd="url(#tree-arrow)"
                          />
                          {/* Sub 3: Đặt mua vé (x=160) */}
                          <line
                            x1="160"
                            y1="0"
                            x2="160"
                            y2="50"
                            stroke="#71717a"
                            strokeWidth="2.5"
                            markerEnd="url(#tree-arrow)"
                          />
                          {/* Sub 4: Địa điểm biểu diễn (x=225) */}
                          <path
                            d="M 160 0 H 215 Q 225 0 225 10 V 50"
                            fill="none"
                            stroke="#71717a"
                            strokeWidth="2.5"
                            markerEnd="url(#tree-arrow)"
                          />
                          {/* Sub 5: Thông tin tham quan (x=290) */}
                          <path
                            d="M 160 0 H 280 Q 290 0 290 10 V 50"
                            fill="none"
                            stroke="#71717a"
                            strokeWidth="2.5"
                            markerEnd="url(#tree-arrow)"
                          />
                        </svg>

                        {/* 5 sub-children buttons */}
                        <div className="w-[330px] grid grid-cols-5 gap-1.5 mt-1">
                          {node.children?.map((sub) => (
                            <div key={sub.id} className="flex justify-center">
                              {renderLeaf(sub)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })()}
                </div>

                {/* 6: Thông tin và hỗ trợ */}
                <div className="flex justify-center">
                  {(() => {
                    const node = SITEMAP_DATA.children?.[0]?.children?.[2]?.children?.[5]
                    return node ? renderLeaf(node) : null
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
