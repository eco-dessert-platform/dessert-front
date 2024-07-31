'use client';

import { useEffect, useRef } from 'react';
import { toastStateNewVer } from '@/shared/atoms/alert';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ToastPop from '@/shared/components/ToastPop';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { fixedBottomState } from '@/shared/atoms/fixedBottom';

const ToastContainer = () => {
  const toasts = useRecoilValue(toastStateNewVer);
  const fixedBottom = useRecoilValue(fixedBottomState);
  const toastContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toastContainer = toastContainerRef.current;
    const fixedBottomContainer = document.getElementById('fixed-bottom-container');
    if (!toastContainer || !fixedBottomContainer) return;

    const fixedBottomContainerHeight = fixedBottomContainer.offsetHeight;
    toastContainer.style.height = `${String(fixedBottomContainerHeight)}px`;
  }, [fixedBottom]);

  return (
    <PaddingWrapper
      ref={toastContainerRef}
      className="fixed max-w-[600px] w-full bottom-0 left-1/2 -translate-x-1/2 z-toast py-0"
    >
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
