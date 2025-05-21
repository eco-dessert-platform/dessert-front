'use client';

import { AnimatePresence } from 'framer-motion';
import { fullScreenModalState } from '@/shared/atoms/alert';
import { useAtomValue } from 'jotai';

const FullScreenModalContainer = () => {
  const fullScreenModal = useAtomValue(fullScreenModalState);
  const visible = !!fullScreenModal;

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-[600px] mx-auto h-screen">
          {fullScreenModal}
        </div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenModalContainer;
