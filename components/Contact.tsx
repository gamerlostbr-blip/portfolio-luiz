'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { socialLinks } from '@/lib/creative-projects'
import ContactForm from '@/components/ContactForm'

const SocialIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'behance':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.97 13h4.604c-.395-1.962-2.754-2.069-4.604 0zM8.5 12.616c-.402-.816-.951-1.346-1.724-1.403-.706-.053-2.109-.08-2.109-.08V9.01s2.009.008 2.75-.002c.73-.01 1.244.254 1.532.698.259.407.293.953.293 1.338 0 .447-.04.891-.156 1.292-.19.654-.567 1.036-1.003 1.244-.54.26-1.296.28-1.296.28s1.47.056 1.936.637c.482.6.554 1.394.554 2.04 0 .604-.02 1.203-.156 1.722-.178.677-.568 1.13-1.023 1.408-.437.266-1.009.333-1.72.333H3V8h5.5c.76 0 1.333.145 1.76.413.44.277.688.68.808 1.168.114.464.089.955.089 1.455 0 .44-.068.913-.248 1.304l-.409.276zM6 11.52V9.81H4.5v1.71H6zm0 4.47v-2.36H4.5v2.36H6z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0} />
        </svg>
      )
    case 'youtube':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
        </svg>
      )
    case 'spotify':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 bg-bg relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold text-text-primary opacity-[0.02] whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 20vw, 18rem)' }}
        >
          {c.title}
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">{c.label}</span>
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary tracking-tight">
            {c.title}<span className="text-lime">_</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

          {/* Left: CTA + links */}
          <div>
            <p className="font-display font-bold text-text-primary leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              {c.heading1}<br />
              <span className="text-lime">{c.heading2}</span>
            </p>
            <p className="font-display text-base text-text-muted leading-relaxed mb-10 max-w-md">
              {c.description}
            </p>

            {/* Primary links */}
            <div className="space-y-3 mb-10">
              <a
                href="https://www.linkedin.com/in/luiz-fillipe-xavier"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-border p-4 hover:border-lime transition-colors duration-200"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-border text-text-muted group-hover:border-lime group-hover:bg-lime group-hover:text-black transition-all duration-200">
                  <SocialIcon icon="linkedin" />
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-0.5">LinkedIn</p>
                  <p className="font-display text-sm text-text-primary">linkedin.com/in/luiz-fillipe-xavier</p>
                </div>
                <span className="ml-auto text-text-muted group-hover:text-lime transition-colors duration-200">→</span>
              </a>

              <a
                href="mailto:gamerlostbr@gmail.com"
                className="group flex items-center gap-4 border border-border p-4 hover:border-lime transition-colors duration-200"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-border text-text-muted group-hover:border-lime group-hover:bg-lime group-hover:text-black transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-0.5">Email</p>
                  <p className="font-display text-sm text-text-primary">gamerlostbr@gmail.com</p>
                </div>
                <span className="ml-auto text-text-muted group-hover:text-lime transition-colors duration-200">→</span>
              </a>
            </div>

            {/* Social grid */}
            <div>
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">Also find me on</p>
              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 border border-border p-3 hover:border-lime transition-colors duration-200"
                  >
                    <span className="text-text-muted group-hover:text-lime transition-colors duration-200 shrink-0">
                      <SocialIcon icon={social.icon} />
                    </span>
                    <span className="font-mono text-xs text-text-muted group-hover:text-lime transition-colors duration-200 tracking-wide">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <ContactForm />

        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs text-text-muted tracking-widest">{c.footer1}</span>
          <span className="font-mono text-xs text-text-muted tracking-widest">{c.footer2}</span>
        </div>

      </div>
    </section>
  )
}
