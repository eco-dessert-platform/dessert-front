import { useRecoilState, useSetRecoilState } from 'recoil';

import { filterValueState, filterValueTempState } from '@/domains/product/atoms';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import Button from '@/shared/components/Button';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import useModal from '@/shared/hooks/useModal';
import ResetIcon from '@public/assets/icons/reset.svg';

interface ButtonSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const ButtonSection = ({ filterFamilyId }: ButtonSectionProps) => {
  const setFilterValue = useSetRecoilState(filterValueState(filterFamilyId));
  const [tempFilterValue, setTempFilterValue] = useRecoilState(
    filterValueTempState(filterFamilyId)
  );
  const { closeModal } = useModal();

  const handleConfirm = () => {
    setFilterValue(tempFilterValue);
    closeModal();
  };

  const handleReset = () => {
    setTempFilterValue(INIT_FILTER_VALUE);
  };

  return (
    <PaddingWrapper className="flex gap-[10px] justify-center items-center">
      <Button
        variants="primary-white"
        className="type-title-16-medium items-center justify-center flex gap-[2px]"
        onClick={handleReset}
      >
        <ResetIcon />
        초기화
      </Button>
      <Button
        variants="primary-black"
        className="type-title-16-medium text-white"
        onClick={handleConfirm}
      >
        적용
      </Button>
    </PaddingWrapper>
  );
};

export default ButtonSection;
