'use client'

import { CSSProperties } from 'react'

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = '',
}: ShinyTextProps) {
  const animationDuration = `${speed}s`

  return (
    <span
      className={`inline-block bg-clip-text ${disabled ? '' : 'animate-shine'} ${className}`}
      style={
        {
          backgroundImage:
            'linear-gradient(120deg, #888 40%, #fff 50%, #888 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animationDuration,
        } as CSSProperties
      }
    >
      {text}
    </span>
  )
}
