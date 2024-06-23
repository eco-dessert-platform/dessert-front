import { QuestionMarkIcon } from '@/shared/components/icons';
import Header from '@/shared/components/Header';
import BbangketingAndRestockTab from '@/domains/alarm/components/BbangketingAndRestockTab';

interface Props {
  children: React.ReactNode;
}

const AlarmLayout = ({ children }: Props) => (
  <>
    <Header
      title="빵켓팅/재입고 알림 관리"
      content={
        <button type="button" aria-label="빵켓팅 설명 툴팁">
          <QuestionMarkIcon />
        </button>
      }
      back
    />
    <BbangketingAndRestockTab />
    {children}
  </>
);

export default AlarmLayout;
