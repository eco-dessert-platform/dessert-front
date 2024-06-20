import Service from '@/shared/queries/service';
import { Cursor, DefaultResponse, ResultResponse } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { Review } from '../types/review';

class ReviewService extends Service {
  async getMyReview(cursorId: number) {
    const mockReviewUrl = `http://localhost:3000/mock/review.json?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(mockReviewUrl);
    if (!res.ok) throw new Error('mock error');
    const { result }: ResultResponse<Cursor<Review[]>> = await res.json();
    return result;
  }

  async createReview(review: {
    badges: string[];
    rate: number;
    content: string;
    urls: string[];
    boardId: number;
  }) {
    const res = await this.fetchExtend.post('/review', {
      body: JSON.stringify(review)
    });

    const { code, message, success }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async uploadImage(photos: FileList) {
    const category = 'REVIEW';
    const formData = new FormData();

    const categoryBlob = new Blob([JSON.stringify(category)], { type: 'application/json' });
    formData.append('category', categoryBlob);
    for (let i = 0; i < photos.length; i += 1) {
      formData.append('photos', photos[i]);
    }

    const res = await this.fetchExtend.post('/review/image', {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    });

    const { code, message, result, success }: ResultResponse<{ urls: string[] }> = await res.json();

    if (!res.ok || success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result.urls;
  }
}

const reviewService = new ReviewService();

export default reviewService;
