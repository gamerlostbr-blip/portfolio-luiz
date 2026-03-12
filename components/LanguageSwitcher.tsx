'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Locale } from '@/lib/translations'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const languages: { locale: Locale; flag: string; label: string; short: string }[] = [
  { locale: 'en', flag: '🇺🇸', label: 'English', short: 'EN' },
  { locale: 'pt', flag: '🇧🇷', label: 'Português', short: 'PT' },
  { locale: 'es', flag: '🇪🇸', label: 'Español', short: 'ES' },
]

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)

  const current = languages.find((l) => l.locale === locale)!

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 border border-border px-3 py-1.5 hover:border-lime transition-colors duration-200 group"
        aria-label="Select language"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="font-mono text-xs text-text-muted group-hover:text-lime tracking-widest transition-colors duration-200">
          {current.short}
        </span>
        <svg
          className={`w-3 h-3 text-text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-surface border border-border z-50 min-w-[140px] shadow-xl shadow-black/50"
          >
            {languages.map((lang) => (
              <button
                key={lang.locale}
                onClick={() => { setLocale(lang.locale); setOpen(false) }}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-bg transition-colors duration-150 group ${
                  lang.locale === locale ? 'bg-bg' : ''
                }`}
              >
                <span className="text-lg leading-none">{lang.flag}</span>
                <span
                  className={`font-mono text-xs tracking-wider transition-colors duration-150 ${
                    lang.locale === locale
                      ? 'text-lime'
                      : 'text-text-muted group-hover:text-text-primary'
                  }`}
                >
                  {lang.label}
                </span>
                {lang.locale === locale && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-lime" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  )
}
