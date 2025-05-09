import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import Dropdown from '.';

describe('<Dropdwon/> 테스트', () => {
  test('open 상태에 따라, Dropdown.Item 노출 여부가 다르다.', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown>
        <Dropdown.Trigger>트리거</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>메뉴1</Dropdown.Item>
          <Dropdown.Item>메뉴2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );

    expect(screen.queryByText('메뉴1')).toBeNull();
    expect(screen.queryByText('메뉴2')).toBeNull();

    await user.click(screen.getByText('트리거'));

    expect(screen.getByText('메뉴1')).toBeDefined();
    expect(screen.getByText('메뉴2')).toBeDefined();
  });
});
