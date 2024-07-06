import { useParams } from 'next/navigation';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import { useCancelAlarmMutation } from '@/domains/alarm/queries/useCancelAlarmMutation';
import usePopup from '@/shared/hooks/usePopup';
import Popup from '@/shared/components/Popup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  type: AlarmType;
  productOptionId: ProductOptionType['id'];
}

const CancelAlarmPopup = ({ type, productOptionId }: Props) => {
  const { closePopup } = usePopup();
  const { productId } = useParams<{ productId: string }>();
  const { mutate: cancelAlarm } = useCancelAlarmMutation({
    pushCategory: type,
    productId: Number(productId),
    productOptionId
  });

  const handleCancel = async () => {
    cancelAlarm();
    closePopup();
  };

  return (
    <Popup>
      <PaddingWrapper className="text-center typo-title-16-medium">
        {ALARM[type].name} 알림
      </PaddingWrapper>
      <PaddingWrapper className="text-center typo-title-14-regular">
        {ALARM[type].name} 알림을 해제할까요?
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
          onClick={handleCancel}
        >
          해제
        </ButtonNewver>
      </PaddingWrapper>
    </Popup>
  );
};

export default CancelAlarmPopup;
