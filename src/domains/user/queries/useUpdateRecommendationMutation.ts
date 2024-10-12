import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { revalidateTag } from '@/shared/actions/revalidate';
import {
  RecommendationStep1Type,
  RecommendationStep2Type
} from '@/domains/user/types/recommendation';
import PATH from '@/shared/constants/path';
import userService from '@/domains/user/queries/service';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const useUpdateRecommendationStep1Mutation = () => {
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const mutationFn = async (recommendationStep1: RecommendationStep1Type) => {
    await userService.updateRecommendationStep1(recommendationStep1);
  };

  const onSuccess = () => {
    revalidateTag('recommendation-step1');
    push(PATH.recommendationUpdate({ progress: 2 }));
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

const useUpdateRecommendationStep2Mutation = () => {
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const mutationFn = async (recommendationStep2: RecommendationStep2Type) => {
    await userService.updateRecommendationStep2(recommendationStep2);
  };

  const onSuccess = () => {
    openToast({ message: '맞춤 추천 받기가 수정됐으니, 추천 빵을 구경해봐요!🙌' });
    revalidateTag('recommendation-step2');
    push(PATH.home);
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

const useUpdateRecommendationMutation = () => {
  const { mutate: mutateStep1 } = useUpdateRecommendationStep1Mutation();
  const { mutate: mutateStep2 } = useUpdateRecommendationStep2Mutation();
  return { mutateStep1, mutateStep2 };
};

export default useUpdateRecommendationMutation;
