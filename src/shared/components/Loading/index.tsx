'use client';

import Image from 'next/image';
import BackDrop from '../BackDrop';

const Loading = () => (
  <BackDrop isVisible>
    <div className="relative h-[50px] w-[50px]">
      <Image src="/assets/images/loading.gif" alt="Loading..." layout="fill" objectFit="contain" />
    </div>
  </BackDrop>
);

export default Loading;
