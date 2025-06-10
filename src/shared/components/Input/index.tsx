import { INPUT_STYLE } from '@/shared/constants/inputStyle';
import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  button?: ReactNode;
  label?: string;
}

const Input = (
  { id, label, button, required, className, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputId = useId();

  return (
    <div id={id} className="w-full">
      {label && (
        <label
          className="typo-title-14-semibold mb-[6px] inline-block text-gray-700"
          htmlFor={inputId}
        >
          {label} {required && <span className="text-primary-orange-red">*</span>}
        </label>
      )}
      <div className="relative w-full">
        <input
          ref={ref}
          id={inputId}
          className={twMerge(INPUT_STYLE, button && 'pr-24', className)}
          required={required}
          {...props}
        />
        {button && <div className="absolute top-1/2 right-4 -translate-y-1/2">{button}</div>}
      </div>
    </div>
  );
};

export default forwardRef(Input);
