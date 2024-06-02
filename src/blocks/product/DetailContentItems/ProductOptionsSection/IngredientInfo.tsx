import ProductTag from '@/domains/product/components/ProductTag';
import { ProductType } from '@/domains/product/types/productDetailType';

interface Props {
  item: ProductType;
}

const IngredientInfo = ({ item }: Props) => {
  const tagsArray = (detailData: ProductType) => {
    const tags = [];
    if (detailData.glutenFreeTag) tags.push('글루텐프리');
    if (detailData.highProteinTag) tags.push('고단백');
    if (detailData.sugarFreeTag) tags.push('저당');
    if (detailData.veganTag) tags.push('비건');
    if (detailData.ketogenicTag) tags.push('키토');
    return tags;
  };

  return (
    <div>
      {tagsArray(item).map((tag) => (
        <ProductTag tag={tag} />
      ))}
    </div>
  );
};
export default IngredientInfo;
