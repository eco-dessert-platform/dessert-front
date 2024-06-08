import {
  AllIcon,
  GlutenFreeIcon,
  LowFatIcon,
  LowSugarIcon,
  ProteinIcon,
  VeganIcon
} from '@/domains/product/assets/category/icons';

export const categoryMenu = [
  {
    id: 1,
    category: '상품별',
    name: '전체',
    icon: <AllIcon />,
    url: 'all'
  },
  {
    id: 2,
    category: '상품별',
    name: '고단백',
    icon: <ProteinIcon />,
    url: 'all'
  },
  {
    id: 3,
    category: '상품별',
    name: '저당',
    icon: <LowSugarIcon />,
    url: 'all'
  },
  {
    id: 4,
    category: '상품별',
    name: '저지방',
    icon: <LowFatIcon />,
    url: 'all'
  },
  {
    id: 5,
    category: '상품별',
    name: '글루텐프리',
    icon: <GlutenFreeIcon />,
    url: 'all'
  },
  {
    id: 6,
    category: '상품별',
    name: '비건',
    icon: <VeganIcon />,
    url: 'all'
  }
];
