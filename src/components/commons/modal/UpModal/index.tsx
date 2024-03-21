'use client';

import { MouseEvent, ReactNode } from 'react';
import BackDrop from '@/components/commons/backgrounds/BackDrop';
import { CloseIcon } from '@/components/commons/Icon';

interface UpModalProps {
  title: string;
  children: ReactNode;
  isVisible: boolean;
  toggleModal: (_e: MouseEvent<HTMLElement>) => void;
}

const UpModal = ({ title, children, isVisible, toggleModal }: UpModalProps) => {
  const handleToggle = <T extends HTMLElement>(e: React.MouseEvent<T>): void => {
    toggleModal(e);
  };

  return (
    <>
      <BackDrop isVisible={isVisible} onClick={handleToggle} />
      <div
        className={`w-full max-w-[600px] max-h-[76vh] bg-white fixed left-1/2 -translate-x-1/2 ${
          isVisible ? 'bottom-0' : '-bottom-full'
        } z-[9999] rounded-t-[12px] transition-all pb-4`}
      >
        <div className="flex items-center px-[16px] py-[10px]">
          <h4 className="flex-1 text-center font-medium text-16 leading-150 tracking-tight-2">
            {title}
          </h4>
          <button onClick={handleToggle}>
            <CloseIcon className="cursor-pointer" />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default UpModal;
