import NotificationListSection from '@/blocks/user/(policy)/NotificationListSection';
import PolicyService from '@/domains/user/queries/service';

const Notifications = async () => {
  const { getNotifications } = new PolicyService();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const notifications = await getNotifications(1);

  return <NotificationListSection />;
};

export default Notifications;
