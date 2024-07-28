'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { PolygonIcon } from '@/shared/components/icons';
import { cn } from '@/shared/utils/cn';
import { getPlacementStyle, getArrowPositionStyle } from '@/shared/utils/tooltip';
import useTooltip from '@/shared/hooks/useTooltip';
import { PlacementType, ArrowPositionType } from '@/shared/types/tooltip';

interface Props {
  content: string;
  children: ReactNode;
  className?: string;
  placement?: PlacementType;
  arrowPosition?: ArrowPositionType;
}

const Tooltip = ({ content, children, className, placement = 'bottom', arrowPosition }: Props) => {
  const anchor = useRef<HTMLButtonElement>(null);
  const { openTooltip, closeTooltip } = useTooltip();

  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      const clickedTarget = e.target;
      const anchorRef = anchor.current;
      if (clickedTarget instanceof Element && anchorRef?.contains(clickedTarget)) return;
      closeTooltip();
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('resize', closeTooltip);
    window.addEventListener('wheel', closeTooltip);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', closeTooltip);
      window.removeEventListener('wheel', closeTooltip);
    };
  }, [closeTooltip]);

  const showTooltip = () => {
    const anchorRef = anchor.current;
    if (!anchorRef) return;

    openTooltip(
      <div className="fixed max-w-max z-tooltip" style={getPlacementStyle(anchorRef, placement)}>
        <PolygonIcon className="absolute" style={getArrowPositionStyle(placement, arrowPosition)} />
        <div
          className={cn(
            'max-w-[300px] min-w-min px-[8px] py-[6px] rounded-[4px] bg-gray-800 whitespace-pre-line text-wrap break-all typo-body-11-regular text-white',
            className
          )}
        >
          {content}
        </div>
      </div>
    );
  };

  const hideTooltip = () => {
    closeTooltip();
  };

  return (
    <button
      type="button"
      ref={anchor}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onPointerDown={showTooltip}
    >
      {children}
    </button>
  );
};

export default Tooltip;
