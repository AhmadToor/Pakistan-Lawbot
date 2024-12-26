import React, { useEffect} from "react";
import Background from '../assets/images/background.png';
import Logo from "../assets/icons/Logo.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";
import { useToast } from "@/hooks/use-toast.ts";
import { useLocation } from "react-router-dom";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { toast } = useToast();

  const location = useLocation()
  const popup = location.state?.popup
    useEffect(() => {
    if (popup) {
      toast({
        variant: 'success',
        title: 'Message',
        description: popup,
      });
      window.history.replaceState({}, document.title, location.pathname);
    }
    

  }, [popup ,toast, location.pathname]);



  return (
    <div className="m-0 h-screen w-full md:grid md:grid-cols-[57fr_43fr]">
      <div className="h-screen bg-no-repeat bg-[length:100%_100%] hidden md:flex" style={{ backgroundImage: `url(${Background})` }}>
        <div className='h-screen p-8 flex flex-col justify-between w-full items-baseline'>
          <Logo />
          <p className='text-white text-base '>
            Get better reach to your potential customers and build your brand with us. We are here to help you position a yourself as an expert in your defined niche.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center overflow-y-auto h-full">
        <span className="self-start p-4 mb-4 md:hidden"><Logo /></span>
        <Toaster />
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;