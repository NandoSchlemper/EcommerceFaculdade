import {
  TextField,
  Box,
  Text,
  Flex,
  Checkbox,
  Separator,
  RadioGroup,
} from '@radix-ui/themes'
import { CarMonitor } from '../components/imgs/car-monitor'
import { CartGamepad } from '../components/imgs/cart-gamepad'

export function BillingPage() {
  return (
    <section className='flex flex-col items-center mx-auto p-10 my-10'>
      <h1 className='font-medium tracking-wider text-3xl text-start'>
        Billing Details
      </h1>

      <div className='max-h-[892px] w-[1170px] flex justify-between items-center my-10'>
        <div className='max-h-[814px] w-[470px] flex flex-col gap-11'>
          <Box className='flex flex-col gap-3'>
            <Text className='text-zinc-400'>First Name*</Text>

            <TextField.Root
              variant='soft'
              className='text-lg w-full h-12 bg-zinc-50 hover:border-zinc-100 hover:border text-zinc-400'
            />
          </Box>
          <Box className='flex flex-col gap-3'>
            <Text className='text-zinc-400'>Company Name</Text>

            <TextField.Root
              variant='soft'
              className='text-lg w-full h-12 bg-zinc-50 hover:border-zinc-100 hover:border text-zinc-400'
            />
          </Box>
          <Box className='flex flex-col gap-3'>
            <Text className='text-zinc-400'>Street Address*</Text>

            <TextField.Root
              variant='soft'
              className='text-lg w-full h-12 bg-zinc-50 hover:border-zinc-100 hover:border text-zinc-400'
            />
          </Box>
          <Box className='flex flex-col gap-3'>
            <Text className='text-zinc-400'>
              Apartment, floor, etc. (optional)
            </Text>

            <TextField.Root
              variant='soft'
              className='text-lg w-full h-12 bg-zinc-50 hover:border-zinc-100 hover:border text-zinc-400'
            />
          </Box>
          <Box className='flex flex-col gap-3'>
            <Text className='text-zinc-400'>Town/City*</Text>

            <TextField.Root
              variant='soft'
              className='text-lg w-full h-12 bg-zinc-50 hover:border-zinc-100 hover:border text-zinc-400'
            />
          </Box>
          <Box className='flex flex-col gap-3'>
            <Text className='text-zinc-400'>Phone Number*</Text>

            <TextField.Root
              variant='soft'
              className='text-lg w-full h-12 bg-zinc-50 hover:border-zinc-100 hover:border text-zinc-400'
            />
          </Box>
          <Box className='flex flex-col gap-3'>
            <Text className='text-zinc-400'>Email Address*</Text>

            <TextField.Root
              variant='soft'
              className='text-lg w-full h-12 bg-zinc-50 hover:border-zinc-100 hover:border text-zinc-400'
            />
          </Box>

          <Text as='label' size='4'>
            <Flex gap='2'>
              <Checkbox color='ruby' size='3' />
              Save this information for faster check-out next time
            </Flex>
          </Text>
        </div>

        <div className='w-[527px] h-[600px]'>
          <div className='w-[425px] flex flex-col justify-stretch mb-8'>
            <ul className='w-full flex flex-col gap-4'>
              <li className='flex justify-between items-start'>
                <span className='flex items-center gap-4'>
                  <CarMonitor />

                  <p>H1 Gamepad</p>
                </span>

                <p>$650</p>
              </li>

              <li className='flex justify-between items-start'>
                <span className='flex items-center gap-4'>
                  <CartGamepad />

                  <p>LCD Monitor</p>
                </span>

                <p>$1100</p>
              </li>

              <li className='flex justify-between items-start w-full'>
                <p>Subtotal:</p>
                <p>$1750</p>
              </li>

              <Separator size='4' />

              <li className='flex justify-between items-start w-full'>
                <p>Shipping:</p>
                <p>Free</p>
              </li>

              <Separator size='4' />

              <li className='flex justify-between items-start w-full'>
                <p>Total:</p>
                <p>$1750</p>
              </li>

              <li>
                <Flex asChild>
                  <Flex asChild gap='4'>
                    <RadioGroup.Root defaultValue='1' color='gray'>
                      <Text as='label' size='4'>
                        <Flex gap='3'>
                          <RadioGroup.Item value='1' /> Bank
                        </Flex>
                      </Text>

                      <Text as='label' size='4'>
                        <Flex gap='3'>
                          <RadioGroup.Item value='2' /> Cash on delivery
                        </Flex>
                      </Text>
                    </RadioGroup.Root>
                  </Flex>
                </Flex>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-8'>
            <div className='w-full flex justify-between items-center h-14 gap-3'>
              <Box>
                <TextField.Root
                  variant='soft'
                  className='text-lg w-72 h-14 bg-zinc-100 hover:border-zinc-200 hover:border'
                  placeholder='Coupon Code'
                />
              </Box>

              <button
                type='button'
                className='bg-[#872341] w-52 h-14 hover:bg-[#9c294c] text-white rounded-md text-lg'
              >
                Apply Coupon
              </button>
            </div>

            <button
              type='button'
              className='bg-[#872341] w-48 h-14 hover:bg-[#9c294c] text-white rounded-md text-lg'
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
