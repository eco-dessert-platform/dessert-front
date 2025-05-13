import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import usePopup from '@/shared/hooks/usePopup';
import Popup from '@/shared/components/Popup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  type: AlarmType;
}

const MobileAppPopup = ({ type }: Props) => {
  const { closePopup } = usePopup();

  return (
    <Popup>
      <PaddingWrapper className="text-center typo-title-16-medium">
        {ALARM[type].name} 알림
      </PaddingWrapper>
      <PaddingWrapper className="text-center typo-title-14-regular">
        {ALARM[type].name} 알림 신청은 모바일 앱에서만 가능해요!
        <br />
        모바일에서 빵그리의 오븐을 설치해주세요.
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

export default MobileAppPopup;
