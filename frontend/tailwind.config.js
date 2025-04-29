/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1E40AF',
        silver: '#9CA3AF',
        amber: '#F59E0B',
        lightGray: '#F3F4F6',
        darkGray: '#111827',
      },
    },
  },
  plugins: [],
};
