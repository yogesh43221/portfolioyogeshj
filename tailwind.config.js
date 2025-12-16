/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyber: {
          900: '#020617', // Slate 950
          800: '#0f172a', // Slate 900
          700: '#1e293b', // Slate 800
          600: '#334155', // Slate 700
          primary: '#3b82f6', // Blue 500
          secondary: '#64748b', // Slate 500
          accent: '#2563eb', // Blue 600
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}