'use client';

import Image from 'next/image';
import LoadingGif from '@/../public/assets/loading.gif';
import BackDrop from '../backgrounds/BackDrop';

const Loading = () => {
  return (
    <BackDrop isVisible={true}>
      <div className="relative w-[50px] h-[50px]">
        <Image src={LoadingGif} alt="Loading..." layout="fill" objectFit="contain" />
      </div>
    </BackDrop>
  );
};

export default Loading;
