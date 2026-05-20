/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#060b14',
        surface: {
          DEFAULT: '#0d1526',
          raised: '#121d33',
          border: '#1e2d5e',
        },
        cyber: {
          DEFAULT: '#4fc3f7',
          dim: '#2a8fb8',
          glow: '#00e5ff',
        },
        squash: {
          DEFAULT: '#f59e0b',
          dim: '#d97706',
        },
        media: {
          DEFAULT: '#a78bfa',
          dim: '#7c3aed',
        },
        muted: '#8b9cb8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        cyber: '0 0 24px rgba(79, 195, 247, 0.25)',
        card: '0 8px 32px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
