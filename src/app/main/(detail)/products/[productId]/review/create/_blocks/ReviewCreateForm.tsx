import useCreateReviewMutation from '@/domains/review/queries/useCreateReviewMutation';
import { IReviewCreateForm } from '@/domains/review/types/review';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { PropsWithChildren } from 'react';
import { SubmitErrorHandler, SubmitHandler, useFormContext } from 'react-hook-form';

const ReviewCreateForm = ({ children }: PropsWithChildren) => {
  const { handleSubmit } = useFormContext<IReviewCreateForm>();

  const { mutate: createReviewMutation } = useCreateReviewMutation();
  const { openToast } = useToastNewVer();

  const onValidSubmit: SubmitHandler<IReviewCreateForm> = ({ badges, images, ...rest }) => {
    const { brix, taste, texture } = badges;
    const formmatedBadges = [brix, taste, texture].map((value) => value?.toUpperCase());

    createReviewMutation({
      badges: formmatedBadges,
      urls: images.urls,
      ...rest
    });
  };

  const onInvalidSubmit: SubmitErrorHandler<IReviewCreateForm> = () => {
    openToast({ message: '값을 모두 입력해주세요.' });
  };

  return <form onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>{children}</form>;
};

export default ReviewCreateForm;
