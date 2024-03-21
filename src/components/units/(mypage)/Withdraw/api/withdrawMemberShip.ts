import API from '@/api';

interface WithdrawMemberShipProps {
  formData: FormData;
}

interface Data {
  message: string;
}

export const withdrawMemberShip = async ({ formData }: WithdrawMemberShipProps) => {
  const rawFormData = {
    reasons: formData.getAll('delete-reason').join(',')
  };

  const data: Data = await API.patch('/members', {
    body: JSON.stringify(rawFormData)
  });

  return data.message;
};
