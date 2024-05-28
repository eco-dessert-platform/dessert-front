'use client';

import { toastState } from '@/shared/atoms/alert';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

const ToastContainer = () => {
  const toasts = useRecoilValue(toastState);

  return (
    <PaddingWrapper className="bg-yellow-50 fixed max-w-[600px] w-full bottom-0  min-h-[70px] h-fit z-toast flex flex-col gap-[10px]">
      <AnimatePresence>{toasts.map((toast) => toast)}</AnimatePresence>
    </PaddingWrapper>
  );
};

export default ToastContainer;
