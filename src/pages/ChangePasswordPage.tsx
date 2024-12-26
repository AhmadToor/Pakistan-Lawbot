import AuthWrapper from '@/_layouts/AuthWrapper.tsx'
import { ChangePasswordForm } from '@/components/auth/ChangePasswordForm';

const ChangePasswordPage = () => {
  return (
    <AuthWrapper>
    <h1 className='font-bold text-2xl mt-auto text-center'>Change Password</h1>
    <p className='text-center text-zinc-950 mt-3 ' >Make your new password to continue.</p>
     <ChangePasswordForm/>
     <div className='mb-auto'></div>
  </AuthWrapper>
  )
};

export default ChangePasswordPage;
