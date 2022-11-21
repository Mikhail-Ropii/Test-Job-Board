/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      mainBg: "#E6E9F2",
      cardModBg: "#EFF0F5",
      cardDescBg: "#FFFFFF",
      mainText: " #3A4562",
      secondaryText: "#878D9D",
      bgButton: "#384564",
      mobileMain: "#38415D",
    },
    fontFamily: {
      novaLight: ["Nova-light", "sans-serif"],
      novaRegular: ["Nova-regular", "sans-serif"],
      novaSemiBold: ["Nova-semiBold", "sans-serif"],
      novaBold: ["Nova-bold", "sans-serif"],
    },
    fontSize: {
      xs: [
        "14px",
        {
          lineHeight: "17px",
          letterSpacing: "0.21px",
        },
      ],
      s: [
        "16px",
        {
          lineHeight: "25px",
          letterSpacing: "0.24px",
        },
      ],
      m: [
        "18px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.56px",
        },
      ],
      l: [
        "20px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.63px",
        },
      ],
      xl: [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "0.75px",
        },
      ],
      xxl: [
        "28px",
        {
          lineHeight: "34px",
          letterSpacing: "0.41px",
        },
      ],
      additional: [
        "16px",
        {
          lineHeight: "16px",
          letterSpacing: "-0.46px",
        },
      ],
    },
    extend: {
      boxShadow: {
        "3xl":
          "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
