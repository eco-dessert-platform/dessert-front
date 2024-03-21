'use client';

import { useState } from 'react';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';

interface DeleteReasonItemProps {
  content: string;
}

const DeleteReasonItem = ({ content }: DeleteReasonItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckBox
      name="delete-reason"
      value={content}
      isChecked={isChecked}
      onChange={handleCheckClick}
    >
      {content}
    </CheckBox>
  );
};

export default DeleteReasonItem;
