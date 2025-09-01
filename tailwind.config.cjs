module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand:  '#3E5CF5', // purple nav
        hero:   '#2FD3AE', // teal hero
        cream:  '#F6E9E2', // warm cream (hero bottom)
        peach:  '#E7B2A8', 
        ink:    '#132051', // deep heading color (later sections)
      },
      boxShadow: { soft: '0 2px 20px -4px rgb(0 0 0 / 0.1)' },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
    },
  },
  plugins: [],
};
