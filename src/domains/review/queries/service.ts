import Service from '@/shared/queries/service';
import { Cursor, ResultResponse } from '@/shared/types/response';
import { Review } from '../types/review';

class ReviewService extends Service {
  async getMyReview(cursorId: number) {
    const mockReviewUrl = `http://localhost:3000/mock/review.json?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(mockReviewUrl);
    if (!res.ok) throw new Error('mock error');
    const { result }: ResultResponse<Cursor<Review[]>> = await res.json();
    return result;
  }
}

const reviewService = new ReviewService();

export default reviewService;
