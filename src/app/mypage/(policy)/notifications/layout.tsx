import Header from '@/shared/components/Header';

interface NotificationsLayoutProps {
  children: React.ReactNode;
}

const NotificationsLayout = ({ children }: NotificationsLayoutProps) => (
  <>
    <Header title="공지사항" back />
    {children}
  </>
);

export default NotificationsLayout;
