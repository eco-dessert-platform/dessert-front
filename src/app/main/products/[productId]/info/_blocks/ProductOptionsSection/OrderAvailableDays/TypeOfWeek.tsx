import { WeekProductOptionType } from '@/domains/product/types/productDetailType';
import { DayKrType } from '@/domains/product/types/dayType';
import { transformDayToEng } from '@/domains/product/utils/transformDay';
import { transformWeekObjectToArray } from '@/domains/product/utils/transformWeek';
import { WEEK } from '@/domains/product/constants/week';
import { cn } from '@/shared/utils/cn';

interface Props {
  availableDays: WeekProductOptionType['orderAvailableWeek'];
}

const TypeOfWeek = ({ availableDays }: Props) => {
  const availableWeekList = transformWeekObjectToArray(availableDays);

  return (
    <>
      {WEEK.map((dayKr: DayKrType) => (
        <div
          key={dayKr}
          className={cn(
            'typo-body-12-regular flex h-[24px] w-[24px] items-center justify-center rounded-full',
            availableWeekList.includes(transformDayToEng(dayKr))
              ? 'text-primary-orange-red bg-sub-color-pink typo-body-12-medium'
              : 'bg-gray-50 text-gray-600'
          )}
        >
          {dayKr}
        </div>
      ))}
    </>
  );
};

export default TypeOfWeek;
