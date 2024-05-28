'use client';

import useToast from '@/shared/hooks/useToast';
import { ToastPopProps } from '@/shared/types/toastProps';
import { motion } from 'framer-motion';

const ToastPop = ({ children, index = 0 }: ToastPopProps) => {
  const { closeToast } = useToast();

  return (
    <motion.div
      onClick={closeToast}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        translateY: -70 - index * 10,
        scale: 1 - 0.04 * index,
        zIndex: -(index - 3)
      }}
      exit={{ translateY: -70 - index * 10 + 5, opacity: 0 }}
      drag="y"
      className="absolute shadow-[0_0_10_0_rgba(0,0,0,0.3)] shadow-black left-0 flex items-center justify-between gap-[6px] px-[16px] py-[10px] w-full bg-gray-800 rounded-[8px] text-white typo-title-14-medium"
    >
      {children}
    </motion.div>
  );
};

export default ToastPop;
