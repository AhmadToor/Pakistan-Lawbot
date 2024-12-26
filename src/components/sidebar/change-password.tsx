import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Changepassword from "@/assets/icons/Changepassword";
import { useChangePassword } from "@/hooks/useChangePassword";
import { useAuth } from "@/hooks/useAuth";
import Eye from "@/assets/icons/Eye";
import { CardDescription } from "../ui/card";
import { EyeClosed, Loader2 } from "lucide-react";

export function ChangePassword() {
  const { handleSubmit, handleresetpassword,isLoading, register, errors, reset } = useChangePassword()
  const { 
    passwordType,
    confirmPasswordType,
    toggleConfirmPasswordVisibility,
    togglePasswordVisibility,
    oldPasswordType,
    toggleOldPasswordVisibility
  } = useAuth()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex ml-0 hover:bg-white justify-start font-bold text-xs " >
          <Changepassword />
          Change Password
        </Button>
      </SheetTrigger>
      <SheetContent side="center" className="px-6 py-2">
        <SheetHeader>
          <SheetTitle>Change Password</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit(handleresetpassword)} className="grid gap-4 py-2 mb-2">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="currentpassword">
              Current Password
            </Label>
            <div className=" flex w-full items-baseline relative">
              <Input id="password" type={oldPasswordType}    {...register('oldpassword')} placeholder="Current Password" />
              <div onClick={toggleOldPasswordVisibility} className="cursor-pointer absolute right-2.5 top-[13px]">
                {
                  oldPasswordType === 'text' ? <EyeClosed /> : <Eye />
                }
              </div>
            </div>
            {errors.oldpasswordError && (
              <CardDescription  className="ml-2 my-0 text-destructive">{errors.oldpasswordError}</CardDescription>
            )}
          </div>
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
          <div>
        
          </div>
          <SheetFooter className="grid gap-2 grid-cols-[1fr_2fr]">
            <SheetClose asChild>
              <Button variant="outline" onClick={() => { reset() }}>Go Back</Button>
            </SheetClose>
            <Button type="submit">
              {isLoading? <Loader2 className="animate-spin"/> : 'Save changes'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

