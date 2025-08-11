// tailwind.config.js
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    screens:{
        'sm': '340px',
        'md': '540px',
        'lg': '768px',
        'xl': '1180px',
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: '32px',
      },
    },
    
  },
  plugins: [],
}
