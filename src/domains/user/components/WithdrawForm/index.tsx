'use client';

import { useState } from 'react';
import DeleteReasonList from '@/domains/user/components/WithdrawForm/DeleteReasonList';
import Agree from '@/domains/user/components/WithdrawForm/Agree';
import useWithdrawMutation from '../../queries/useWithdrawMutation';
import { FORM_ID } from '../../constants/form';

const WithdrawForm = () => {
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  const { mutate } = useWithdrawMutation();

  const handleAgreeChange = () => {
    setIsAgreeChecked(!isAgreeChecked);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    mutate({ formData });
  };

  return (
    <form id={FORM_ID.withdraw} onSubmit={handleFormSubmit}>
      <div>
        <p className="mb-[8px] typo-title-14-semibold">
          계정을 삭제하는 이유를 알려주세요😢
          <span className="typo-body-12-semibold text-gray-400">(중복선택가능)</span>
        </p>
        <DeleteReasonList />
        <div className="flex justify-center mt-[20px] mb-[32px]">
          <Agree isChecked={isAgreeChecked} onChange={handleAgreeChange} />
        </div>
      </div>
    </form>
  );
};

export default WithdrawForm;
