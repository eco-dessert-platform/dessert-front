'use client';

import React from 'react';
import Back from '@/components/commons/header/assets/back_arrow.svg';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

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
      {back && <Back className="cursor-pointer mr-[17px]" onClick={goBackHandler} />}
      <h2 className="text-16 font-medium leading-[16px] tracking-tight-2">{title}</h2>
    </PaddingWrapper>
  );
};

export default Header;
