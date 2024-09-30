import { ControlFront } from '../components/imgs/control-front'
import { ControlDiagonal } from '../components/imgs/control-diagonal'
import { TwoControls } from '../components/imgs/two-controls'
import { ControlMain } from '../components/imgs/control-main'
import { AnotherRedControler } from '../components/imgs/another-red-controler'
import { KeyboardGamer } from '../components/imgs/keyboard-gamer'
import GamerMonitor from '../assets/gamer-monnitor.svg'
import { BoxSoundPlus } from '../components/imgs/box-sound-plus'

import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons'
import {
  Separator,
  Flex,
  Radio,
  RadioCards,
  IconButton,
} from '@radix-ui/themes'
import { Heart, Minus, Plus, RefreshCcwIcon, TruckIcon } from 'lucide-react'
import { ControlUp } from '../components/imgs/control-up'

export function ProductPage() {
  return (
    <section className='h-full w-full flex flex-col justify-center items-center'>
      <div className='flex flex-row items-center justify-around'>
        <div className='h-max flex flex-row justify-between items-center gap-12'>
          <div className='flex flex-col justify-between gap-4'>
            <TwoControls />
            <ControlUp />
            <ControlDiagonal />
            <ControlFront />
          </div>

          <div>
            <ControlMain />
          </div>
        </div>

        <div className='max-w-[600px] flex flex-col justify-between items-start gap-4 p-28'>
          <h2 className='text-xl font-medium'>Havic HV G-92 Gamepad</h2>

          <span className='flex flex-row'>
            <StarFilledIcon color='#FFAD33' className='size-5' />
            <StarFilledIcon color='#FFAD33' className='size-5' />
            <StarFilledIcon color='#FFAD33' className='size-5' />
            <StarFilledIcon color='#FFAD33' className='size-5' />
            <StarIcon color='#22092C' className='size-5' />

            <p className='text-center text-xs ml-2 text-gray-500'>
              (150 Reviews)
            </p>
          </span>

          <h3 className='tracking-wider text-xl'>$192.00</h3>

          <p className='text-sm'>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <Separator size='4' color='violet' />

          <span className='flex flex-row items-center justify-between max-w-10 max-h-10'>
            <h4 className='text-lg tracking-wider mr-4'>Colours:</h4>

            <Flex gap='2'>
              <Radio
                variant='soft'
                name='soft'
                value='1'
                size='3'
                color='orange'
                defaultChecked
              />
              <Radio
                variant='soft'
                name='soft'
                value='2'
                size='3'
                color='plum'
              />
            </Flex>
          </span>

          <span className='flex flex-row gap-4'>
            <h4 className='text-lg tracking-wider mr-2'>Size:</h4>

            <RadioCards.Root color='gray' className='flex flex-row'>
              <RadioCards.Item
                value='1'
                className='size-5 focus:bg-[#22092C] focus:text-black'
              >
                XS
              </RadioCards.Item>

              <RadioCards.Item
                value='2'
                className='size-5 focus:bg-[#22092C] focus:text-black'
              >
                S
              </RadioCards.Item>

              <RadioCards.Item
                value='3'
                className='size-5 focus:bg-[#22092C] focus:text-black'
              >
                M
              </RadioCards.Item>

              <RadioCards.Item
                value='4'
                className='size-5 focus:bg-[#22092C] focus:text-black'
              >
                L
              </RadioCards.Item>

              <RadioCards.Item
                value='5'
                className='size-5 focus:bg-[#22092C] focus:text-black'
              >
                XL
              </RadioCards.Item>
            </RadioCards.Root>
          </span>

          <div className='flex flex-row justify-between gap-4 mb-5'>
            <span className='flex flex-row rounded-lg w-40 h-11 justify-between items-center'>
              <IconButton className='size-[45px] bg-white'>
                <Minus
                  size='28'
                  className='border border-solid border-gray-300 size-full rounded-sm hover:bg-[#EEE]'
                  color='#787878'
                />
              </IconButton>

              <span className='border-y-solid border-gray-300 border-y size-full items-center justify-center flex'>
                <p className='mx-2 px-2 text-center text-lg'>0</p>
              </span>

              <IconButton className='size-[46px] bg-[#872341] hover:bg-[#9c294c]'>
                <Plus size='30' />
              </IconButton>
            </span>

            <button
              type='button'
              className='bg-[#872341] w-40 h-11 hover:bg-[#9c294c] text-white rounded-md text-lg'
            >
              Buy Now
            </button>

            <IconButton className='size-[44px] border border-solid border-gray-400 bg-white hover:bg-gray-100'>
              <Heart className='size-6 text-gray-500 decoration-inherit' />
            </IconButton>
          </div>

          <div className='w-[399px] h-44 border border-solid border-gray-300 decoration-slice rounded-sm flex flex-col justify-evenly items-center'>
            <span className='flex flex-row justify-center items-center gap-4'>
              <TruckIcon className='size-7' />

              <span className='flex flex-col gap-1 mr-6'>
                <h6>Free Delivery</h6>

                <p className='underline text-xs'>
                  Enter your postal code for Delivery Availability
                </p>
              </span>
            </span>

            <Separator size='4' color='violet' />

            <span className='flex flex-row justify-center items-center gap-4'>
              <RefreshCcwIcon className='size-7' />

              <span className='flex flex-col gap-1 mr-16'>
                <h6>Return Delivery</h6>

                <p className='text-xs'>
                  Free 30 Days Delivery Returns.{' '}
                  <a href='/' className='underline'>
                    Details
                  </a>
                </p>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className='w-[1170px] h-[450px] flex flex-col mb-20 justify-center mr-32'>
        <span className='h-10 w-36 flex flex-row items-center gap-3'>
          <span className='h-9 w-2 bg-[#872341] p-[9px] rounded-[4px]' />
          <h4 className='text-[#872341] font-medium'>Related Item</h4>
        </span>

        <div className='flex flex-row gap-6 mt-14'>
          <div className='flex flex-row gap-4'>
            <span>
              <AnotherRedControler />

              <span className='flex flex-col gap-1'>
                <h6 className='font-medium'>HAVIT HV-G92 Gamepad</h6>

                <p className='text-[#872341]'>$120</p>

                <p className='text-gray-400'>
                  <del>$160</del>
                </p>

                <span className='flex flex-row gap-1'>
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />

                  <p className='text-center text-sm ml-2 text-gray-500 font-medium tracking-wide'>
                    (88)
                  </p>
                </span>
              </span>
            </span>
          </div>

          <div className='flex flex-row gap-4'>
            <span>
              <KeyboardGamer />

              <span className='flex flex-col gap-1'>
                <h6 className='font-medium'>AK-900 Wired Keyboard</h6>

                <p className='text-[#872341]'>$920</p>

                <p className='text-gray-400'>
                  <del>$1160</del>
                </p>

                <span className='flex flex-row gap-1'>
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarIcon color='#9ca3af' className='size-4' />

                  <p className='text-center text-sm ml-2 text-gray-500 font-medium tracking-wide'>
                    (75)
                  </p>
                </span>
              </span>
            </span>
          </div>

          <div className='flex flex-row gap-4'>
            <span>
              <img src={GamerMonitor} alt='' />

              <span className='flex flex-col gap-1'>
                <h6 className='font-medium'>IPS LCD Gaming Monitor</h6>

                <p className='text-[#872341]'>$370</p>

                <p className='text-gray-400'>
                  <del>$400</del>
                </p>

                <span className='flex flex-row gap-1'>
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />

                  <p className='text-center text-sm ml-2 text-gray-500 font-medium tracking-wide'>
                    (99)
                  </p>
                </span>
              </span>
            </span>
          </div>

          <div className='flex flex-row gap-4'>
            <span>
              <BoxSoundPlus />

              <span className='flex flex-col gap-1'>
                <h6 className='font-medium'>RGB liquid CPU Cooler</h6>

                <p className='text-[#872341]'>$160</p>

                <p className='text-gray-400'>
                  <del>$170</del>
                </p>

                <span className='flex flex-row gap-1'>
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />
                  <StarFilledIcon color='#FFAD33' className='size-4' />

                  <p className='text-center text-sm ml-2 text-gray-500 font-medium tracking-wide'>
                    (88)
                  </p>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
