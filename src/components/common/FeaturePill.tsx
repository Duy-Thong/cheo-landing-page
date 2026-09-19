import type { ComponentType, FC } from 'react'

export interface FeaturePillProps {
  text: string
  variant?: 'default' | 'accent'
  icon?: ComponentType<{ className?: string }>
  dot?: boolean
  className?: string
}

export const FeaturePill: FC<FeaturePillProps> = ({
  text,
  variant = 'default',
  icon: Icon,
  dot = false,
  className = ''
}) => {
  const variantClass =
    variant === 'accent'
      ? 'bg-amber-950/30 text-amber-300/90 border-amber-800/30 hover:border-amber-700/50'
      : 'bg-stone-900/60 text-stone-300 border-stone-800/80 hover:border-stone-700'

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-sans font-medium border transition-colors ${variantClass} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'accent' ? 'bg-amber-400' : 'bg-stone-400'
          }`}
        />
      )}
      {Icon && <Icon className="w-3 h-3 shrink-0 text-amber-400/80" />}
      <span>{text}</span>
    </span>
  )
}
