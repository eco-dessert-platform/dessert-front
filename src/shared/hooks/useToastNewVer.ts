import { ReactNode, useCallback } from 'react';
import { toastStateNewVer } from '@/shared/atoms/alert';
import { useSetRecoilState } from 'recoil';
import { SECOND } from '../constants/time';

const useToastNewVer = () => {
  const setToast = useSetRecoilState(toastStateNewVer);

  const closeToast = (id: string) => {
    setToast((toasts) => {
      const newToasts = toasts.filter((toast) => toast.id !== id);
      return newToasts;
    });
  };

  const resetToast = useCallback(() => {
    setToast([]);
  }, [setToast]);

  const openToast = ({ message, action }: { message: string; action?: ReactNode }) => {
    const id = message;

    setToast((prevToasts) => {
      if (prevToasts.some((toasts) => toasts.id === id)) {
        return prevToasts;
      }

      const newToasts = [...prevToasts];
      newToasts.unshift({ message, action, id });
      return newToasts;
    });

    setTimeout(() => {
      closeToast(id);
    }, 3 * SECOND);
  };

  return { openToast, closeToast, resetToast };
};

export default useToastNewVer;
