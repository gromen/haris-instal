import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#e93a14',
      white: '#ffffff',
      secondary: '#2c2c33',
      navy: {
        100: '#01057d',
        800: '#00055e',
      },
      gray: {
        300: '#eff5fb',
        400: '#f6f7f6',
        500: '#e5e3e3',
        700: '#909191',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      skew: {
        30: '30deg',
      },
    },
  },
  plugins: [],
};
export default config;
