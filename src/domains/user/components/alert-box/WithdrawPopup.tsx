'use client';

import Popup from '@/shared/components/Popup';
import usePopup from '@/shared/hooks/usePopup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { FORM_ID } from '../../constants/form';

const WithdrawPopup = () => {
  const { closePopup } = usePopup();

  const handleClickCancel = () => {
    closePopup();
  };

  return (
    <Popup>
      <div>
        <PaddingWrapper className="text-center typo-title-16-medium">
          정말로 탈퇴 하시겠어요?
        </PaddingWrapper>
        <PaddingWrapper className="text-center typo-title-14-regular">
          탈퇴 버튼 선택시,
          <br />
          계정은 삭제되며 복구되지 않습니다.
        </PaddingWrapper>
        <PaddingWrapper className="flex justify-around">
          <button
            type="button"
            className="typo-title-14-medium cursor-pointer"
            onClick={handleClickCancel}
          >
            취소
          </button>
          <input
            type="submit"
            form={FORM_ID.withdraw}
            value="탈퇴하기"
            className="text-primary-orange-red typo-title-14-medium cursor-pointer"
          />
        </PaddingWrapper>
      </div>
    </Popup>
  );
};

export default WithdrawPopup;
