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
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
      },
    },
  },
  plugins: [],
}

