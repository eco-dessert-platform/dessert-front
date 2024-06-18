'use client';

import { useState } from 'react';
import { ProductType } from '@/domains/alarm/types';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import AlarmCard from '@/domains/alarm/components/AlarmCard';
import NoAlarm from '@/domains/alarm/components/NoAlarm';

const PRODUCTS: Array<ProductType> = [
  {
    id: 1,
    title: '상품명1',
    description: '상품 설명',
    thumbnail:
      'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQwu9l5QEVRGPd9-hQ90jhpiGAMg1ycT46XWkXivXoCYaZ2RUm0Fz_Y0ZVxsJ50o3_K',
    isAlarming: true
  },
  {
    id: 2,
    title: '상품명2',
    description:
      '상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명',
    thumbnail:
      'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQwu9l5QEVRGPd9-hQ90jhpiGAMg1ycT46XWkXivXoCYaZ2RUm0Fz_Y0ZVxsJ50o3_K',
    isAlarming: false
  }
];

const RestockPage = () => {
  const [products, setProducts] = useState(PRODUCTS);

  const handleAlarm = (id: number) => {
    const newProducts = products.map((product) => {
      if (product.id === id) return { ...product, isAlarming: !product.isAlarming };
      return product;
    });
    setProducts(newProducts);
  };

  const handleDelete = (id: number) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  if (products.length === 0) return <NoAlarm type="restock" />;

  return (
    <PaddingWrapper className="flex flex-col gap-y-[16px]">
      {products.map((product) => (
        <AlarmCard
          key={product.id}
          type="restock"
          data={product}
          onAlarm={handleAlarm}
          onDelete={handleDelete}
        />
      ))}
    </PaddingWrapper>
  );
};

export default RestockPage;
