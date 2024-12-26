import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Eye from "@/assets/icons/Eye.tsx";
import { useAuth } from "@/hooks/useAuth";
import { useSignIn } from "@/hooks/useSignIn";
import { EyeClosed,  Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

export function LoginForm() {
  const { passwordType, togglePasswordVisibility } = useAuth();
  const { handlelogin, handleSubmit, register, emailError, passwordError, loginError, isLoading } = useSignIn();
  const { toast } = useToast(); 

  useEffect(() => {
    if (loginError) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: loginError,
      });
    }
  }, [toast, loginError]);

  return (
    <Card className="my-3 w-full max-w-sm">
      <CardContent className="pt-6 max-w-md max-h-md mx-auto ">
        <form className="grid gap-4" onSubmit={handleSubmit(handlelogin)}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              autoComplete="email"
              placeholder="xyz@example.com"
              {...register('email')}
              className={emailError ? 'border-red-500 border-[1px]' : ''}
            />
            {emailError && (
              <CardDescription className="ml-2 text-destructive">{emailError}</CardDescription>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>

            <div className="flex items-baseline relative">
              <Input id="password" type={passwordType} className={passwordError ? 'border-red-500 border-[1px]' : ''} {...register('password')} autoComplete="current-password" placeholder="Your password" />
              <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2.5 top-[13px]">
                {
                  passwordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
            {passwordError && (
              <CardDescription className="text-destructive ml-2">{passwordError}</CardDescription>
            )}
          </div>

          <Button type="submit" className="w-full">
            {isLoading ?
              <Loader2 className="animate-spin" />
              : 'Login to your account'}
          </Button>
        </form>
        
      </CardContent>
    </Card>
  );
}