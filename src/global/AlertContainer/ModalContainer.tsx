'use client';

import { useRecoilValue } from 'recoil';
import { MouseEventHandler } from 'react';
import useModal from '@/shared/hooks/useModal';
import { AnimatePresence } from 'framer-motion';
import { modalState } from '@/shared/atoms/alert';
import BackDrop from '@/shared/components/BackDrop';

const ModalContainer = () => {
  const modal = useRecoilValue(modalState);
  const { closeModal } = useModal();

  const modalVisible = !!modal;

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
