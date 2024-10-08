/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    screens: {
      xxs:"320px",
      xs: "480px", 
      sm: "640px", 
      md: "768px", 
      lg: "1024px", 
      xl: "1280px", 
      "2xl": "1536px", 
    },
    extend: {},
  },
  plugins: [],
};
