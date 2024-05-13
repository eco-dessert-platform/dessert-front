import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import BADGE from '@/domains/review/constants/badge';
import { BadgeShapeType, BadgeKindType } from '@/domains/review/types/badge';
import ReviewBadge from '@/domains/review/components/ReviewBadge';

const meta: Meta<typeof ReviewBadge> = {
  component: ReviewBadge,
  title: 'ReviewBadge'
};

export default meta;
type Story = StoryObj<typeof ReviewBadge>;

const BADGE_SHAPES = Object.keys(BADGE) as Array<BadgeShapeType>;

const Template = ({ isActive = false }: { isActive?: boolean }) => (
  <div className="grid grid-rows-3 grid-cols-2 gap-[10px] max-w-[600px]">
    {BADGE_SHAPES.map((shape) => (
      <ReviewBadge shape={shape} isActive={isActive} />
    ))}
  </div>
);

const ClickStory = () => {
  const [activeBadge, setActiveBadge] = useState({
    preference: undefined,
    taste: undefined,
    texture: undefined
  });

  const handleClick = (kind: BadgeKindType, shape: BadgeShapeType) => {
    setActiveBadge({ ...activeBadge, [kind]: shape });
  };

  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-[10px] max-w-[600px]">
      {BADGE_SHAPES.map((shape) => {
        const kind = BADGE[shape].kind as BadgeKindType;
        return (
          <ReviewBadge
            shape={shape}
            isActive={activeBadge[kind] === shape}
            className="cursor-pointer"
            onClick={() => handleClick(kind, shape)}
          />
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
