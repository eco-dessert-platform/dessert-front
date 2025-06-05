import { ReactNode } from 'react';
import { useSetAtom } from 'jotai';
import { tooltipState } from '@/shared/atoms/alert';

const useTooltip = () => {
  const setTooltip = useSetAtom(tooltipState);
  const openTooltip = (tooltip: ReactNode) => setTooltip(tooltip);
  const closeTooltip = () => setTooltip(null);

  return { openTooltip, closeTooltip };
};

export default useTooltip;
