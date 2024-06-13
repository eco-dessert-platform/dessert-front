'use client';

import Popup from '@/shared/components/Popup';
import usePopup from '@/shared/hooks/usePopup';

const WithdrawPopup = () => {
  const { closePopup } = usePopup();

  const handleClickCancel = () => {
    closePopup();
  };

  return (
    <Popup>
      <div className="leading-normal tracking-tight">
        <p className="p-4 text-center font-medium">정말로 탈퇴 하시겠어요?</p>
        <p className="p-4 text-center text-[14px]">
          탈퇴 버튼 선택시,
          <br />
          계정은 삭제되며 복구되지 않습니다.
        </p>
        <div className="flex justify-around p-4">
          <input
            type="submit"
            form="withdraw-form"
            value="탈퇴하기"
            className="text-primaryOrangeRed text-[14px] underline underline-offset-2 cursor-pointer"
          />
          <button type="button" className="text-[14px] cursor-pointer" onClick={handleClickCancel}>
            취소
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default WithdrawPopup;
