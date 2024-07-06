import { useParams } from 'next/navigation';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import { useAddAlarmMutation } from '@/domains/alarm/queries/useAddAlarmMutation';
import { getFcmToken } from '@/domains/alarm/utils/fcmToken';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import usePopup from '@/shared/hooks/usePopup';
import Popup from '@/shared/components/Popup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  type: AlarmType;
  productOptionId: ProductOptionType['id'];
}

const AddAlarmPopup = ({ type, productOptionId }: Props) => {
  const { openToast } = useToastNewVer();
  const { closePopup } = usePopup();
  const { productId } = useParams<{ productId: string }>();
  const { mutate: addAlarm } = useAddAlarmMutation({
    pushCategory: type,
    productId: Number(productId),
    productOptionId
  });

  const handleApply = async () => {
    try {
      const fcmToken = await getFcmToken();

      addAlarm({ fcmToken });
    } catch (error) {
      if (!(error instanceof Error)) return;
      openToast({ message: `[알림 신청 실패] ${error.message}` });
    }
    closePopup();
  };

  return (
    <Popup>
      <PaddingWrapper className="text-center typo-title-16-medium">
        {ALARM[type].name} 알림
      </PaddingWrapper>
      <PaddingWrapper className="text-center typo-title-14-regular">
        {ALARM[type].name} 알림을 신청할까요?
        <br />
        빵이 {type === 'restock' && '재'}입고되는 즉시, 푸시 알림이 가요!
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
          onClick={handleApply}
        >
          신청
        </ButtonNewver>
      </PaddingWrapper>
    </Popup>
  );
};

export default AddAlarmPopup;
