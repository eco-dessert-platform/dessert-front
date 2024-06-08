export const productQueryKey = {
  all: ['product'],
  lists: () => [...productQueryKey.all, 'list'],
  list: (filter: string) => [...productQueryKey.lists(), filter]
};

export const storeQueryKey = {
  all: ['store'],
  lists: () => [...storeQueryKey.all, 'list'],
  list: (filter: string) => [...storeQueryKey.lists(), filter],
  details: () => [...storeQueryKey.all, 'detail'],
  detail: (storeId: number) => [...storeQueryKey.details(), { storeId }]
};
