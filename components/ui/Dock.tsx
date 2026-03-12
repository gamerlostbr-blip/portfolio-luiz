'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface DockItem {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  href?: string
}

interface DockProps {
  items: DockItem[]
  panelHeight?: number
  baseItemSize?: number
  magnification?: number
}

function DockItem({
  item,
  mouseX,
  baseItemSize,
  magnification,
}: {
  item: DockItem
  mouseX: ReturnType<typeof useMotionValue<number>>
  baseItemSize: number
  magnification: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(
    distance,
    [-150, 0, 150],
    [baseItemSize, magnification, baseItemSize]
  )

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 })

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="relative flex items-center justify-center rounded-full bg-surface border border-border hover:border-lime cursor-pointer group transition-colors duration-200"
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-text-muted group-hover:text-lime transition-colors duration-200">
        {item.icon}
      </div>
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface border border-border px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
        <span className="font-mono text-[10px] text-text-primary tracking-widest uppercase">
          {item.label}
        </span>
      </div>
    </motion.div>
  )

  if (item.href) {
    return (
      <a href={item.href}>
        {content}
      </a>
    )
  }

  return (
    <div onClick={item.onClick}>
      {content}
    </div>
  )
}

export default function Dock({
  items,
  panelHeight = 64,
  baseItemSize = 48,
  magnification = 72,
}: DockProps) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-end gap-2 px-4 border border-border bg-bg/80 backdrop-blur-md"
      style={{ height: panelHeight, borderRadius: 0 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
    >
      {items.map((item) => (
        <DockItem
          key={item.label}
          item={item}
          mouseX={mouseX}
          baseItemSize={baseItemSize}
          magnification={magnification}
        />
      ))}
    </motion.div>
  )
}
