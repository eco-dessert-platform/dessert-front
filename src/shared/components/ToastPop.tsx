'use client';

import useToast from '@/shared/hooks/useToast';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IToastPopProps {
  children: ReactNode;
}

const ToastPop = ({ children }: IToastPopProps) => {
  const { closeToast } = useToast();

  return (
    <motion.div
      onClick={closeToast}
      initial={{ translateY: 0 }}
      animate={{ translateY: '-70px' }}
      exit={{ translateY: 0 }}
      drag="y"
      className="flex items-center justify-between gap-[6px] px-[16px] py-[10px] w-full bg-gray-800 rounded-[8px] text-14 text-white text-medium leading-150 tracking-tight-2"
    >
      {children}
    </motion.div>
  );
};

export default ToastPop;
