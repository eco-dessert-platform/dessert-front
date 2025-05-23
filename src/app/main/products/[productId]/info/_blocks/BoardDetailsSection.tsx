import Image from 'next/image';

import productService from '@/domains/product/queries/service';

interface Props {
  productId: number;
}

const BoardDetailsSection = async ({ productId }: Props) => {
  const {
    board: { boardImages }
  } = await productService.getProductInfo(productId);

  return (
    <div className="w-full p-0 pt-[16px]">
      {boardImages?.map((item) => (
        <Image key={item} src={item} alt="상세" width={600} height={100} className=" m-auto" />
      ))}
    </div>
  );
};

export default BoardDetailsSection;
