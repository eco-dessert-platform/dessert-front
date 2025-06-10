import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import usePopup from '@/shared/hooks/usePopup';
import Popup from '@/shared/components/Popup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  type: AlarmType;
}

const ReadyForServicePopup = ({ type }: Props) => {
  const { closePopup } = usePopup();

  return (
    <Popup>
      <PaddingWrapper className="typo-title-16-medium text-center">
        {ALARM[type].name} 알림
      </PaddingWrapper>
      <PaddingWrapper className="typo-title-14-regular text-center">
        서비스 준비 중입니다.
      </PaddingWrapper>
      <PaddingWrapper className="py-[10px]">
        <ButtonNewver
          color="black"
          size="md"
          radius="round"
          className="w-full"
          onClick={closePopup}
        >
          확인
        </ButtonNewver>
      </PaddingWrapper>
    </Popup>
  );
};

export default ReadyForServicePopup;
