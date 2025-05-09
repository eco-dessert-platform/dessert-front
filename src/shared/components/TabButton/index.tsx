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
      `flex items-center justify-center 
        relative h-[44px] w-full
        border-b-2 border-gray-100 bg-white
        ${active ? 'text-gray-900 typo-title-14-semibold' : 'text-gray-500 typo-title-14-regular'} 
      `,
      className
    )}
    {...props}
  >
    {children}
    {active && (
      <motion.div
        layoutId="tab"
        className="absolute z-10 -bottom-[2px] h-[2px] bg-gray-900 w-full"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </button>
);

export default TabButton;
