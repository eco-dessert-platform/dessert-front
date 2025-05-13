'use client';

import { useFormContext } from 'react-hook-form';
import { WithdrawFormType } from '@/domains/user/types/profile';
import WithdrawPopup from '@/domains/user/components/alert-box/WithdrawPopup';
import usePopup from '@/shared/hooks/usePopup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

const WithdrawButton = () => {
  const { openPopup } = usePopup();
  const { watch } = useFormContext<WithdrawFormType>();
  const deleteReasons = watch('deleteReasons');
  const isAgreeChecked = watch('isAgreeChecked');
  const disabled = !isAgreeChecked || deleteReasons.length === 0;

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
