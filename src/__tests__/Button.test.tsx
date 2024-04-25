import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/shared/components/Button';

describe('<Button/> 테스트', () => {
  test('버튼이 화면에 렌더링된다.', () => {
    // arrange
    render(<Button>click</Button>);

    // act
    const button = screen.getByRole('button');

    // assert
    expect(button).toBeDefined();
  });

  test('버튼을 클릭하면, onClick 함수가 한 번 실행된다.', async () => {
    // arrange
    const onClick = vi.fn();
    render(<Button onClick={onClick}>click</Button>);
    const button = screen.getByRole('button');

    // act
    await userEvent.click(button);

    // assert
    expect(onClick).toHaveBeenCalledOnce();
  });
});
