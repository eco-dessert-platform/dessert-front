'use client';

import { useFormContext, SubmitHandler } from 'react-hook-form';
import { WithdrawFormType } from '@/domains/user/types/profile';
import DeleteReasonList from '@/domains/user/components/WithdrawForm/DeleteReasonList';
import Agree from '@/domains/user/components/WithdrawForm/Agree';
import useWithdrawMutation from '../../queries/useWithdrawMutation';
import { FORM_ID } from '../../constants/form';

const WithdrawForm = () => {
  const { mutate } = useWithdrawMutation();
  const { handleSubmit } = useFormContext<WithdrawFormType>();

  const onValid: SubmitHandler<WithdrawFormType> = ({ deleteReasons }) => {
    mutate({ deleteReasons });
  };

  return (
    <form id={FORM_ID.withdraw} onSubmit={handleSubmit(onValid)}>
      <div>
        <p className="mb-[8px] typo-title-14-semibold">
          계정을 삭제하는 이유를 알려주세요😢
          <span className="typo-title-14-semibold text-primaryOrangeRed">*&nbsp;</span>
          <span className="typo-body-12-semibold text-gray-400">(다중 선택 가능)</span>
        </p>
        <DeleteReasonList />
        <div className="flex justify-center mt-[20px] mb-[32px]">
          <Agree />
        </div>
      </div>
    </form>
  );
};

export default WithdrawForm;
