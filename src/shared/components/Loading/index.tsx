'use client';

import Image from 'next/image';
import BackDrop from '../BackDrop';

const Loading = () => (
  <BackDrop isVisible>
    <div className="relative w-[50px] h-[50px]">
      <Image src="/assets/images/loading.gif" alt="Loading..." layout="fill" objectFit="contain" />
    </div>
  </BackDrop>
);

export default Loading;
