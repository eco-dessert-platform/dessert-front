import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Review from '.';

describe('<Review /> 테스트', () => {
  test('필요한 정보가 노출된다.', () => {
    render(
      <Review
        id={1}
        boardId={1}
        nickname="닉네임"
        rating={0}
        comment="댓글"
        tags={['태그1', '태그2']}
        like={100}
        images={[{ id: 1, url: 'https://test.jpg' }]}
        isLiked={false}
        isBest={false}
        date="2024. 01. 01"
      />
    );

    expect(screen.getByText('닉네임')).toBeDefined();
    expect(screen.getAllByText('댓글')).toBeDefined();
    expect(screen.getByText('태그1')).toBeDefined();
    expect(screen.getByText('태그2')).toBeDefined();
    expect(screen.getByText('도움돼요 100')).toBeDefined();
    expect(screen.getByText('2024. 01. 01')).toBeDefined();
    expect(screen.getByAltText('review image')).toBeDefined();
  });
});
