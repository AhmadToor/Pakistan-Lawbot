import { LoginForm } from "@/components/auth/LoginForm";
import AuthWrapper from '@/_layouts/AuthWrapper.tsx'
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <AuthWrapper>
    <h1 className='font-bold text-2xl mt-auto text-center'>Let's Sign In</h1>
    <p className='text-center text-zinc-950 mt-3 ' >Spend some time with Pakistan Lawbot.</p>
     <LoginForm/>
     <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
     Don’t have an account?  
    <Link to ='/signup' className="font-medium cursor-pointer ml-1 text-black underline">
        Create New Account
    </Link>
  </p>
  <Link to="/forgetpassword" className="text-sm mb-auto text-center font-medium underline mt-4">
    <p>Forgot password?</p>
  </Link>
  </AuthWrapper>
  )
};

export default SignInPage;
