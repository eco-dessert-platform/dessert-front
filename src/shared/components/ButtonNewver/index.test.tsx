import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonNewver from '.';

describe('<ButtonNewver/> 테스트', () => {
  test('버튼이 화면에 렌더링된다.', () => {
    render(<ButtonNewver>click</ButtonNewver>);

    const button = screen.getByRole('button');

    expect(button).toBeDefined();
  });

  test('버튼을 클릭하면, onClick 함수가 한 번 실행된다.', async () => {
    const onClick = vi.fn();
    render(<ButtonNewver onClick={onClick}>click</ButtonNewver>);
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledOnce();
  });
});
