import { ProductOptionType } from '@/domains/product/types/productDetailType';
import Tag from '@/shared/components/Tag';

interface Props {
  glutenFreeTag: ProductOptionType['glutenFreeTag'];
  highProteinTag: ProductOptionType['highProteinTag'];
  sugarFreeTag: ProductOptionType['sugarFreeTag'];
  veganTag: ProductOptionType['veganTag'];
  ketogenicTag: ProductOptionType['ketogenicTag'];
}

const IngredientInfo = ({
  glutenFreeTag,
  highProteinTag,
  veganTag,
  ketogenicTag,
  sugarFreeTag
}: Props) => (
  <div className="flex gap-[4px]">
    {glutenFreeTag && <Tag>글루텐프리</Tag>}
    {highProteinTag && <Tag>고단백</Tag>}
    {sugarFreeTag && <Tag>저당</Tag>}
    {veganTag && <Tag>비건</Tag>}
    {ketogenicTag && <Tag>키토</Tag>}
  </div>
);
export default IngredientInfo;
