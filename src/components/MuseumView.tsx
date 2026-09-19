import React, { useEffect, useState } from 'react'
import {
  ArrowLeft,
  Share2,
  Check,
  Landmark,
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
import { CulturalValuesWidget } from './interactive/CulturalValuesWidget'
import { BackstageArtWidget } from './interactive/BackstageArtWidget'
import { EditorialHubWalkthrough } from './common/EditorialHubWalkthrough'

interface MuseumViewProps {
  route: RouteNode
  onNavigate: (path: string) => void
}

export const MuseumView: React.FC<MuseumViewProps> = ({ route, onNavigate }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [route.path])

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const detailData = PAGE_DETAILS_MAP[route.id]
  const hasSections = !route.widgetType && !route.isHub && detailData?.sections && detailData.sections.length > 0


  return (
    <div className="w-full min-h-screen text-[#e7e0d8] bg-[#0d0a08] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(180,83,9,0.07),transparent_70%)] pb-24 selection:bg-amber-500 selection:text-black">
      {/* Editorial Breadcrumbs & Header Bar */}
      <div className="sticky top-20 z-30 bg-[#0d0a08]/90 backdrop-blur-md border-b border-stone-800/60 px-6 sm:px-10 lg:px-12 py-3.5">
        <div className="max-w-7xl 2xl:max-w-[1620px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
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

      {/* Main content */}
      <div className="w-full max-w-7xl 2xl:max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 pt-10 sm:pt-14 pb-28">

        {/* ── PAGE HEADER (leaf pages only) ── */}
        {!route.widgetType && !route.isHub && (
          <header className="mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold mb-3">
              {route.category}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-5">
              {route.title}
            </h1>
            {/* Lead — first sentence big */}
            <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed border-l-4 border-amber-600 pl-5">
              {route.description}
            </p>
          </header>
        )}

        {/* ── HUB PAGE ── */}
        {route.isHub && !route.widgetType && (
          <EditorialHubWalkthrough route={route} onNavigate={onNavigate} />
        )}

        {/* ── WIDGETS ── */}
        {route.widgetType === 'overview'     && <OverviewHubWidget onNavigate={onNavigate} />}
        {route.widgetType === 'audio'        && <AudioSamplePlayer currentPath={route.path} onNavigate={onNavigate} />}
        {route.widgetType === 'characters'   && <CharactersGallery currentPath={route.path} onNavigate={onNavigate} />}
        {route.widgetType === 'costumes'     && <CostumesShowcase  currentPath={route.path} onNavigate={onNavigate} />}
        {route.widgetType === 'ticket'       && <TicketBookingWidget />}
        {route.widgetType === 'timeline'     && <TimelineWidget onNavigate={onNavigate} />}
        {route.widgetType === 'feedback'     && <FeedbackWidget />}
        {route.widgetType === 'plays'        && <PlaysShowcase currentPath={route.path} onNavigate={onNavigate} />}
        {route.widgetType === 'modern'       && <ModernCheoShowcase onNavigate={onNavigate} />}
        {route.widgetType === 'map'          && <MuseumMapWidget onNavigate={onNavigate} />}
        {route.widgetType === 'archive'      && <ArchiveVaultWidget />}
        {route.widgetType === 'about-museum' && <AboutMuseumWidget onNavigate={onNavigate} />}
        {route.widgetType === 'field-story'  && <FieldStoryWidget />}
        {route.widgetType === 'goals'        && <GoalsWidget />}
        {route.widgetType === 'team'         && <TeamWidget />}
        {route.widgetType === 'cultural-values' && <CulturalValuesWidget onNavigate={onNavigate} />}
        {route.widgetType === 'backstage'    && <BackstageArtWidget onNavigate={onNavigate} />}

        {/* ── EDITORIAL STORYTELLING (leaf pages with sections) ── */}
        {hasSections && (
          <div className="space-y-0">
            {detailData.sections.map((sec, idx) => {
              const isFirst = idx === 0
              return (
                <section
                  key={idx}
                  className={`relative grid grid-cols-[48px_1fr] sm:grid-cols-[72px_1fr] gap-4 sm:gap-8 py-10 ${
                    idx !== 0 ? 'border-t border-stone-800/50' : ''
                  }`}
                >
                  {/* Left col — chapter number */}
                  <div className="pt-1 flex flex-col items-center gap-2">
                    <span className={`font-serif font-black text-3xl sm:text-5xl leading-none select-none ${
                      isFirst ? 'text-amber-500' : 'text-stone-700'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {/* Vertical line below number */}
                    <div className={`flex-1 w-px ${isFirst ? 'bg-amber-700/50' : 'bg-stone-800/60'}`} />
                  </div>

                  {/* Right col — content */}
                  <div className="space-y-4 min-w-0">
                    <h2 className={`font-serif font-bold leading-snug ${
                      isFirst
                        ? 'text-xl sm:text-2xl text-amber-200'
                        : 'text-lg sm:text-xl text-stone-200'
                    }`}>
                      {sec.heading}
                    </h2>

                    {/* Prose — first paragraph larger if it's first section */}
                    <div className="space-y-3">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className={`leading-relaxed font-light ${
                            isFirst && pIdx === 0
                              ? 'text-base sm:text-lg text-stone-200'
                              : 'text-sm sm:text-base text-stone-400'
                          }`}
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Bullets → inline tags, not a grid */}
                    {sec.bullets && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {sec.bullets.map((b, bIdx) => (
                          <span
                            key={bIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-stone-800/70 text-stone-300 border border-stone-700/50"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              )
            })}

            {/* ── FUN FACTS — pull-quote style ── */}
            {detailData.funFacts && detailData.funFacts.length > 0 && (
              <div className="mt-10 pt-10 border-t border-stone-800/50 space-y-5">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-600">
                  Góc thú vị
                </p>
                <div className="space-y-4">
                  {detailData.funFacts.map((fact, idx) => (
                    <blockquote
                      key={idx}
                      className="border-l-2 border-amber-600/60 pl-5 text-sm sm:text-base text-stone-400 font-light leading-relaxed italic"
                    >
                      {fact}
                    </blockquote>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-stone-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
          <button
            onClick={() => onNavigate('/')}
            className="text-stone-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Về Sảnh Đón Tiếp</span>
          </button>
          <span className="text-stone-600 font-serif">Bảo Tàng Chèo Số • Gìn Giữ Tinh Hoa</span>
        </div>
      </div>
    </div>
  )
}
