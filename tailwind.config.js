/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0A0A0B',
          surface: '#111114',
          elevated: '#16161A',
        },
        line: {
          subtle: '#1F1F24',
          strong: '#2A2A31',
        },
        ink: {
          primary: '#F5F5F7',
          secondary: '#A1A1AA',
          tertiary: '#6B6B73',
          muted: '#3F3F46',
        },
        accent: {
          DEFAULT: '#7CFFC4',
          deep: '#3DDC97',
          dim: '#2A8C66',
          violet: '#9B8CFF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': [
          'clamp(3rem, 6vw, 6.5rem)',
          { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '600' },
        ],
        'display-lg': [
          'clamp(2rem, 4vw, 3.75rem)',
          { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' },
        ],
        'display-md': [
          'clamp(1.5rem, 2.5vw, 2.25rem)',
          { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        'display-sm': [
          'clamp(1.25rem, 1.8vw, 1.5rem)',
          { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '500' },
        ],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        body: ['1rem', { lineHeight: '1.7' }],
        caption: [
          '0.75rem',
          { lineHeight: '1.4', letterSpacing: '0.14em' },
        ],
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        36: '9rem',
        44: '11rem',
      },
      maxWidth: {
        content: '76rem',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 12s ease-in-out infinite',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-accent':
          'radial-gradient(circle at 20% 20%, rgba(124, 255, 196, 0.08), transparent 50%)',
        'radial-violet':
          'radial-gradient(circle at 80% 80%, rgba(155, 140, 255, 0.08), transparent 50%)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
    },
  },
  plugins: [],
}
