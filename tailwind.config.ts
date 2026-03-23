import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        plum: {
          50: '#faf6ff',
          100: '#f2ebff',
          200: '#e3d2ff',
          300: '#cdb0ff',
          400: '#b083ff',
          500: '#9357ff',
          600: '#7b39ea',
          700: '#6627c9',
          800: '#5222a1',
          900: '#431d81'
        },
        ink: '#15142b',
        mist: '#f6f5fb'
      },
      boxShadow: {
        glow: '0 10px 30px rgba(124, 58, 237, 0.18)',
        soft: '0 10px 30px rgba(21, 20, 43, 0.08)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(147,87,255,0.22), transparent 35%), linear-gradient(135deg, #ffffff 0%, #f8f5ff 35%, #eef1ff 100%)',
        'panel-gradient': 'linear-gradient(135deg, rgba(147,87,255,0.12), rgba(91,120,255,0.08))',
        'accent-gradient': 'linear-gradient(135deg, #7b39ea 0%, #9f67ff 50%, #5b78ff 100%)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
