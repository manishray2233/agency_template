/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white1: "#fff",
        white: "#fefeff",
        "text-heading-color": "#1f1f1f",
        dimgray: "#525252",
        gray: {
          "100": "#8a8a8a",
          "200": "#1e1e1e",
          "300": "rgba(254, 254, 255, 0.45)",
          "400": "rgba(0, 0, 0, 0.45)",
        },
        black: "#000",
        "gray-color": "#bebebe",
        gainsboro: "#e6e6e6",
        whitesmoke: "#ececec",
        darkturquoise: "#00cfc8",
        darkslategray: "#333",
        lightseagreen: "#00b5ad",
      },
      spacing: {},
      fontFamily: {
        font: "Poppins",
      },
      borderRadius: {
        mini: "15px",
        "21xl": "40px",
        sm: "14px",
        "13xl": "32px",
        "51xl": "70px",
      },
    },
    fontSize: {
      base: "16px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "48xl": "67px",
      "35xl": "54px",
      "19xl": "38px",
      "4xl": "23px",
      "2xl": "21px",
      mid: "17px",
      "9xl": "28px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
