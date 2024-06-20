import Service from '@/shared/queries/service';
import { Cursor, ResultResponse } from '@/shared/types/response';
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

  async uploadImage(photos: FileList) {
    const category = 'REVIEW';
    const formData = new FormData();

    formData.append('category', category);
    for (let i = 0; i < photos.length; i += 1) {
      formData.append('multipart', photos[i]);
    }

    const res = await this.fetchExtend.post('/review/image', {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(formData)
    });

    const { code, message, result }: ResultResponse<{ urls: string[] }> = await res.json();

    if (!res.ok) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result.urls;
  }
}

const reviewService = new ReviewService();

export default reviewService;
