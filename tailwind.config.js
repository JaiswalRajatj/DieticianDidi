import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#f1f5f9', // light background (was almost white)
        400: '#2563eb', // strong blue (was dark pink)
        500: '#60a5fa', // accent blue (was light pink)
        600: '#0f172a', // deep slate (was wine)
      },
      grayscale: {
        25: '#f1f5f9', // light background (was beige)
        50: '#e0f2fe', // pale blue (was pink)
        100: '#efefef',
        200: '#bae6fd', // light blue (was off-white)
        950: '#1e293b', // slate (was dark pink)
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
