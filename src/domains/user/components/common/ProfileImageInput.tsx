'use client';

import Image from 'next/image';
import { ChangeEventHandler, memo, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { BbangleIcon } from '@/shared/components/icons';
import ImageInput from '@/shared/components/ImageInput';
import { profileImgState } from '../../atoms/profile';

interface ProfileImageInputProps {
  defaultValue?: string;
}

const ProfileImageInput = ({ defaultValue }: ProfileImageInputProps) => {
  const [profileImg, setProfileImg] = useRecoilState(profileImgState);
  const [imgSrc, setImgSrc] = useState(defaultValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) throw Error('파일이 없습니다.');
    setProfileImg(file);
  };

  useEffect(() => {
    if (profileImg) setImgSrc(URL.createObjectURL(profileImg));
  }, [profileImg]);

  return (
    <ImageInput
      onChange={onChange}
      className="relative flex justify-center items-center rounded-full overflow-hidden w-[100px] h-[100px] bg-gray-100"
    >
      {imgSrc ? (
        <Image src={imgSrc} alt="profile preview" width={100} height={100} />
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
