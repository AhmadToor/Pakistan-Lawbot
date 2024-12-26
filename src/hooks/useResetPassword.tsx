import { emailschema } from "@/schema/authSchema"
import { EmailSchemaTypes } from "@/types/authtypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export const useResetPassword = ()=>{
    const { register, handleSubmit, formState } = useForm<EmailSchemaTypes>({
        resolver: zodResolver(emailschema),
        mode: "onSubmit"
    })
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationKey: ['forgetpassword'],
        mutationFn: async (values: EmailSchemaTypes) => {
            const response = await fetch('http://localhost:3000/api/forgetpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'ServerError'); 
                
            }
            
            return response.json();
        },
        onSuccess : ()=>{
            navigate('/changepassword')
        },
        onError : (err)=>{
            return err.message
        }
        
    })
    
    const handleEmail: SubmitHandler<EmailSchemaTypes> = (values)=>{
        mutation.mutate(values)
    }
    const emailError = formState.errors.email
    const serverError = mutation.error

    return{
        register,
        handleSubmit,
        handleEmail,
        emailError,
        serverError,
        isLoading : mutation.isPending
    }
}