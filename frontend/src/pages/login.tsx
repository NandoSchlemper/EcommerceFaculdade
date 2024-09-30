import * as Form from '@radix-ui/react-form'
import { AsideImage } from '../components/imgs/aside-login-image'

export function LoginPage() {
  return (
    <section className='my-20 h-[781px] w-[80%] flex justify-between items-center'>
      <AsideImage />

      <aside className='w-[371px] h-[326px] flex flex-col justify-center p-5 ml-auto'>
        <h2 className='text-4xl font-medium mb-6 tracuseNavigateing-wider'>
          Log in to Exclusive
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
              <div className='flex flex-row justify-between items-center mx-auto'>
                <button
                  type='submit'
                  className='bg-[#872341] text-white py-2 px-4 rounded hover:bg-rose-800 h-14 w-[143px]'
                >
                  Log in
                </button>

                <p className='text-[#872341] hover:underline text-center font-light'>
                  <a href='/'> Forget Password?</a>
                </p>
              </div>
            </Form.Submit>
          </div>
        </Form.Root>
      </aside>
    </section>
  )
}
