import { WeekObjectType, WeekArrayType } from '@/domains/product/types/productDetailType';
import { DayEnType } from '@/domains/product/types/dayType';

export const transformWeekObjectToArray = (weekObj: WeekObjectType): WeekArrayType =>
  Object.entries(weekObj)
    .filter(([, isTrue]) => isTrue)
    .map(([day]) => day as DayEnType);

export const transformWeekArrayToObject = (weekArr: WeekArrayType): WeekObjectType => {
  const weekObject: WeekObjectType = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  };

  weekArr.forEach((day) => {
    weekObject[day] = true;
  });

  return weekObject;
};
