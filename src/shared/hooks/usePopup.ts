import { ReactNode } from 'react';
import { useSetAtom } from 'jotai';
import { popupState } from '@/shared/atoms/alert';

const usePopup = () => {
  const setPopup = useSetAtom(popupState);

  const openPopup = (popup: ReactNode) => setPopup(popup);
  const closePopup = () => setPopup(null);

  return { openPopup, closePopup };
};

export default usePopup;
