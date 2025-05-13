import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import {
  RecommendationStep1Type,
  RecommendationStep2Type
} from '@/domains/user/types/recommendation';
import PATH from '@/shared/constants/path';
import userService from '@/domains/user/queries/service';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const useAddRecommendationStep1Mutation = () => {
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const mutationFn = async (recommendationStep1: RecommendationStep1Type) => {
    await userService.addRecommendationStep1(recommendationStep1);
  };

  const onSuccess = () => {
    push(PATH.recommendationCreate({ progress: 2 }));
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

const useAddRecommendationStep2Mutation = () => {
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const mutationFn = async (recommendationStep2: RecommendationStep2Type) => {
    await userService.addRecommendationStep2(recommendationStep2);
  };

  const onSuccess = () => {
    openToast({ message: '맞춤 추천 받기가 완료됐으니, 추천 빵을 구경해봐요!🙌' });
    push(PATH.home);
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

const useAddRecommendationMutation = () => {
  const { mutate: mutateStep1 } = useAddRecommendationStep1Mutation();
  const { mutate: mutateStep2 } = useAddRecommendationStep2Mutation();
  return { mutateStep1, mutateStep2 };
};

export default useAddRecommendationMutation;
