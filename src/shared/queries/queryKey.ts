export const productQueryKey = {
  all: ['product'],
  count: ['count'],
  lists: () => [...productQueryKey.all, 'list'],
  list: (filter: string) => [...productQueryKey.lists(), filter],
  details: () => [...productQueryKey.all, 'detail'],
  detail: (id: number, type?: string) =>
    [...productQueryKey.details(), id, type].filter((value) => !!value)
};

export const storeQueryKey = {
  all: ['store'],
  lists: () => [...storeQueryKey.all, 'list'],
  list: (filter: string) => [...storeQueryKey.lists(), filter],
  details: () => [...storeQueryKey.all, 'detail'],
  detail: (storeId: number, type?: string) =>
    [...storeQueryKey.details(), storeId, type].filter((value) => !!value)
};

export const reviewQueryKey = {
  all: ['review'],
  lists: () => [...reviewQueryKey.all, 'list'],
  list: ({ boardId, type }: { boardId?: number; type: string }) => [
    ...reviewQueryKey.lists(),
    { type, boardId }
  ],
  details: () => [...reviewQueryKey.all, 'detail'],
  detail: (id: number) => [...reviewQueryKey.details(), id]
};
