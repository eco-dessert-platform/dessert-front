'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Modal from '@/shared/components/Modal';
import { CreateWishFolderReqeust } from '../../types/form';
import { NEW_WISH_FOLDER_KEY } from '../../constants';

interface Props {
  onValidSubmit: SubmitHandler<CreateWishFolderReqeust>;
  prevTitle: string;
}

const UpdateWishFolderModal = ({ onValidSubmit, prevTitle }: Props) => {
  const MAX_LENGTH = 12;
  const { register, handleSubmit, watch } = useForm<CreateWishFolderReqeust>({
    defaultValues: { title: NEW_WISH_FOLDER_KEY === prevTitle ? '' : prevTitle }
  });
  const isDisable = prevTitle === watch('title');

  return (
    <Modal title="찜 폴더">
      <PaddingWrapper>
        <form onSubmit={handleSubmit(onValidSubmit)} className="flex flex-col gap-[16px]">
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
          <Button type="submit" disabled={isDisable} className={isDisable ? 'bg-gray-600' : ''}>
            확인
          </Button>
        </form>
      </PaddingWrapper>
    </Modal>
  );
};

export default UpdateWishFolderModal;
