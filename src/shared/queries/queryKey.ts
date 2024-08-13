export const productQueryKey = {
  all: ['product'],
  lists: () => [...productQueryKey.all, 'list'],
  list: (filter: string) => [...productQueryKey.lists(), filter],
  details: () => [...productQueryKey.all, 'detail'],
  detail: (id: number, type?: string) => [...productQueryKey.details(), id, type]
};

export const storeQueryKey = {
  all: ['store'],
  lists: () => [...storeQueryKey.all, 'list'],
  list: (filter: string) => [...storeQueryKey.lists(), filter],
  details: () => [...storeQueryKey.all, 'detail'],
  detail: (storeId: number, type?: string) => [...storeQueryKey.details(), storeId, type]
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
