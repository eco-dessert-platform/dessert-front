'use client';

import CheckBox from '@/shared/components/Checkbox';

interface AgreeProps {
  isChecked: boolean;
  onChange: () => void;
}

const Agree = ({ isChecked, onChange }: AgreeProps) => (
  <CheckBox isChecked={isChecked} onChange={onChange}>
    <div className={`typo-body-12-medium ${isChecked ? 'text-primaryOrangeRed' : 'text-gray-900'}`}>
      회원탈퇴 유의사항을 확인했으며 이에 동의합니다.
    </div>
  </CheckBox>
);

export default Agree;
