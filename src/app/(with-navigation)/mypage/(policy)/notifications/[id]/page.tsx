import NotificationTitle from '@/domains/user/components/NotificationTitle';
import userService from '@/domains/user/queries/service';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface NotificationDetailProps {
  params: {
    id: number;
  };
}

const NotificationDetail = async ({ params: { id } }: NotificationDetailProps) => {
  const notification = await userService.getNotificationDetail(id);

  return (
    <>
      <NotificationTitle title={notification.title} date={notification.createdAt} isBigTitle />
      <PaddingWrapper className="text-gray-900 typo-title-14-regular">
        {notification.content}
      </PaddingWrapper>
    </>
  );
};

export default NotificationDetail;
