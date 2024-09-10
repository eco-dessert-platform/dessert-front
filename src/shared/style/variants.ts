import { cva } from 'class-variance-authority';

export const selectInputVariants = cva('cursor-pointer rounded-[8px]', {
  variants: {
    outline: {
      true: 'border',
      false: 'border-none'
    },
    checked: {
      true: 'bg-secondaryPink border-primaryOrangeRed text-primaryOrangeRed',
      false: 'bg-redGray-30 border-transparent'
    }
  }
});
