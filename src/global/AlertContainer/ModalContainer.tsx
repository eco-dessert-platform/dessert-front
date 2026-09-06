'use client';

import { useAtomValue } from 'jotai';
import { MouseEventHandler, useEffect, useRef } from 'react';
import useModal from '@/shared/hooks/useModal';
import { AnimatePresence } from 'framer-motion';
import { modalState } from '@/shared/atoms/alert';
import BackDrop from '@/shared/components/BackDrop';

const MODAL_HISTORY_STATE = '__bbanggree_modal';

const ModalContainer = () => {
  const modal = useAtomValue(modalState);
  const { closeModal } = useModal();
  const modalVisibleRef = useRef(false);
  const closingByHistoryRef = useRef(false);

  const modalVisible = !!modal;

  useEffect(() => {
    modalVisibleRef.current = modalVisible;
  }, [modalVisible]);

  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = 'hidden';

      if (!window.history.state?.[MODAL_HISTORY_STATE]) {
        window.history.pushState(
          { ...window.history.state, [MODAL_HISTORY_STATE]: true },
          '',
          window.location.href
        );
      }

      return;
    }

    document.body.style.overflow = 'auto';

    if (closingByHistoryRef.current) {
      closingByHistoryRef.current = false;
      return;
    }

    if (window.history.state?.[MODAL_HISTORY_STATE]) {
      window.history.back();
    }
  }, [modalVisible]);

  useEffect(() => {
    const handlePopState = () => {
      if (!modalVisibleRef.current) return;

      closingByHistoryRef.current = true;
      closeModal();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [closeModal]);

  const handleClick: MouseEventHandler<HTMLDivElement> = ({ target, currentTarget }) => {
    if (target === currentTarget) closeModal();
  };

  return (
    <AnimatePresence>
      {modalVisible && (
        <BackDrop className="items-end" isVisible={modalVisible} onClick={handleClick}>
          {modal}
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default ModalContainer;
