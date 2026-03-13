'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ShinyText from '@/components/ui/ShinyText'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ProfilePhoto from '@/components/ui/ProfilePhoto'
import PS2Towers from '@/components/ui/PS2Towers'
import { useLanguage } from '@/contexts/LanguageContext'

const nameWords = ['LUIZ', 'FILLIPE', 'XAVIER']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Parallax grid background */}
      <motion.div className="absolute inset-0 grid-bg" style={{ y: bgY }} />

      {/* PS2 towers */}
      <PS2Towers />

      {/* Radial lime glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(91,155,213,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Nav bar */}
      <motion.nav
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
          LFX<span className="text-lime animate-blink">_</span>
        </span>
        <div className="flex items-center gap-6">
          {t.nav.map((item: string, i: number) => (
            <motion.a
              key={item}
              href={`#${['about', 'projects', 'skills', 'contact'][i]}`}
              className="font-mono text-xs text-text-muted hover:text-lime transition-colors duration-200 tracking-wider uppercase hidden md:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
            >
              {item}
            </motion.a>
          ))}
          <LanguageSwitcher />
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto w-full pb-24 flex items-center justify-between gap-12">

        {/* Status badge */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          <span className="font-mono text-xs text-text-muted tracking-wider">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Name — parallax on scroll */}
        <motion.div style={{ y: nameY, opacity: nameOpacity }}>
          <h1
            className="font-display font-bold leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            {nameWords.map((word, wi) => (
              <motion.span
                key={word}
                className="block overflow-hidden"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + wi * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className={
                    wi !== 2
                      ? 'block text-text-primary ps2-chroma'
                      : 'block glitch ps2-chroma'
                  }
                  style={wi === 2 ? { WebkitTextStroke: '1px #5B9BD5', color: 'transparent' } : {}}
                  data-text={word}
                >
                  {word}
                </span>
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-border mb-8 max-w-2xl"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.65, duration: 0.6, ease: 'easeOut' }}
        />

        {/* Headline with ShinyText */}
        <motion.p
          className="font-mono text-sm md:text-base text-text-muted mb-4 tracking-wide max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <ShinyText text={t.hero.headline1} speed={4} className="text-[#aaa]" />
          <span className="text-lime mx-3">/</span>
          <ShinyText text={t.hero.headline2} speed={5} className="text-[#aaa]" />
          <span className="text-lime mx-3">/</span>
          <ShinyText text={t.hero.headline3} speed={6} className="text-[#aaa]" />
        </motion.p>

        {/* Description */}
        <motion.p
          className="font-display font-light text-lg md:text-xl text-text-muted max-w-xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          {t.hero.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-lime text-black font-mono text-sm font-medium px-6 py-3 hover:bg-white transition-colors duration-200"
          >
            {t.hero.cta}
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border font-mono text-sm text-text-muted px-6 py-3 hover:border-lime hover:text-lime transition-colors duration-200"
          >
            {t.hero.touch}
          </a>
        </motion.div>
      </div>

      {/* Profile photo — hidden on small screens */}
      <div className="hidden lg:flex items-end justify-center flex-shrink-0 pb-24">
        <ProfilePhoto />
      </div>

      {/* Scroll indicator — outside content div, anchored to section bottom */}
      <motion.div
        className="absolute bottom-8 left-8 md:left-16 lg:left-24 z-10 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="w-8 h-px bg-border" />
        <span className="font-mono text-xs text-text-muted tracking-widest">{t.hero.scroll}</span>
      </motion.div>
    </section>
  )
}
