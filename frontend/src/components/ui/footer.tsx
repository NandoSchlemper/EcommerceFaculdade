import { Separator, TextField } from '@radix-ui/themes'
import { FacebookIcon } from '../icons/facebook-icon'
import { InstagramIcon } from '../icons/instagram-icon'
import { LinkedinIcon } from '../icons/linkedin-icon'
import { XIcon } from '../icons/x-icon'
import { DoubleArrowRightIcon } from '@radix-ui/react-icons'
import { CopyrightIcon } from '../imgs/copyright-icon'

export function Footer() {
  return (
    <footer className='bg-gradient-to-b from-[#22092C] from-[30%] to-slate-950 max-h-[440px]'>
      <div className='w-screen h-max flex flex-row justify-between p-14'>
        {/* First */}
        <div className='w-[217px] h-[188px] flex flex-row justify-between'>
          <div className='h-48 w-[217px]'>
            <div className='flex flex-col justify-around items-start h-[124px]'>
              <h4 className='text-zinc-50 text-xl font-medium'>Exclusive</h4>

              <h5 className='text-zinc-50 text-base font-medium'>Subscribe</h5>

              <p className='text-zinc-50 text-sm'>
                Get 10% off your first order
              </p>
            </div>

            <div className='flex items-center justify-center'>
              <TextField.Root
                size='1'
                placeholder='Enter your email'
                radius='medium'
                className='w-full border border-solid border-slate-300 bg-transparent h-12 text-base px-4 justify-center items-center'
              >
                <DoubleArrowRightIcon className='size-8' color='#cbd5e1 ' />
              </TextField.Root>
            </div>
          </div>
        </div>

        {/* Second */}
        <div className='w-[175px] flex flex-row justify-between h-[180px]'>
          <div className='h-48 w-[217px]'>
            <div className='flex flex-col justify-between items-start h-[124px] gap-4'>
              <p className='text-zinc-50 text-xl font-medium'>Support</p>

              <p className='text-zinc-50 text-base font-normal'>
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>

              <p className='text-zinc-50 text-base font-normal'>
                exclusive@gmail.com
              </p>
              <p className='text-zinc-50 text-base font-normal'>
                +88015-88888-9999
              </p>
            </div>
          </div>
        </div>

        {/* Third */}
        <div className='w-[123px] h-[238px] flex flex-row justify-around'>
          <div className='h-48 w-[217px]'>
            <div className='flex flex-col justify-between items-start h-[124px] gap-4'>
              <p className='text-zinc-50 text-xl font-medium'>Account</p>
              <p className='text-zinc-50 text-base font-normal'>My account</p>
              <p className='text-zinc-50 text-base font-normal'>
                Login / Register
              </p>
              <p className='text-zinc-50 text-base font-normal'>Cart</p>
              <p className='text-zinc-50 text-base font-normal'>Whishlist</p>
              <p className='text-zinc-50 text-base font-normal'>Shop</p>
            </div>
          </div>
        </div>

        {/* fourth */}
        <div className='w-[109px] h-[196px] flex flex-row justify-around'>
          <div className='h-48 w-[217px]'>
            <div className='flex flex-col justify-between items-start h-[124px] gap-4'>
              <p className='text-zinc-50 text-xl font-medium'>Quick Link</p>
              <p className='text-zinc-50 text-base font-normal'>
                Privacy Policy
              </p>
              <p className='text-zinc-50 text-base font-normal'>Terms of Use</p>
              <p className='text-zinc-50 text-base font-normal'>FAQ</p>
              <p className='text-zinc-50 text-base font-normal'>Contact</p>
            </div>
          </div>
        </div>

        {/* fifth */}
        <div className='w-[198px] h-[210px] flex flex-row justify-around'>
          <div className='h-48 w-[217px]'>
            <div className='flex flex-col justify-between items-start h-[124px] gap-4'>
              <h6 className='text-zinc-50 text-xl font-medium text-center'>
                Social
              </h6>
              <ul className='flex flex-row w-[168px] h-6 justify-between items-center'>
                <li>
                  <a href='/'>
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <XIcon />
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <LinkedinIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-around items-center h-10 w-screen'>
        <Separator className='bg-zinc-700' size='4' />

        <div className='flex flex-row justify-center items-end'>
          <span className='flex flex-row items-center gap-1 tracking-wide'>
            <CopyrightIcon />
            <p className='text-zinc-400'>
              Copyright Rimel 2022. All right reserved
            </p>
          </span>
        </div>
      </div>
    </footer>
  )
}
