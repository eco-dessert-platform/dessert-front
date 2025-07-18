import { motion } from 'framer-motion';
import { MouseEventHandler, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface BackDropProps {
  isVisible: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
  className?: string;
}

const BackDrop = ({ isVisible, onClick, children, className = '' }: BackDropProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={twMerge(
      // ${isVisible ? "flex": "hidden"} 나중에 지워야함
      `${
        isVisible ? 'flex' : 'hidden'
      } z-backdrop fixed top-0 left-1/2 h-full w-full max-w-[600px] -translate-x-1/2 items-center justify-center bg-black/50`,
      className
    )}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export default BackDrop;
