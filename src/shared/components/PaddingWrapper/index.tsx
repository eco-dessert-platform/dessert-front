import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface PaddingWrapperProps {
  className?: string;
  children: ReactNode;
}

const PaddingWrapper = ({ className, children }: PaddingWrapperProps) => (
  <div className={twMerge('p-[16px]', className)}>{children}</div>
);

export default PaddingWrapper;
