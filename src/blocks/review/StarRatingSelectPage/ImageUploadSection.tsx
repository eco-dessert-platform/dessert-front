'use client';

import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { uploadImageFilesState, uploadImageUrlsState } from '@/domains/review/atoms';
import { CameraIcon } from '@/shared/components/icons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ImageInput from '@/shared/components/ImageInput';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import PreviewImage from '@/domains/review/components/PreviewImage';

const ImageUploadSection = () => {
  const [imageFiles, setImageFiles] = useRecoilState(uploadImageFilesState);
  const [imageUrls, setImageUrls] = useRecoilState(uploadImageUrlsState);
  const { openToast } = useToast();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    if (files.length > 5) {
      openToast(<ToastPop>최대 5개까지 업로드할 수 있습니다</ToastPop>);
      return;
    }

    const fileArray = Array.from(files);
    setImageFiles(fileArray);
    setImageUrls(fileArray.map((file) => URL.createObjectURL(file)));
  };

  const handleImageRemove = (idxToRemove: number) => {
    setImageFiles(imageFiles.filter((_, idx) => idx !== idxToRemove));
    setImageUrls(imageUrls.filter((_, idx) => idx !== idxToRemove));
  };

  return (
    <PaddingWrapper className="flex gap-x-[5px] overflow-x-scroll scrollbar-hide">
      <ImageInput
        onChange={handleImageUpload}
        multiple
        className="flex flex-col justify-center items-center min-w-[64px] h-[64px] border-[1.5px] border-gray-300 rounded-[6px]"
      >
        <CameraIcon />
        <div className="flex gap-x-[2px] typo-body-11-regular text-gray-500">
          사진
          <p>
            <span className={imageUrls.length > 0 ? 'text-primaryOrangeRed' : 'text-gray-500'}>
              {imageUrls.length}
            </span>
            /5
          </p>
        </div>
      </ImageInput>
      {imageUrls.length > 0 &&
        imageUrls.map((url, idx) => (
          <PreviewImage key={url} imageSrc={url} onRemove={() => handleImageRemove(idx)} />
        ))}
    </PaddingWrapper>
  );
};

export default ImageUploadSection;
