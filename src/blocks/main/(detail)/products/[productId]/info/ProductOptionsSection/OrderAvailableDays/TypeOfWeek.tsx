import { transformDayTag } from '@/domains/product/utils/transfromTag';

const TypeOfWeek = ({ availableDays }: { availableDays: Object }) => {
  const availableWeekList = Object.entries(availableDays)
    .filter(([, isAvailable]) => isAvailable)
    .map(([day]) => transformDayTag(day));

  return (
    <>
      {['월', '화', '수', '목', '금', '토', '일'].map((item) => (
        <div
          key={item}
          className={`rounded-full typo-body-12-regular w-[24px] h-[24px] flex items-center justify-center  ${
            availableWeekList.includes(transformDayTag(item))
              ? 'text-primaryOrangeRed bg-subColorPink typo-body-12-medium'
              : 'text-gray-600 bg-gray-50 '
          }`}
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default TypeOfWeek;
