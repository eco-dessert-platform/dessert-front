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
      <BbangleIcon shape="smile" className="h-[80px] w-[80px] translate-y-[-10px] fill-gray-300" />
    )}
    <div className="typo-body-14-semibold absolute bottom-0 flex h-[26px] w-full items-center justify-center bg-gray-800/50 text-white">
      {bottomText}
    </div>
  </ImageInput>
);

export default PreviewImage;
