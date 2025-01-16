/** @type {import('tailwindcss').Config} */

import { Ubuntu } from 'next/font/google';

const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', ...fontFamily.sans], // Use the CSS variable
      },
    },
  },
  plugins: [],
};
