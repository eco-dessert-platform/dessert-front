'use client';

import ButtonNewver from '@/shared/components/ButtonNewver';
import WithdrawPopup from '@/domains/user/components/alert-box/WithdrawPopup';
import usePopup from '@/shared/hooks/usePopup';
import FixedBottom from '@/shared/components/FixedBottom';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface WithdrawButtonProps {
  disabled: boolean;
}

const WithdrawButton = ({ disabled = true }: WithdrawButtonProps) => {
  const { openPopup } = usePopup();

  const handleClickButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    openPopup(<WithdrawPopup />);
  };

  return (
    <FixedBottom>
      <PaddingWrapper className=" bg-white">
        <ButtonNewver
          onClick={handleClickButton}
          disabled={disabled}
          color="black"
          className="w-full"
        >
          탈퇴하기
        </ButtonNewver>
      </PaddingWrapper>
    </FixedBottom>
  );
};

export default WithdrawButton;
