import Header from '@/components/commons/header/client/Header';

interface NotificationsLayoutProps {
  children: React.ReactNode;
}

const NotificationsLayout = ({ children }: NotificationsLayoutProps) => {
  return (
    <>
      <Header title="공지사항" back />
      {children}
    </>
  );
};

export default NotificationsLayout;
