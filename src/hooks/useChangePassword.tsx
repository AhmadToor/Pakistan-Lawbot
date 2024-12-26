import { resetPasswordSchema } from "@/schema/authSchema"
import { ResetPasswordSchemaTypes } from "@/types/authtypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export const useChangePassword = () => {
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationKey: ['reset-password'],
        mutationFn: async (values: ResetPasswordSchemaTypes) => {
            const response = await fetch('http://localhost:3173/api/users/resetpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Server Error');
            }
            return response.json()
        },
        onSuccess: (data) => {
            localStorage.removeItem('accessToken')
            navigate('/signin', { state: { 'popup': data.message } })
        },
        onError: (err: any) => {
            console.error(err);
        }
    })

    const { handleSubmit, register, formState, reset } = useForm<ResetPasswordSchemaTypes>({
        resolver: zodResolver(resetPasswordSchema),
        mode: 'onSubmit'
    })

    const handleresetpassword: SubmitHandler<ResetPasswordSchemaTypes> = (values) => {
        const accessToken = localStorage.getItem('accessToken') as string;
        const payload = {
            usertoken: JSON.parse(accessToken),
            oldpassword: values.oldpassword,
            newpassword: values.newpassword,
            confirmPassword: values.confirmPassword
        };
        mutation.mutate(payload);
    }

    const errors = {
        'confirmPasswordError': formState.errors.confirmPassword?.message,
        'oldpasswordError': formState.errors.oldpassword?.message,
        'newPasswordError': formState.errors.newpassword?.message,
        'serverError': mutation.error?.message
    }

    return {
        handleSubmit,
        register,
        handleresetpassword,
        errors,
        reset,
        isLoading : mutation.isPending
    }
}