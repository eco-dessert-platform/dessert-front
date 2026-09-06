import { ReactNode, useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import { modalState } from '@/shared/atoms/alert';

const MODAL_HISTORY_STATE = '__bbanggree_modal';

const useModal = () => {
  const [modal, setModal] = useAtom(modalState);

  const openModal = useCallback(
    (el: ReactNode) => {
      setModal(el);

      if (typeof window === 'undefined' || window.history.state?.[MODAL_HISTORY_STATE]) return;
      window.history.pushState(
        { ...window.history.state, [MODAL_HISTORY_STATE]: true },
        '',
        window.location.href
      );
    },
    [setModal]
  );
  const closeModal = useCallback(() => {
    setModal(null);

    if (typeof window !== 'undefined' && window.history.state?.[MODAL_HISTORY_STATE]) {
      window.history.back();
    }
  }, [setModal]);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  useEffect(() => {
    const handlePopState = () => {
      if (modal) {
        setModal(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [modal, setModal]);

  return { modal, openModal, closeModal };
};

export default useModal;
