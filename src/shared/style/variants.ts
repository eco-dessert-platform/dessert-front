import { cva } from 'class-variance-authority';

export const selectInputVariants = cva('cursor-pointer rounded-[8px]', {
  variants: {
    outline: {
      true: 'border',
      false: 'border-none'
    },
    checked: {
      true: 'bg-secondary-pink border-primary-orange-red text-primary-orange-red',
      false: 'bg-red-gray-30 border-transparent'
    }
  }
});
