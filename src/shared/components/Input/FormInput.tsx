import { Controller } from 'react-hook-form'
import { Input } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { InputProps } from 'antd/lib/input'
import cn from 'classnames'

type FormInputProps = {
  control: any
  name: string
  placeholder?: string
  className?: string
  type?: 'text' | 'password' | 'email'
  isDisabled?: boolean
  isRequired?: boolean
  label?: string
  labelPlacement?: 'top' | 'left'
  labelClassName?: string
} & Omit<InputProps, 'type'>

const FormInput = (props: FormInputProps) => {
  const {
    control,
    name,
    placeholder = '',
    className = '',
    type = 'text',
    isDisabled,
    isRequired,
    label,
    labelPlacement = 'top',
    labelClassName = '',
    ...restProps
  } = props

  const getInputIcon = () => {
    switch (type) {
      case 'email':
        return <MailOutlined className='text-gray-400' />
      case 'password':
        return <LockOutlined className='text-gray-400' />
      default:
        return <UserOutlined className='text-gray-400' />
    }
  }

  const renderLabel = () => {
    if (!label) return null
    return (
      <label
        className={cn(
          'text-sm font-medium text-gray-700 break-all',
          labelPlacement === 'left' ? `flex items-center break-all ${labelClassName}` : 'block mb-2'
        )}
      >
        {label}
        {isRequired && <span className='text-red-500 ml-1'>*</span>}
      </label>
    )
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className={cn('mb-4', labelPlacement === 'left' ? 'flex items-start' : '')}>
          {renderLabel()}
          <div className={cn(labelPlacement === 'left' ? 'flex-1' : '', className)}>
            {type === 'password' ? (
              <Input.Password
                {...field}
                {...restProps}
                prefix={getInputIcon()}
                placeholder={placeholder}
                disabled={isDisabled}
                className={cn('rounded-lg h-11', error ? 'border-red-500' : '', className)}
                size='large'
              />
            ) : (
              <Input
                {...field}
                {...restProps}
                prefix={getInputIcon()}
                placeholder={placeholder}
                disabled={isDisabled}
                className={cn('rounded-lg h-11', error ? 'border-red-500' : '', className)}
                size='large'
              />
            )}
            {error && <p className='mt-1 text-sm text-red-500'>{error.message}</p>}
          </div>
        </div>
      )}
    />
  )
}

export default FormInput
