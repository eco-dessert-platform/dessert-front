import { ReactNode, useCallback } from 'react';
import { useSetAtom } from 'jotai';
import { toastStateNewVer } from '@/shared/atoms/alert';
import { SECOND } from '../constants/time';

const useToastNewVer = () => {
  const setToast = useSetAtom(toastStateNewVer);

  const closeToast = useCallback((id: string) => {
    setToast((toasts) => toasts.filter((toast) => toast.id !== id));
  }, [setToast]);

  const resetToast = useCallback(() => {
    setToast([]);
  }, [setToast]);

  const openToast = useCallback(({ message, action }: { message: string; action?: ReactNode }) => {
    const id = message;

    setToast((prevToasts) => {
      if (prevToasts.some((toast) => toast.id === id)) {
        return prevToasts;
      }

      return [{ message, action, id }, ...prevToasts];
    });

    setTimeout(() => {
      closeToast(id);
    }, 3 * SECOND);
  }, [setToast, closeToast]);

  return { openToast, closeToast, resetToast };
};

export default useToastNewVer;
