import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'Purple-100': oklch(0.72 0.11 178),
        // 'Purple-500': 'oklch(55% 0.203 290.4)',
        // 'Yellow-100': 'oklch(95.34% 0.0204 69.43)',
        // 'Yellow-500': 'oklch(86.98% 0.1281 81.2)',
        // 'White': 'oklch(100% 0 0)',
        // 'Black': 'oklch(18.15% 0 0)',
        
        'Purple-100': 'hsl(254, 88%, 90%)',
        'Purple-500': 'hsl(256, 67%, 59%)',
        'Yellow-100': 'hsl(31, 66%, 93%)',
        'Yellow-500': 'hsl(39, 100%, 71%)',
        'White': 'hsl(0, 0%, 100%)',
        'Black': 'hsl(0, 0%, 7%)'
      },
    },
  },
  plugins: [],
} satisfies Config;
