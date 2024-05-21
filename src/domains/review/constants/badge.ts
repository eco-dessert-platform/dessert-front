export const BADGE = {
  good: { kind: 'preference', text: '맛있어요' },
  bad: { kind: 'preference', text: '아쉬워요' },
  sweet: { kind: 'taste', text: '달아요' },
  plain: { kind: 'taste', text: '담백해요' },
  soft: { kind: 'texture', text: '부드러워요' },
  dry: { kind: 'texture', text: '퍽퍽해요' }
} as const;

export const BADGE_SHAPES = ['good', 'bad', 'sweet', 'plain', 'soft', 'dry'] as const;
