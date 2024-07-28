import { PlacementType, ArrowPositionType } from '@/shared/types/tooltip';

export const getPlacementStyle = (anchorEl: Element, placement: PlacementType) => {
  const anchorRect = anchorEl.getBoundingClientRect();
  const {
    top: topFromCeil,
    bottom: bottomFromCeil,
    left: leftFromLeftSide,
    right: rightFromLeftSide,
    width,
    height
  } = anchorRect;
  const topFromFloor = window.innerHeight - topFromCeil;
  const bottomFromFloor = window.innerHeight - bottomFromCeil;
  const leftFromRightSide = window.innerWidth - leftFromLeftSide;
  const rightFromRightSide = window.innerWidth - rightFromLeftSide;

  const ARROW_HEIGHT = 7;

  switch (placement) {
    case 'top':
      return {
        bottom: topFromFloor + ARROW_HEIGHT,
        left: leftFromLeftSide + width / 2,
        transform: 'translateX(-50%)'
      };
    case 'top-start':
      return {
        bottom: topFromFloor + ARROW_HEIGHT,
        left: leftFromLeftSide
      };
    case 'top-end':
      return {
        bottom: topFromFloor + ARROW_HEIGHT,
        right: rightFromRightSide
      };
    case 'bottom':
      return {
        top: bottomFromCeil + ARROW_HEIGHT,
        left: leftFromLeftSide + width / 2,
        transform: 'translateX(-50%)'
      };
    case 'bottom-start':
      return {
        top: bottomFromCeil + ARROW_HEIGHT,
        left: leftFromLeftSide
      };
    case 'bottom-end':
      return {
        top: bottomFromCeil + ARROW_HEIGHT,
        right: rightFromRightSide
      };
    case 'left':
      return {
        top: topFromCeil + height / 2,
        right: leftFromRightSide + ARROW_HEIGHT,
        transform: 'translateY(-50%)'
      };
    case 'left-start':
      return {
        top: topFromCeil,
        right: leftFromRightSide + ARROW_HEIGHT
      };
    case 'left-end':
      return {
        bottom: bottomFromFloor,
        right: leftFromRightSide + ARROW_HEIGHT
      };
    case 'right':
      return {
        top: topFromCeil + height / 2,
        left: rightFromLeftSide + ARROW_HEIGHT,
        transform: 'translateY(-50%)'
      };
    case 'right-start':
      return {
        top: topFromCeil,
        left: rightFromLeftSide + ARROW_HEIGHT
      };
    case 'right-end':
      return {
        bottom: bottomFromFloor,
        left: rightFromLeftSide + ARROW_HEIGHT
      };
    default:
      return undefined;
  }
};

export const getArrowPositionStyle = (
  placement: PlacementType,
  arrowPosition: ArrowPositionType | undefined
) => {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
      if (arrowPosition && arrowPosition.right)
        return {
          top: 'calc(100% - 2px)',
          right: arrowPosition.right,
          transform: 'translateX(50%) rotate(180deg)'
        };
      return {
        top: 'calc(100% - 2px)',
        left: arrowPosition?.left || '50%',
        transform: 'translateX(-50%) rotate(180deg)'
      };
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      if (arrowPosition && arrowPosition.right)
        return {
          bottom: 'calc(100% - 2px)',
          right: arrowPosition.right,
          transform: 'translateX(50%)'
        };
      return {
        bottom: 'calc(100% - 2px)',
        left: arrowPosition?.left || '50%',
        transform: 'translateX(-50%)'
      };
    case 'left':
    case 'left-start':
    case 'left-end':
      if (arrowPosition && arrowPosition.bottom)
        return {
          left: 'calc(100% - 2px)',
          bottom: arrowPosition.bottom,
          transform: 'translateY(50%) rotate(90deg)'
        };
      return {
        left: 'calc(100% - 2px)',
        top: arrowPosition?.top || '50%',
        transform: 'translateY(-50%) rotate(90deg)'
      };
    case 'right':
    case 'right-start':
    case 'right-end':
      if (arrowPosition && arrowPosition.bottom)
        return {
          right: 'calc(100% - 2px)',
          bottom: arrowPosition.bottom,
          transform: 'translateY(50%) rotate(-90deg)'
        };
      return {
        right: 'calc(100% - 2px)',
        top: arrowPosition?.top || '50%',
        transform: 'translateY(-50%) rotate(-90deg)'
      };
    default:
      return undefined;
  }
};
