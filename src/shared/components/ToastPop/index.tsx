'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  index?: number;
  action?: ReactNode;
}

const ToastPop = ({ children, index = 0, action }: Props) => (
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
    <span>{children}</span>
    {action && <span>{action}</span>}
  </motion.div>
);

export default ToastPop;
