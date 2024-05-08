import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import RootLayoutProvider from '@/global/RootLayoutProvider';
import userEvent from '@testing-library/user-event';
import WishProductSortSelect from '.';

describe('<WishProductSortSelect/> 테스트', () => {
  test('담은순, 인기순, ', async () => {
    const user = userEvent.setup();
    render(
      <RootLayoutProvider>
        <WishProductSortSelect />
      </RootLayoutProvider>
    );

    const select = screen.getByRole('button');
    await user.click(select);

    const option1 = screen.getAllByText('담은순');
    expect(option1).toBeDefined();
  });
});
