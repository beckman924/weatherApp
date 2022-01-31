module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    },
    extend: {
      gridTemplateColumns: {
        template: "repeat(auto-fill), minmax(15rem, 1fr)",
        another: "repeat(auto-fit), minmax(15rem, 1fr)",
        responsive: "repeat(auto-fit, minmax(280px, 1fr));",
      },
    },
  },
  plugins: [],
};
