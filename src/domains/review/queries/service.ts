import Service from '@/shared/queries/service';
import { Cursor, DefaultResponse, ResultResponse } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { CreatReviewRequest, ReviewType } from '../types/review';

class ReviewService extends Service {
  async getMyReview(cursorId: number) {
    const mockReviewUrl = `http://localhost:3000/mock/review.json?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(mockReviewUrl);
    if (!res.ok) throw new Error('mock error');
    const { result }: ResultResponse<Cursor<ReviewType[]>> = await res.json();
    return result;
  }

  async getReviewDetail(id: number) {
    const res = await this.fetchExtend.get(`/review/${id}`);
    const { result, success, message, code }: ResultResponse<ReviewType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async createReview(review: CreatReviewRequest) {
    const res = await this.fetchExtend.post('/review', {
      body: JSON.stringify(review)
    });
    const { code, message, success }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async updateReview(review: CreatReviewRequest) {
    const res = await this.fetchExtend.put('/review', {
      body: JSON.stringify(review)
    });
    const { code, message, success }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async uploadImage(images: FileList) {
    const formData = new FormData();

    Array.from(images).forEach((image) => {
      formData.append('images', image);
    });
    formData.append('category', 'REVIEW');

    const res = await this.fetchExtend.postForm('/review/image', {
      body: formData
    });

    const { code, message, result, success }: ResultResponse<{ urls: string[] }> = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result.urls;
  }
}

const reviewService = new ReviewService();

export default reviewService;
