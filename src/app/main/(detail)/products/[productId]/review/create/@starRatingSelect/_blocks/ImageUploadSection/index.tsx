'use client';

import { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { uploadImageUrlsState } from '@/domains/review/atoms';
import { CameraIcon } from '@/shared/components/icons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ImageInput from '@/shared/components/ImageInput';
import PreviewImage from '@/app/main/(detail)/products/[productId]/review/create/@starRatingSelect/_blocks/ImageUploadSection/PreviewImage';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { useFormContext } from 'react-hook-form';
import { ReviewCreateForm } from '@/domains/review/types/review';
import useImageUploadMutation from '@/domains/review/queries/useImageUploadMutation';

const ImageUploadSection = () => {
  const { mutate: imageUploadMuate, data: images, isSuccess } = useImageUploadMutation(['review']);
  const [imagePreviewUrls, setImagePreviewUrls] = useRecoilState(uploadImageUrlsState);
  const { register, setValue } = useFormContext<ReviewCreateForm>();
  const { openToast } = useToastNewVer();

  useEffect(() => {
    if (isSuccess && images) setValue('urls', images);
  }, [isSuccess, images, setValue]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    if (files.length > 5) {
      openToast({ message: '최대 5개까지 업로드할 수 있습니다' });
      return;
    }

    const fileArray = Array.from(files);
    setImagePreviewUrls(fileArray.map((file) => URL.createObjectURL(file)));
    imageUploadMuate(files);
  };

  const handleImageRemove = (idxToRemove: number) => {
    setImagePreviewUrls(imagePreviewUrls.filter((_, idx) => idx !== idxToRemove));
  };

  const fileInputRegister = register('urls', { onChange: handleImageUpload });

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
              className={imagePreviewUrls.length > 0 ? 'text-primaryOrangeRed' : 'text-gray-500'}
            >
              {imagePreviewUrls.length}
            </span>
            /5
          </p>
        </div>
      </ImageInput>
      {imagePreviewUrls.length > 0 &&
        imagePreviewUrls.map((url, idx) => (
          <PreviewImage key={url} imageSrc={url} onRemove={() => handleImageRemove(idx)} />
        ))}
    </PaddingWrapper>
  );
};

export default ImageUploadSection;
