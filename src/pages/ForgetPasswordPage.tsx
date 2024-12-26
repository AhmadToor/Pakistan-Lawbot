
import AuthWrapper from '@/_layouts/AuthWrapper.tsx'
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

const ForgetPasswordPage = () => {
  return (
    <AuthWrapper>
    <h1 className='font-bold text-2xl mt-auto text-center'>Forgot your password?</h1>
    <p className='text-center text-zinc-950 mt-3 ' >Enter your email to continue</p>
     <ResetPasswordForm/>
     <div className='mb-auto'></div>
  </AuthWrapper>
  )
};

export default ForgetPasswordPage;
