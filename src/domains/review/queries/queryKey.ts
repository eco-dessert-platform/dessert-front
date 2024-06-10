export const reviewQueryKey = {
  all: ['review'],
  lists: () => [...reviewQueryKey.all, 'list'],
  list: (filter: string) => [...reviewQueryKey.lists(), filter]
};
