import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface NotificationContentProps {
  content: string;
}

const NotificationContent = ({ content }: NotificationContentProps) => {
  return (
    <PaddingWrapper className="leading-150 text-14 text-gray-900 tracking-tight-2">
      {content}
    </PaddingWrapper>
  );
};

export default NotificationContent;
