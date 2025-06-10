'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
  className?: string;
}

const TabButton = ({ children, active = false, className, ...props }: TabButtonProps) => (
  <button
    type="button"
    className={twMerge(
      `relative flex h-[44px] w-full items-center justify-center border-b-2 border-gray-100 bg-white ${active ? 'typo-title-14-semibold text-gray-900' : 'typo-title-14-regular text-gray-500'} `,
      className
    )}
    {...props}
  >
    {children}
    {active && (
      <motion.div
        layoutId="tab"
        className="absolute -bottom-[2px] z-10 h-[2px] w-full bg-gray-900"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </button>
);

export default TabButton;
