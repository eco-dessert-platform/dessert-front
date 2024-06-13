import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import Select from '@/shared/components/Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select'
};

export default meta;

type Story = StoryObj<typeof Select>;

const Template = () => {
  const OPTIONS = ['Option 1', 'Option 2', 'Option 3'];

  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

  return (
    <Select
      options={OPTIONS}
      selectedOption={selectedOption}
      onChange={(option) => setSelectedOption(option)}
    />
  );
};

export const Default: Story = {
  render: Template
};
