import NotificationTitle from '@/domains/user/components/NotificationTitle';
import policyService from '@/domains/user/queries/service';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface NotificationDetailProps {
  params: {
    id: number;
  };
}

const NotificationDetail = async ({ params: { id } }: NotificationDetailProps) => {
  const notification = await policyService.getNotificationDetail(id);

  return (
    <>
      <NotificationTitle title={notification.title} date={notification.createdAt} isBigTitle />
      <PaddingWrapper className="leading-150 text-14 text-gray-900 tracking-tight-2">
        {notification.content}
      </PaddingWrapper>
    </>
  );
};

export default NotificationDetail;
