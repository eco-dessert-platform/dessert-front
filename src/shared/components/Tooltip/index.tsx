'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { PolygonIcon } from '@/shared/components/icons';
import { cn } from '@/shared/utils/cn';
import { getPlacementStyle, getPolygonPositionStyle } from '@/shared/utils/tooltip';
import useTooltip from '@/shared/hooks/useTooltip';
import { PlacementType, PolygonPositionType } from '@/shared/types/tooltip';

interface Props {
  content: string;
  children: ReactNode;
  className?: string;
  placement?: PlacementType;
  polygonPosition?: PolygonPositionType;
}

const Tooltip = ({
  content,
  children,
  className,
  placement = 'bottom',
  polygonPosition
}: Props) => {
  const anchor = useRef<HTMLButtonElement>(null);
  const { openTooltip, closeTooltip } = useTooltip();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const clickedTarget = e.target;
      const anchorRef = anchor.current;
      if (clickedTarget instanceof Element && anchorRef?.contains(clickedTarget)) return;
      closeTooltip();
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [closeTooltip]);

  const showTooltip = () => {
    const anchorRef = anchor.current;
    if (!anchorRef) return;

    openTooltip(
      <div className="fixed max-w-max z-tooltip" style={getPlacementStyle(anchorRef, placement)}>
        <PolygonIcon
          className="absolute"
          style={getPolygonPositionStyle(placement, polygonPosition)}
        />
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
      onClick={showTooltip}
    >
      {children}
    </button>
  );
};

export default Tooltip;
