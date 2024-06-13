'use client';

import Button from '@/shared/components/Button';
import Link from 'next/link';

const ButtonSection = () => (
  <div className="flex gap-[10px] w-full">
    <Button type="button" variants="primary-white">
      <Link href="/">건너뛰기</Link>
    </Button>
    <Button type="submit" variants="primary-black">
      완료
    </Button>
  </div>
);

export default ButtonSection;
