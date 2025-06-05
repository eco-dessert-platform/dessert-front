// hooks/useToast.ts
import { useSetAtom } from 'jotai';
import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react';
import { toastState } from '@/shared/atoms/alert';
import { ToastPopProps } from '../types/toastProps';

const useToast = () => {
  const setToast = useSetAtom(toastState);

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
