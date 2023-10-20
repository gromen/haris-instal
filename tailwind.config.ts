import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    keyframes: {
      show: {
        '0%': { transform: 'translatey(-50%)', opacity: '0' },
        '100%': { transform: 'translatey(0%)', opacity: '1' },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      show: 'show .2s linear',
      spin: 'spin 1.2s linear infinite',
    },
    transitionProperty: {
      height: 'height',
      spacing: 'margin, padding',
      opacity: 'opacity',
    },
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
      'black-rgba': 'rgba(0, 0, 0, 0.5)',
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
