import { Separator } from '@radix-ui/themes'
import { Input } from './input-field'
import { Dropdown } from './dropdown'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className='w-full'>
      <div className='bg-[#22092C] h-12 w-full'>
        <div className='flex flex-row items-center justify-between'>
          <div className='mx-auto'>
            <p className='text-indigo-50'>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%! <strong className='underline'>ShopNow</strong>
            </p>
          </div>

          <div className='order-last pr-20'>
            <Dropdown />
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-around py-10'>
        <h2 className='text-2xl tracking-wider font-semibold font-sans'>
          Exclusive
        </h2>
        <div className='flex flex-row items-center'>
          <ul className='flex flex-row items-center gap-20'>
            <a href='/' className='hover:underline'>
              <li className='text-lg tracking-wider'>
                <Link to='/'>Home</Link>
              </li>
            </a>
            <a href='/' className='hover:underline'>
              <li className='text-lg tracking-wider'>
                <Link to='/billing'>Billing</Link>
              </li>
            </a>
            <a href='/' className='hover:underline'>
              <li className='text-lg tracking-wider'>About</li>
            </a>
            <a href='/' className='hover:underline'>
              <li className='text-lg tracking-wider'>
                <Link to='/register'>Sign Up</Link>
              </li>
            </a>
          </ul>
        </div>

        <Input />
      </div>

      <Separator orientation='horizontal' size='4' my='-5' />
    </header>
  )
}
