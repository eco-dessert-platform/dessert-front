import { useQueryClient, useMutation } from '@tanstack/react-query';
import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { PostReview, Review } from '../types/review';

const usePostReviewQuery = () => {
  const { openToast } = useToastNewVer();

  const queryClient = useQueryClient();
  const queryKey = [QUERY_KEY.postReview];

  const mutationFn = async (postReview: PostReview) => {
    const res = await fetchExtend.post(`/review`, {
      body: JSON.stringify(postReview)
    });
    const { success, code, message }: ResultResponse<Review> = await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey });
    openToast({ message: '리뷰가 등록되었어요' });
  };

  const onError = (e: Error) => {
    const message = e.message || '리뷰 등록에 실패했어요.';
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default usePostReviewQuery;
