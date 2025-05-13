'use client';

import { useRecoilValue } from 'recoil';
import { tooltipState } from '@/shared/atoms/alert';

const TooltipContainer = () => {
  const tooltip = useRecoilValue(tooltipState);

  const tooltipVisible = !!tooltip;
  if (!tooltipVisible) return null;

  return <div>{tooltip}</div>;
};

export default TooltipContainer;
