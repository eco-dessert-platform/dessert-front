import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RatingType } from '@/domains/review/types/starRating';
import StarRating from '@/domains/review/components/common/StarRating';

const meta: Meta<typeof StarRating> = {
  component: StarRating,
  title: 'StarRating'
};
export default meta;

type Story = StoryObj<typeof StarRating>;

const EditableStory = () => {
  const [rating, setRating] = useState<RatingType>(0);

  return (
    <StarRating
      value={rating}
      onRatingChange={(newRating) => setRating(newRating)}
      starSize="large"
      editable
    />
  );
};

export const Default: Story = {
  args: { value: 3.5 }
};

export const Size: Story = {
  args: { value: 2, starSize: 'large' }
};

export const Editable: Story = {
  render: EditableStory
};
