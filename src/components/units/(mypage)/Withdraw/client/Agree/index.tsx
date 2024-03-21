'use client';

import CheckBox from '@/components/commons/checkbox/client/Checkbox';

interface AgreeProps {
  isChecked: boolean;
  onChange: () => void;
}

const Agree = ({ isChecked, onChange }: AgreeProps) => {
  return (
    <CheckBox isChecked={isChecked} onChange={onChange}>
      <div
        className={`underline underline-offset-2 text-[12px] font-medium ${
          isChecked ? 'text-primaryOrangeRed' : 'text-gray-900'
        }`}
      >
        회원탈퇴 유의사항을 확인했으며 이에 동의합니다.
      </div>
    </CheckBox>
  );
};

export default Agree;
