/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "1px 3px 10px 1px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
