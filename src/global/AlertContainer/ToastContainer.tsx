'use client';

import { toastState } from '@/shared/atoms/alert';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { ToastPopProps } from '@/shared/types/toastProps';
import { AnimatePresence } from 'framer-motion';
import { ReactElement, cloneElement, isValidElement } from 'react';
import { useRecoilValue } from 'recoil';

const ToastContainer = () => {
  const toasts = useRecoilValue(toastState);

  return (
    <PaddingWrapper className="bg-yellow-50 fixed max-w-[600px] w-full bottom-0 left-1/2 -translate-x-1/2  min-h-[70px] h-fit z-toast flex flex-col gap-[10px]">
      <AnimatePresence>
        {toasts.map((toast, index) => {
          if (!isValidElement(toast)) return null;

          const toastWithIndex = cloneElement(toast as ReactElement<ToastPopProps>, {
            index
          });

          return toastWithIndex;
        })}
      </AnimatePresence>
    </PaddingWrapper>
  );
};

export default ToastContainer;
