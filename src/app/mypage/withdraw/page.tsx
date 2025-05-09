import WithdrawLogoSection from '@/blocks/user/withdraw/WithdrawLogoSection';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import WithdrawForm from '@/domains/user/components/WithdrawForm';

const Withdraw = () => (
  <PaddingWrapper>
    <WithdrawLogoSection />
    <WithdrawForm />
  </PaddingWrapper>
);

export default Withdraw;
