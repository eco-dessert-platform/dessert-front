import React from 'react';

import Desc from '@/blocks/landing/pageSection/Desc';
import Intro from '@/blocks/landing/pageSection/Intro';
import Participate from '@/blocks/landing/pageSection/Participate';
import Schedule from '@/blocks/landing/pageSection/Schedule';

const LandingPage = () => (
  <>
    <Intro />
    <Desc />
    <Participate />
    <Schedule />
  </>
);

export default LandingPage;
