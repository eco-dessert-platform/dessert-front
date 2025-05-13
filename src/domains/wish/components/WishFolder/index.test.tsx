import { render, screen } from '@testing-library/react';
import RootLayoutProvider from '@/global/RootLayoutProvider';
import { describe, expect, test } from 'vitest';
import PATH from '@/shared/constants/path';
import WishFolder from '.';

describe('<WishFolder/> 테스트', () => {
  test('폴더 명과 찜 개수가 노출된다.', () => {
    render(
      <RootLayoutProvider>
        <WishFolder id={0} name="폴더" count={10} />
      </RootLayoutProvider>
    );

    const folderName = screen.getByText('폴더');
    const count = screen.getByText('(10)');

    expect(folderName).toBeDefined();
    expect(count).toBeDefined();
  });

  test('폴더 상세 페이지로 이동하는 href 속성을 가진다.', () => {
    render(
      <RootLayoutProvider>
        <WishFolder id={0} name="폴더" count={10} />
      </RootLayoutProvider>
    );

    const link = screen.getByRole('link');
    const href = link.getAttribute('href');

    expect(href?.includes(`${PATH.wishProductList}/${0}`)).toBeTruthy();
  });
});
