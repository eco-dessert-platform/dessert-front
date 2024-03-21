'use client';

import Link from 'next/link';
import {
  IconBell,
  IconDoc,
  IconLock,
  IconInquiry
} from '@/components/units/(mypage)/MyPage/client/Icons';
import { chatKakaoChannel } from '@/commons/utils/chatKakaoChannel';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface MoreInfoItemProps {
  icon: React.ReactNode;
  content: string;
}

const isLoggedIn = true;

const INFOS = [
  { href: '/notifications', icon: <IconBell />, content: '공지사항' },
  { href: '/service-terms', icon: <IconDoc />, content: '서비스 이용 약관' },
  { href: '/privacy-policy', icon: <IconLock />, content: '개인정보 수집 및 이용' },
  { href: '#', icon: <IconInquiry />, content: '문의하기' }
];

const MoreInfoItem = ({ icon, content }: MoreInfoItemProps) => {
  return (
    <PaddingWrapper className="flex items-center gap-[8px] border-solid border-b-[1px] border-gray-100">
      {icon}
      <p className="ml-[8px] text-[14px] font-medium">{content}</p>
    </PaddingWrapper>
  );
};

const MoreInfo = () => {
  const information = isLoggedIn ? INFOS : INFOS.slice(0, INFOS.length - 1);

  return (
    <div>
      {information.map(({ href, icon, content }) => (
        <Link
          key={content}
          href={href}
          onClick={() => {
            if (content === '문의하기') chatKakaoChannel();
          }}
        >
          <MoreInfoItem icon={icon} content={content} />
        </Link>
      ))}
    </div>
  );
};

export default MoreInfo;
