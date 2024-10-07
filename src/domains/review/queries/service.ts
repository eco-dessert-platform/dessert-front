import Service from '@/shared/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { Cursor, DefaultResponse, ResultResponse } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import {
  BoardReviewRateResponse,
  CreatReviewRequest,
  ReviewType,
  ReviewPhoto
} from '../types/review';

class ReviewService extends Service {
  async getMyReview(cursorId: number) {
    const url =
      cursorId === INITIAL_CURSOR ? `/review/myreview` : `/review/myreview?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(url);
    if (!res.ok) throw new Error('mock error');
    const { result }: ResultResponse<Cursor<ReviewType[]>> = await res.json();
    return result;
  }

  async getReview({ boardId, cursorId }: { boardId: number; cursorId: number }) {
    const params = cursorId === INITIAL_CURSOR ? '' : `?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/review/list/${boardId}${params}`);

    const { result, success, code, message }: ResultResponse<Cursor<ReviewType[]>> =
      await res.json();

    if (!success || !res.ok) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getReviewDetail(reviewId: number) {
    const res = await this.fetchExtend.get(`/review/${reviewId}`);
    const { result, success, message, code }: ResultResponse<ReviewType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getReviewRating(boadrId: number) {
    const res = await this.fetchExtend.get(`/review/rate/${boadrId}`);
    const { result, success, message, code }: ResultResponse<BoardReviewRateResponse> =
      await res.json();
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

  async updateReview({ review, id }: { review: CreatReviewRequest; id: number }) {
    const res = await this.fetchExtend.put(`/review/${id}`, {
      body: JSON.stringify(review)
    });
    const { code, message, success }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async deleteReview(id: number) {
    const res = await this.fetchExtend.delete(`/review/${id}`);
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

  async likeReview(id: number) {
    const res = await this.fetchExtend.get(`/review/like/${id}`);
    const { code, message, success }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async dislikeReview(id: number) {
    const res = await this.fetchExtend.delete(`/review/like/${id}`);
    const { code, message, success }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async getReviewPhotos({ boardId, cursorId }: { boardId: number; cursorId: number }) {
    const params = cursorId === INITIAL_CURSOR ? '' : `?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/review/${boardId}/images${params}`);
    const { result, success, code, message }: ResultResponse<Cursor<ReviewPhoto[]>> =
      await res.json();
    if (!success || !res.ok) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const reviewService = new ReviewService();

export default reviewService;
