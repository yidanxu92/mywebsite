// tailwind.config.cjs
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // only if you also use the Pages router
    './src/**/*.{js,ts,jsx,tsx,mdx}',  // only if you have a /src directory
  ],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#3b82f6' } },
      boxShadow: { soft: '0 2px 20px -4px rgb(0 0 0 / 0.1)' },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
    },
  },
  plugins: [],
}
