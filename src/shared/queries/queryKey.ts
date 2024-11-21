export const productQueryKey = {
  all: ['product'],
  lists: () => [...productQueryKey.all, 'list'],
  similar: (productId: number) => [...productQueryKey.all, 'similar', productId],
  list: (filter: string | object) => [...productQueryKey.lists(), filter],
  details: () => [...productQueryKey.all, 'detail'],
  detail: (id: number, type?: string) =>
    [...productQueryKey.details(), id, type].filter((value) => !!value)
};

export const similarQueryKey = {
  similar: (productId: number) => ['similar', productId]
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
  detail: (id: number) => [...reviewQueryKey.details(), id],
  rating: (id: number) => [...reviewQueryKey.details(), id]
};
