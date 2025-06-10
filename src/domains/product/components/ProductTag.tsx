'use client';

import { transformTagToKr } from '@/domains/product/utils/transfromTag';

interface ProductTagProps {
  tag: string;
}

const ProductTag = ({ tag }: ProductTagProps) => (
  <div className="inline-flex h-[21px] items-center justify-center gap-1 rounded-sm border border-solid border-gray-200 bg-white">
    <span className="text-11 px-[6px] py-[2px] leading-150 font-normal text-gray-600">
      {transformTagToKr(tag)}
    </span>
  </div>
);

export default ProductTag;
