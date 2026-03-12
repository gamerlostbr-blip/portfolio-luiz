'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const aiTools = [
  'Claude (Anthropic)', 'ChatGPT (OpenAI)', 'Gemini (Google)',
  'DeepSeek', 'Groq API', 'Claude Code',
  'LLM Prompt Engineering', 'AI-assisted Automation',
]

interface SkillGroup {
  title: string
  skills: readonly string[]
}

export default function Skills() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <section id="skills" className="py-32 px-8 md:px-16 lg:px-24" style={{ background: '#0D0D0D' }}>
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">{s.label}</span>
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary tracking-tight">
            {s.title}<span className="text-lime">_</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-px">
          {s.groups.map((group: SkillGroup) => (
            <div key={group.title} className="bg-bg p-8 md:p-10">
              <h3 className="font-mono text-xs text-lime tracking-widest uppercase mb-6">{group.title}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill: string) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-border shrink-0" />
                    <span className="font-display text-sm text-text-muted leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-surface border border-border p-8 md:p-10">
          <h3 className="font-mono text-xs text-lime tracking-widest uppercase mb-6">{s.toolsLabel}</h3>
          <div className="flex flex-wrap gap-2">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="font-mono text-xs text-text-muted border border-border px-4 py-2 tracking-wide hover:bg-lime hover:text-black hover:border-lime transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
