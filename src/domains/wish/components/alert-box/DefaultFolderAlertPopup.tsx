import Button from '@/shared/components/Button';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Popup from '@/shared/components/Popup';
import usePopup from '@/shared/hooks/usePopup';

const DefaultFolderAlertPopup = () => {
  const { closePopup } = usePopup();

  return (
    <Popup>
      <PaddingWrapper className="text-center mt-[16px]">
        기본 폴더는 수정 및 삭제하실 수 없습니다.
      </PaddingWrapper>
      <PaddingWrapper>
        <Button onClick={closePopup}>확인</Button>
      </PaddingWrapper>
    </Popup>
  );
};

export default DefaultFolderAlertPopup;
