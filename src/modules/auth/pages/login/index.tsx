import { Button, Typography } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import _ from 'lodash'
import FormInput from '@/shared/components/Input/FormInput'
import { SignInSchema } from '@/modules/auth/core/config/form/signin-form'
import { FormSignIn, initForm } from '@/modules/auth/core/config/form/signin-form'
import useHandleForm from '@/shared/hooks/useHandleForm'
import { login } from '@/modules/auth/services/auth.service'
import { useBoundStore } from '@/shared/stores'

const { Title } = Typography

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { userLogin } = useBoundStore()

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm<FormSignIn>({
    values: initForm,
    resolver: yupResolver(SignInSchema),
    mode: 'all'
  })

  const onSubmit = async (values: FormSignIn) => {
    const res = await login(values)
    if (res?.data?.data) {
      const { user, accessToken } = res.data.data
      userLogin(user, accessToken)
      const from = location.state?.from?.pathname || '/'
      navigate(from, { replace: true })
    }
    return res
  }

  const { onSubmitForm } = useHandleForm({
    onSubmit,
    setError,
    isValidForm: _.isEmpty(errors)
  })

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
        <Title level={2} className='text-center mb-8 text-gray-800'>
          Welcome Back
        </Title>

        <form onSubmit={handleSubmit(onSubmitForm)} className='space-y-6'>
          <FormInput label='Email' control={control} name='email' type='email' placeholder='Email' isRequired />

          <FormInput control={control} name='password' type='password' placeholder='Password' isRequired />

          <Button
            type='primary'
            htmlType='submit'
            block
            size='large'
            className='h-12 text-base font-medium rounded-lg bg-blue-600 hover:bg-blue-700'
          >
            Log in
          </Button>

          <div className='text-center'>
            <Link to={'/'} className='text-blue-600 hover:text-blue-700 transition-colors'>
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
