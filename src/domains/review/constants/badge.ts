export const BADGE = {
  good: { id: 'good', kind: 'taste', text: '맛있어요' },
  bad: { id: 'bad', kind: 'taste', text: '아쉬워요' },
  sweet: { id: 'sweet', kind: 'brix', text: '달아요' },
  plain: { id: 'plain', kind: 'brix', text: '담백해요' },
  soft: { id: 'soft', kind: 'texture', text: '부드러워요' },
  dry: { id: 'dry', kind: 'texture', text: '퍽퍽해요' }
} as const;

export const BADGE_SHAPES = ['good', 'bad', 'sweet', 'plain', 'soft', 'dry'] as const;
