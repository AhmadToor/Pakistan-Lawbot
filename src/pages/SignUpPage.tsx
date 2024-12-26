import { SignUpForm } from "@/components/auth/SignUpForm";
import AuthWrapper from '@/_layouts/AuthWrapper.tsx'
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <AuthWrapper>
    <h1 className='font-bold text-2xl mt-auto text-center'>Create your account</h1>
    <p className='text-center text-zinc-950 mt-3' >Enter your email and password to unlock knowledge</p>
     <SignUpForm/>
     <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
          Already have an account? 
    <Link 
      to="/signin"
      className="font-medium ml-1 cursor-pointer text-black underline"
    >
      SignIn
    </Link>
  </p>
  <Link to="/forgetpassword" className="text-sm mb-auto text-center font-medium underline mt-4">
    <p className="mb-2">Forgot password?</p>
  </Link>
  </AuthWrapper>
  )
};

export default SignInPage;
