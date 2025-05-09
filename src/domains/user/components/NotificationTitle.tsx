import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Skeleton from '@/shared/components/Skeleton';

interface NotificationTitleProps {
  title: string;
  date: string;
  isBigTitle?: boolean;
}

const NotificationTitle = ({ title, date, isBigTitle = false }: NotificationTitleProps) => (
  <PaddingWrapper className="flex flex-col gap-[2px] border-solid border-b border-gray-100">
    <p
      className={`${isBigTitle ? 'typo-title-16-semibold' : 'typo-title-14-semibold'} text-gray-900`}
    >
      {title}
    </p>
    <p className="text-gray-500 typo-body-12-regular">{date}</p>
  </PaddingWrapper>
);

const NotificationTitleSkeleton = () => (
  <PaddingWrapper className="flex flex-col gap-[2px] border-solid border-b border-gray-100 h-[74px]">
    <Skeleton className="w-2/3" />
    <Skeleton className="h-3 w-32" />
  </PaddingWrapper>
);

NotificationTitle.Skeleton = NotificationTitleSkeleton;

export default NotificationTitle;
