'use client';

import { useRecoilValue } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { fullScreenModalState } from '@/shared/atoms/alert';

const FullScreenModalContainer = () => {
  const fullScreenModal = useRecoilValue(fullScreenModalState);
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
