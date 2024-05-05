/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "375",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1024",
      xxl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
