import BackDrop from '@/shared/components/BackDrop';
import Popup from '@/shared/components/Popup';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popup> = {
  component: Popup
};

export default meta;

const Template: StoryObj<typeof Popup> = {
  render: (args) => (
    <BackDrop isVisible>
      <Popup {...args}>
        <div className="p-[20px]">팝업예시입니다</div>
      </Popup>
    </BackDrop>
  )
};

export const Default = {
  ...Template,
  args: {
    className: ''
  }
};
