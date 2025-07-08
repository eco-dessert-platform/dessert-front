import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Skeleton from '@/shared/components/Skeleton';

interface NotificationTitleProps {
  title: string;
  date: string;
  isBigTitle?: boolean;
}

const NotificationTitle = ({ title, date, isBigTitle = false }: NotificationTitleProps) => (
  <PaddingWrapper className="flex flex-col gap-[2px] border-b border-solid border-gray-100">
    <p
      className={`${isBigTitle ? 'typo-title-16-semibold' : 'typo-title-14-semibold'} text-gray-900`}
    >
      {title}
    </p>
    <p className="typo-body-12-regular text-gray-500">{date}</p>
  </PaddingWrapper>
);

const NotificationTitleSkeleton = () => (
  <PaddingWrapper className="flex h-[74px] flex-col gap-[2px] border-b border-solid border-gray-100">
    <Skeleton className="w-2/3" />
    <Skeleton className="h-3 w-32" />
  </PaddingWrapper>
);

NotificationTitle.Skeleton = NotificationTitleSkeleton;

export default NotificationTitle;
