/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#262626",
          "200": "#252526",
          "400": "rgba(17, 17, 17, 0.8)",
          "500": "rgba(255, 255, 255, 0.15)",
          "600": "rgba(0, 0, 0, 0.3)",
          "700": "rgba(255, 255, 255, 0.5)",
          "800": "#2b2826",
          "900": "#272727",
          "1200": "rgba(255, 255, 255, 0.1)",
          "1300": "rgba(32, 32, 32, 0.9)",
          "1400": "rgba(0, 0, 0, 0.4)",
          "1800": "rgba(255, 255, 255, 0.3)",
          "2000": "rgba(255, 255, 255, 0.7)",
          "2100": "rgba(39, 39, 39, 0.8)",
        },
        dimgray: {
          "100": "#636363",
          "200": "#5c5c5c",
          "300": "#595959",
          "400": "#4d4c4c",
          "500": "rgba(77, 76, 76, 0.36)",
        },
        darkslategray: {
          "100": "#363637",
          "200": "#2e2e2e",
          "300": "rgba(54, 54, 55, 0.6)",
          "400": "#313131",
          "700": "rgba(62, 62, 62, 0.4)",
        },
        "surface-color-surface-2": "#111",
        "line-2": "#1f1f1f",
        "stroke-gradient-dark": "#3e3e3e",
        "neutral-00": "#fff",
        "surface-color-surface-3": "#202020",
        lightgray: "rgba(208, 213, 221, 0.2)",
        "green-2": "#1abc72",
        "text-for-dark-70": "rgba(251, 251, 251, 0.7)",
        "text-for-dark-100": "#fbfbfb",
        "additional-color-green-4": "#66d2a1",
        paleturquoise: "#bef2da",
        blueviolet: "#724bf9",
        mediumslateblue: "#8c63ff",
      },
      spacing: {},
      fontFamily: {
        "body-body-3-medium": "Lato",
        "caption-1-regular": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "42xl": "61px",
        "10xs-2": "2.2px",
        "28xl": "47px",
        lg: "16px",
        md: "12px",
        md1: "12px",
        sm: "8px",
        lg1: "16px",
        sm1: "8px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq550: {
        raw: "screen and (max-width: 550px)",
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
