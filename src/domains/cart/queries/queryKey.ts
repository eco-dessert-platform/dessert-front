export const cartQueryKey = {
  all: ['cart'],
  lists: () => [...cartQueryKey.all, 'list']
};
