import { InputHTMLAttributes, ReactNode, useId } from 'react';
import { twMerge } from 'tailwind-merge';

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  children?: ReactNode;
}

const ImageInput = ({ className, children, ...props }: ImageInputProps) => {
  const inputId = useId();

  return (
    <label htmlFor={inputId} className={twMerge(`inline-block cursor-pointer`, className)}>
      <input id={inputId} type="file" accept="image/*" hidden={!!children} {...props} />
      {children}
    </label>
  );
};

export default ImageInput;
