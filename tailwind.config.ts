import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        "dark": '#303134',
        "medium":'#E1E1E1',

      },
      width: {
        'custom-width': '1600px',
      },
      height: {
        'custom-height': '650px',
        'custom-height-mobile': '300px'
      },


    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
