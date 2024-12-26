import { useAuth } from "@/hooks/useAuth"
import { useChangePassword } from "@/hooks/useChangePassword"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Eye from "@/assets/icons/Eye";
import { Card, CardContent, CardDescription } from "../ui/card";
import { EyeClosed, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function ChangePasswordForm(){
    const { handleSubmit, handleresetpassword,isLoading, register, errors } = useChangePassword()
    const navigate = useNavigate()
      const { 
        passwordType,
        confirmPasswordType,
        toggleConfirmPasswordVisibility,
        togglePasswordVisibility,
        
      } = useAuth()

    return(
        <Card className="my-2 w-full max-w-sm">
      <CardContent className="pt-6 max-w-md max-h-md mx-auto ">
    <form onSubmit={handleSubmit(handleresetpassword)} className="grid gap-4 py-2 mb-2">
          
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="newpassword" >
              New Password
            </Label>
            <div className=" flex w-full items-baseline relative">
              <Input id="password" type={passwordType}    {...register('newpassword')} placeholder="New Password" />
              <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2.5 top-[13px]">
                {
                  passwordType === 'text' ? <EyeClosed /> : <Eye />
                }
              </div>
            </div>
            {errors.newPasswordError && (
              <CardDescription  className="ml-2 my-0 text-destructive">{errors.newPasswordError}</CardDescription>
            )}
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="confirmpassword" >
              Confirm Password
            </Label>
            <div className=" flex w-full items-baseline relative">
              <Input id="password" type={confirmPasswordType}    {...register('confirmPassword')} placeholder="Confirm Password" />
              <div onClick={toggleConfirmPasswordVisibility} className="cursor-pointer absolute right-2.5 top-[13px]">
                {
                  confirmPasswordType === 'text' ? <EyeClosed /> : <Eye />
                }
              </div>
            </div>
            {errors.confirmPasswordError && (
              <CardDescription  className="ml-2 my-0 text-destructive">{errors.confirmPasswordError}</CardDescription>
            )}
          </div>
          <div className="flex gap-2">
          <Button 
          onClick={()=>{
            navigate('/signin')
          }} 
          variant={'ghost'}
          className="w-full border border-gray-200"
          >
            Back to login
          </Button>
          <Button type="submit" className="w-full">
            {isLoading ?
              <Loader2 className="animate-spin" />
              : 'Change Password'}
          </Button>
          </div>
          </form>
          </CardContent>
          </Card>
)}