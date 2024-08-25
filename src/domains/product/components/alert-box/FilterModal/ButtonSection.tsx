import { useRecoilState, useSetRecoilState } from 'recoil';

import { filterValueState, filterValueTempState } from '@/domains/product/atoms';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import ButtonNewver from '@/shared/components/ButtonNewver';
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
      <ButtonNewver
        color="border-white"
        size="lg"
        className="flex-1 gap-[2px]"
        onClick={handleReset}
      >
        <ResetIcon />
        초기화
      </ButtonNewver>
      <ButtonNewver color="black" size="lg" className="flex-1" onClick={handleConfirm}>
        적용
      </ButtonNewver>
    </PaddingWrapper>
  );
};

export default ButtonSection;
