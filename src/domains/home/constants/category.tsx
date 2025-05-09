import {
  AllIcon,
  GlutenFreeIcon,
  LowFatIcon,
  LowSugarIcon,
  ProteinIcon,
  VeganIcon
} from '@/domains/product/assets/category/icons';

export const CATEGORY = [
  {
    id: 1,
    name: '전체',
    icon: <AllIcon />
  },
  {
    id: 2,
    name: '고단백',
    icon: <ProteinIcon />
  },
  {
    id: 3,
    name: '저당',
    icon: <LowSugarIcon />
  },
  {
    id: 4,
    name: '저지방',
    icon: <LowFatIcon />
  },
  {
    id: 5,
    name: '글루텐프리',
    icon: <GlutenFreeIcon />
  },
  {
    id: 6,
    name: '비건',
    icon: <VeganIcon />
  }
];
