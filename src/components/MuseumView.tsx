import React, { useEffect, useState } from 'react'
import {
  ArrowLeft,
  Share2,
  Check,
  Landmark,
  ChevronDown,
  ChevronUp,
  BookMarked
} from 'lucide-react'
import type { RouteNode } from '../data/sitemapRoutes'
import { PAGE_DETAILS_MAP } from '../data/pageDetailsData'
import { AudioSamplePlayer } from './interactive/AudioSamplePlayer'
import { CharactersGallery } from './interactive/CharactersGallery'
import { CostumesShowcase } from './interactive/CostumesShowcase'
import { TicketBookingWidget } from './interactive/TicketBookingWidget'
import { TimelineWidget } from './interactive/TimelineWidget'
import { FeedbackWidget } from './interactive/FeedbackWidget'
import { PlaysShowcase } from './interactive/PlaysShowcase'
import { ModernCheoShowcase } from './interactive/ModernCheoShowcase'
import { MuseumMapWidget } from './interactive/MuseumMapWidget'
import { ArchiveVaultWidget } from './interactive/ArchiveVaultWidget'
import { AboutMuseumWidget } from './interactive/AboutMuseumWidget'
import { FieldStoryWidget } from './interactive/FieldStoryWidget'
import { GoalsWidget } from './interactive/GoalsWidget'
import { TeamWidget } from './interactive/TeamWidget'
import { OverviewHubWidget } from './interactive/OverviewHubWidget'
import { EditorialHubWalkthrough } from './common/EditorialHubWalkthrough'

interface MuseumViewProps {
  route: RouteNode
  onNavigate: (path: string) => void
}

export const MuseumView: React.FC<MuseumViewProps> = ({ route, onNavigate }) => {
  const [copied, setCopied] = useState(false)
  const [expandedSection, setExpandedSection] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setExpandedSection(null)
  }, [route.path])

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const detailData = PAGE_DETAILS_MAP[route.id]
  const hasSections = !route.widgetType && !route.isHub && detailData?.sections && detailData.sections.length > 0

  const toggleSection = (idx: number) => {
    setExpandedSection(prev => (prev === idx ? null : idx))
  }

  return (
    <div className="w-full min-h-screen text-[#e7e0d8] bg-[#0d0a08] pb-24 selection:bg-amber-500 selection:text-black">
      {/* Editorial Breadcrumbs & Header Bar */}
      <div className="sticky top-20 z-30 bg-[#0d0a08]/90 backdrop-blur-md border-b border-stone-800/60 px-4 sm:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Breadcrumb Trail */}
          <nav className="flex items-center flex-wrap gap-2 text-stone-400 font-sans">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Landmark className="w-3.5 h-3.5 text-amber-500" />
              <span>Bảo Tàng Chèo Số</span>
            </button>

            {route.breadcrumbs.slice(1).map((crumb, idx) => {
              const isLast = idx === route.breadcrumbs.length - 2
              return (
                <React.Fragment key={crumb.path}>
                  <span className="text-stone-600 font-serif">/</span>
                  {isLast ? (
                    <span className="text-stone-100 font-semibold">{crumb.title}</span>
                  ) : (
                    <button
                      onClick={() => onNavigate(crumb.path)}
                      className="hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {crumb.title}
                    </button>
                  )}
                </React.Fragment>
              )
            })}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/60 hover:bg-stone-800 text-stone-300 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Đã chép link</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-stone-400" />
                  <span>Chia sẻ</span>
                </>
              )}
            </button>

            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-amber-800/40 text-amber-400 hover:bg-amber-950/30 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Về Sảnh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Exhibition Container — Spacious & Open */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 space-y-14">
        {/* Exhibition Header — Chỉ hiển thị khi trang không có widget và không phải Hub (vì Hub đã có banner dẫn dắt riêng) */}
        {!route.widgetType && !route.isHub && (
          <header className="space-y-3 text-left border-b border-stone-800/60 pb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
              {route.category}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              {route.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
              {route.description}
            </p>
          </header>
        )}

        {/* ================= IF HUB PAGE: EDITORIAL STORYTELLING WALKTHROUGH ================= */}
        {/* NO BORING 4-CARD GRIDS! Each chapter unfolds with large watermark numbers and narrative flow */}
        {route.isHub && !route.widgetType && (
          <EditorialHubWalkthrough
            route={route}
            onNavigate={onNavigate}
          />
        )}

        {/* ================= INTERACTIVE ARTIFACT WIDGETS ================= */}
        {route.widgetType === 'overview' && <OverviewHubWidget onNavigate={onNavigate} />}
        {route.widgetType === 'audio' && <AudioSamplePlayer currentPath={route.path} onNavigate={onNavigate} />}
        {route.widgetType === 'characters' && <CharactersGallery currentPath={route.path} onNavigate={onNavigate} />}
        {route.widgetType === 'costumes' && <CostumesShowcase currentPath={route.path} onNavigate={onNavigate} />}
        {route.widgetType === 'ticket' && <TicketBookingWidget />}
        {route.widgetType === 'timeline' && <TimelineWidget />}
        {route.widgetType === 'feedback' && <FeedbackWidget />}
        {route.widgetType === 'plays' && <PlaysShowcase currentPath={route.path} onNavigate={onNavigate} />}
        {route.widgetType === 'modern' && <ModernCheoShowcase />}
        {route.widgetType === 'map' && <MuseumMapWidget />}
        {route.widgetType === 'archive' && <ArchiveVaultWidget />}
        {route.widgetType === 'about-museum' && <AboutMuseumWidget onNavigate={onNavigate} />}
        {route.widgetType === 'field-story' && <FieldStoryWidget />}
        {route.widgetType === 'goals' && <GoalsWidget />}
        {route.widgetType === 'team' && <TeamWidget />}

        {/* ================= COLLAPSIBLE ACCORDION FOR DEEP RESEARCH ================= */}
        {/* Clean, discreet, collapsed by default. No heavy modals, no "Mở Bài Chuyên Khảo" buttons */}
        {hasSections && (
          <section className="pt-8 border-t border-stone-800/60 text-left space-y-4">
            <div className="flex items-center gap-2 text-stone-400 text-xs font-serif uppercase tracking-wider">
              <BookMarked className="w-4 h-4 text-amber-500" />
              <span>Tư Liệu Khảo Cứu Bổ Trợ</span>
            </div>

            <div className="divide-y divide-stone-800/60 border-y border-stone-800/60">
              {detailData.sections.map((sec, idx) => {
                const isExpanded = expandedSection === idx
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      onClick={() => toggleSection(idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-stone-800/30 transition-colors cursor-pointer"
                    >
                      <span className="font-serif font-semibold text-sm sm:text-base text-stone-200">
                        {sec.heading}
                      </span>
                      <div className="flex items-center gap-2 shrink-0 text-amber-400 text-xs font-medium">
                        <span>{isExpanded ? 'Thu gọn' : 'Đọc thêm'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-amber-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-500" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 space-y-3 text-xs sm:text-sm text-stone-300 font-light leading-relaxed animate-in fade-in duration-200">
                        {sec.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                        {sec.bullets && (
                          <ul className="space-y-1.5 pt-2 pl-4 list-disc text-stone-400 text-xs">
                            {sec.bullets.map((b, bIdx) => (
                              <li key={bIdx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-stone-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
          <button
            onClick={() => onNavigate('/')}
            className="text-stone-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Về Sảnh Đón Tiếp</span>
          </button>

          <span className="text-stone-600 font-serif">Bảo Tàng Chèo Số &bull; Gìn Giữ Tinh Hoa</span>
        </div>
      </div>
    </div>
  )
}
