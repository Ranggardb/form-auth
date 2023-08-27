/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-green': '#7BFF9F',
        'theme-cream': '#FFE17B',
        'theme-orange': '#FD8D14',
        'theme-maroon': '#C51605',
      },
      gridColumn: {
        'span-1/2': 'span 1 / span 2',
      },
      gridRow: {
        'span-1/2': 'span 1 / span 2',
      },
    },
  },
  plugins: [],
};
