'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Locale, translations } from '@/lib/translations'

interface LanguageContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (typeof translations)[Locale]
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
