import Service from '@/shared/queries/service';
import { Cursor, ResultResponse } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { ReviewType } from '../types/review';

class ReviewService extends Service {
  async getMyReview(cursorId: number) {
    const mockReviewUrl = `http://localhost:3000/mock/review.json?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(mockReviewUrl);
    if (!res.ok) throw new Error('mock error');
    const { result }: ResultResponse<Cursor<ReviewType[]>> = await res.json();
    return result;
  }

  async getReview({ boardId, cursorId }: { boardId: number; cursorId: number }) {
    const params =
      cursorId === INITIAL_CURSOR
        ? `boardId=${boardId}`
        : `boardId=${boardId}&cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/review/list/${boardId}?${params}`);
    const { result, success, code, message }: ResultResponse<Cursor<ReviewType[]>> =
      await res.json();
    if (!success || !res.ok) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const reviewService = new ReviewService();

export default reviewService;
