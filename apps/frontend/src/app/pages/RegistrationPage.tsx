import { RegistrationForm } from '@/features/auth/components/RegistrationForm/RegistrationForm';
import AuthLayout from '@/features/auth/components/AuthLayout/AuthLayout';
import Wrapper from '@/shared/components/Wrapper/Wrapper';

function RegistrationPage() {
  return (
    <Wrapper>
      <AuthLayout>
        <RegistrationForm />
      </AuthLayout>
    </Wrapper>
  );
}

export default RegistrationPage;
