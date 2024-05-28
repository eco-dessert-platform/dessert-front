import { toastState } from '@/shared/atoms/alert';
import { ReactNode, cloneElement, isValidElement } from 'react';
import { useSetRecoilState } from 'recoil';

const useToast = () => {
  const setToast = useSetRecoilState(toastState);

  const closeToast = () => {
    setToast((toasts) => {
      const newToasts = [...toasts];
      newToasts.shift();
      return newToasts;
    });
  };

  const openToast = (toast: ReactNode) => {
    setToast((toasts) => {
      const newToasts = [...toasts];
      if (isValidElement(toast)) {
        const toastWithKey = cloneElement(toast, { key: Date.now() });
        newToasts.push(toastWithKey);
      }
      return newToasts;
    });

    setTimeout(() => {
      closeToast();
    }, 5000);
  };

  return { openToast, closeToast };
};

export default useToast;
