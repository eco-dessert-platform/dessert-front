import CheckBox from '@/shared/components/Checkbox';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, test } from 'vitest';

describe('<Checkbox/> 테스트', () => {
  test('클릭하면 체크 상태가 바뀐다.', async () => {
    // arrange
    const Wrapper = () => {
      const [isChecked, setIsChecked] = useState(false);
      return (
        <CheckBox
          isChecked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
        >
          동의합니다.
        </CheckBox>
      );
    };
    const { container } = render(<Wrapper />);
    const checkbox = container.querySelector("input[type='checkbox']") as HTMLInputElement;

    // act
    await userEvent.click(checkbox);

    // assert
    expect(checkbox.checked).toBeTruthy();
  });
});
