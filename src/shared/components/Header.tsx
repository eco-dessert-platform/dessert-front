'use client';

import React from 'react';

import PaddingWrapper from '@/shared/components/PaddingWrapper';

import ArrowIcons from './icons/ArrowIcons';

interface HeaderProps {
  title?: String;
  back?: boolean;
}

const Header = ({ title, back = false }: HeaderProps) => {
  const goBackHandler = () => {
    window.history.back();
  };

  return (
    <PaddingWrapper className="flex items-center h-[60px] py-[10px]">
      {back && (
        <button
          type="button"
          aria-label="button"
          className="cursor-pointer mr-[17px]"
          onClick={goBackHandler}
        >
          <ArrowIcons shape="back" />
        </button>
      )}
      <h2 className="typo-title-16-medium">{title}</h2>
    </PaddingWrapper>
  );
};

export default Header;
