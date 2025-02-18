/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        soil: '#4A4A48',
        olive: '#566246',
        sage: '#A4C2A5',
        beige: '#bab6a8',
        neutral: '#F1F2EB',
      },
    },
  },
  plugins: [],
}
