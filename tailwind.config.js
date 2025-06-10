/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind CSS 를 적용할 경로를 app폴더내 모든 디렉토리내 js,ts,jsx,tsx파일에 적용
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      zIndex: {
        topButton: '500',
        toast: '9999',
        popup: '1000',
        modal: '1000',
        tooltip: '5000',
        header: '4999',
        footer: '4999',
        backdrop: '9999'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // 이미 존재하는 플러그인
    function ({ addUtilities }) {
      const scrollUtilities = {
        '.clean-scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': 'rgba(0, 0, 0, 0.1) transparent'
        },
        '.clean-scrollbar::-webkit-scrollbar': {
          height: '6px',
          width: '6px'
        },
        '.clean-scrollbar::-webkit-scrollbar-track': {
          background: 'transparent'
        },
        '.clean-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          border: 'none'
        }
      };
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
