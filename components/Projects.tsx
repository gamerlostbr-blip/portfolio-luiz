'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { creativeProjects } from '@/lib/creative-projects'

interface ProjectItem {
  id: string
  name: string
  tags: readonly string[]
  year: string
  role: string
  description: string
  bullets: readonly string[]
}

export default function Projects() {
  const { t, locale } = useLanguage()
  const p = t.projects

  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-24 bg-bg">
      <div className="max-w-[1400px] mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">{p.label}</span>
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary tracking-tight">
            {p.title}<span className="text-lime">_</span>
          </h2>
        </div>

        {/* AI / Automation projects */}
        <div className="space-y-px mb-24">
          {p.items.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group border border-border p-8 md:p-12 bg-surface hover:border-lime transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-xs text-lime tracking-widest">{project.id}</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] tracking-widest text-text-muted border border-border px-2 py-0.5 group-hover:border-lime/30 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight title-underline">
                    {project.name}
                  </h3>
                  <p className="font-mono text-xs text-text-muted mt-2 tracking-wide">{project.role}</p>
                </div>
                <span className="font-mono text-xs text-text-muted tracking-widest shrink-0">{project.year}</span>
              </div>

              <div className="h-px bg-border mb-6 group-hover:bg-lime/20 transition-colors duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <p className="lg:col-span-2 font-display text-base text-text-muted leading-relaxed font-light">
                  {project.description}
                </p>
                <ul className="lg:col-span-3 space-y-3">
                  {project.bullets.map((b: string) => (
                    <li key={b} className="flex gap-4 font-mono text-sm text-text-muted leading-relaxed">
                      <span className="text-lime shrink-0 mt-0.5">–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Work divider */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px bg-border flex-1" />
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary tracking-tight">
              {p.creativeTitle}<span className="text-lime">_</span>
            </h3>
            <p className="font-mono text-xs text-text-muted tracking-widest mt-1">{p.creativeSubtitle}</p>
          </div>
          <div className="h-px bg-border flex-1" />
        </div>

        {/* RAR — featured card full width with real video */}
        {creativeProjects.slice(0, 1).map((project) => (
          <div key={project.id} className="group border border-border bg-surface mb-px hover:border-lime/40 transition-colors duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Video player */}
              <div className="relative w-full aspect-video overflow-hidden bg-bg">
                <video
                  src="/patrao-da-mansao.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Info */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-lime tracking-widest">{project.id}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] tracking-widest text-text-muted border border-border px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight mb-2 group-hover:text-lime transition-colors duration-200 title-underline">
                    {project.name}
                  </h4>
                  <p className="font-mono text-xs text-text-muted tracking-wide mb-6">{project.role} · {project.year}</p>
                  <p className="font-display text-sm text-text-muted leading-relaxed font-light">
                    {project.description[locale]}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs text-text-muted hover:border-lime hover:text-lime transition-colors duration-200 tracking-widest w-fit"
                >
                  {p.viewProject} →
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Other creative projects — compact text grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {creativeProjects.slice(1).map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface p-6 hover:bg-bg transition-colors duration-200 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] text-lime tracking-widest">{project.id}</span>
              </div>
              <h4 className="font-display font-bold text-base text-text-primary tracking-tight mb-1 group-hover:text-lime transition-colors duration-200 title-underline">
                {project.name}
              </h4>
              <p className="font-mono text-[10px] text-text-muted tracking-wide mb-3">{project.role} · {project.year}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[9px] tracking-widest text-text-muted border border-border px-1.5 py-0.5 group-hover:border-lime/30 transition-colors duration-200">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-display text-xs text-text-muted leading-relaxed font-light flex-1">
                {project.description[locale]}
              </p>
              <div className="mt-4 font-mono text-[10px] text-text-muted group-hover:text-lime transition-colors duration-200 tracking-widest">
                {p.viewProject} →
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
