import {
  Box,
  Button,
  DropdownMenu,
  Separator,
  TextField,
} from '@radix-ui/themes'
import { CartGamepad } from '../components/imgs/cart-gamepad'
import { CarMonitor } from '../components/imgs/car-monitor'

export function CartPage() {
  return (
    <section className='h-screen w-screen flex flex-col justify-center items-center p-10 my-10'>
      <div className='max-h-[840px] w-[1170px] flex flex-col justify-center items-center gap-12'>
        <div className='w-full flex flex-col gap-10'>
          <ul className='shadow-md w-full h-20 flex flex-row justify-around items-center'>
            <li className='tracking-wider text-base'>Product</li>
            <li className='tracking-wider text-base'>Price</li>
            <li className='tracking-wider text-base'>Quantity</li>
            <li className='tracking-wider text-base'>Subtotal</li>
          </ul>

          <ul className='w-full h-28 flex justify-around items-center p-1 shadow-md'>
            <li className='flex justify-between items-center gap-4'>
              <CarMonitor />

              <p>LCD Monitor</p>
            </li>
            <li>$650</li>
            <li className='border-2 border-zinc-300 rounded-md py-2 px-1'>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button
                    className='focus:bg-transparent focus:border-none focus:outline-none text-zinc-500 text-base tracking-wider before:bg-transparent before:text-black after:bg-transparent after:text-black'
                    size='1'
                  >
                    01
                    <DropdownMenu.TriggerIcon className='size-3' />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content size='1'>
                  <DropdownMenu.Item className='text-base'>
                    02
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className='text-base'>
                    03
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className='text-base'>
                    04
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className='text-base'>
                    05
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </li>
            <li>$650</li>
          </ul>

          <ul className='w-full h-28 flex justify-around items-center p-1 shadow-md'>
            <li className='flex justify-between items-center gap-4'>
              <CartGamepad />

              <p>H1 Gamepad</p>
            </li>
            <li>$650</li>
            <li className='border-2 border-zinc-300 rounded-md py-2 px-1'>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button
                    className='focus:bg-transparent focus:border-none focus:outline-none text-zinc-500 text-base tracking-wider'
                    size='1'
                  >
                    01
                    <DropdownMenu.TriggerIcon className='size-3' />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content size='1'>
                  <DropdownMenu.Item className='text-base'>
                    02
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className='text-base'>
                    03
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className='text-base'>
                    04
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className='text-base'>
                    05
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </li>
            <li>$1100</li>
          </ul>
        </div>

        <div className='h-14 w-full flex justify-between'>
          <button
            type='button'
            className='w-52 h-14 hover:bg-zinc-50 hover:border-zinc-300 text-zinc-700 rounded-md text-lg border-2 border-zinc-400'
          >
            Return to Shop
          </button>
          <button
            type='button'
            className='w-52 h-14 hover:bg-zinc-50 hover:border-zinc-300 text-zinc-700 rounded-md text-lg border-2 border-zinc-400'
          >
            Update Cart
          </button>
        </div>

        <div className='flex justify-between items-start h-80 w-[1170px]'>
          <div className='max-h-14 flex items-center justify-center gap-4'>
            <Box>
              <TextField.Root
                variant='soft'
                className='text-lg w-72 h-14 bg-zinc-100 hover:border-zinc-200 hover:border'
                placeholder='What are you looking for?'
              />
            </Box>

            <button
              type='button'
              className='bg-[#872341] w-60 h-14 hover:bg-[#9c294c] text-white rounded-md text-lg'
            >
              Update Cart
            </button>
          </div>

          <div className='h-80 w-[470px] flex flex-col gap-4 items-stretch border-2 p-4 justify-center border-solid rounded-sm border-zinc-400'>
            <h4 className='text-start font-medium text-lg tracking-wide'>
              Cart Total
            </h4>

            <ul className='flex flex-col justify-between gap-4'>
              <li className='flex justify-between'>
                <p>Subtotal:</p>
                <p>$1750</p>
              </li>

              <Separator size='4' />

              <li className='flex justify-between'>
                <p>Shipping:</p>
                <p>Free</p>
              </li>

              <Separator size='4' />

              <li className='flex justify-between'>
                <p>Total:</p>
                <p>$1750</p>
              </li>
            </ul>

            <div className='flex justify-center items-center'>
              <button
                type='button'
                className='bg-[#872341] w-64 h-14 hover:bg-[#9c294c] text-white rounded-md text-lg'
              >
                Process to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
