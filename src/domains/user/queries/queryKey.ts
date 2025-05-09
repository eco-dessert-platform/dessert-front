export const notificationQueryKey = {
  all: ['notifications'],
  detail: (id: number) => [...notificationQueryKey.all, String(id)]
};

export const userProfileQueryKey = {
  all: ['user-profile']
};

export const recommendationQueryKey = {
  all: ['recommendation']
};
