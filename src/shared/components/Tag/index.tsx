import { PropsWithChildren } from 'react';

const Tag = ({ children }: PropsWithChildren) => (
  <div className="typo-body-11-regular inline-flex rounded-[4px] border border-gray-200 px-[6px] py-[2px] text-gray-600">
    {children}
  </div>
);

export default Tag;
