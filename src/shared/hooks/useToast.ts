import { toastState } from '@/shared/atoms/alert';
import { ReactNode } from 'react';
import { useSetRecoilState } from 'recoil';

const useToast = () => {
  const setToast = useSetRecoilState(toastState);

  const closeToast = () => setToast(null);

  const openToast = (toastPopup: ReactNode) => {
    setToast(toastPopup);

    setTimeout(() => {
      closeToast();
    }, 3000);
  };

  return { openToast, closeToast };
};

export default useToast;
