import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast";
import { useResetPassword } from "@/hooks/useResetPassword";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ResetPasswordForm() {
const {register, handleSubmit, handleEmail, emailError, isLoading, serverError} = useResetPassword()
const { toast } = useToast(); 
const navigate = useNavigate()
  useEffect(() => {
    if (serverError) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: serverError.message,
      });
    }
  }, [toast, serverError]);

  return (
    <Card className="my-3 w-full max-w-sm">
      <CardContent className="pt-6 max-w-md max-h-md mx-auto ">
        <form className="grid gap-4" onSubmit={handleSubmit(handleEmail)}>
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
              <CardDescription className="ml-2 text-destructive">{emailError.message}</CardDescription>
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
              : 'Proceed'}
          </Button>
          </div>
        </form>
        
      </CardContent>
    </Card>
  );
}