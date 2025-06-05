'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { chatKakaoChannel } from '@/domains/user/utils/chatKakaoChannel';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PATH from '@/shared/constants/path';
import {
  BellIcon,
  DocIcon,
  InquiryIcon,
  LockIcon,
  SettingIcon,
  ThumbsUpIcon,
  WriteIcon
} from '@/domains/user/components/icons';
import { useAtom } from 'jotai';
import { isLoggedinAtom } from '@/shared/atoms/login';

interface MoreInfoItemProps {
  icon: ReactNode;
  content: string;
}

const INFOS = [
  { href: PATH.notification, icon: <BellIcon />, content: '공지사항' },
  { href: PATH.serviceTerm, icon: <DocIcon />, content: '서비스 이용 약관' },
  {
    href: PATH.privacyPolicy,
    icon: <LockIcon />,
    content: '개인정보 수집 및 이용'
  }
];

const LOGGEDIN_INFOS = [
  { href: PATH.notification, icon: <BellIcon />, content: '공지사항' },
  { href: PATH.myReview, icon: <WriteIcon />, content: '내가 작성한 리뷰' },
  { href: PATH.bbangcketing, icon: <ThumbsUpIcon />, content: '빵겟팅/재입고 알림 관리' },
  { href: '#', icon: <SettingIcon />, content: '상품 추천하기' },
  { href: '#', icon: <InquiryIcon />, content: '문의하기' },
  {
    href: PATH.privacyPolicy,
    icon: <LockIcon />,
    content: '개인정보 수집 및 이용'
  }
];

const MoreInfoItem = ({ icon, content }: MoreInfoItemProps) => (
  <PaddingWrapper className="flex items-center gap-[8px] border-solid border-b border-gray-100">
    {icon}
    <p className="typo-title-14-medium">{content}</p>
  </PaddingWrapper>
);

const MoreInfoSection = () => {
  const [isLoggedIn] = useAtom(isLoggedinAtom);
  const information = isLoggedIn ? LOGGEDIN_INFOS : INFOS;

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

export default MoreInfoSection;
