import { ReactNode } from 'react';
import { useSetRecoilState } from 'recoil';
import { tooltipState } from '@/shared/atoms/alert';

const useTooltip = () => {
  const setTooltip = useSetRecoilState(tooltipState);

  const openTooltip = (tooltip: ReactNode) => setTooltip(tooltip);
  const closeTooltip = () => setTooltip(null);

  return { openTooltip, closeTooltip };
};

export default useTooltip;
