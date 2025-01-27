import ImageInput from '@/shared/components/ImageInput';
import { BbangleIcon } from '@/shared/components/icons';
import Image from 'next/image';
import React from 'react';

interface Props {
  previewImg: string;
  bottomText: string;
  className: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const PreviewImage = ({ previewImg, bottomText, className, onClick }: Props) => (
  <ImageInput className={className} onClick={onClick}>
    {previewImg ? (
      <Image src={previewImg} alt="profile preview" width={100} height={100} />
    ) : (
      <BbangleIcon shape="smile" className="w-[80px] h-[80px] fill-gray-300 translate-y-[-10px]" />
    )}
    <div className="absolute bottom-0 flex justify-center items-center h-[26px] w-full text-white bg-gray-800/50 typo-body-14-semibold">
      {bottomText}
    </div>
  </ImageInput>
);

export default PreviewImage;
