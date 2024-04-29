import { SortOption } from '../atoms/wishProducts';
import { SORT_OPTIONS } from '../constants';

export const isSortOptionType = (sortOption: string): sortOption is SortOption =>
  SORT_OPTIONS.includes(sortOption as SortOption);

export default isSortOptionType;
