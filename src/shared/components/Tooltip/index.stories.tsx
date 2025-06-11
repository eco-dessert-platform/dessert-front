import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '@/shared/components/Tooltip';
import { PLACEMENT } from '@/shared/constants/tooltip';
import { PlacementType, ArrowPositionType } from '@/shared/types/tooltip';
import ButtonNewver from '@/shared/components/ButtonNewver';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  decorators: [
    (Story) => (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const Template = ({
  anchorText,
  placement,
  arrowPosition,
  distance
}: {
  anchorText: string;
  placement?: PlacementType;
  arrowPosition?: ArrowPositionType;
  distance?: number;
}) => (
  <Tooltip
    content="Tooltip"
    placement={placement}
    arrowPosition={arrowPosition}
    distance={distance}
    className="min-w-max text-center"
  >
    <ButtonNewver>{anchorText}</ButtonNewver>
  </Tooltip>
);

export const Default: Story = {
  render: () => Template({ anchorText: 'Default' })
};

export const Placement: Story = {
  render: () => (
    <div className="grid min-w-[300px] grid-cols-3 grid-rows-4 justify-items-center gap-x-10 gap-y-10">
      {PLACEMENT.map((placement) => Template({ anchorText: placement, placement }))}
    </div>
  )
};

export const ArrowPosition: Story = {
  render: () => (
    <div className="flex flex-col gap-y-10">
      <div>
        <h5 className="mb-2">placement: bottom</h5>
        <div className="flex gap-x-10">
          {Template({ anchorText: 'Default(center)' })}
          {Template({
            anchorText: 'Custom(left: 10px)',
            arrowPosition: { left: 10 }
          })}
          {Template({
            anchorText: 'Custom(right: 10px)',
            arrowPosition: { right: 10 }
          })}
        </div>
      </div>
      <div>
        <h5 className="mb-2">placement: right</h5>
        <div className="flex gap-x-10">
          {Template({ anchorText: 'Default(center)', placement: 'right' })}
          {Template({
            anchorText: 'Custom(top: 10px)',
            placement: 'right',
            arrowPosition: { top: 10 }
          })}
          {Template({
            anchorText: 'Custom(bottom: 10px)',
            placement: 'right',

            arrowPosition: { bottom: 10 }
          })}
        </div>
      </div>
    </div>
  )
};

export const Distance: Story = {
  render: () => (
    <div className="flex gap-x-10">
      {[2, 5, 10].map((distance) => Template({ anchorText: `${distance}px`, distance }))}
    </div>
  )
};
