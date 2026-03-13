'use client'

import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import Image from 'next/image'

export default function ProfilePhoto() {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const rotateX = useSpring(0, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 })
  const glowX = useSpring(50, { stiffness: 150, damping: 20 })
  const glowY = useSpring(50, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    rotateX.set((y - 0.5) * -18)
    rotateY.set((x - 0.5) * 18)
    glowX.set(x * 100)
    glowY.set(y * 100)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    glowX.set(50)
    glowY.set(50)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      className="relative w-[280px] md:w-[320px] lg:w-[360px] select-none cursor-pointer"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow behind */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-3xl -z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(91,155,213,0.45) 0%, rgba(91,155,213,0.08) 60%, transparent 100%)`,
          opacity: hovered ? 1 : 0.5,
          transform: 'scale(1.15) translateZ(-20px)',
        }}
      />

      {/* Card border gradient */}
      <div
        className="absolute inset-0 rounded-2xl p-px"
        style={{
          background: hovered
            ? 'linear-gradient(135deg, rgba(91,155,213,0.6) 0%, rgba(91,155,213,0.1) 50%, rgba(91,155,213,0.4) 100%)'
            : 'linear-gradient(135deg, rgba(91,155,213,0.2) 0%, transparent 60%)',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Float animation wrapper */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/luiz.png"
          alt="Luiz Fillipe"
          width={360}
          height={480}
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* Shine overlay on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
        }}
      />
    </motion.div>
  )
}
