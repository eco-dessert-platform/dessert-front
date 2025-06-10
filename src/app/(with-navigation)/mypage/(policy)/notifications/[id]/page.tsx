import NotificationTitle from '@/domains/user/components/NotificationTitle';
import userService from '@/domains/user/queries/service';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface NotificationDetailProps {
  params: Promise<{
    id: number;
  }>;
}

const NotificationDetail = async ({ params }: NotificationDetailProps) => {
  const { id } = await params;

  const notification = await userService.getNotificationDetail(id);

  return (
    <>
      <NotificationTitle title={notification.title} date={notification.createdAt} isBigTitle />
      <PaddingWrapper className="typo-title-14-regular text-gray-900">
        {notification.content}
      </PaddingWrapper>
    </>
  );
};

export default NotificationDetail;
