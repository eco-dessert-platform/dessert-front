/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind CSS 를 적용할 경로를 app폴더내 모든 디렉토리내 js,ts,jsx,tsx파일에 적용
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        topButton: 500,
        toast: 9999,
        popup: 1000,
        modal: 1000,
        tooltip: 5000,
        header: 4999,
        footer: 4999,
        backdrop: 9999
      },

      colors: {
        // ex) text-gray-50

        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        },
        redGray: {
          30: '#F8F8F8',
          50: '#F8F8F8'
        },
        blueGray: {
          30: '#F4F7F9',
          50: '#ECEFF1'
        },
        kakao: '#FEE500',
        primaryOrangeRed: '#F04C28',
        subColorPink: '#FEEDEA',
        secondaryPink: '#FDF1EE',
        secondaryOrangeRed: '#ED5F5F'
      },

      keyframes: {
        ['bell-shake']: {
          '0%': { transform: 'rotate(0)' },
          '1%': { transform: 'rotate(30deg)' },
          '3%': { transform: 'rotate(-28deg)' },
          '5%': { transform: 'rotate(34deg)' },
          '7%': { transform: 'rotate(-32deg)' },
          '9%': { transform: 'rotate(30deg)' },
          '11%': { transform: 'rotate(-28deg)' },
          '13%': { transform: 'rotate(26deg)' },
          '15%': { transform: 'rotate(-24deg)' },
          '17%': { transform: 'rotate(22deg)' },
          '19%': { transform: 'rotate(-20deg)' },
          '21%': { transform: 'rotate(18deg)' },
          '23%': { transform: 'rotate(-16deg)' },
          '27%': { transform: 'rotate(-12deg)' },
          '31%': { transform: 'rotate(-8deg)' },
          '33%': { transform: 'rotate(6deg)' },
          '35%': { transform: 'rotate(-4deg)' },
          '37%': { transform: 'rotate(2deg)' },
          '39%': { transform: 'rotate(-1deg)' },
          '41%': { transform: 'rotate(1deg)' },
          '43%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        ['timer-shake']: {
          '0%, 20%, 100%': { transform: 'rotate(0)' },
          '2%, 6%, 10%': { transform: 'rotate(-10deg)' },
          '4%, 8%, 12%': { transform: 'rotate(10deg)' }
        },
        ['heart-pop']: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' }
        }
      },

      animation: {
        ['bell-shake']: 'bell-shake 5s 0.1s ease-in-out',
        ['timer-shake']: 'timer-shake 5s 0.1s ease-in-out',
        ['heart-pop']: 'heart-pop 0.3s ease-in-out'
      },

      // fontSize, lineHeight,letterSpacing 삭제 예정
      // ex) text-11
      fontSize: {
        11: '11px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px'
      },
      // ex) leading-120
      lineHeight: {
        120: '1.2',
        130: '1.3',
        140: '1.4',
        150: '1.5'
      },
      // ex) tracking-tight-6
      letterSpacing: {
        'tight-6': '-0.06em',
        'tight-4': '-0.04em',
        'tight-2': '-0.02em'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // 이미 존재하는 플러그인
    function ({ addUtilities }) {
      const scrollUtilities = {
        '.clean-scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': 'rgba(0, 0, 0, 0.1) transparent',
        },
        '.clean-scrollbar::-webkit-scrollbar': {
          height: '6px',
          width: '6px',
        },
        '.clean-scrollbar::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '.clean-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          border: 'none',
        }
      }
      const centerUtilities = {
        '.absoulte-center': {
          '@apply absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2': {}
        },
        '.flex-center': {
          '@apply flex justify-center items-center': {}
        }
      };
      const typoUtilities = {
        '.typo-heading-20-semibold': {
          'font-size': '20px',
          'font-weight': 600,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-heading-18-semibold': {
          'font-size': '18px',
          'font-weight': 600,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-title-16-regular': {
          'font-size': '16px',
          'font-weight': 400,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-title-16-medium': {
          'font-size': '16px',
          'font-weight': 500,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-title-16-semibold': {
          'font-size': '16px',
          'font-weight': 600,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },

        '.typo-title-14-regular': {
          'font-size': '14px',
          'font-weight': 400,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-title-14-medium': {
          'font-size': '14px',
          'font-weight': 500,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-title-14-semibold': {
          'font-size': '14px',
          'font-weight': 600,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-title-14-bold': {
          'font-size': '14px',
          'font-weight': 700,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },

        '.typo-body-12-regular': {
          'font-size': '12px',
          'font-weight': 400,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-body-12-medium': {
          'font-size': '12px',
          'font-weight': 500,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-body-12-semibold': {
          'font-size': '12px',
          'font-weight': 600,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-body-12-bold': {
          'font-size': '12px',
          'font-weight': 700,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-body-12-regular-underline': {
          'font-size': '12px',
          'font-weight': 500,
          'text-decoration': 'underline',
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },

        '.typo-body-11-regular': {
          'font-size': '11px',
          'font-weight': 500,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-body-11-semibold': {
          'font-size': '11px',
          'font-weight': 600,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        },
        '.typo-body-11-bold': {
          'font-size': '11px',
          'font-weight': 700,
          'line-height': '150%',
          'letter-spacing': '-0.02em'
        }
      };
      addUtilities({ ...typoUtilities, ...centerUtilities, ...scrollUtilities });
    }
  ]
};
