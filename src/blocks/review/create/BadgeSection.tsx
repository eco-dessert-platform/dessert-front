'use client';

import { useRecoilState } from 'recoil';
import { selectedBadgeState } from '@/domains/review/atoms';
import { BADGE, BADGE_SHAPES } from '@/domains/review/constants/badge';
import { BadgeShapeType, BadgeKindType } from '@/domains/review/types/badge';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ReviewBadge from '@/domains/review/components/ReviewBadge';

const BadgeSection = () => {
  const [selectedBadge, setSelectedBadge] = useRecoilState(selectedBadgeState);

  const handleBadgeClick = (kind: BadgeKindType, shape: BadgeShapeType) => {
    setSelectedBadge({ ...selectedBadge, [kind]: shape });
  };

  return (
    <PaddingWrapper className="pt-0">
      <div className="grid grid-rows-3 grid-cols-2 gap-[10px] max-w-[600px]">
        {BADGE_SHAPES.map((shape) => {
          const { kind } = BADGE[shape];
          return (
            <button
              key={shape}
              type="button"
              aria-label={`review badge ${shape}`}
              onClick={() => handleBadgeClick(kind, shape)}
            >
              <ReviewBadge
                shape={shape}
                isActive={selectedBadge[kind] === shape}
                className="cursor-pointer"
              />
            </button>
          );
        })}
      </div>
    </PaddingWrapper>
  );
};

export default BadgeSection;
