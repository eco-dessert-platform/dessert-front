/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind CSS 를 적용할 경로를 app폴더내 모든 디렉토리내 js,ts,jsx,tsx파일에 적용
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff)'
      },
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      animation: {
        pop: 'pop 0.4s ease-in-out',
        slideUp: 'slideUp 0.2s ease-out',
        slideDown: 'slideDown 0.3s ease-out'
      },
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
        '.custom-slider-thumb': {
          '::-webkit-slider-thumb': {
            width: '1.25rem', // 원의 너비
            height: '1.25rem', // 원의 높이
            backgroundColor: 'orange', // 배경색 (예: 오렌지색)
            border: '2px solid #fff', // 테두리 스타일
            borderRadius: '50%' // 원의 테두리 반지름
          }
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
