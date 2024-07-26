import type { Meta, StoryObj } from '@storybook/react';
import Tooltip, {
  PLACEMENT,
  POLYGON_POSITION,
  PlacementType,
  PolygonPositionType
} from '@/shared/components/Tooltip';
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
  polygonPosition,
  arrow
}: {
  anchorText: string;
  placement?: PlacementType;
  polygonPosition?: PolygonPositionType;
  arrow?: boolean;
}) => (
  <Tooltip
    content="Tooltip"
    placement={placement}
    polygonPosition={polygonPosition}
    arrow={arrow}
    className="w-3/4 text-center"
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
    <div>
      <h5 className="mb-2">placement: bottom</h5>
      <div className="grid grid-rows-1 grid-cols-3 gap-x-10 min-w-[300px] justify-items-center mb-10">
        {POLYGON_POSITION.map((position) =>
          Template({ anchorText: position, polygonPosition: position })
        )}
      </div>
      <h5 className="mb-2">placement: left</h5>
      <div className="grid grid-rows-1 grid-cols-3 gap-x-10 min-w-[300px] justify-items-center">
        {POLYGON_POSITION.map((position) =>
          Template({ anchorText: position, placement: 'left', polygonPosition: position })
        )}
      </div>
    </div>
  )
};

export const Arrow: Story = {
  render: () => (
    <div className="grid grid-rows-4 grid-cols-3 gap-x-10 gap-y-10 min-w-[300px] justify-items-center">
      {PLACEMENT.map((placement) => Template({ anchorText: placement, placement, arrow: false }))}
    </div>
  )
};
