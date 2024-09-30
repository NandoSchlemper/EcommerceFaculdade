import { Box, Flex, TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Heart, ShoppingCart, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Input() {
  const navigate = useNavigate()
  const handleCart = () => navigate('/cart')

  return (
    <div className='flex flex-row justify-between items-center gap-8'>
      <Box width='243px' height='38px'>
        <TextField.Root
          variant='soft'
          className='text-sm'
          placeholder='What are you looking for?'
          size='3'
        >
          <Flex className='items-center justify-center p-2'>
            <MagnifyingGlassIcon width={29} height={28} color='#797979' />
          </Flex>
        </TextField.Root>
      </Box>

      <div className='flex flex-row justify-between gap-8'>
        <Heart size={26} />
        <button type='button' onClick={handleCart}>
          <ShoppingCart size={26} />
        </button>
        <User size={26} />
      </div>
    </div>
  )
}
