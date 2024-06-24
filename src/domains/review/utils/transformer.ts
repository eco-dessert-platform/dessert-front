import { BADGE } from '../constants/badge';
import { ReviewType } from '../types/review';

export const getFormValuesFromReviewType = ({
  review,
  boardId
}: {
  review: ReviewType;
  boardId: number;
}) => {
  const textureKr = review.tags.find((tag) => tag === BADGE.dry.text || tag === BADGE.soft.text);
  const brixKr = review.tags.find((tag) => tag === BADGE.sweet.text || tag === BADGE.plain.text);
  const tasteKr = review.tags.find((tag) => tag === BADGE.good.text || tag === BADGE.bad.text);

  const formValues = {
    rate: review.rating,
    badges: {
      texture:
        (textureKr === BADGE.dry.text && BADGE.dry.id) ||
        (textureKr === BADGE.soft.text && BADGE.soft.id) ||
        undefined,
      brix:
        (brixKr === BADGE.sweet.text && BADGE.sweet.id) ||
        (brixKr === BADGE.plain.text && BADGE.plain.id) ||
        undefined,
      taste:
        (tasteKr === BADGE.good.text && BADGE.good.id) ||
        (tasteKr === BADGE.bad.text && BADGE.bad.id) ||
        undefined
    },
    content: review?.comment,
    boardId,
    images: {
      files: undefined,
      urls: []
    }
  };

  return formValues;
};
