'use client';

import Button from '@/components/commons/button/client/Button';
import WithdrawPopup from '@/components/units/(mypage)/Withdraw/client/WithdrawPopup';
import usePopup from '@/commons/hooks/usePopup';

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
    <Button onClick={handleClickButton} disabled={disabled}>
      탈퇴하기
    </Button>
  );
};

export default WithdrawButton;
