import { DayEnType, DayKrType } from '@/domains/product/types/dayType';

export function transformDayToKr(day: DayEnType): DayKrType {
  if (day === 'monday') {
    return '월';
  }
  if (day === 'tuesday') {
    return '화';
  }
  if (day === 'wednesday') {
    return '수';
  }
  if (day === 'thursday') {
    return '목';
  }
  if (day === 'friday') {
    return '금';
  }
  if (day === 'saturday') {
    return '토';
  }
  if (day === 'sunday') {
    return '일';
  }
  return '일';
}

export function transformDayToEng(day: DayKrType): DayEnType {
  if (day === '월') {
    return 'monday';
  }
  if (day === '화') {
    return 'tuesday';
  }
  if (day === '수') {
    return 'wednesday';
  }
  if (day === '목') {
    return 'thursday';
  }
  if (day === '금') {
    return 'friday';
  }
  if (day === '토') {
    return 'saturday';
  }
  if (day === '일') {
    return 'sunday';
  }
  return 'sunday';
}
