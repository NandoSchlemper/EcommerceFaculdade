import * as Form from '@radix-ui/react-form'
import { GoogleIcon } from '../components/icons/google-icon'
import { AsideImage } from '../components/imgs/aside-login-image'

export function RegisterPage() {
  return (
    <section className='my-20 h-[781px] w-[80%] flex justify-between items-center'>
      <AsideImage />

      <aside className='w-[371px] h-[520px] flex flex-col justify-center p-4 ml-auto'>
        <h2 className='text-4xl font-medium mb-6 tracking-wider'>
          Create an Account
        </h2>
        <p className='mb-12 text-lg'>Enter your details below</p>

        <Form.Root>
          <div className='flex flex-col'>
            <Form.Field className='grid mb-8' name='email'>
              <Form.Control asChild>
                <input
                  type='email'
                  className='border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-500 py-2 w-full text-lg'
                  placeholder='Email or Phone Number'
                />
              </Form.Control>
              <Form.Message
                className='text-red-500 opacity-[0.8]'
                match='typeMismatch'
              />
            </Form.Field>

            <Form.Field className='grid mb-8' name='name'>
              <Form.Control asChild>
                <input
                  type='text'
                  className='border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-500 py-2 w-full text-lg'
                  placeholder='Name'
                />
              </Form.Control>
              <Form.Message
                className='text-red-500 opacity-[0.8]'
                match='typeMismatch'
              />
            </Form.Field>

            <Form.Field className='grid mb-8' name='password'>
              <Form.Control asChild>
                <input
                  type='password'
                  className='border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-500 py-2 w-full text-lg'
                  placeholder='Password'
                />
              </Form.Control>
              <Form.Message
                className='text-red-500 opacity-[0.8]'
                match={'valueMissing'}
              />
            </Form.Field>

            <Form.Submit>
              <div className='flex flex-col justify-between items-center mx-auto gap-4'>
                <button
                  type='submit'
                  className='bg-[#872341] text-white py-2 px-4 rounded hover:bg-rose-800 h-14 w-full'
                >
                  Log in
                </button>

                <button
                  type='submit'
                  className='bg-transparent text-black py-2 px-4 rounded hover:bg-zinc-100 h-14 w-full mb-4 border-slate-400 flex items-center justify-center border'
                >
                  <GoogleIcon className='mr-2' />
                  Sign up with Google
                </button>

                <span className='flex flex-row gap-3'>
                  <p>Already have account?</p>
                  <p className='text-[#872341] hover:underline text-center font-medium'>
                    <a href='/login'>Log In</a>
                  </p>
                </span>
              </div>
            </Form.Submit>
          </div>
        </Form.Root>
      </aside>
    </section>
  )
}
