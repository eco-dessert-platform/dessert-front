import { useRecoilValue } from 'recoil';
import { mainCategoryState } from '@/domains/product/atoms';
import { ICategoryType, FilterFamilyIDType } from '@/domains/product/types/filterType';

const useCategory = (filterFamilyId: FilterFamilyIDType) => {
  const mainCategory = useRecoilValue(mainCategoryState(filterFamilyId));

  const elaborateCategory = (category: ICategoryType): ICategoryType => {
    let elaboratedCategory = category;
    if (category === '전체') {
      if (mainCategory === '빵') elaboratedCategory = '전체_빵';
      if (mainCategory === '간식/과자') elaboratedCategory = '전체_과자';
    }
    return elaboratedCategory;
  };

  const simplifyCategory = (category: ICategoryType): ICategoryType => {
    let simplifiedCategory = category;
    if (category === '전체_빵' || category === '전체_과자') simplifiedCategory = '전체';
    return simplifiedCategory;
  };

  return { elaborateCategory, simplifyCategory };
};

export default useCategory;
