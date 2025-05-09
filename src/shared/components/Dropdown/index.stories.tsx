import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';
import Button from '../Button';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const Template = () => (
  <Dropdown>
    <Dropdown.Trigger>트리거</Dropdown.Trigger>
    <Dropdown.Content>
      <Dropdown.Item>메뉴1</Dropdown.Item>
      <Dropdown.Item>메뉴2</Dropdown.Item>
      <Dropdown.Item>메뉴3</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown>
);

const WithButtonTemplate = () => (
  <Dropdown>
    <Dropdown.Trigger className="w-72">
      <Button>트리거는 자유롭게 변경 가능</Button>
    </Dropdown.Trigger>
    <Dropdown.Content>
      <Dropdown.Item>
        <div className="bg-yellow-100">메뉴도 자유롭게 변경 가능</div>
      </Dropdown.Item>
      <Dropdown.Item>메뉴2</Dropdown.Item>
      <Dropdown.Item>메뉴3</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown>
);

export const Default: Story = {
  render: Template
};

export const WithButton: Story = {
  render: WithButtonTemplate
};
