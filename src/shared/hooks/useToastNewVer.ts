import { ReactNode } from 'react';
import { toastStateNewVer } from '@/shared/atoms/alert';
import { useSetRecoilState } from 'recoil';
import { SECOND } from '../constants/time';

const useToastNewVer = () => {
  const setToast = useSetRecoilState(toastStateNewVer);

  const closeToast = (id: number) => {
    setToast((toasts) => {
      const newToasts = toasts.filter((toast) => toast.id !== id);
      return newToasts;
    });
  };

  const openToast = ({ message, action }: { message: string; action?: ReactNode }) => {
    const id = Date.now();

    setToast((toasts) => {
      const newToasts = [...toasts];
      newToasts.unshift({ message, action, id });
      return newToasts;
    });

    setTimeout(() => {
      closeToast(id);
    }, 5 * SECOND);
  };

  return { openToast, closeToast };
};

export default useToastNewVer;
