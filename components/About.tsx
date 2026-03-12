'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24" style={{ background: '#0D0D0D' }}>
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">{a.label}</span>
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary tracking-tight">
            {a.title}<span className="text-lime">_</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6">
            <p className="font-display text-lg md:text-xl text-text-primary leading-relaxed font-light">{a.p1}</p>
            <p className="font-display text-base text-text-muted leading-relaxed font-light">{a.p2}</p>
            <p className="font-display text-base text-text-muted leading-relaxed font-light">{a.p3}</p>
            <p className="font-display text-base text-text-muted leading-relaxed font-light">{a.p4}</p>
            <div className="flex flex-wrap gap-2 pt-4">
              {a.tags.map((tag: string) => (
                <span key={tag} className="font-mono text-xs border border-border text-text-muted px-3 py-1 tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-px bg-border">
            {a.stats.map(({ value, label }: { value: string; label: string }) => (
              <div key={label} className="bg-surface p-8 flex flex-col justify-between">
                <span className="font-display font-bold text-lime leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                  {value}
                </span>
                <span className="font-mono text-xs text-text-muted tracking-wide mt-4 leading-snug uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
