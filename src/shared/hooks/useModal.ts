import { ReactNode, useCallback } from 'react';
import { useAtom } from 'jotai';
import { modalState } from '@/shared/atoms/alert';

const useModal = () => {
  const [modal, setModal] = useAtom(modalState);

  const openModal = useCallback((el: ReactNode) => setModal(el), [setModal]);
  const closeModal = useCallback(() => setModal(null), [setModal]);

  return { modal, openModal, closeModal };
};

export default useModal;
