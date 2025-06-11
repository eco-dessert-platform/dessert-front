'use client';

import { useAtom } from 'jotai';
import {
  filterValueAtom,
  categoryAtom,
  tagsAtom,
  priceAtom,
  orderAvailableTodayAtom
} from '@/domains/product/atoms';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import ButtonNewver from '@/shared/components/ButtonNewver';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import useModal from '@/shared/hooks/useModal';
import ResetIcon from '@public/assets/icons/reset.svg';

const ButtonSection = () => {
  const [, setFilterValue] = useAtom(filterValueAtom);
  const [category, setCategory] = useAtom(categoryAtom);
  const [tags, setTags] = useAtom(tagsAtom);
  const [price, setPrice] = useAtom(priceAtom);
  const [orderAvailableToday, setOrderAvailableToday] = useAtom(orderAvailableTodayAtom);

  const { closeModal } = useModal();

  const handleConfirm = () => {
    setFilterValue({
      category,
      tags,
      price,
      orderAvailableToday,
      sort: INIT_FILTER_VALUE.sort
    });
    closeModal();
  };

  const handleReset = () => {
    setCategory(INIT_FILTER_VALUE.category);
    setTags(INIT_FILTER_VALUE.tags);
    setPrice(INIT_FILTER_VALUE.price);
    setOrderAvailableToday(INIT_FILTER_VALUE.orderAvailableToday);
  };

  return (
    <PaddingWrapper className="flex gap-[10px] justify-between items-center fixed bottom-0 w-full bg-white">
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
