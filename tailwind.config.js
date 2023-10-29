/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom-red': '#F92C16',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      userSelect: ['none'],
      fontSize: {
        '13px': '13px',
      },
      lineHeight: {
        '16px': '16px',
      },
      spacing: {
        '50': '50px',
        '40': '40px',
        '10px': '10px',
        '24px': '24px',
        '-68px': '-68px',
      },
      width: {
        '100dvw': '100dvw',
        '100px': '100px',
        '303px': '303px',
        '180px': '180px',
        '260px': '260px',
      },
      height: {
        '100dvh': 'var(--window-height)',
        '100px': '100px'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-select': {
          '-webkit-touch-callout': 'none',
          '-webkit-user-select': 'none',
          '-khtml-user-select': 'none',
          '-moz-user-select': 'none',
          '-ms-user-select': 'none',
          'user-select': 'none',
          '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
          'touch-action': 'manipulation'
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

