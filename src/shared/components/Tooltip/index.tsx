'use client';

import { ReactNode } from 'react';
import { PolygonIcon } from '@/shared/components/icons';
import { cn } from '@/shared/utils/cn';

export const PLACEMENT = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end'
] as const;
export const POLYGON_POSITION = ['low', 'center', 'high'] as const;

export type PlacementType = (typeof PLACEMENT)[number];
export type PolygonPositionType = (typeof POLYGON_POSITION)[number];

interface Props {
  content: string;
  children: ReactNode;
  className?: string;
  placement?: PlacementType;
  polygonPosition?: PolygonPositionType;
  arrow?: boolean;
}

const Tooltip = ({
  content,
  children,
  className,
  placement = 'bottom',
  polygonPosition = 'center',
  arrow = true
}: Props) => {
  const polygonClassName = cn(
    'absolute',
    {
      'bottom-[calc(100%+2px)] rotate-180': placement.startsWith('top'),
      'top-[calc(100%+2px)]': placement.startsWith('bottom'),
      'end-[calc(100%+2px)] rotate-90': placement.startsWith('left'),
      'start-[calc(100%+2px)] -rotate-90': placement.startsWith('right')
    },
    (placement.startsWith('top') || placement.startsWith('bottom')) && {
      'left-1/4': polygonPosition === 'low',
      'left-1/2 -translate-x-1/2': polygonPosition === 'center',
      'right-1/4': polygonPosition === 'high'
    },
    (placement.startsWith('left') || placement.startsWith('right')) && {
      'bottom-1/4': polygonPosition === 'low',
      'top-1/2 -translate-y-1/2': polygonPosition === 'center',
      'top-1/4': polygonPosition === 'high'
    }
  );

  const contentBoxClassName = cn(
    'absolute max-w-[300px] min-w-min rounded-[4px] px-[8px] py-[6px] bg-gray-800 whitespace-pre-line text-wrap break-all typo-body-11-regular text-white',
    {
      [arrow ? 'bottom-[calc(100%+8px)]' : 'bottom-[calc(100%+2px)]']: placement.startsWith('top'),
      [arrow ? 'top-[calc(100%+8px)]' : 'top-[calc(100%+2px)]']: placement.startsWith('bottom'),
      [arrow ? 'end-[calc(100%+8px)]' : 'end-[calc(100%+2px)]']: placement.startsWith('left'),
      [arrow ? 'start-[calc(100%+8px)]' : 'start-[calc(100%+2px)]']: placement.startsWith('right')
    },
    {
      'left-1/2 -translate-x-1/2': ['top', 'bottom'].includes(placement),
      'left-0': ['top-start', 'bottom-start'].includes(placement),
      'right-0': ['top-end', 'bottom-end'].includes(placement)
    },
    {
      'top-1/2 -translate-y-1/2': ['left', 'right'].includes(placement),
      'top-0': ['left-start', 'right-start'].includes(placement),
      'bottom-0': ['left-end', 'right-end'].includes(placement)
    }
  );

  return (
    <div className="relative max-w-max group">
      <button type="button">{children}</button>
      <div className="invisible group-hover:visible">
        {arrow && <PolygonIcon className={polygonClassName} />}
        <div className={cn(contentBoxClassName, className)}>{content}</div>
      </div>
    </div>
  );
};

export default Tooltip;
