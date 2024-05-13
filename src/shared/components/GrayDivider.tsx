import { GrayColorType } from '@/shared/types/color';

interface GrayDividerProps {
  color?: GrayColorType;
}

const bgColor = {
  gray50: 'bg-gray-50',
  gray100: 'bg-gray-100',
  gray200: 'bg-gray-200',
  gray300: 'bg-gray-300',
  gray400: 'bg-gray-400',
  gray500: 'bg-gray-500',
  gray600: 'bg-gray-600',
  gray700: 'bg-gray-700',
  gray800: 'bg-gray-800',
  gray900: 'bg-gray-900'
};

const GrayDivider = ({ color = 'gray50' }: GrayDividerProps) => (
  <hr className={`h-[1px] border-0 ${bgColor[color]}`} />
);

export default GrayDivider;
