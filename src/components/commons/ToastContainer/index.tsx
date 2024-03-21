'use client';

import { toastState } from '@/atoms/atom';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

const ToastContainer = () => {
  const toast = useRecoilValue(toastState);

  const toastVisible = !!toast;

  return (
    <AnimatePresence>
      {toastVisible && (
        <PaddingWrapper className="fixed left-1/2 -translate-x-1/2 bottom-[70px] z-toast pb-[20px] max-w-[600px] w-full h-[60px]">
          {toast}
        </PaddingWrapper>
      )}
    </AnimatePresence>
  );
};

export default ToastContainer;
