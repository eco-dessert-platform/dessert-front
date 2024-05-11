'use client';

import { sendGAEvent } from '@next/third-parties/google';

const GATestPage = () => {
  const onClick1 = () => {
    sendGAEvent({ event: 'test', value: 'xyz' });
  };

  const onClick2 = () => {
    sendGAEvent({ event: 'buttonClicked', value: 'abc' });
  };

  return (
    <div className="flex flex-col gap-4">
      <button className="border h-20" type="button" onClick={onClick1}>
        <span>event: test, value: xyz</span>
      </button>

      <button className="border h-20" type="button" onClick={onClick2}>
        <span>event: buttonClicked, value: abc</span>
      </button>
    </div>
  );
};

export default GATestPage;
