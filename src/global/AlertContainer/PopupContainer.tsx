'use client';

import { MouseEventHandler } from 'react';
import { useAtomValue } from 'jotai';
import usePopup from '@/shared/hooks/usePopup';
import { popupState } from '@/shared/atoms/alert';
import BackDrop from '@/shared/components/BackDrop';

const PopupContainer = () => {
  const popup = useAtomValue(popupState); // useRecoilValue -> useAtomValue
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
