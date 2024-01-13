/** @type {import('tailwindcss').Config} */
module.exports = {
    // tailwind CSS 를 적용할 경로를 app폴더내 모든 디렉토리내 js,ts,jsx,tsx파일에 적용
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                pop: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' }
                }
            },
            animation: {
                pop: 'pop 0.4s ease-in-out'
            }
        }
    },
    plugins: []
};
