import { twMerge } from 'tailwind-merge';

import BbangleCryIcon from '@public/assets/icons/bbangle-cry.svg';

interface SadBbangleBoxProps {
  className?: string;
  children?: React.ReactNode;
}

const SadBbangleBox = ({ className, children }: SadBbangleBoxProps) => (
  <div className={twMerge('flex w-full flex-col items-center justify-center gap-[2px]', className)}>
    <BbangleCryIcon />
    <div className="typo-title-12-regular text-center text-gray-500">{children}</div>
  </div>
);

export default SadBbangleBox;
