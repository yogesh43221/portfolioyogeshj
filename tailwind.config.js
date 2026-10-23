/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        paper: {
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#EAE1D5',
          border: 'rgba(217, 119, 6, 0.15)',
        },
        blueprint: {
          950: '#0B0D12',
          900: '#0E1117',
          850: '#141822',
          800: '#1A202C',
          700: '#2A3346',
          border: 'rgba(148, 163, 184, 0.15)',
        },
        midnight: {
          950: '#0B0D12',
          900: '#111319', // Dark mode base
          800: '#1D1F2C', // Card surface
          700: '#262938', // Hover surface
        },
        horizon: {
          light: '#F3FDFF', // Light mode base
          sky: '#3D7EAE',   // Light mode primary
          gold: '#ECCA2F',  // Accent gold
          clouds: '#AACADF', // Subtle accent
        },
        cyber: {
          primary: '#3b82f6',
          accent: '#2563eb',
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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