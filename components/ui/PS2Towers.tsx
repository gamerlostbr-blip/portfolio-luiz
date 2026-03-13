'use client'

import { motion } from 'framer-motion'

const towers = [
  { x: '8%',  delay: 0,    duration: 14, height: '35vh', width: 3,   opacity: 0.18 },
  { x: '15%', delay: 2.5,  duration: 18, height: '55vh', width: 2,   opacity: 0.10 },
  { x: '78%', delay: 1,    duration: 16, height: '45vh', width: 3,   opacity: 0.15 },
  { x: '85%', delay: 3.5,  duration: 12, height: '30vh', width: 2,   opacity: 0.12 },
  { x: '92%', delay: 0.5,  duration: 20, height: '60vh', width: 4,   opacity: 0.08 },
  { x: '5%',  delay: 4,    duration: 22, height: '20vh', width: 2,   opacity: 0.09 },
  { x: '72%', delay: 1.8,  duration: 15, height: '40vh', width: 2.5, opacity: 0.11 },
]

export default function PS2Towers() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {towers.map((t, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{ left: t.x, width: t.width, opacity: 0 }}
          animate={{
            opacity: [0, t.opacity, t.opacity * 0.6, t.opacity],
            height: ['0vh', t.height, t.height],
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { delay: t.delay + 0.5, duration: 2, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: t.duration / 2 },
            height: { delay: t.delay, duration: 2.5, ease: [0.22, 1, 0.36, 1] },
            y: { delay: t.delay + 2.5, duration: t.duration, repeat: Infinity, ease: 'easeInOut' },
          }}
          initial={{ height: '0vh', opacity: 0 }}
        >
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(to top, rgba(91,155,213,0.8) 0%, rgba(91,155,213,0.3) 60%, transparent 100%)`,
            }}
          />
        </motion.div>
      ))}

      {/* PS2 horizontal scan line that sweeps down */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(91,155,213,0.4), transparent)' }}
        animate={{ top: ['-2%', '102%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
      />
    </div>
  )
}
