import { ProductType } from '@/domains/product/types/productInfoType';
import Tag from '@/shared/components/Tag';

interface Props {
  product: ProductType;
}

const IngredientInfo = ({
  product: { glutenFreeTag, highProteinTag, veganTag, ketogenicTag, sugarFreeTag }
}: Props) => (
  <div className="mt-[16px] flex gap-[4px]">
    {glutenFreeTag && <Tag>글루텐프리</Tag>}
    {highProteinTag && <Tag>고단백</Tag>}
    {sugarFreeTag && <Tag>저당</Tag>}
    {veganTag && <Tag>비건</Tag>}
    {ketogenicTag && <Tag>키토</Tag>}
  </div>
);
export default IngredientInfo;
