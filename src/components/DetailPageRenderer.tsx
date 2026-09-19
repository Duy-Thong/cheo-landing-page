import React, { useEffect } from 'react'
import {
  ArrowLeft,
  Share2,
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react'
import { PAGE_DETAILS_MAP } from '../data/pageDetailsData'
import { SITEMAP_DATA, getAllNodes } from '../data/sitemapData'
import { AudioSamplePlayer } from './interactive/AudioSamplePlayer'
import { CharactersGallery } from './interactive/CharactersGallery'
import { CostumesShowcase } from './interactive/CostumesShowcase'
import { TicketBookingWidget } from './interactive/TicketBookingWidget'
import { TimelineWidget } from './interactive/TimelineWidget'
import { FeedbackWidget } from './interactive/FeedbackWidget'
import { PlaysShowcase } from './interactive/PlaysShowcase'

interface DetailPageRendererProps {
  pageId: string
  onBackToSitemap: () => void
  onNavigatePage: (pageId: string) => void
}

export const DetailPageRenderer: React.FC<DetailPageRendererProps> = ({
  pageId,
  onBackToSitemap,
  onNavigatePage
}) => {
  const [copied, setCopied] = React.useState(false)

  // Scroll to top when pageId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pageId])

  const content = PAGE_DETAILS_MAP[pageId]
  const allNodes = getAllNodes(SITEMAP_DATA)
  const currentIndex = allNodes.findIndex((n) => n.id === pageId)
  const prevNode = currentIndex > 0 ? allNodes[currentIndex - 1] : null
  const nextNode = currentIndex < allNodes.length - 1 ? allNodes[currentIndex + 1] : null

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Fallback if not specifically in map
  const activeTitle = content?.title || allNodes.find((n) => n.id === pageId)?.title || pageId
  const activeIntro = content?.introduction || allNodes.find((n) => n.id === pageId)?.description || ''

  return (
    <div className="w-full min-h-screen text-slate-100 flex flex-col pb-20">
      {/* Sticky Top Subheader with Breadcrumbs & Back Button */}
      <div className="sticky top-20 z-30 bg-[#07090e]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3.5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToSitemap}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-amber-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Sơ đồ Sitemap</span>
            </button>

            {/* Breadcrumb links */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 pl-2">
              <span className="text-slate-600">/</span>
              {content?.breadcrumb.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span className="text-slate-600">&rsaquo;</span>}
                  <span className={idx === content.breadcrumb.length - 1 ? 'text-white font-medium' : 'text-slate-400'}>
                    {crumb}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Đã sao chép link</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Chia sẻ trang</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Page Body Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-12">
        {/* Hero Section */}
        <div className="text-left space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-red-600/20 text-red-300 border border-red-500/30 font-semibold tracking-wide">
              {content?.heroBadge || 'Bảo Tàng Chèo Số'}
            </span>
            <span className="text-xs text-slate-500">Mã phân mục: #{pageId}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {activeTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-4xl">
            {activeIntro}
          </p>

          {/* Cultural Quote if exists */}
          {content?.quote && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-transparent border-l-4 border-amber-400 my-4">
              <p className="text-sm sm:text-base font-serif italic text-amber-200 leading-relaxed">
                &ldquo;{content.quote.text}&rdquo;
              </p>
              {content.quote.author && (
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  &mdash; {content.quote.author}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Dynamic Specialized Interactive Widget */}
        {content?.widgetType === 'audio' && <AudioSamplePlayer />}
        {content?.widgetType === 'characters' && <CharactersGallery />}
        {content?.widgetType === 'costumes' && <CostumesShowcase />}
        {content?.widgetType === 'ticket' && <TicketBookingWidget />}
        {content?.widgetType === 'timeline' && <TimelineWidget />}
        {content?.widgetType === 'feedback' && <FeedbackWidget />}
        {content?.widgetType === 'plays' && <PlaysShowcase />}

        {/* Editorial Sections */}
        {content?.sections && content.sections.length > 0 && (
          <div className="space-y-8 text-left">
            {content.sections.map((sec, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{sec.heading}</span>
                </h3>
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
                {sec.bullets && (
                  <ul className="space-y-2 pt-2">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Fun Facts / Cultural Trivia */}
        {content?.funFacts && content.funFacts.length > 0 && (
          <div className="p-6 rounded-3xl bg-amber-500/[0.05] border border-amber-500/20 text-left">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Bạn Có Biết? (Góc Di Sản Thú Vị)
            </h4>
            <ul className="space-y-2.5">
              {content.funFacts.map((fact, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        )}



        {/* Bottom Tour Navigation (Previous & Next Room) */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevNode ? (
            <button
              onClick={() => onNavigatePage(prevNode.id)}
              className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-amber-400/30 text-left transition-all group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-amber-400 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block uppercase tracking-wider">
                  Mục Trước Đó
                </span>
                <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {prevNode.title}
                </span>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextNode ? (
            <button
              onClick={() => onNavigatePage(nextNode.id)}
              className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-amber-400/30 text-right transition-all group flex items-center justify-end gap-3 cursor-pointer sm:ml-auto w-full"
            >
              <div>
                <span className="text-[11px] text-slate-500 block uppercase tracking-wider">
                  Mục Tiếp Theo
                </span>
                <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {nextNode.title}
                </span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-amber-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
