'use client';

import { useFormContext } from 'react-hook-form';
import { WithdrawFormType } from '@/domains/user/types/profile';
import CheckBoxNewver from '@/shared/components/CheckboxNewver';

const REASONS = [
  { content: '원하는 정보가 부족해요.' },
  { content: '기능들이 너무 아쉬워요.' },
  { content: '더 좋은 서비스를 찾았어요.' },
  { content: '계정을 새로 만들고 싶어요.' },
  { content: '기타' }
];

const DeleteReasonList = () => {
  const { watch, register } = useFormContext<WithdrawFormType>();
  const deleteReasons = watch('deleteReasons');

  return (
    <div className="flex flex-col gap-[16px] py-[10px]">
      {REASONS.map(({ content }) => (
        <label
          key={content}
          htmlFor={content}
          className="flex gap-[6px] items-center cursor-pointer"
        >
          <CheckBoxNewver
            id={content}
            value={content}
            checked={deleteReasons.includes(content)}
            {...register('deleteReasons', { required: true })}
          />
          <p className="typo-title-14-regular">{content}</p>
        </label>
      ))}
    </div>
  );
};

export default DeleteReasonList;
