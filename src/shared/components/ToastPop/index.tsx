'use client';

import { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface Props {
  children?: ReactNode;
  index?: number;
  action?: ReactNode;
}

const ToastPop = ({ children, index = 0, action }: Props) => {
  const TRANS_Y_RATIO = 15;
  const SCALE_RATIO = 0.04;

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0 }}
      initial={{ opacity: 0, translateY: `-100%` }}
      animate={{
        opacity: 1,
        translateY: `${-100 - TRANS_Y_RATIO * (index + 1)}%`,
        scale: 1 - SCALE_RATIO * index,
        zIndex: 9999 - index
      }}
      exit={{
        translateY: `${-100 - TRANS_Y_RATIO * index}%`,
        opacity: 0
      }}
      className="typo-title-14-medium absolute flex w-full items-center justify-between rounded-[8px] bg-gray-800 px-[16px] py-[10px] text-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]"
    >
      <span>{children}</span>
      {action && <span>{action}</span>}
    </motion.div>
  );
};

export default ToastPop;
