import { AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'
import { setFormError } from '@/shared/lib'
import { HttpErrorCodeEnum } from '@/shared/core/enum/http-error-code.enum'

type HooksHandleForm = {
  onSubmit: (value: any, id?: number | string) => Promise<AxiosResponse<any, any>>
  id?: number | string
  setError: any
  isValidForm: boolean
  pathNavigate?: string
  fnAfterSubmit?: () => void
}

const useHandleForm = ({ onSubmit, id, setError, isValidForm, pathNavigate, fnAfterSubmit }: HooksHandleForm) => {
  const navigate = useNavigate()

  const onSubmitForm = async (value: any) => {
    try {
      if (isValidForm) {
        await onSubmit(value, id)
        if (fnAfterSubmit) {
          fnAfterSubmit()
        }
        if (pathNavigate) {
          navigate(pathNavigate, { replace: true })
        }
      }
    } catch (err: any) {
      if (err.code === HttpErrorCodeEnum.UNPROCESSABLE_CONTENT) {
        const { errors = [] } = err
        if (errors.length) {
          setFormError(setError, errors)
        }
      }
    }
  }

  return {
    onSubmitForm
  }
}

export default useHandleForm
