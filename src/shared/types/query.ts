import { UndefinedInitialDataInfiniteOptions } from '@tanstack/react-query';
import { Cursor } from './response';

export type InfiniteQueryOptions<T> = UndefinedInitialDataInfiniteOptions<
  Cursor<T>,
  Error,
  T,
  (string | number | Record<string, unknown>)[],
  number
>;
