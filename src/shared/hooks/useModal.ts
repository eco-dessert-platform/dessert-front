import { ReactNode, useEffect } from 'react';
import { useAtom } from 'jotai';
import { modalState } from '@/shared/atoms/alert';

const useModal = () => {
  const [modal, setModal] = useAtom(modalState);

  const openModal = (el: ReactNode) => setModal(el);
  const closeModal = () => setModal(null);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  return { modal, openModal, closeModal };
};

export default useModal;
