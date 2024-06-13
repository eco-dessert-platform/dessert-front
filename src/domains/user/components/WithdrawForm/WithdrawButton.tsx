'use client';

import Button from '@/shared/components/Button';
import WithdrawPopup from '@/domains/user/components/alert-box/WithdrawPopup';
import usePopup from '@/shared/hooks/usePopup';

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
