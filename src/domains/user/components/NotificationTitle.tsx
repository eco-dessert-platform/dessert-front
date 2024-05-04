import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Skeleton from '@/shared/components/Skeleton';

interface NotificationTitleProps {
  title: string;
  date: string;
  isBigTitle?: boolean;
}

const NotificationTitle = ({ title, date, isBigTitle = false }: NotificationTitleProps) => (
  <PaddingWrapper className="flex flex-col gap-[2px] border-solid border-b border-gray-100 leading-150 tracking-tight-2">
    <p className={`${isBigTitle ? 'text-16' : 'text-[14px]'} text-gray-900 font-medium`}>{title}</p>
    <p className="text-12 text-gray-500 tracking-2 leading-150">{date}</p>
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
