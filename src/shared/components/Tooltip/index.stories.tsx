import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '@/shared/components/Tooltip';
import { PLACEMENT } from '@/shared/constants/tooltip';
import { PlacementType, PolygonPositionType } from '@/shared/types/tooltip';
import ButtonNewver from '@/shared/components/ButtonNewver';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center w-full h-[80vh]">
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
  polygonPosition
}: {
  anchorText: string;
  placement?: PlacementType;
  polygonPosition?: PolygonPositionType;
}) => (
  <Tooltip
    content="Tooltip"
    placement={placement}
    polygonPosition={polygonPosition}
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
    <div className="grid grid-rows-4 grid-cols-3 gap-x-10 gap-y-10 min-w-[300px] justify-items-center">
      {PLACEMENT.map((placement) => Template({ anchorText: placement, placement }))}
    </div>
  )
};

export const PolygonPosition: Story = {
  render: () => (
    <div className="flex flex-col gap-y-10">
      <div>
        <h5 className="mb-2">placement: bottom</h5>
        <div className="flex gap-x-10">
          {Template({ anchorText: 'Default(center)' })}
          {Template({
            anchorText: 'Custom(left: 10px)',
            polygonPosition: { left: 10 }
          })}
          {Template({
            anchorText: 'Custom(right: 10px)',
            polygonPosition: { right: 10 }
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
            polygonPosition: { top: 10 }
          })}
          {Template({
            anchorText: 'Custom(bottom: 10px)',
            placement: 'right',

            polygonPosition: { bottom: 10 }
          })}
        </div>
      </div>
    </div>
  )
};
