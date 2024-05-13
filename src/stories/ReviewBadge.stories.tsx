import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import BADGE from '@/shared/constants/badge';
import { BadgeShapeType, BadgeKindType } from '@/shared/types/badge';
import ReviewBadge from '@/shared/components/ReviewBadge';

const meta: Meta<typeof ReviewBadge> = {
  component: ReviewBadge,
  title: 'ReviewBadge'
};

export default meta;
type Story = StoryObj<typeof ReviewBadge>;

const Template = ({ isActive = false }: { isActive?: boolean }) => {
  const badgeShapes = Object.keys(BADGE) as Array<BadgeShapeType>;

  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-[10px] max-w-[600px]">
      {badgeShapes.map((shape) => (
        <ReviewBadge shape={shape} isActive={isActive} />
      ))}
    </div>
  );
};

const ClickStory = () => {
  const badgeShapes = Object.keys(BADGE) as Array<BadgeShapeType>;
  const [activeBadge, setActiveBadge] = useState({
    preference: undefined,
    taste: undefined,
    texture: undefined
  });

  const handleClick = (shape: BadgeShapeType) => {
    const kind = BADGE[shape].kind as BadgeKindType;
    setActiveBadge({ ...activeBadge, [kind]: shape });
  };

  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-[10px] max-w-[600px]">
      {badgeShapes.map((shape) => {
        const kind = BADGE[shape].kind as BadgeKindType;
        return (
          <ReviewBadge
            shape={shape}
            isActive={activeBadge[kind] === shape}
            className="cursor-pointer"
            onClick={() => handleClick(shape)}
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
