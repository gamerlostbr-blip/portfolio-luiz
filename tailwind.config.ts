import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        surface: '#111111',
        border: '#1E1E1E',
        lime: '#C8FF00',
        'text-primary': '#F5F5F0',
        'text-muted': '#888888',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        blink: 'blink 1.2s step-end infinite',
      },
    },
  },
  plugins: [],
}

export default config
