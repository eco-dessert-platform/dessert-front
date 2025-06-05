import { ButtonHTMLAttributes } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/shared/utils/cn';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'border-white' | 'black' | 'border-primary' | 'primary' | 'gray';
  size?: 'md' | 'lg';
  radius?: 'round' | 'square';
}

export const buttonVariants = cva(
  'inline-flex min-w-[120px] p-[16px] justify-center items-center shrink-0 typo-title-16-medium',
  {
    variants: {
      color: {
        gray: 'text-gray-50 bg-gray-700',
        'border-white':
          'bg-white border border-gray-200 text-black hover:bg-black/[0.02] active:bg-black/[0.04] ',
        black: 'bg-black text-white',
        'border-primary':
          'bg-white border border-primary-orange-red text-primary-orange-red hover:bg-black/[0.02] active:bg-black/[0.04]',
        primary: 'text-white bg-primary-orange-red  hover:brightness-[.96] active:brightness-90'
      },
      size: {
        md: 'h-[46px]',
        lg: 'h-[56px]'
      },
      radius: {
        square: 'rounded-[10px]',
        round: 'rounded-[50px]'
      }
    }
  }
);

const ButtonNewver = ({
  color = 'primary',
  size = 'md',
  radius = 'round',
  className,
  ...props
}: Props) => (
  <button
    type="button"
    className={cn(
      buttonVariants({ size, color, radius }),
      'disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed',
      className
    )}
    {...props}
  />
);

export default ButtonNewver;
