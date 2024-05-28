import { PropsWithChildren } from 'react';

const Tag = ({ children }: PropsWithChildren) => (
  <div className="typo-body-11-regular inline-flex px-[6px] py-[2px] text-gray-600 border border-gray-200 rounded-[4px]">
    {children}
  </div>
);

export default Tag;
