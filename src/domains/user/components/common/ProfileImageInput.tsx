'use client';

import { memo, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

import { BbangleIcon } from '@/shared/components/icons';
import ImageInput from '@/shared/components/ImageInput';

const ProfileImageInput = () => {
  const { register, watch, setValue } = useFormContext();
  const [previewImg, setPreviewImg] = useState<string>('');

  const objectUrlRef = useRef<string | null>(null);

  const profileImg = watch('profileImg');

  useEffect(() => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
    }
    if (profileImg && typeof profileImg === 'string') {
      setPreviewImg(profileImg);
    } else if (profileImg instanceof File) {
      const objectUrl = URL.createObjectURL(profileImg);
      setPreviewImg(objectUrl);
      objectUrlRef.current = objectUrl;
    }
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    };
  }, [profileImg]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('profileImg', file);
    } else {
      console.error('파일이 없습니다.');
    }
  };

  return (
    <ImageInput
      {...register('profileImg')}
      onChange={onChange}
      className="relative flex justify-center items-center rounded-full overflow-hidden w-[100px] h-[100px] bg-gray-100"
    >
      {previewImg ? (
        <Image src={previewImg} alt="profile preview" width={100} height={100} />
      ) : (
        <BbangleIcon
          shape="smile"
          className="w-[80px] h-[80px] fill-gray-300 translate-y-[-10px]"
        />
      )}
      <div className="absolute bottom-0 flex justify-center items-center h-[26px] w-full text-white bg-gray-800/50 typo-title-14-semibold">
        편집
      </div>
    </ImageInput>
  );
};

export default memo(ProfileImageInput);
