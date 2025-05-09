import { fullScreenModalState } from '@/shared/atoms/alert';
import { ReactNode } from 'react';
import { useSetRecoilState } from 'recoil';

const useFullScreenModal = () => {
  const setFullScreenModal = useSetRecoilState(fullScreenModalState);

  const openFullScreenModal = (modal: ReactNode) => setFullScreenModal(modal);
  const closeFullScreenModal = () => setFullScreenModal(null);

  return { openFullScreenModal, closeFullScreenModal };
};

export default useFullScreenModal;
