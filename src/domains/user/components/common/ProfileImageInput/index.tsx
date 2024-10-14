'use client';

import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import ImageInput from '@/shared/components/ImageInput';
import SelectOption from '@/shared/components/SelectOption';
import PreviewImage from './PreviewImage';

const ProfileImageInput = () => {
  const { register, watch, setValue } = useFormContext();

  const [previewImg, setPreviewImg] = useState<string>('');

  const [isExpended, setIsExpended] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null); // 파일 선택 창을 수동으로 열기 위한 ref

  const objectUrlRef = useRef<string | null>(null); // 브라우저 메모리를 관리 ref

  const profileImg = watch('profileImg');

  const revokeObjectURL = useCallback(() => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
  }, []);

  useEffect(() => {
    revokeObjectURL();
    // 사용자가 새로 이미지를 업로드한 상황
    if (profileImg instanceof File) {
      const objectUrl = URL.createObjectURL(profileImg);
      setPreviewImg(objectUrl);
      objectUrlRef.current = objectUrl;
    }
    // 사용자가 기존에 저장된 이미지(예: URL 형태의 이미지)를 사용하고 있을 때
    else if (typeof profileImg === 'string') {
      setPreviewImg(profileImg);
    }

    return revokeObjectURL;
  }, [profileImg, revokeObjectURL]);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('profileImg', file);
    } else {
      console.error('파일이 없습니다.');
    }
  };

  const onPreviewClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsExpended(!isExpended);
  };

  const onOptionClick = (option: string) => {
    setIsExpended(false);
    if (option === '변경') {
      fileInputRef.current?.click();
    } else if (option === '삭제') {
      setValue('profileImg', '');
      setPreviewImg('');
    }
  };

  return (
    <>
      <PreviewImage
        previewImg={previewImg}
        bottomText={!previewImg ? '추가' : '수정'}
        onClick={onPreviewClick}
        className="relative flex justify-center items-center border rounded-full overflow-hidden w-[100px] h-[100px] bg-gray-100"
      />

      <ImageInput
        {...register('profileImg')}
        ref={fileInputRef}
        onChange={onImageChange}
        style={{ display: 'none' }}
      />
      {isExpended && <SelectOption options={['변경', '삭제']} onClick={onOptionClick} />}
    </>
  );
};

export default memo(ProfileImageInput);
