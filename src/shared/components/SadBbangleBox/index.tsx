import { twMerge } from 'tailwind-merge';

import { BbangleIcon } from '../icons';

interface SadBbangleBoxProps {
  className?: string;
  children?: React.ReactNode;
}

const SadBbangleBox = ({ className, children }: SadBbangleBoxProps) => (
  <div className={twMerge('flex flex-col items-center justify-center w-full gap-[2px]', className)}>
    <BbangleIcon shape="cry" />
    <div className="text-gray-500 text-center typo-title-12-regular">{children}</div>
  </div>
);

export default SadBbangleBox;
