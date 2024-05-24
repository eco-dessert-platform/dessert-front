export const BADGE = {
  good: { kind: 'taste', text: '맛있어요' },
  bad: { kind: 'taste', text: '아쉬워요' },
  sweet: { kind: 'brix', text: '달아요' },
  plain: { kind: 'brix', text: '담백해요' },
  soft: { kind: 'texture', text: '부드러워요' },
  dry: { kind: 'texture', text: '퍽퍽해요' }
} as const;

export const BADGE_SHAPES = ['good', 'bad', 'sweet', 'plain', 'soft', 'dry'] as const;
