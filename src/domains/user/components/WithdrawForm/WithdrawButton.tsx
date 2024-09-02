'use client';

import WithdrawPopup from '@/domains/user/components/alert-box/WithdrawPopup';
import usePopup from '@/shared/hooks/usePopup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

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
    <PaddingWrapper>
      <ButtonNewver
        className="w-full"
        onClick={handleClickButton}
        size="lg"
        color="black"
        disabled={disabled}
      >
        탈퇴하기
      </ButtonNewver>
    </PaddingWrapper>
  );
};

export default WithdrawButton;
