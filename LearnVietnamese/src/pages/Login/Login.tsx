import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { loginAccount } from 'src/apis/auth.api'
import { isAxiosBadRequestError } from 'src/utils/utils'
import { ResponseApi } from 'src/types/utils.type'
import Input from 'src/components/Input'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

type FormData = Omit<Schema, 'confirm_password' | 'name'>
const loginSchema = schema.omit(['confirm_password', 'name'])

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) })
  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data1) => {
        setIsAuthenticated(true)
        window.localStorage.setItem('iduser', JSON.stringify(data1.data.data?.data.idUser))
        window.localStorage.setItem('name', JSON.stringify(data1.data.data?.data.name))
      },
      onError: (error) => {
        if (isAxiosBadRequestError<ResponseApi<FormData>>(error)) {
          setError('email', { message: 'Email đã tồn tại', type: 'Server' })
        }
        console.log(error)
      }
    })
  })

  return (
    <div className=''>
      <div className='container '>
        <div className='grid grid-cols-1 py-10 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
           
              <Input
                name='email'
                register={register}
                type={'email'}
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type={'password'}
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <div className='mt-3'>
                <button className='w-full bg-pink-400 px-2 py-4 text-center text-sm uppercase text-white hover:bg-pink-500'>
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-slate-400'>Bạn chưa có tài khoản?</span>
                <Link to='/register' className='ml-1 text-pink-400'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
