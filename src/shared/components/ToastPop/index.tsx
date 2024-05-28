'use client';

import { ToastPopProps } from '@/shared/types/toastProps';
import { motion } from 'framer-motion';

const ToastPop = ({ children, index = 0 }: ToastPopProps) => (
  <motion.div
    drag="y"
    dragConstraints={{ top: 0 }}
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      translateY: -70 - index * 10,
      scale: 1 - 0.04 * index,
      zIndex: 9999 - index
    }}
    exit={{ translateY: -70 - index * 10 + 5, opacity: 0 }}
    className="absolute shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] flex items-center justify-between gap-[6px] px-[16px] py-[10px] w-full bg-gray-800 rounded-[8px] text-white typo-title-14-medium"
  >
    {children}
  </motion.div>
);

export default ToastPop;
