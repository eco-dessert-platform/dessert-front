import { ProductType } from '@/domains/product/types/productInfoType';
import { nutrientEngToKr } from '@/domains/product/utils/transfromTag';

interface Props {
  product: ProductType;
}

const NUTRIENT_ORDER = ['carbohydrates', 'sugars', 'protein', 'fat'] as const;

const NutrientInfo = ({ product: { nutrient } }: Props) => (
  <div>
    <div className="flex items-center justify-between">
      <h2 className="text-12 leading-150 font-semibold text-gray-500">영양정보</h2>
      {(nutrient.weight || nutrient.calories) && (
        <p className="typo-body-12-semibold text-gray-700">{`총 내용량 ${nutrient.weight}g/${nutrient.calories}kcal`}</p>
      )}
    </div>
    <ul className="flex justify-between gap-[6px] p-[0px]">
      {NUTRIENT_ORDER.map((key) => {
        const value = nutrient[key];

        return (
          <li
            key={key}
            className="flex w-fit flex-1 flex-col items-center justify-center rounded-[6px] bg-gray-50 px-[10px] py-[4px]"
          >
            <div className="typo-body-12-medium text-gray-700">{nutrientEngToKr(key)}</div>
            <div className="typo-title-16-semibold text-gray-900">
              {value !== -1 ? `${value}g` : '-'}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

export default NutrientInfo;
