import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        39: "39%",
        70: "70%",
      },
      boxShadow: {
        custom: "3px 3px 6px #C1C1C1",
      },
    },
    fontSize: {
      xs: "16px",
      sm: "18px",
      md: "20px",
      lg: "22px",
      xl: "24px",
      "2xl": "26px",
      "3xl": "28px",
    },
    colors: {
      white: "#FFFFFF",
      white2: "#FBFBFB",
      black: "#0E0D0D",
      gray: "#707070",
      orange: "#F46200",
      orange2: "#FD8148",
      kashmer: "#E1495A",
      pink: "#F0065D",
      purple: "#FC17C9",
      semon: "#FA6658",
      green: "#51B938",
      babyBlue: "#77C4FF",
      sky: "#2E97E8",
      darkSky: "#755DF8",
      darkGray: "#263640",
      lightGray: "#E1E1E1",
      ofWhite: "#F8F8F8",
      gray2: "#686868",
      gray3: "#4F4F4F",
      gray4: "#A2A2A2",
      gray5: "#c2c2c2",
      darkBlue: "#2F3349",
      darkBlue2: "#0b1133",
      lightBabyBlue: "#D0D4F1",
      blue: "#0248D4",
      rose: "#FFE1D6",
      semon2: "#FA655D",
      semon3: "#FA6062",
      rose2: "#F84775",
      background: "#F3F2F6",
      icon: "#b7b7b7",
      linksBackground: "#E8E8E8",
      linksTexts: "#D0D4F1",
      secondaryBtn: "#F2F0F4",
      formText: "#8B8B8B",
    },
  },
  plugins: [],
};
export default config;
