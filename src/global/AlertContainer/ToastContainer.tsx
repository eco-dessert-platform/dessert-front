'use client';

import { toastStateNewVer } from '@/shared/atoms/alert';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ToastPop from '@/shared/components/ToastPop';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

const ToastContainer = () => {
  const toasts = useRecoilValue(toastStateNewVer);

  return (
    <PaddingWrapper className="fixed max-w-[600px] w-full bottom-0 left-1/2 -translate-x-1/2 h-[90px] z-toast py-0">
      <div className="relative w-full h-full">
        <AnimatePresence>
          {toasts.map(({ message, id, action }, index) => (
            <ToastPop key={id} index={index} action={action}>
              {message}
            </ToastPop>
          ))}
        </AnimatePresence>
      </div>
    </PaddingWrapper>
  );
};

export default ToastContainer;
