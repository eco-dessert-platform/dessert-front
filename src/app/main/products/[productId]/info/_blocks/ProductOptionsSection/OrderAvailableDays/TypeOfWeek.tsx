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
            'rounded-full typo-body-12-regular w-[24px] h-[24px] flex items-center justify-center',
            availableWeekList.includes(transformDayToEng(dayKr))
              ? 'text-primary-orange-red bg-sub-color-pink typo-body-12-medium'
              : 'text-gray-600 bg-gray-50 '
          )}
        >
          {dayKr}
        </div>
      ))}
    </>
  );
};

export default TypeOfWeek;
