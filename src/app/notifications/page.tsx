'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetAllNotificationsQuery } from '@/components/units/Notifications/hooks/useGetAllNotificationsQuery';
import NotificationTitle from '@/components/units/Notifications/client/NotificationTitle';
import Loading from '@/components/commons/Loading';

const Notifications = () => {
  const { notifications, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useGetAllNotificationsQuery();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div className="p-[16px]">Error</div>;
  }

  return (
    <div>
      {notifications &&
        notifications.map((item, idx) => (
          <Link key={idx} href={`/notifications/${item.id}`}>
            <NotificationTitle title={item.title} date={item.createdAt} />
          </Link>
        ))}
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </div>
  );
};

export default Notifications;
