import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface NotificationTitleProps {
  title: string;
  date: string;
  isBigTitle?: boolean;
}

const NotificationTitle = ({ title, date, isBigTitle = false }: NotificationTitleProps) => {
  return (
    <PaddingWrapper className="flex flex-col gap-[2px] border-solid border-b border-gray-100 leading-150 tracking-tight-2">
      <p className={`${isBigTitle ? 'text-16' : 'text-[14px]'} text-gray-900 font-medium`}>
        {title}
      </p>
      <p className="text-12 text-gray-500 tracking-2 leading-150">{date}</p>
    </PaddingWrapper>
  );
};

export default NotificationTitle;
