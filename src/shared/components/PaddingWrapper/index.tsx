import { cn } from '@/shared/utils/cn';
import { ReactNode, forwardRef, ForwardedRef } from 'react';

interface PaddingWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const PaddingWrapper = (
  { className, children, ...rest }: PaddingWrapperProps,
  ref: ForwardedRef<HTMLDivElement>
) => (
  <div ref={ref} className={cn('p-[16px]', className)} {...rest}>
    {children}
  </div>
);

export default forwardRef(PaddingWrapper);
