'use client';

import { useAtomValue } from 'jotai';
import { tooltipState } from '@/shared/atoms/alert';

const TooltipContainer = () => {
  const tooltip = useAtomValue(tooltipState);

  const tooltipVisible = !!tooltip;
  if (!tooltipVisible) return null;

  return <div>{tooltip}</div>;
};

export default TooltipContainer;
