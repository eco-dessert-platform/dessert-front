import WithdrawLogoSection from '@/blocks/user/WithdrawLogoSection';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import WithdrawForm from '@/domains/user/components/WithdrawForm';

const Withdraw = () => {
  return (
    <PaddingWrapper>
      <WithdrawLogoSection />
      <WithdrawForm />
    </PaddingWrapper>
  );
};

export default Withdraw;
