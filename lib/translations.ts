export type Locale = 'en' | 'pt' | 'es'

export const translations = {
  en: {
    nav: ['About', 'Projects', 'Skills', 'Contact'],
    hero: {
      badge: 'Available for remote · São Luís, Brazil',
      headline1: 'Multimodal AI Annotation Specialist',
      headline2: 'Automation Builder',
      headline3: 'Creative Technologist',
      description:
        "I annotate video datasets for AI training and build automation tools on the side. Based in Brazil, working remotely.",
      cta: 'View Projects',
      touch: 'Get in touch',
      scroll: 'SCROLL',
    },
    about: {
      label: '01',
      title: 'ABOUT',
      p1: "My background is in communication and motion design — 5+ years cutting reels, building brand identities, and animating in After Effects. I spent a long time studying how stories work, how people read images, and what makes audio land the way it does. That turned out to be surprisingly useful for AI work. Annotating video datasets isn't that different from media analysis: you're still trying to describe what's actually there, not what you assume is there.",
      p2: "In 2025 I started taking AI annotation contracts through Mercor — 4 contracts, 211 hours, mostly video captioning and multimodal labeling. The work is detail-heavy: segmenting scenes, identifying audio events, logging camera movement, all within strict annotation guidelines. I got good at it fast.",
      p3: "On the side, I build things. Concordia started as a real problem: a recruitment agency I work with was drowning in CVs. I built them an internal tool that reads resumes with an LLM, uploads files to Drive, generates shareable links, and populates a structured database — all automatically. What used to take hours now takes seconds.",
      p4: "I'm looking for remote work — annotation projects, AI operations, or automation roles. I work well with structured guidelines, I don't need hand-holding, and I'm in a good timezone for both European and North American teams.",
      tags: ['Multimodal Annotation', 'Workflow Automation', 'LLM Integration', 'Motion Design', 'Audiovisual Analysis', 'Remote-First'],
      stats: [
        { value: '211', label: 'Hours worked · Mercor 2025' },
        { value: '4', label: 'Contracts completed' },
        { value: '11', label: 'Active weeks' },
        { value: 'Sep.', label: 'Best month · 2025' },
      ],
    },
    projects: {
      label: '02',
      title: 'PROJECTS',
      creativeTitle: 'CREATIVE WORK',
      creativeSubtitle: 'Motion Design & Video Editing · 5+ years',
      viewProject: 'View on Portfolio →',
      items: [
        {
          id: '01',
          name: 'Project Obscura',
          tags: ['AI', 'ANNOTATION', 'MULTIMODAL', 'DATASET'],
          year: '2025 – 2026',
          role: 'Multimodal AI Annotation Specialist',
          description:
            'Executed structured annotation workflows on short-form video datasets used in large-scale AI training pipelines, ensuring high labeling accuracy and strict guideline adherence across thousands of multimodal annotation tasks.',
          bullets: [
            'Scene segmentation, subject identification, and environmental context classification',
            'Camera framing and motion analysis — capturing technical metadata for model training',
            'Timestamped audiovisual annotation: speech, music, ambient noise, subject movement',
            'Maintained dataset consistency across variable durations, categories, and content types',
            'Applied structured workflows under rigorous quality control — minimizing inter-annotator error',
            'Processed content requiring simultaneous visual, auditory, and contextual reasoning',
          ],
        },
        {
          id: '02',
          name: 'Concordia',
          tags: ['AUTOMATION', 'FULL-STACK', 'LLM', 'RECRUITMENT'],
          year: '2025 – 2026',
          role: 'Automation Systems Designer · Concordia Consultoria & Recrutamento',
          description:
            'Designed and deployed a full-stack internal automation platform that transformed a manual recruitment process into a structured, AI-assisted pipeline capable of handling 100+ candidates per role.',
          bullets: [
            'AI-powered resume parser using LLM APIs — extracted and structured candidate data automatically',
            'Automated document ingestion: PDF upload → Drive storage → link generation → database population',
            'Google Drive and Google Sheets integration pipelines — eliminated manual data entry',
            'Structured candidate database with real-time filtering, scoring, and recruiter collaboration',
            'Reduced data processing time from hours to seconds across the full intake pipeline',
            'Deployed on Vercel with Supabase backend — production-grade reliability and scalability',
          ],
        },
      ],
    },
    skills: {
      label: '03',
      title: 'SKILLS',
      toolsLabel: 'AI Tools & Platforms',
      groups: [
        {
          title: 'AI & Data Annotation',
          skills: ['Multimodal video annotation', 'Scene segmentation & classification', 'Timestamped audiovisual labeling', 'Audio event classification', 'Dataset quality control', 'Annotation guideline compliance', 'Inter-annotator consistency'],
        },
        {
          title: 'Automation & Systems',
          skills: ['AI API integration (LLM pipelines)', 'Workflow automation design', 'Google Drive & Sheets automation', 'Structured data pipelines', 'Next.js · Supabase · Vercel', 'REST API development', 'Full-stack deployment'],
        },
        {
          title: 'Media & Audiovisual Analysis',
          skills: ['Audiovisual content interpretation', 'Media categorization & tagging', 'Visual storytelling analysis', 'Camera motion & framing analysis', 'Multimodal content reasoning', 'Short-form video analysis'],
        },
        {
          title: 'Languages',
          skills: ['Portuguese — Native', 'English — Professional working proficiency', 'Spanish — Basic'],
        },
      ],
    },
    contact: {
      label: '04',
      title: 'CONTACT',
      heading1: "Let's work",
      heading2: 'together.',
      description:
        'Available for remote AI operations, dataset training, annotation projects, and automation engineering roles. Actively seeking international opportunities.',
      formLabel: 'Send a message',
      fields: { name: 'Name', email: 'Email', message: 'Message' },
      placeholders: { name: 'Your name', email: 'your@email.com', message: 'Tell me about the opportunity...' },
      send: 'SEND MESSAGE →',
      footer1: '© 2026 Luiz Fillipe Xavier Nunes Martins',
      footer2: 'São Luís, Brazil · Open to Remote',
    },
  },

  pt: {
    nav: ['Sobre', 'Projetos', 'Habilidades', 'Contato'],
    hero: {
      badge: 'Disponível para remoto · São Luís, Brasil',
      headline1: 'Especialista em Anotação Multimodal de IA',
      headline2: 'Construtor de Automações',
      headline3: 'Tecnólogo Criativo',
      description:
        'Anoto datasets de vídeo para treinamento de IA e construo ferramentas de automação nas horas vagas. Baseado no Brasil, trabalhando remotamente.',
      cta: 'Ver Projetos',
      touch: 'Entrar em contato',
      scroll: 'ROLAR',
    },
    about: {
      label: '01',
      title: 'SOBRE',
      p1: 'Meu background é em comunicação e motion design — 5+ anos editando reels, construindo identidades de marca e animando no After Effects. Passei muito tempo estudando como histórias funcionam, como as pessoas leem imagens e o que faz o áudio aterrissar do jeito que aterrissa. Isso acabou sendo surpreendentemente útil para o trabalho com IA. Anotar datasets de vídeo não é tão diferente de análise de mídia: você ainda está tentando descrever o que está realmente ali, não o que você acha que está.',
      p2: 'Em 2025 comecei a pegar contratos de anotação de IA pela Mercor — 4 contratos, 211 horas, principalmente legendagem de vídeo e rotulagem multimodal. O trabalho é cheio de detalhes: segmentação de cenas, identificação de eventos de áudio, registro de movimentos de câmera, tudo dentro de diretrizes rígidas. Me tornei bom nisso rápido.',
      p3: 'Nas horas vagas, construo coisas. A Concordia surgiu de um problema real: uma agência de recrutamento com quem trabalho estava se afogando em currículos. Construí uma ferramenta interna que lê CVs com LLM, faz upload pro Drive, gera links compartilháveis e popula um banco de dados estruturado — tudo automático. O que levava horas passou a levar segundos.',
      p4: 'Estou buscando trabalho remoto — projetos de anotação, operações de IA ou funções de automação. Trabalho bem com diretrizes estruturadas, não preciso de supervisão constante e estou num fuso horário bom tanto pra equipes europeias quanto norte-americanas.',
      tags: ['Anotação Multimodal', 'Automação de Fluxos', 'Integração LLM', 'Motion Design', 'Análise Audiovisual', 'Trabalho Remoto'],
      stats: [
        { value: '211', label: 'Horas trabalhadas · Mercor 2025' },
        { value: '4', label: 'Contratos concluídos' },
        { value: '11', label: 'Semanas ativas' },
        { value: 'Set.', label: 'Melhor mês · 2025' },
      ],
    },
    projects: {
      label: '02',
      title: 'PROJETOS',
      creativeTitle: 'TRABALHO CRIATIVO',
      creativeSubtitle: 'Motion Design & Edição de Vídeo · 5+ anos',
      viewProject: 'Ver no Portfólio →',
      items: [
        {
          id: '01',
          name: 'Projeto Obscura',
          tags: ['IA', 'ANOTAÇÃO', 'MULTIMODAL', 'DATASET'],
          year: '2025 – 2026',
          role: 'Especialista em Anotação Multimodal de IA',
          description:
            'Executei fluxos de anotação estruturada em datasets de vídeo curto usados em pipelines de treinamento de IA em larga escala, garantindo alta precisão de rotulagem e estrita aderência às diretrizes em milhares de tarefas de anotação multimodal.',
          bullets: [
            'Segmentação de cenas, identificação de sujeitos e classificação de contexto ambiental',
            'Análise de enquadramento e movimentação de câmera — capturando metadados técnicos para treinamento de modelos',
            'Anotação audiovisual com timestamp: fala, música, ruído ambiente, movimento de sujeitos',
            'Consistência do dataset mantida entre durações, categorias e tipos de conteúdo variados',
            'Fluxos estruturados aplicados com controle de qualidade rigoroso — minimizando erros entre anotadores',
            'Conteúdo processado exigindo raciocínio visual, auditivo e contextual simultâneo',
          ],
        },
        {
          id: '02',
          name: 'Concordia',
          tags: ['AUTOMAÇÃO', 'FULL-STACK', 'LLM', 'RECRUTAMENTO'],
          year: '2025 – 2026',
          role: 'Designer de Sistemas de Automação · Concordia Consultoria & Recrutamento',
          description:
            'Projetei e implantei uma plataforma de automação interna full-stack que transformou um processo de recrutamento manual em um pipeline estruturado e assistido por IA capaz de lidar com mais de 100 candidatos por vaga.',
          bullets: [
            'Parser de currículo com IA usando APIs de LLM — extração e estruturação automática de dados de candidatos',
            'Automação de ingestão de documentos: upload de PDF → armazenamento no Drive → geração de link → população do banco',
            'Pipelines de integração com Google Drive e Google Sheets — eliminação de entrada manual de dados',
            'Banco de dados estruturado de candidatos com filtragem em tempo real, pontuação e colaboração entre recrutadores',
            'Tempo de processamento reduzido de horas para segundos em todo o pipeline de intake',
            'Implantado no Vercel com backend Supabase — confiabilidade e escalabilidade em nível de produção',
          ],
        },
      ],
    },
    skills: {
      label: '03',
      title: 'HABILIDADES',
      toolsLabel: 'Ferramentas e Plataformas de IA',
      groups: [
        {
          title: 'IA & Anotação de Dados',
          skills: ['Anotação multimodal de vídeo', 'Segmentação e classificação de cenas', 'Rotulagem audiovisual com timestamp', 'Classificação de eventos de áudio', 'Controle de qualidade de datasets', 'Aderência a diretrizes de anotação', 'Consistência entre anotadores'],
        },
        {
          title: 'Automação & Sistemas',
          skills: ['Integração de APIs de IA (pipelines LLM)', 'Design de automação de fluxos', 'Automação Google Drive & Sheets', 'Pipelines de dados estruturados', 'Next.js · Supabase · Vercel', 'Desenvolvimento de APIs REST', 'Deploy full-stack'],
        },
        {
          title: 'Análise de Mídia & Audiovisual',
          skills: ['Interpretação de conteúdo audiovisual', 'Categorização e marcação de mídia', 'Análise de narrativa visual', 'Análise de enquadramento e movimento de câmera', 'Raciocínio multimodal de conteúdo', 'Análise de vídeos curtos'],
        },
        {
          title: 'Idiomas',
          skills: ['Português — Nativo', 'Inglês — Proficiência profissional', 'Espanhol — Básico'],
        },
      ],
    },
    contact: {
      label: '04',
      title: 'CONTATO',
      heading1: 'Vamos trabalhar',
      heading2: 'juntos.',
      description:
        'Disponível para operações remotas de IA, treinamento de datasets, projetos de anotação e funções de engenharia de automação. Buscando ativamente oportunidades internacionais.',
      formLabel: 'Envie uma mensagem',
      fields: { name: 'Nome', email: 'E-mail', message: 'Mensagem' },
      placeholders: { name: 'Seu nome', email: 'seu@email.com', message: 'Fale sobre a oportunidade...' },
      send: 'ENVIAR MENSAGEM →',
      footer1: '© 2026 Luiz Fillipe Xavier Nunes Martins',
      footer2: 'São Luís, Brasil · Disponível para Remoto',
    },
  },

  es: {
    nav: ['Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'],
    hero: {
      badge: 'Disponible para remoto · São Luís, Brasil',
      headline1: 'Especialista en Anotación Multimodal de IA',
      headline2: 'Desarrollador de Automatizaciones',
      headline3: 'Tecnólogo Creativo',
      description:
        'Anoto datasets de video para entrenamiento de IA y construyo herramientas de automatización. Basado en Brasil, trabajando de forma remota.',
      cta: 'Ver Proyectos',
      touch: 'Ponerse en contacto',
      scroll: 'DESPLAZAR',
    },
    about: {
      label: '01',
      title: 'SOBRE MÍ',
      p1: 'Mi base es la comunicación y el motion design — 5+ años editando reels, construyendo identidades de marca y animando en After Effects. Pasé mucho tiempo estudiando cómo funcionan las historias, cómo la gente lee imágenes y qué hace que el audio llegue como llega. Eso resultó ser sorprendentemente útil para el trabajo con IA. Anotar datasets de video no es tan diferente del análisis de medios: sigues intentando describir lo que realmente está ahí, no lo que asumes que hay.',
      p2: 'En 2025 empecé a tomar contratos de anotación de IA a través de Mercor — 4 contratos, 211 horas, principalmente subtitulado de video y etiquetado multimodal. El trabajo es detallado: segmentación de escenas, identificación de eventos de audio, registro de movimientos de cámara, todo dentro de directrices estrictas. Me volví bueno en eso rápido.',
      p3: 'En mis ratos libres, construyo cosas. Concordia surgió de un problema real: una agencia de reclutamiento con la que trabajo estaba desbordada de CVs. Construí una herramienta interna que lee hojas de vida con LLM, sube archivos a Drive, genera enlaces compartibles y llena una base de datos estructurada — todo automático. Lo que tardaba horas ahora tarda segundos.',
      p4: 'Busco trabajo remoto — proyectos de anotación, operaciones de IA o roles de automatización. Trabajo bien con directrices estructuradas, no necesito supervisión constante y estoy en una buena zona horaria tanto para equipos europeos como norteamericanos.',
      tags: ['Anotación Multimodal', 'Automatización de Flujos', 'Integración LLM', 'Motion Design', 'Análisis Audiovisual', 'Trabajo Remoto'],
      stats: [
        { value: '211', label: 'Horas trabajadas · Mercor 2025' },
        { value: '4', label: 'Contratos completados' },
        { value: '11', label: 'Semanas activas' },
        { value: 'Sep.', label: 'Mejor mes · 2025' },
      ],
    },
    projects: {
      label: '02',
      title: 'PROYECTOS',
      creativeTitle: 'TRABAJO CREATIVO',
      creativeSubtitle: 'Motion Design & Edición de Video · 5+ años',
      viewProject: 'Ver en Portfolio →',
      items: [
        {
          id: '01',
          name: 'Proyecto Obscura',
          tags: ['IA', 'ANOTACIÓN', 'MULTIMODAL', 'DATASET'],
          year: '2025 – 2026',
          role: 'Especialista en Anotación Multimodal de IA',
          description:
            'Ejecuté flujos de anotación estructurada en datasets de video corto usados en pipelines de entrenamiento de IA a gran escala, asegurando alta precisión de etiquetado y estricta adherencia a las directrices en miles de tareas de anotación multimodal.',
          bullets: [
            'Segmentación de escenas, identificación de sujetos y clasificación de contexto ambiental',
            'Análisis de encuadre y movimiento de cámara — capturando metadatos técnicos para entrenamiento de modelos',
            'Anotación audiovisual con marca de tiempo: habla, música, ruido ambiental, movimiento de sujetos',
            'Consistencia del dataset mantenida entre duraciones, categorías y tipos de contenido variados',
            'Flujos estructurados aplicados con control de calidad riguroso — minimizando errores entre anotadores',
            'Contenido procesado que requiere razonamiento visual, auditivo y contextual simultáneo',
          ],
        },
        {
          id: '02',
          name: 'Concordia',
          tags: ['AUTOMATIZACIÓN', 'FULL-STACK', 'LLM', 'RECLUTAMIENTO'],
          year: '2025 – 2026',
          role: 'Diseñador de Sistemas de Automatización · Concordia Consultoria & Recrutamento',
          description:
            'Diseñé e implementé una plataforma interna de automatización full-stack que transformó un proceso de reclutamiento manual en un pipeline estructurado y asistido por IA capaz de manejar más de 100 candidatos por rol.',
          bullets: [
            'Parser de CV con IA usando APIs de LLM — extracción y estructuración automática de datos de candidatos',
            'Automatización de ingesta de documentos: carga de PDF → almacenamiento en Drive → generación de enlace → población de base de datos',
            'Pipelines de integración con Google Drive y Google Sheets — eliminación de la entrada manual de datos',
            'Base de datos estructurada de candidatos con filtrado en tiempo real, puntuación y colaboración entre reclutadores',
            'Tiempo de procesamiento reducido de horas a segundos en todo el pipeline de ingesta',
            'Implementado en Vercel con backend Supabase — confiabilidad y escalabilidad de nivel producción',
          ],
        },
      ],
    },
    skills: {
      label: '03',
      title: 'HABILIDADES',
      toolsLabel: 'Herramientas y Plataformas de IA',
      groups: [
        {
          title: 'IA & Anotación de Datos',
          skills: ['Anotación multimodal de video', 'Segmentación y clasificación de escenas', 'Etiquetado audiovisual con marca de tiempo', 'Clasificación de eventos de audio', 'Control de calidad de datasets', 'Adherencia a directrices de anotación', 'Consistencia entre anotadores'],
        },
        {
          title: 'Automatización & Sistemas',
          skills: ['Integración de APIs de IA (pipelines LLM)', 'Diseño de automatización de flujos', 'Automatización Google Drive & Sheets', 'Pipelines de datos estructurados', 'Next.js · Supabase · Vercel', 'Desarrollo de APIs REST', 'Despliegue full-stack'],
        },
        {
          title: 'Análisis de Medios & Audiovisual',
          skills: ['Interpretación de contenido audiovisual', 'Categorización y etiquetado de medios', 'Análisis de narrativa visual', 'Análisis de encuadre y movimiento de cámara', 'Razonamiento multimodal de contenido', 'Análisis de videos cortos'],
        },
        {
          title: 'Idiomas',
          skills: ['Portugués — Nativo', 'Inglés — Competencia profesional', 'Español — Básico'],
        },
      ],
    },
    contact: {
      label: '04',
      title: 'CONTACTO',
      heading1: 'Trabajemos',
      heading2: 'juntos.',
      description:
        'Disponible para operaciones remotas de IA, entrenamiento de datasets, proyectos de anotación y roles de ingeniería de automatización. Buscando activamente oportunidades internacionales.',
      formLabel: 'Envía un mensaje',
      fields: { name: 'Nombre', email: 'Correo', message: 'Mensaje' },
      placeholders: { name: 'Tu nombre', email: 'tu@correo.com', message: 'Cuéntame sobre la oportunidad...' },
      send: 'ENVIAR MENSAJE →',
      footer1: '© 2026 Luiz Fillipe Xavier Nunes Martins',
      footer2: 'São Luís, Brasil · Disponible para Remoto',
    },
  },
} as const
