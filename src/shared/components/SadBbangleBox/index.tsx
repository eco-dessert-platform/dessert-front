import { twMerge } from 'tailwind-merge';

import BbangleCryIcon from '@public/assets/icons/bbangle-cry.svg';

interface SadBbangleBoxProps {
  className?: string;
  children?: React.ReactNode;
}

const SadBbangleBox = ({ className, children }: SadBbangleBoxProps) => (
  <div className={twMerge('flex flex-col items-center justify-center w-full gap-[2px]', className)}>
    <BbangleCryIcon />
    <div className="text-gray-500 text-center typo-title-12-regular">{children}</div>
  </div>
);

export default SadBbangleBox;
