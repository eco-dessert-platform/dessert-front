import { QuestionMarkIcon } from '@/shared/components/icons';
import Header from '@/shared/components/Header';
import Tooltip from '@/shared/components/Tooltip';
import BbangcketingAndRestockTab from '@/domains/alarm/components/BbangcketingAndRestockTab';

interface Props {
  children: React.ReactNode;
}

const AlarmLayout = ({ children }: Props) => (
  <>
    <Header
      title="빵켓팅/재입고 알림 관리"
      content={
        <Tooltip
          content={`• 빵켓팅은 항상 구매할 수 없는 빵을 시간에 맞춰 구매하는 것이에요!
            • '빵켓팅' 알림을 설정하면, 출고되는 즉시 푸시 알림이 전달되어 편하고 빠르게 구매할 수 있어요!`}
          placement="bottom-end"
          className="w-[170px]"
        >
          <QuestionMarkIcon />
        </Tooltip>
      }
      back
    />
    <BbangcketingAndRestockTab />
    {children}
  </>
);

export default AlarmLayout;
