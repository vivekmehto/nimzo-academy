/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 🔥 REQUIRED
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0B0B0B",
          blue: "#1FB6E0",
          gold: "#F4B400",
        },
      },
    },
  },
  plugins: [],
};
