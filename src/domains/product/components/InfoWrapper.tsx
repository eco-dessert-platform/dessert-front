import { ReactNode } from 'react';

interface InfoWrapperProps {
  title: string;
  children: ReactNode;
}

const InfoWrapper = ({ title, children }: InfoWrapperProps) => (
  <div>
    <h2 className="text-gray-500 text-12 leading-150 font-semibold pb-[10px]">{title}</h2>
    {children}
  </div>
);

export default InfoWrapper;
