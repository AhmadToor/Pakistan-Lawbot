import { signupschema } from "@/schema/authSchema"
import { SignupSchemaTypes } from "@/types/authtypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export const useSignUp = ()=>{
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationKey: ["signup"],
        mutationFn : async (values : SignupSchemaTypes)=>{
            const response = await fetch("http://localhost:3173/api/users/signup", {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(values)
        })
        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || 'Server Error'); 
        }
        return response.json()
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
    const {handleSubmit, register, formState} = useForm<SignupSchemaTypes>({
        mode: 'onSubmit',
        resolver: zodResolver(signupschema)
    })
    const handleSignup: SubmitHandler<SignupSchemaTypes> = (values)=>{
        mutation.mutate(values)
        
        
    }
    const errors = {
     'nameError' : formState.errors.firstname?.message,
     'emailError' : formState.errors.email?.message,
     'passwordError' : formState.errors.password?.message,
     'matchError' : formState.errors.confirmpassword?.message,
     'serverError' : mutation.error?.message
    }

   
    return {
        handleSubmit,
         register,
         handleSignup,
         errors,
         isLoading : mutation.isPending
        }
}