'use client';

import { toastStateNewVer } from '@/shared/atoms/alert';
import ToastPop from '@/shared/components/ToastPop';
import { ELEMENT_ID } from '@/shared/constants/elementId';
import { AnimatePresence, motion, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';

const ToastContainer = () => {
  const toasts = useRecoilValue(toastStateNewVer);
  const top = useSpring(0);
  const pathname = usePathname();
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const footer = document.getElementById(ELEMENT_ID.footer);
    if (!footer) return;
    if (footerRef.current?.offsetTop === footer.offsetTop) return;

    top.set(footer.offsetTop);
    footerRef.current = footer;
  }, [pathname, top]);

  return (
    <motion.div
      style={{
        translateY: top
      }}
      className="fixed top-0 w-[calc(100%-32px)] max-w-[calc(600px-32px)] z-toast mx-auto px-4 "
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
