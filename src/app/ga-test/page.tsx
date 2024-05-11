'use client';

import { sendGAEvent } from '@next/third-parties/google';

const GATestPage = () => {
  const onClick = () => {
    sendGAEvent({ event: 'test', value: 'xyz' });
  };

  return (
    <button type="button" onClick={onClick}>
      GA
    </button>
  );
};

export default GATestPage;
