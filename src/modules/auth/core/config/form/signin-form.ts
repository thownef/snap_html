import * as Yup from 'yup'
import { AuthLogin } from '@/modules/auth/core/types/auth.type'

export const initForm: AuthLogin = {
  email: '',
  password: ''
}

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required')
})

export type FormSignIn = Yup.InferType<typeof SignInSchema>
