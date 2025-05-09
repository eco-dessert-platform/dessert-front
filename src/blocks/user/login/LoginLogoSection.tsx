'use client';

import { BbangleIcon } from '@/shared/components/icons';

interface Props {
  title: string;
  subTitle: string;
}

const LoginLogoSection = ({ title, subTitle }: Props) => (
  <div className="flex flex-col items-center justify-center gap-[20px]">
    <BbangleIcon shape="vertical-name" />
    <div>
      <div className="typo-title-16-semibold text-center text-gray-900">{title}</div>
      <div className="typo-title-14-regular text-center text-gray-800">{subTitle}</div>
    </div>
  </div>
);

export default LoginLogoSection;
