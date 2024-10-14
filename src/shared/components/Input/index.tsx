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
          className="inline-block mb-[6px] typo-title-14-semibold text-gray-700"
          htmlFor={inputId}
        >
          {label} {required && <span className="text-primaryOrangeRed">*</span>}
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
        {button && <div className="absolute -translate-y-1/2 top-1/2 right-4">{button}</div>}
      </div>
    </div>
  );
};

export default forwardRef(Input);
