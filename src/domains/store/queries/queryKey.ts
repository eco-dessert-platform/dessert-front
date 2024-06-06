export const storeQueryKey = {
  all: ['store'],
  lists: () => [...storeQueryKey.all, 'list'],
  list: (filter: string) => [...storeQueryKey.lists(), filter]
};
