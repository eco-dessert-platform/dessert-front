import Image from 'next/image';

import { IProductDetailType } from '@/domains/product/types/productDetailType';

interface DetailInformationImgsProps {
  data: IProductDetailType;
}

const DetailInformationImgs = ({ data }: DetailInformationImgsProps) => (
  <div className="w-full p-0 ">
    {data.board?.detail.map((item) => (
      <Image
        key={item.imgIndex}
        src={item.url}
        alt="상세"
        width={600}
        height={100}
        className=" m-auto"
      />
    ))}
  </div>
);

export default DetailInformationImgs;
