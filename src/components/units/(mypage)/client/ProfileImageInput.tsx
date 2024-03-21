'use client';

import { BbangleSmileIcon } from '@/components/commons/Icon';
import { ChangeEventHandler, memo, useEffect, useId, useState } from 'react';
import { useRecoilState } from 'recoil';
import { profileImgState } from '../atoms';
import Image from 'next/image';

interface ProfileImageInputProps {
  defaultValue?: string;
}

const ProfileImageInput = ({ defaultValue }: ProfileImageInputProps) => {
  const inputId = useId();
  const [profileImg, setProfileImg] = useRecoilState(profileImgState);
  const [imgSrc, setImgSrc] = useState(defaultValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0];
    if (!file) throw Error('파일이 없습니다.');
    setProfileImg(file);
  };

  useEffect(() => {
    profileImg && setImgSrc(URL.createObjectURL(profileImg));
  }, [profileImg]);

  return (
    <label
      htmlFor={inputId}
      className="cursor-pointer relative flex justify-center items-center rounded-full overflow-hidden w-[100px] h-[100px] bg-gray-100"
    >
      <input
        id={inputId}
        className="hidden"
        name="profile"
        type="file"
        onChange={onChange}
        multiple={false}
      />
      {imgSrc ? (
        <Image src={imgSrc} alt="profile preview" width={100} height={100} />
      ) : (
        <BbangleSmileIcon className="w-[80px] h-[80px] fill-gray-300" />
      )}
      <div className="absolute h-[26px] leading-[26px] bottom-0 w-full text-center text-white bg-gray-800/50">
        편집
      </div>
    </label>
  );
};

export default memo(ProfileImageInput);
