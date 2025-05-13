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
        'absolute w-full max-w-[600px] max-h-[90vh] bg-white z-[5001] rounded-t-[12px] overflow-y-scroll scrollbar-hide',
        className
      )}
    >
      <PaddingWrapper className="sticky top-0 flex items-center py-[10px] bg-white">
        <h4 className="flex-1 text-center typo-title-16-medium">{title}</h4>
        <button type="button" aria-label="close" onClick={closeModal} className="cursor-pointer">
          <CloseIcon shape="no-bg-24" />
        </button>
      </PaddingWrapper>
      {children}
    </motion.div>
  );
};

export default Modal;
