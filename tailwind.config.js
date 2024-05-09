/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      xxl: "1440px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        horizontalSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10px)' }, 
        },
      },
      animation: {
        'horizontal-slide': 'horizontalSlide 0.8s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
