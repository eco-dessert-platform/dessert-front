'use client';

import { useRecoilValue } from 'recoil';
import { MouseEventHandler } from 'react';
import usePopup from '@/shared/hooks/usePopup';
import { popupState } from '@/shared/atoms/alert';
import BackDrop from '@/shared/components/BackDrop';

const PopupContainer = () => {
  const popup = useRecoilValue(popupState);
  const { closePopup } = usePopup();

  const popupVisible = !!popup;
  if (!popupVisible) return null;

  const handleClick: MouseEventHandler<HTMLDivElement> = ({ target, currentTarget }) => {
    if (target === currentTarget) closePopup();
  };

  return (
    <BackDrop isVisible={popupVisible} onClick={handleClick}>
      {popup}
    </BackDrop>
  );
};

export default PopupContainer;
