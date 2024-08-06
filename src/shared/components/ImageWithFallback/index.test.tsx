import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ImageWithFallback from '.';

describe('<ImageWithFallback/> 테스트', () => {
  test('에러가 발생한다면, props의 fallback이 렌더링된다.', async () => {
    const { queryByAltText, findByTestId } = render(
      <ImageWithFallback
        width={100}
        height={100}
        src="/assets/icons/bbangle-cry.svg"
        fetchPriority="auto"
        fallback={<div data-testid="fallback">fallback</div>}
        alt="error image"
      />
    );

    let image = queryByAltText('error image');
    expect(image).toBeDefined();
    fireEvent.error(image!);

    const fallback = await findByTestId('fallback');
    expect(fallback).toBeDefined();

    image = queryByAltText('error image');
    expect(image).toBeNull();
  });

  test('에러 발생하지 않는다면, Image가 정상 렌더링된다.', async () => {
    const { getByAltText } = render(
      <ImageWithFallback
        width={100}
        height={100}
        src="/assets/icons/bbangle-cry.svg"
        fetchPriority="auto"
        fallback={<div data-testid="fallback">fallback</div>}
        alt="error image"
      />
    );

    const image = getByAltText('error image');
    expect(image).toBeDefined();
    expect(image.getAttribute('src')).toContain('/assets/icons/bbangle-cry.svg');
  });
});
