'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

// After getting your key at web3forms.com, replace the value below
// or add WEB3FORMS_KEY to .env.local and use process.env.NEXT_PUBLIC_WEB3FORMS_KEY
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? 'YOUR_WEB3FORMS_KEY'

export default function ContactForm() {
  const { t } = useLanguage()
  const c = t.contact
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      access_key: ACCESS_KEY,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      subject: 'Portfolio Contact — Luiz Fillipe',
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
      if (json.success) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="border border-border p-8 bg-surface">
      <p className="font-mono text-xs text-lime tracking-widest uppercase mb-8">{c.formLabel}</p>

      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <div className="w-12 h-12 border border-lime flex items-center justify-center">
            <svg className="w-5 h-5 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-mono text-sm text-lime tracking-widest uppercase">Message sent!</p>
          <p className="font-display text-sm text-text-muted text-center">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="font-mono text-xs text-text-muted hover:text-lime transition-colors duration-200 tracking-widest mt-2"
          >
            Send another →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-mono text-xs text-text-muted tracking-widest uppercase mb-2">{c.fields.name}</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-bg border border-border text-text-primary font-display text-sm px-4 py-3 focus:outline-none focus:border-lime transition-colors duration-200 placeholder:text-text-muted/40"
              placeholder={c.placeholders.name}
            />
          </div>
          <div>
            <label className="block font-mono text-xs text-text-muted tracking-widest uppercase mb-2">{c.fields.email}</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-bg border border-border text-text-primary font-display text-sm px-4 py-3 focus:outline-none focus:border-lime transition-colors duration-200 placeholder:text-text-muted/40"
              placeholder={c.placeholders.email}
            />
          </div>
          <div>
            <label className="block font-mono text-xs text-text-muted tracking-widest uppercase mb-2">{c.fields.message}</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-bg border border-border text-text-primary font-display text-sm px-4 py-3 focus:outline-none focus:border-lime transition-colors duration-200 placeholder:text-text-muted/40 resize-none"
              placeholder={c.placeholders.message}
            />
          </div>

          {status === 'error' && (
            <p className="font-mono text-xs text-red-400 tracking-wide">
              Something went wrong. Try emailing directly: gamerlostbr@gmail.com
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-lime text-black font-mono text-sm font-medium py-3 hover:bg-white transition-colors duration-200 tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'SENDING...' : c.send}
          </button>
        </form>
      )}
    </div>
  )
}
