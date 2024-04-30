'use client';

import { toastState } from '@/shared/atoms/alert';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

const ToastContainer = () => {
  console.log('ToastContainer');
  const toast = useRecoilValue(toastState);

  const toastVisible = !!toast;

  return (
    <AnimatePresence>
      {toastVisible && (
        <PaddingWrapper className="fixed left-1/2 -translate-x-1/2 bottom-[70px] z-toast pt-[0px] pb-[20px] max-w-[600px] w-full h-[60px]">
          {toast}
        </PaddingWrapper>
      )}
    </AnimatePresence>
  );
};

export default ToastContainer;
