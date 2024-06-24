import { ReactNode } from 'react';
import { PolygonIcon } from './icons';
import { cn } from '../utils/cn';

interface Props {
  children: ReactNode;
  className?: string;
}

const Tooltip = ({ className, children }: Props) => (
  <div
    className={cn(
      'invisible typo-body-11-regular text-white rounded-[4px] px-[8px] py-[6px] bg-gray-800',
      className
    )}
  >
    <PolygonIcon className="absolute -top-[6px] left-[6px]" />
    {children}
  </div>
);

export default Tooltip;
