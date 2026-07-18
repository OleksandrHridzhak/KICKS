import { LoginForm } from "@/features/auth/components/LoginForm/LoginForm";
import AuthLayout from "@/features/auth/components/AuthLayout/AuthLayout";
import Wrapper from "@/shared/components/Wrapper/Wrapper";

function LoginPage() {
  return (
    <Wrapper>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </Wrapper>
  );
}

export default LoginPage;
