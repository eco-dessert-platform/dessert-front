import type { Meta, StoryObj } from '@storybook/react';
import Review from '.';

const meta = {
  component: Review,
  args: {
    id: 1,
    boardId: 1,
    nickname: '닉네임',
    images: [
      {
        id: 1,
        url: 'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg'
      },
      {
        id: 2,
        url: 'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg'
      }
    ],
    rating: 3,
    comment: '댓글 내용이 들어가요.',
    tags: ['태그1', '태그2', '태그3'],
    like: 10,
    isLiked: false,
    isBest: true,
    date: '2030. 1. 1.'
  }
} satisfies Meta<typeof Review>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
