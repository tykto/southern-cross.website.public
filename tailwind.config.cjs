module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        /* https://tailwindshades.com used to generate shades */
        resolution: {
          DEFAULT: '#00247D',
          50: '#3670FF',
          100: '#2161FF',
          200: '#0047F7',
          300: '#003CCF',
          400: '#0030A6',
          500: '#00247D',
          600: '#001445',
          700: '#00040D',
          800: '#000000',
          900: '#000000',
        },
        weborange: {
          DEFAULT: '#FFA401',
          50: '#FFE6B9',
          100: '#FFDEA4',
          200: '#FFD07B',
          300: '#FFC153',
          400: '#FFB32A',
          500: '#FFA401',
          600: '#C88000',
          700: '#905C00',
          800: '#583800',
          900: '#201400',
        },
        grandis: {
          DEFAULT: '#FFD180',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFDFA',
          300: '#FFEFD2',
          400: '#FFE0A9',
          500: '#FFD180',
          600: '#FFBD48',
          700: '#FFA810',
          800: '#D78900',
          900: '#9F6500',
        },
      },
      height: {
        100: '26rem',
        120: '30rem',
        144: '36rem',
      },
      fontFamily: {
        caveat: ['Caveat'],
      },
      backgroundImage: {
        hero: "url('/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
