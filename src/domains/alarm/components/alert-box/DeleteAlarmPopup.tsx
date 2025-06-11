import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import { useDeleteAlarmMutation } from '@/domains/alarm/queries/useDeleteAlarmMutation';
import usePopup from '@/shared/hooks/usePopup';
import Popup from '@/shared/components/Popup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  type: AlarmType;
  productOptionId: ProductOptionType['id'];
}

const DeleteAlarmPopup = ({ type, productOptionId }: Props) => {
  const { closePopup } = usePopup();
  const { mutate: deleteAlarm } = useDeleteAlarmMutation({ pushCategory: type, productOptionId });

  const handleDelete = () => {
    deleteAlarm();
    closePopup();
  };

  return (
    <Popup>
      <PaddingWrapper className="typo-title-16-medium text-center">
        {ALARM[type].name} 알림
      </PaddingWrapper>
      <PaddingWrapper className="typo-title-14-regular text-center">
        {ALARM[type].name} 알림을 삭제할까요?
      </PaddingWrapper>
      <PaddingWrapper className="flex justify-around gap-x-[10px] py-[10px]">
        <ButtonNewver
          color="border-white"
          size="md"
          radius="round"
          className="flex-1"
          onClick={closePopup}
        >
          취소
        </ButtonNewver>
        <ButtonNewver
          color="black"
          size="md"
          radius="round"
          className="flex-1"
          onClick={handleDelete}
        >
          삭제
        </ButtonNewver>
      </PaddingWrapper>
    </Popup>
  );
};

export default DeleteAlarmPopup;
