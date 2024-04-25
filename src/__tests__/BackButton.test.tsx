import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BackButton from '@/shared/components/BackButton';
import { AppRouterContextProviderMock } from './utils/AppRouterContextProviderMock';

describe('<BackButton/> 테스트', () => {
  test('클릭하면, router.back 함수가 호출된다.', async () => {
    // arrange
    const back = vi.fn();
    const Wrapper = () => (
      <AppRouterContextProviderMock router={{ back }}>
        <BackButton />
      </AppRouterContextProviderMock>
    );
    render(<Wrapper />);

    // act
    const backButton = screen.getByRole('button');
    await userEvent.click(backButton);

    // assert
    expect(back).toHaveBeenCalledOnce();
  });
});
