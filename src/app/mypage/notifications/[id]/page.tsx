import NotificationTitle from '@/components/units/Notifications/client/NotificationTitle';
import NotificationContent from '@/components/units/Notifications/client/NotificationContent';
import { fetchNotificationDetail } from '@/components/units/Notifications/api/fetchNotificationDetail';

interface NotificationDetailProps {
  params: {
    id: number;
  };
}

const NotificationDetail = async ({ params: { id } }: NotificationDetailProps) => {
  const notification = await fetchNotificationDetail(id);

  return (
    <div>
      <NotificationTitle title={notification.title} date={notification.createdAt} isBigTitle />
      <NotificationContent content={notification.content} />
    </div>
  );
};

export default NotificationDetail;
