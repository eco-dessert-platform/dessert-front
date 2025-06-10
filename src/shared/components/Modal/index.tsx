'use client';

import { ReactNode } from 'react';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import { CloseIcon } from '@/shared/components/icons';
import useModal from '@/shared/hooks/useModal';

import PaddingWrapper from '../PaddingWrapper';

interface UpModalProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Modal = ({ title, children, className }: UpModalProps) => {
  const { closeModal } = useModal();

  return (
    <motion.div
      key="modal"
      initial={{ translateY: '100%' }}
      animate={{ translateY: 0 }}
      exit={{ translateY: '100%' }}
      transition={{
        ease: 'linear',
        duration: 0.2
      }}
      className={twMerge(
        'scrollbar-hide absolute z-5001 max-h-[90vh] w-full max-w-[600px] overflow-y-scroll rounded-t-[12px] bg-white',
        className
      )}
    >
      <PaddingWrapper className="sticky top-0 flex items-center bg-white py-[10px]">
        <h4 className="typo-title-16-medium flex-1 text-center">{title}</h4>
        <button type="button" aria-label="close" onClick={closeModal} className="cursor-pointer">
          <CloseIcon shape="no-bg-24" />
        </button>
      </PaddingWrapper>
      {children}
    </motion.div>
  );
};

export default Modal;
