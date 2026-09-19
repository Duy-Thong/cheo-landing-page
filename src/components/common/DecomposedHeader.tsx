import type { ComponentType, FC } from 'react'
import { MetaBadge } from './MetaBadge'
import type { MetaBadgeVariant } from './MetaBadge'
import { KeyValueGrid } from './KeyValueGrid'
import type { KeyValueItem } from './KeyValueGrid'

export interface DecomposedHeaderBadge {
  label: string
  variant?: MetaBadgeVariant
  icon?: ComponentType<{ className?: string }>
}

export interface DecomposedHeaderProps {
  title: string
  category?: string
  badges?: DecomposedHeaderBadge[]
  leadSummary?: string
  keyValues?: KeyValueItem[]
  quote?: {
    text: string
    author?: string
  }
  className?: string
}

export const DecomposedHeader: FC<DecomposedHeaderProps> = ({
  title,
  category,
  badges = [],
  leadSummary,
  keyValues = [],
  quote,
  className = ''
}) => {
  return (
    <header className={`space-y-5 text-left border-b border-stone-800/80 pb-8 ${className}`}>
      {/* 1. Dải Phân Loại & Huy Hiệu Metadata */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {category && (
          <span className="text-[11px] uppercase tracking-widest text-amber-500 font-semibold font-serif px-2.5 py-1 rounded bg-amber-950/30 border border-amber-900/40">
            {category}
          </span>
        )}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {badges.map((b, idx) => (
              <MetaBadge
                key={idx}
                label={b.label}
                variant={b.variant || 'amber'}
                icon={b.icon}
                size="sm"
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Tiêu Đề Triển Lãm Cốt Lõi */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
        {title}
      </h1>

      {/* 3. Đoạn Tóm Tắt Dẫn Nhập Thanh Thoát */}
      {leadSummary && (
        <p className="text-sm sm:text-base md:text-lg text-stone-300 font-light leading-relaxed max-w-4xl font-sans">
          {leadSummary}
        </p>
      )}

      {/* 4. Ma Trận Thuộc Tính Key-Value Grid (R4 Architecture) */}
      {keyValues && keyValues.length > 0 && (
        <div className="pt-2">
          <KeyValueGrid items={keyValues} columns={keyValues.length > 3 ? 4 : (keyValues.length as 2 | 3)} />
        </div>
      )}

      {/* 5. Khung Trích Cổ Thi / Lời Tự Sự Di Sản */}
      {quote && quote.text && (
        <div className="pt-2">
          <blockquote className="p-4 sm:p-5 rounded-xl bg-[#171310] border-l-2 border-amber-600 font-serif italic text-amber-200/90 text-sm leading-relaxed">
            &ldquo;{quote.text}&rdquo;
            {quote.author && (
              <footer className="text-xs text-stone-400 not-italic font-sans mt-2 font-normal">
                &mdash; {quote.author}
              </footer>
            )}
          </blockquote>
        </div>
      )}
    </header>
  )
}
