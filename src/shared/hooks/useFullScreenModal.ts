// hooks/useFullScreenModal.ts
import { useSetAtom } from 'jotai';
import { ReactNode } from 'react';
import { fullScreenModalState } from '@/shared/atoms/alert';

const useFullScreenModal = () => {
  const setFullScreenModal = useSetAtom(fullScreenModalState);

  const openFullScreenModal = (modal: ReactNode) => setFullScreenModal(modal);
  const closeFullScreenModal = () => setFullScreenModal(null);

  return { openFullScreenModal, closeFullScreenModal };
};

export default useFullScreenModal;
