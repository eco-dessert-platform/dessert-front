'use client';

import React from 'react';

import { twMerge } from 'tailwind-merge';

import PaddingWrapper from '@/shared/components/PaddingWrapper';

import ShareButton from '@/app/main/products/[productId]/_blocks/ShareButton';
import ArrowIcons from '../icons/ArrowIcons';

interface HeaderProps {
  title?: String;
  content?: React.ReactNode;
  back?: boolean;
  share?: boolean;
  className?: string;
}

const Header = ({ title, content, back = false, share = false, className }: HeaderProps) => {
  const goBackHandler = () => {
    window.history.back();
  };

  return (
    <PaddingWrapper
      className={twMerge(
        'sticky top-0 z-header flex bg-white items-center h-[60px] py-[10px]',
        className
      )}
    >
      {back && (
        <button
          type="button"
          aria-label="button"
          className="cursor-pointer"
          onClick={goBackHandler}
        >
          <ArrowIcons shape="back" />
        </button>
      )}
      <div className="flex justify-between items-center w-full ">
        <h2 className="typo-title-16-medium line-clamp-2">{title}</h2>
        {content}
      </div>
      {share && <ShareButton />}
    </PaddingWrapper>
  );
};

export default Header;
