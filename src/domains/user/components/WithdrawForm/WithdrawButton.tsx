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
    <div className="fixed z-[5000] left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[600px] p-[16px] bg-white">
      <Button onClick={handleClickButton} disabled={disabled}>
        탈퇴하기
      </Button>
    </div>
  );
};

export default WithdrawButton;
