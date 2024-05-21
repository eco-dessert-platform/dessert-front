import { useState } from 'react';
import StarRating from '@/domains/review/components/StarRating';
import type { Meta, StoryObj } from '@storybook/react';
import { RatingType } from '@/domains/review/types/starRating';

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
      rating={rating}
      onRatingChange={(newRating) => setRating(newRating)}
      starSize="large"
      editable
    />
  );
};

export const Default: Story = {
  args: { rating: 3.5 }
};

export const Size: Story = {
  args: { rating: 2, starSize: 'large' }
};

export const Editable: Story = {
  render: EditableStory
};
