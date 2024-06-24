/**
 * @depreacted shared 쓰세요
 */
export const reviewQueryKey = {
  all: ['review'],
  lists: () => [...reviewQueryKey.all, 'list'],
  list: (type: string, id: number) => [...reviewQueryKey.lists(), type, id],
  details: () => [...reviewQueryKey.all, 'detail'],
  detail: (id: number) => [...reviewQueryKey.details(), id]
};
