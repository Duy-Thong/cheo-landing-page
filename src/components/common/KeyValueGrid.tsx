import type { ComponentType, FC } from 'react'

export interface KeyValueItem {
  label: string
  value: string
  hint?: string
  icon?: ComponentType<{ className?: string }>
}

export interface KeyValueGridProps {
  items?: KeyValueItem[]
  columns?: 2 | 3 | 4
  className?: string
}

export const KeyValueGrid: FC<KeyValueGridProps> = ({
  items,
  columns = 4,
  className = ''
}) => {
  if (!items || items.length === 0) return null

  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }[columns]

  return (
    <div className={`grid ${colClass} gap-3 w-full ${className}`}>
      {items.map((item, idx) => {
        const Icon = item.icon
        return (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-stone-900/50 border border-stone-800/80 hover:border-amber-900/50 transition-colors flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between gap-1 text-[11px] uppercase tracking-wider text-stone-400 font-sans font-medium">
              <div className="flex items-center gap-1.5">
                {Icon && (
                  <Icon className="w-3.5 h-3.5 text-amber-500/80 group-hover:text-amber-400 transition-colors" />
                )}
                <span>{item.label}</span>
              </div>
            </div>
            <div className="mt-1">
              <div className="text-sm font-serif font-semibold text-stone-100 group-hover:text-amber-200 transition-colors leading-snug">
                {item.value}
              </div>
              {item.hint && (
                <div className="text-[11px] text-stone-500 font-sans mt-0.5">
                  {item.hint}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
