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
    if (footerRef.current?.clientHeight === footer.clientHeight) return;

    top.set(-footer.clientHeight);
    footerRef.current = footer;
  }, [pathname, top]);

  return (
    <motion.div
      style={{
        translateY: top
      }}
      className="fixed bottom-0 w-full z-toast "
    >
      {/* <ToastPop index={0}>test</ToastPop> */}
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
