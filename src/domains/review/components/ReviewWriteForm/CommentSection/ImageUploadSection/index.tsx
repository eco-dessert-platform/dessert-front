'use client';

import { ChangeEvent, useEffect } from 'react';
import { CameraIcon } from '@/shared/components/icons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ImageInput from '@/shared/components/ImageInput';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { useFormContext } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';
import useImageUploadMutation from '@/domains/review/queries/useImageUploadMutation';
import PreviewImage from './PreviewImage';

const ImageUploadSection = () => {
  const { mutate: imageUploadMuate, data: images, isSuccess } = useImageUploadMutation(['review']);
  const { register, setValue, watch, getValues } = useFormContext<IReviewWriteForm>();
  const { openToast } = useToastNewVer();

  useEffect(() => {
    if (isSuccess && images) {
      setValue('images.urls', images);
    }
  }, [isSuccess, images, setValue]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    if (files.length > 5) {
      openToast({ message: '최대 5개까지 업로드할 수 있습니다' });
      return;
    }
    imageUploadMuate(files);
  };

  const handleImageRemove = (idxToRemove: number) => {
    const dataTransfer = new DataTransfer();
    const files = getValues('images.files');
    const urls = getValues('images.urls');
    const filteredFiles = files && Array.from(files).filter((_, idx) => idx !== idxToRemove);
    const filteredUrls = urls.filter((_, idx) => idx !== idxToRemove);

    filteredFiles?.forEach((file) => {
      dataTransfer.items.add(file);
    });
    setValue('images.files', dataTransfer.files);
    setValue('images.urls', filteredUrls);
  };

  const fileInputRegister = register('images.files', { onChange: handleImageUpload });

  const uploadedImagesUrl = watch('images.urls');

  return (
    <PaddingWrapper className="flex gap-x-[5px] overflow-x-scroll scrollbar-hide">
      <ImageInput
        {...fileInputRegister}
        multiple
        className="flex flex-col justify-center items-center min-w-[64px] h-[64px] border-[1.5px] border-gray-300 rounded-[6px]"
      >
        <CameraIcon />
        <div className="flex gap-x-[2px] typo-body-11-regular text-gray-500">
          사진
          <p>
            <span
              className={uploadedImagesUrl.length > 0 ? 'text-primaryOrangeRed' : 'text-gray-500'}
            >
              {uploadedImagesUrl.length}
            </span>
            /5
          </p>
        </div>
      </ImageInput>
      {uploadedImagesUrl.map((url, idx) => (
        <PreviewImage key={url} imageSrc={url} onRemove={() => handleImageRemove(idx)} />
      ))}
    </PaddingWrapper>
  );
};

export default ImageUploadSection;
