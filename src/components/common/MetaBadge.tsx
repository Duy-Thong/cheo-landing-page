import type { ComponentType, FC } from 'react'
import type { BadgeVariant } from '../../types/cheoCulturalTypes'

export type MetaBadgeVariant = BadgeVariant

export interface MetaBadgeProps {
  label: string
  variant?: MetaBadgeVariant
  icon?: ComponentType<{ className?: string }>
  size?: 'sm' | 'md'
  onClick?: () => void
  className?: string
}

const VARIANT_STYLES: Record<MetaBadgeVariant, string> = {
  amber: 'bg-amber-950/40 text-amber-300 border-amber-800/40 hover:border-amber-700/60 shadow-amber-950/20',
  red: 'bg-red-950/40 text-red-300 border-red-800/40 hover:border-red-700/60 shadow-red-950/20',
  emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40 hover:border-emerald-700/60 shadow-emerald-950/20',
  sky: 'bg-sky-950/40 text-sky-300 border-sky-800/40 hover:border-sky-700/60 shadow-sky-950/20',
  stone: 'bg-stone-900/60 text-stone-300 border-stone-800/80 hover:border-stone-700',
  rose: 'bg-rose-950/40 text-rose-300 border-rose-800/40 hover:border-rose-700/60 shadow-rose-950/20',
  purple: 'bg-purple-950/40 text-purple-300 border-purple-800/40 hover:border-purple-700/60 shadow-purple-950/20'
}

const SIZE_STYLES = {
  sm: 'px-2.5 py-0.5 text-[11px] gap-1',
  md: 'px-3 py-1 text-xs gap-1.5'
}

export const MetaBadge: FC<MetaBadgeProps> = ({
  label,
  variant = 'amber',
  icon: Icon,
  size = 'md',
  onClick,
  className = ''
}) => {
  const isClickable = Boolean(onClick)
  const Component = isClickable ? 'button' : 'span'

  return (
    <Component
      type={isClickable ? 'button' : undefined}
      onClick={onClick}
      className={`inline-flex items-center font-medium font-sans rounded-full border backdrop-blur-sm transition-all shadow-sm select-none ${
        VARIANT_STYLES[variant] || VARIANT_STYLES.amber
      } ${SIZE_STYLES[size]} ${
        isClickable ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''
      } ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{label}</span>
    </Component>
  )
}
