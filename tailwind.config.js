/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind CSS 를 적용할 경로를 app폴더내 모든 디렉토리내 js,ts,jsx,tsx파일에 적용
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        toast: 1000,
        popup: 1000,
        modal: 1000,
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
        blueGray: {
          30: '#F4F7F9',
          50: '#ECEFF1'
        },
        kakao: '#FEE500',
        primaryOrangeRed: '#F04C28',
        subColorPink: '#FEEDEA',
        secondaryOrangeRed: '#ED5F5F'
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
      const newUtilities = {
        '.typo-heading-20-semibold': {
          'font-size': '20px',
          'font-weight': 600
        },
        '.typo-title-16-regular': {
          'font-size': '16px',
          'font-weight': 400
        },
        '.typo-title-16-medium': {
          'font-size': '16px',
          'font-weight': 500
        },
        '.typo-title-14-semibold': {
          'font-size': '14px',
          'font-weight': 600
        },
        '.typo-title-14-bold': {
          'font-size': '14px',
          'font-weight': 700
        },
        '.typo-body-12-regular': {
          'font-size': '12px',
          'font-weight': 400
        },
        '.typo-body-12-medium': {
          'font-size': '12px',
          'font-weight': 500
        },
        '.typo-body-12-semibold': {
          'font-size': '12px',
          'font-weight': 600
        },
        '.typo-body-12-bold': {
          'font-size': '12px',
          'font-weight': 700
        },
        '.typo-body-12-regular-underline': {
          'font-size': '12px',
          'font-weight': 500,
          'text-decoration': 'underline'
        },
        '.typo-body-11-semibold': {
          'font-size': '11px',
          'font-weight': 600
        },
        '.typo-body-11-bold': {
          'font-size': '11px',
          'font-weight': 700
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
