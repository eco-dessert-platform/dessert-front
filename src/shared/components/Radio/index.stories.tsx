import { useState } from 'react';

import Radio from '@/shared/components/Radio';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  component: Radio
};
export default meta;

type Story = StoryObj<typeof Radio>;

const Template = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="flex w-full">
      <Radio isChecked={isActive} onChange={handleToggle}>
        <div
          className={`text-14 tracking-tight-2 leading-150 text-gray-900 ${isActive ? 'font-semibold' : 'font-normal'}`}
        >
          text
        </div>
      </Radio>
    </div>
  );
};

export const Default: Story = {
  render: Template
};
