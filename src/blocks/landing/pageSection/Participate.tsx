'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import { HOUR, MINUTE, SECOND } from '@/shared/constants/time';

const Participate = () => {
  const targetDate = new Date('2024-08-31T00:00:00');
  const calculateTimeLeft = () => {
    const difference = Math.max(Number(targetDate) - Number(new Date()), 0);

    return {
      days: Math.floor(difference / (24 * HOUR)),
      hours: Math.floor((difference / HOUR) % 24),
      minutes: Math.floor((difference / MINUTE) % 60),
      seconds: Math.floor((difference / SECOND) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1 * SECOND);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <Image
        src="/assets/images/landing3.png"
        alt="배너"
        width={600}
        height={160}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="object-contain"
      />
      <PaddingWrapper>
        <PaddingWrapper className="bg-[#FCFCFC] py-[20px] text-[20px] w-[85%] flex justify-between m-auto">
          <span className="text-[#391A09] font-semibold">이벤트 종료까지 </span>
          <span className="text-[#438BBF] font-semibold">
            {timeLeft.days}일 &nbsp;{timeLeft.hours}시간 &nbsp;{timeLeft.minutes}분 &nbsp;
            {timeLeft.seconds}초
          </span>
        </PaddingWrapper>
      </PaddingWrapper>
    </>
  );
};

export default Participate;
