export interface CreativeProject {
  id: string
  name: string
  tags: string[]
  year: string
  role: string
  description: { en: string; pt: string; es: string }
  link: string
}

export const creativeProjects: CreativeProject[] = [
  {
    id: 'C1',
    name: 'RAR — Radio Arcade Roots',
    tags: ['MOTION DESIGN', 'VIDEO EDITING', 'MUSIC'],
    year: '2025',
    role: 'Director · Motion Designer',
    description: {
      en: 'Full visual identity and motion graphics for an independent music project — from logo animation to video editing and social content.',
      pt: 'Identidade visual completa e motion graphics para um projeto musical independente — da animação do logo à edição de vídeo e conteúdo social.',
      es: 'Identidad visual completa y motion graphics para un proyecto musical independiente — desde la animación del logo hasta la edición de video y contenido social.',
    },
    link: 'https://fillipemartins.myportfolio.com/rar',
  },
  {
    id: 'C2',
    name: 'Salve Branding',
    tags: ['BRANDING', 'MOTION DESIGN', '2D ANIMATION'],
    year: '2025',
    role: 'Motion Designer',
    description: {
      en: 'Brand identity and animated assets for Salve — combining visual branding with motion design to create a cohesive brand language.',
      pt: 'Identidade de marca e assets animados para a Salve — unindo branding visual e motion design para criar uma linguagem de marca coesa.',
      es: 'Identidad de marca y assets animados para Salve — combinando branding visual con motion design para crear un lenguaje de marca coherente.',
    },
    link: 'https://fillipemartins.myportfolio.com/salve-branding',
  },
  {
    id: 'C3',
    name: 'AlfaBit',
    tags: ['MOTION DESIGN', 'EDUCATIONAL', '2D ANIMATION'],
    year: '2025',
    role: 'Motion Designer · Alura',
    description: {
      en: '2D animated motion design project for Alura educational platform.',
      pt: 'Projeto de motion design em 2D animado para a plataforma educacional Alura.',
      es: 'Proyecto de motion design animado en 2D para la plataforma educativa Alura.',
    },
    link: 'https://fillipemartins.myportfolio.com/alfabit',
  },
  {
    id: 'C4',
    name: "Cookin'Up",
    tags: ['MOTION DESIGN', 'EDUCATIONAL', 'AFTER EFFECTS'],
    year: '2025',
    role: 'Motion Designer · Alura',
    description: {
      en: 'Motion design and 2D animation project developed for Alura, Brazil\'s largest tech education platform.',
      pt: 'Projeto de motion design e animação 2D desenvolvido para a Alura, maior plataforma de educação tech do Brasil.',
      es: 'Proyecto de motion design y animación 2D desarrollado para Alura, la mayor plataforma de educación tech de Brasil.',
    },
    link: 'https://fillipemartins.myportfolio.com/cookingup',
  },
  {
    id: 'C5',
    name: 'ByteBank',
    tags: ['MOTION DESIGN', 'EDUCATIONAL', 'BRANDING'],
    year: '2025',
    role: 'Motion Designer · Alura',
    description: {
      en: 'Visual identity and motion graphics for ByteBank — an educational fintech brand developed in partnership with Alura.',
      pt: 'Identidade visual e motion graphics para o ByteBank — uma marca fintech educacional desenvolvida em parceria com a Alura.',
      es: 'Identidad visual y motion graphics para ByteBank — una marca fintech educativa desarrollada en colaboración con Alura.',
    },
    link: 'https://fillipemartins.myportfolio.com/bytebank',
  },
]

export const socialLinks = [
  { label: 'Behance', url: 'https://www.behance.net/luizfillipe5', icon: 'behance' },
  { label: 'LinkedIn', url: 'http://www.linkedin.com/in/luiz-fillipe-xavier', icon: 'linkedin' },
  { label: 'Instagram', url: 'https://www.instagram.com/engenheiro.rar/', icon: 'instagram' },
  { label: 'YouTube', url: 'https://www.youtube.com/@radioarcaderoots', icon: 'youtube' },
  { label: 'Spotify', url: 'https://open.spotify.com/intl-pt/artist/3YPva37IczzdCEP6OQOh4Y', icon: 'spotify' },
] as const
