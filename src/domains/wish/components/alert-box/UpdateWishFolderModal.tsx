'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

import Input from '@/shared/components/Input';
import Modal from '@/shared/components/Modal';
import ButtonNewver from '@/shared/components/ButtonNewver';
import usePopup from '@/shared/hooks/usePopup';
import { CreateWishFolderReqeust } from '../../types/form';
import { DEFAULT_FOLDER_NAME } from '../../constants';
import DefaultFolderAlertPopup from './DefaultFolderAlertPopup';

interface Props {
  onValidSubmit: SubmitHandler<CreateWishFolderReqeust>;
  prevTitle?: string;
}

const UpdateWishFolderModal = ({ onValidSubmit, prevTitle }: Props) => {
  const MAX_LENGTH = 12;

  const { register, handleSubmit, watch } = useForm<CreateWishFolderReqeust>({
    defaultValues: { title: prevTitle ?? '' }
  });

  /* TODO
  "기본 폴더"에 대한 임시 방편 - 백엔드와의 논의 후 결정 */
  const { openPopup } = usePopup();
  const onSubmit: SubmitHandler<CreateWishFolderReqeust> = (data) => {
    if (data.title === DEFAULT_FOLDER_NAME) {
      openPopup(<DefaultFolderAlertPopup />);
      return;
    }

    onValidSubmit(data);
  };

  const isDisable = prevTitle === watch('title') || DEFAULT_FOLDER_NAME === watch('title');

  return (
    <Modal title="찜 폴더">
      <PaddingWrapper>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[16px]">
          <div className="flex flex-col items-end gap-[4px]">
            <Input
              {...register('title', { required: true })}
              type="text"
              autoComplete="off"
              maxLength={MAX_LENGTH}
              placeholder="폴더 명을 입력해주세요."
            />
            <div>
              {watch('title').length}
              <span className="text-gray-400">/{MAX_LENGTH}</span>
            </div>
          </div>
          <ButtonNewver type="submit" disabled={isDisable} className="bg-black">
            확인
          </ButtonNewver>
        </form>
      </PaddingWrapper>
    </Modal>
  );
};

export default UpdateWishFolderModal;
