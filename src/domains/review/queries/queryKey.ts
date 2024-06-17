/**
 * @depreacted shared 쓰세요
 */
export const reviewQueryKey = {
  all: ['review'],
  lists: () => [...reviewQueryKey.all, 'list'],
  list: (type: string, id: number) => [...reviewQueryKey.lists(), type, id]
};
