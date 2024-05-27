export const notificationQueryKey = {
  all: ['notifications'],
  detail: (id: number) => [...notificationQueryKey.all, id]
};

export const preferenceQueryKey = {
  all: ['preference']
};
