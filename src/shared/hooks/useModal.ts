import { modalState } from '@/shared/atoms/alert';
import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

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
