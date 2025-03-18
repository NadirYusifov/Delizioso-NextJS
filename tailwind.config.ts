import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // safelist:[
  //   {
  //     pattern: /bg-(green|blue|red)-500/,
  //   }
  // ],
  theme: {
    extend: {
      backgroundImage: {
        'workbgimage': "url('.../public/workbgimage.png')"
      },
      colors: {
        'medium-roast': '#311F09',
        'jupiter': '#E3E2E0',
        'dark-orange': '#FF8A00',
        'matt-green': '#3FA72F',
        'warm-ash': '#D0CCC7',
        'irish-coffee': '#5C4529',
        'turtle-warrior': '#3FC66E',
        'soft-pillow': '#FFF4E7',
        infusion: '#D0CCC7',
        'van-dyke-brown': '#59442B',
        beaver: "#A08D76",
        grullo: "#A0978C",
        "pale-silver": "#C7BFB6"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
