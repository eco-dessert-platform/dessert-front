import { ReactNode } from 'react';

import { cn } from '@/shared/utils/cn';

interface PaddingWrapperProps {
  className?: string;
  children: ReactNode;
}

const PaddingWrapper = ({ className, children }: PaddingWrapperProps) => (
  <div className={cn('p-[16px]', className)}>{children}</div>
);

export default PaddingWrapper;
