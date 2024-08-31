'use client';

import { toastStateNewVer } from '@/shared/atoms/alert';
import ToastPop from '@/shared/components/ToastPop';
import { AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

const ToastContainer = () => {
  const toasts = useRecoilValue(toastStateNewVer);

  const ref = useRef<HTMLDivElement>(null);

  const parentHeight = ref.current?.parentElement?.clientHeight;

  return (
    <div
      ref={ref}
      style={{
        top: parentHeight
      }}
      className="fixed w-[calc(100%-32px)] max-w-[calc(600px-32px)] z-toast mx-auto px-4 "
    >
      <AnimatePresence>
        {toasts.map(({ message, id, action }, index) => (
          <ToastPop key={id} index={index} action={action}>
            {message}
          </ToastPop>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
