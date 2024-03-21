import PaddingWrapper from '@/components/commons/PaddingWrapper';
import { ReactNode } from 'react';

interface StoreDetailSectionProps {
  className?: string;
  title: string;
  children: ReactNode;
}
const StoreDetailSection = ({ className, title, children }: StoreDetailSectionProps) => {
  return (
    <PaddingWrapper className={className}>
      <div className="text-gray-800 text-14 mb-[10px] font-semibold">{title}</div>
      {children}
    </PaddingWrapper>
  );
};

export default StoreDetailSection;
