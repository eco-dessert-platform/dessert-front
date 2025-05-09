'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetAllNotificationsQuery } from '@/domains/user/queries/useGetAllNotificationsQuery';
import NotificationTitle from '@/domains/user/components/NotificationTitle';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

const NotificationListSection = () => {
  const {
    data: notifications,
    isError,
    fetchNextPage,
    hasNextPage
  } = useGetAllNotificationsQuery();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isError) {
    return (
      <SadBbangleBox>
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }

  if (!notifications) {
    return (
      <SadBbangleBox>
        <p>공지사항이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <div>
      {notifications.map((item) => (
        <Link key={item.id} href={`/mypage/notifications/${item.id}`}>
          <NotificationTitle title={item.title} date={item.createdAt} />
        </Link>
      ))}
      {hasNextPage && (
        <div ref={ref}>
          <NotificationTitle.Skeleton />
        </div>
      )}
    </div>
  );
};

export default NotificationListSection;
