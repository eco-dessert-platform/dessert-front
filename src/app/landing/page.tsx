import React from 'react';

import Desc from '@/blocks/landing/pageSection/Desc';
import Intro from '@/blocks/landing/pageSection/Intro';
import Participate from '@/blocks/landing/pageSection/Participate';
import Schedule from '@/blocks/landing/pageSection/Schedule';

const LandingPage = () => {
  const targetDate = new Date('2024-08-31T00:00:00');
  return (
    <>
      <Intro />
      <Desc />
      <Participate targetDate={targetDate} />
      <Schedule />
    </>
  );
};

export default LandingPage;
