export const productQueryKey = {
  all: ['product'],
  lists: () => [...productQueryKey.all, 'list'],
  list: (filter: string) => [...productQueryKey.lists(), filter]
};
