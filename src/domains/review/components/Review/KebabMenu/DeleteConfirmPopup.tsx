import ButtonNewver from '@/shared/components/ButtonNewver';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Popup from '@/shared/components/Popup';
import React from 'react';

interface Props {
  onCancel: () => void;
  onDelete: () => void;
}
const DeleteConfirmPopup = ({ onCancel, onDelete }: Props) => (
  <Popup>
    <PaddingWrapper className="typo-title-16-medium text-center">리뷰 삭제</PaddingWrapper>
    <PaddingWrapper className="typo-title-14-regular text-center">
      삭제한 후에 복구할 수 없어요.
      <br />
      리뷰를 삭제할까요?
    </PaddingWrapper>

    <PaddingWrapper className="flex items-center justify-between gap-[10px]">
      <ButtonNewver color="border-white" size="lg" className="flex-1 gap-[2px]" onClick={onCancel}>
        취소
      </ButtonNewver>
      <ButtonNewver color="black" size="lg" className="flex-1" onClick={onDelete}>
        식제
      </ButtonNewver>
    </PaddingWrapper>
  </Popup>
);

export default DeleteConfirmPopup;
