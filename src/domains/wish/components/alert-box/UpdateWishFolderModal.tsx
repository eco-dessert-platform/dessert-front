'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Modal from '@/shared/components/Modal';
import { CreateWishFolderReqeust } from '../../types/form';

interface Props {
  onValidSubmit: SubmitHandler<CreateWishFolderReqeust>;
}

const UpdateWishFolderModal = ({ onValidSubmit }: Props) => {
  const MAX_LENGTH = 12;
  const { register, handleSubmit, watch } = useForm<CreateWishFolderReqeust>({
    defaultValues: { title: '' }
  });
  const titleRegister = register('title', { required: true });
  const titleLength = watch('title').length;

  return (
    <Modal title="찜 폴더">
      <PaddingWrapper>
        <form onSubmit={handleSubmit(onValidSubmit)} className="flex flex-col gap-[16px]">
          <div className="flex flex-col items-end gap-[4px]">
            <Input
              {...titleRegister}
              type="text"
              autoComplete="off"
              maxLength={MAX_LENGTH}
              placeholder="폴더 명을 입력해주세요."
            />
            <div>
              {titleLength}
              <span className="text-gray-400">/{MAX_LENGTH}</span>
            </div>
          </div>
          <Button type="submit">확인</Button>
        </form>
      </PaddingWrapper>
    </Modal>
  );
};

export default UpdateWishFolderModal;
