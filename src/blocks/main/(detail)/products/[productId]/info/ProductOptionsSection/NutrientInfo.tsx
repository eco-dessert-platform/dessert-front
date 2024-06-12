import { ProductType } from '@/domains/product/types/productDetailType';
import { nutirentEngToKr } from '@/domains/product/utils/transfromTag';

interface Props {
  nutrient: ProductType['nutrient'];
}

const NutrientInfo = ({ nutrient }: Props) => (
  <div>
    <div className="flex justify-between items-center">
      <h2 className="text-gray-500 text-12 leading-150 font-semibold ">영양정보</h2>
      <p className="typo-body-12-semibold text-gray-700">{`총 내용량 ${nutrient.weight}g/${nutrient.calories}kcal`}</p>
    </div>
    <div className="flex justify-between gap-[6px] p-[0px]">
      {Object.entries(nutrient).map(([key, value]) => {
        if (key === 'calories') return null;
        if (key === 'weight') return null;

        return (
          <div className="bg-gray-50 rounded-[6px] py-[4px] px-[10px] w-fit flex-1 flex flex-col items-center justify-center">
            <div className="typo-body-12-medium text-gray-700">{nutirentEngToKr(key)}</div>
            <div className="typo-title-16-semibold text-gray-900">{value}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default NutrientInfo;
