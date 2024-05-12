'use client';

import { useRecoilState } from 'recoil';
import { isCategoryTabState } from '@/domains/product/atoms/isCategoryTabState';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import {
  AllIcon,
  BigenIcon,
  BreadIcon,
  CakeIcon,
  CookieIcon,
  GluIcon,
  KitoIcon,
  NoSugarIcon,
  EtcIcon,
  JamIcon,
  ProteinIcon,
  TartIcon,
  YogurtIcon
} from '@/domains/product/assets/category/icons';
import CategoryButton from '@/domains/product/components/CategoryButton';

const categoryMenu = [
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
    name: '빵',
    icon: <BreadIcon />,
    url: 'bread'
  },
  {
    id: 3,
    category: '상품별',
    name: '쿠키',
    icon: <CookieIcon />,
    url: 'cookie'
  },
  {
    id: 4,
    category: '상품별',
    name: '케이크',
    icon: <CakeIcon />,
    url: 'cake'
  },
  {
    id: 5,
    category: '상품별',
    name: '타르트',
    icon: <TartIcon />,
    url: 'tart'
  },
  {
    id: 6,
    category: '상품별',
    name: '잼/청',
    icon: <JamIcon />,
    url: 'jam'
  },
  {
    id: 7,
    category: '상품별',
    name: '요거트',
    icon: <YogurtIcon />,
    url: 'yogurt'
  },
  {
    id: 8,
    category: '상품별',
    name: '기타',
    icon: <EtcIcon />,
    url: 'etc'
  },
  {
    id: 9,
    category: '성분별',
    name: '전체',
    icon: <AllIcon />,
    url: 'etc'
  },
  {
    id: 10,
    category: '성분별',
    name: '글루텐프리',
    icon: <GluIcon />,
    url: 'etc'
  },
  {
    id: 11,
    category: '성분별',
    name: '고단백',
    icon: <ProteinIcon />,
    url: 'etc'
  },
  {
    id: 12,
    category: '성분별',
    name: '무설탕',
    icon: <NoSugarIcon />,
    url: 'etc'
  },
  {
    id: 13,
    category: '성분별',
    name: '비건',
    icon: <BigenIcon />,
    url: 'etc'
  },
  {
    id: 14,
    category: '성분별',
    name: '키토제닉',
    icon: <KitoIcon />,
    url: 'etc'
  }
];

const CategoryList = () => {
  const [isCategoryTab] = useRecoilState(isCategoryTabState);

  return (
    <PaddingWrapper className={`grid pb-[0px] ${isCategoryTab ? 'grid-cols-4' : 'grid-cols-3'}`}>
      {categoryMenu
        .filter((category) => category.category === (isCategoryTab ? '상품별' : '성분별'))
        .map((category) => (
          <CategoryButton
            key={category.id}
            name={category.name}
            icon={category.icon}
            isCategoryTab={isCategoryTab}
          />
        ))}
    </PaddingWrapper>
  );
};

export default CategoryList;
