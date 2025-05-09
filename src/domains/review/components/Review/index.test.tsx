import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { AppRouterContextProviderMock, CleanQueryProvider } from '@/__tests__/utils/test-providers';
import Review, { ReviewProps } from '.';

describe('<Review /> 테스트', () => {
  const mockReviewData: ReviewProps = {
    id: 1,
    boardId: 1,
    nickname: '닉네임',
    rating: 0,
    comment: '댓글',
    tags: ['태그1', '태그2'],
    like: 100,
    images: [{ id: 1, url: 'https://test.jpg' }],
    isLiked: false,
    isBest: false,
    date: '2024. 01. 01',
    isMine: true,
    usedIn: 'review-list'
  };
  const renderWithProviders = (children: ReactNode) => {
    const push = vi.fn();
    return render(
      <RecoilRoot>
        <AppRouterContextProviderMock router={{ push }}>
          <CleanQueryProvider>{children}</CleanQueryProvider>
        </AppRouterContextProviderMock>
      </RecoilRoot>
    );
  };

  test('필요한 정보가 노출된다.', () => {
    renderWithProviders(<Review {...mockReviewData} />);
    expect(screen.getByText('닉네임')).toBeDefined();
    expect(screen.getAllByText('댓글')).toBeDefined();
    expect(screen.getByText('태그1')).toBeDefined();
    expect(screen.getByText('태그2')).toBeDefined();
    expect(screen.getByText('도움돼요 100')).toBeDefined();
    expect(screen.getByText('2024. 01. 01')).toBeDefined();
    expect(screen.getByAltText('review image')).toBeDefined();
  });

  test('isMine 값에 따라 kebab 버튼 노출이 달라진다.', () => {
    renderWithProviders(<Review {...mockReviewData} isMine />);
    expect(screen.queryByLabelText('dropdown')).not.toBeNull();

    cleanup();

    renderWithProviders(<Review {...mockReviewData} isMine={false} />);
    expect(screen.queryByLabelText('dropdown')).toBeNull();
  });
});
