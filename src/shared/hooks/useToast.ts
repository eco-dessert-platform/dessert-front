import { toastState } from '@/shared/atoms/alert';
import { useSetRecoilState } from 'recoil';
import { ReactElement, ReactNode, cloneElement, isValidElement } from 'react';
import { ToastPopProps } from '../types/toastProps';

const useToast = () => {
  const setToast = useSetRecoilState(toastState);

  const closeToast = () => {
    setToast((toasts) => {
      const newToasts = [...toasts];
      newToasts.pop();
      return newToasts;
    });
  };

  const openToast = (toast: ReactNode) => {
    setToast((toasts) => {
      const newToasts = [...toasts];

      if (isValidElement(toast)) {
        const toastWithProps = cloneElement(toast as ReactElement<ToastPopProps>, {
          key: Date.now()
        });
        newToasts.unshift(toastWithProps);
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
