import Link from 'next/link';
import PATH from '@/shared/constants/path';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';

interface Props {
  type: AlarmType;
}

const NoAlarm = ({ type }: Props) => (
  <SadBbangleBox className="absoulte-center">
    <div className="flex flex-col gap-[16px]">
      <p className="typo-title-14-regular">신청한 {ALARM[type].name} 알림 내역이 없어요.</p>
      <Link href={PATH.mainProductList}>
        <ButtonNewver color="border-primary" size="lg" radius="round" className="w-[159px]">
          상품 둘러보기
        </ButtonNewver>
      </Link>
    </div>
  </SadBbangleBox>
);

export default NoAlarm;
