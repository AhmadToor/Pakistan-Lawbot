import { SigninSchemaTypes } from "@/types/authtypes"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signinschema } from "@/schema/authSchema"
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";



export const useSignIn = ()=>{
    const { register, handleSubmit, formState } = useForm<SigninSchemaTypes>({
        resolver: zodResolver(signinschema),
        mode: "onSubmit"
    })
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationKey : ['sign-in'],
        mutationFn: async (values: SigninSchemaTypes) => {
            const response = await fetch('http://localhost:3173/api/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Login Failed'); 
                
            }
            
            return response.json();
        },
        onSuccess : (data)=>{
            const {token , ...rest} = data
            localStorage.setItem('accessToken' , JSON.stringify(token))
            localStorage.setItem('userinfo' , JSON.stringify(rest))
            navigate('/')
        },
        onError : (err)=>{
            return err.message
        }
        
    })
    const handlelogin : SubmitHandler<SigninSchemaTypes> = (values)=>{
        mutation.mutate(values)
        
    }

    
    const errors = formState.errors
    const emailError = errors.email?.message
    const passwordError = errors.password?.message
    const loginError = mutation.error?.message;
    
    return{
        handleSubmit,
        register,
        handlelogin,
        emailError,
        passwordError,
        loginError,
        isLoading : mutation.isPending
    }
}