/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B3A4A',
          light: '#3D5166',
          dark: '#1A2530',
        },
        accent: {
          DEFAULT: '#C45B3B',
          hover: '#A84D32',
          light: '#E8C4B8',
          pale: '#F3E8E2',
        },
        surface: '#EAECEA',
        bg: '#F5F5F3',
        border: {
          DEFAULT: '#D0D2CE',
          light: '#E2E4E0',
        },
        text: {
          DEFAULT: '#1C2833',
          secondary: '#5A6B7A',
          muted: '#8B95A0',
        },
        status: {
          success: '#4A8C5C',
          warning: '#C4841D',
          error: '#B5382A',
        },
        badge: {
          cost: { bg: '#F3E8E2', text: '#8B5E3C' },
          guide: { bg: '#E0E6EC', text: '#2B3A4A' },
          problem: { bg: '#F8E0D8', text: '#B5382A' },
          review: { bg: '#E0ECDF', text: '#4A8C5C' },
          comparison: { bg: '#E8E0F0', text: '#6B5B8A' },
          project: { bg: '#E0E8F0', text: '#3A5A7C' },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(43,58,74,0.08)',
        md: '0 4px 12px rgba(43,58,74,0.1)',
        lg: '0 8px 24px rgba(43,58,74,0.12)',
      },
      maxWidth: {
        article: '720px',
      },
    },
  },
  plugins: [],
}
