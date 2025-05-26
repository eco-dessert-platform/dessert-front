import { ProductType } from '@/domains/product/types/productInfoType';
import { nutrientEngToKr } from '@/domains/product/utils/transfromTag';

interface Props {
  product: ProductType;
}

const NUTRIENT_ORDER = ['carbohydrates', 'sugars', 'protein', 'fat'] as const;

const NutrientInfo = ({ product: { nutrient } }: Props) => (
  <div>
    <div className="flex justify-between items-center">
      <h2 className="text-gray-500 text-12 leading-150 font-semibold ">영양정보</h2>
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
            className="bg-gray-50 rounded-[6px] py-[4px] px-[10px] w-fit flex-1 flex flex-col items-center justify-center"
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
