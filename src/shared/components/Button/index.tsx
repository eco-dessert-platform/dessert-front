import React, { ButtonHTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants?:
    | 'primary-black'
    | 'primary-white'
    | 'primary-orange'
    | 'primary-bd'
    | 'secondary-white'
    | 'secondary-black'
    | 'input'
    | 'popup-black'
    | 'popup-white';
}

const VARIANT_CLASS = {
  'primary-black': 'w-full h-[52px] py-[14px] text-center rounded-full text-white bg-gray-900',
  'primary-white':
    'w-full h-[52px] py-[14px] text-center rounded-full text-gray-900 bg-white border border-solid border-gray-200',
  'primary-orange':
    'w-full py-[14px] text-center rounded-full bg-primaryOrangeRed border text-white border-solid border-gray-200',
  'primary-bd':
    'w-full py-[14px] text-center rounded-full bg-white border text-primaryOrangeRed border-solid border-primaryOrangeRed',
  'secondary-white': 'px-[10px] py-[6px] bg-gray-100 rounded-full text-12',
  'secondary-black': 'px-[10px] py-[6px] bg-gray-800 rounded-full text-[12px] text-white ',
  input:
    'disabled:text-gray-500 px-[11.5px] py-[6px] text-12 rounded-[8px] bg-gray-700 text-white disabled:bg-gray-200',
  'popup-black':
    'w-full h-[46px] py-[14px] px-[10px] text-center rounded-full text-white bg-gray-900',
  'popup-white':
    'w-full h-[46px] py-[14px] px-[10px] text-center rounded-full text-gray-900 bg-white border border-solid border-gray-200'
};

/**
 * @deprecated ButtonNewver 사용해주세요.
 */
const Button = ({ variants = 'primary-black', className = '', ...props }: ButtonProps) => (
  <button type="button" className={twMerge(VARIANT_CLASS[variants], className)} {...props} />
);

export default Button;
