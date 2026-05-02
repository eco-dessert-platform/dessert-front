export const LINK_CHANNEL = {
  INSTAGRAM: 'instagram',
  NAVER_BLOG: 'naver_blog'
} as const;

export type LinkChannel = (typeof LINK_CHANNEL)[keyof typeof LINK_CHANNEL];

export const isLinkChannel = (value: string): value is LinkChannel =>
  Object.values(LINK_CHANNEL).includes(value as LinkChannel);
