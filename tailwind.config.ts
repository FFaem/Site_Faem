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
      screens: {
        'ipad-air': '820px',
        'asus-zenbook-fold': '853px',
        'surface-pro': '912px',
        'ipad-pro': '1024px',
        
      },

      colors:{
        "dark": '#303134',
        "medium":'#E1E1E1',

      },
      width: {
        'custom-width': '1600px',
      },
      height: {
        'custom-height': '550px',
        'custom-height-mobile': '900px'
      },


    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
