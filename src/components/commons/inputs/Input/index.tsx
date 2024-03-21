import { INPUT_STYLE } from '@/commons/constants/inputStyle';
import { InputHTMLAttributes, ReactNode, useId } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  button?: ReactNode;
  label?: string;
}

const Input = ({ id, label, button, required, className, ...props }: Props) => {
  const inputId = useId();

  return (
    <div id={id} className="w-full">
      {label && (
        <label className="inline-block mb-[6px]" htmlFor={inputId}>
          {label} {required && <span className="text-primaryOrangeRed">*</span>}
        </label>
      )}
      <div className="relative w-full">
        <input
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

export default Input;
