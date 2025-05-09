import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BADGE, BADGE_SHAPES } from '@/domains/review/constants/badge';
import { BadgeShapeType, BadgeKindType } from '@/domains/review/types/badge';
import ReviewBadge from '@/domains/review/components/ReviewBadge';

const meta: Meta<typeof ReviewBadge> = {
  component: ReviewBadge
};

export default meta;
type Story = StoryObj<typeof ReviewBadge>;

const Template = ({ isActive = false }: { isActive?: boolean }) => (
  <div className="grid grid-rows-3 grid-cols-2 gap-[10px] max-w-[600px]">
    {BADGE_SHAPES.map((shape) => (
      <ReviewBadge shape={shape} isActive={isActive} />
    ))}
  </div>
);

const ClickStory = () => {
  const [activeBadge, setActiveBadge] = useState({
    taste: undefined,
    brix: undefined,
    texture: undefined
  });

  const handleClick = (kind: BadgeKindType, shape: BadgeShapeType) => {
    setActiveBadge({ ...activeBadge, [kind]: shape });
  };

  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-[10px] max-w-[600px]">
      {BADGE_SHAPES.map((shape) => {
        const { kind } = BADGE[shape];
        return (
          <button
            key={shape}
            type="button"
            aria-label={`review badge ${shape}`}
            onClick={() => handleClick(kind, shape)}
          >
            <ReviewBadge
              shape={shape}
              isActive={activeBadge[kind] === shape}
              className="cursor-pointer"
            />
          </button>
        );
      })}
    </div>
  );
};

export const Default: Story = {
  render: Template
};

export const Active: Story = {
  render: Template,
  args: { isActive: true }
};

export const Click: Story = {
  render: ClickStory
};
