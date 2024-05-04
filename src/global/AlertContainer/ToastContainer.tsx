'use client';

import { toastState } from '@/shared/atoms/alert';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

const ToastContainer = () => {
  const toast = useRecoilValue(toastState);

  return (
    <PaddingWrapper className="fixed max-w-[600px] w-full bottom-0  h-[70px] z-toast">
      <AnimatePresence>{toast}</AnimatePresence>
    </PaddingWrapper>
  );
};

export default ToastContainer;
