'use client';

import { toastStateNewVer } from '@/shared/atoms/alert';
import ToastPop from '@/shared/components/ToastPop';
import { ELEMENT_ID } from '@/shared/constants/elementId';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { AnimatePresence, motion, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';

const ToastContainer = () => {
  const toasts = useAtomValue(toastStateNewVer);
  const translateY = useSpring(0);
  const pathname = usePathname();
  const footerRef = useRef<HTMLElement | null>(null);
  const { resetToast } = useToastNewVer();

  useEffect(() => {
    const footer = document.getElementById(ELEMENT_ID.footer);
    if (!footer) return;
    if (footerRef.current?.clientHeight === footer.clientHeight) return;

    translateY.set(-footer.clientHeight);
    footerRef.current = footer;
  }, [pathname, translateY, resetToast]);

  return (
    <motion.div
      style={{
        translateY,
        translateX: '-50%'
      }}
      className="fixed bottom-0 w-[calc(100%-32px)] max-w-[calc(600px-32px)] z-toast left-1/2"
    >
      <AnimatePresence>
        {toasts.map(({ message, id, action }, index) => (
          <ToastPop key={id} index={index} action={action}>
            {message}
          </ToastPop>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ToastContainer;
