import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons'
import { FirstBanner } from '../components/imgs/first-banner'
import { MainBannerIphone } from '../components/imgs/main-banner-iphone'
import { AnotherRedControler } from '../components/imgs/another-red-controler'
import { KeyboardGamer } from '../components/imgs/keyboard-gamer'
import GamerMonitor from '../assets/gamer-monnitor.svg'
import { BoxSoundPlus } from '../components/imgs/box-sound-plus'
import { PS5 } from '../components/imgs/banner-ps5'
import BannerWomanHat from '../assets/woman-hat-banner.svg'
import { HalfBannerSoyndBox } from '../components/imgs/half-banner-soundbar'
import { HalfBannerGucci } from '../components/imgs/half-banner-gucci-perfum'
import { FastTruckCircle } from '../components/imgs/fast-truck-circle'
import { HeadphoneMarketing } from '../components/imgs/headphone-marketing'
import { ShieldProtection } from '../components/imgs/shield-protection'
import { Link } from 'react-router-dom'
// import CardPhone from '../assets/category-card-phone.svg'
// import { Box, Card, Inset, Text } from '@radix-ui/themes'

export function PrincipalPage() {
  return (
    <section className='flex flex-col justify-between items-center'>
      <span className='my-14 flex mx-auto'>
        <MainBannerIphone />
      </span>
      <div className='flex flex-col justify-center mx-auto'>
        <span className='h-10 w-36 flex flex-row items-start gap-3'>
          <span className='h-9 w-2 bg-[#872341] p-[9px] rounded-[4px]' />
          <h4 className='text-[#872341] font-medium'>Today's</h4>
        </span>

        <div className='flex flex-row gap-6 mt-14'>
          <div className='flex flex-row gap-4'>
            <span>
              <AnotherRedControler />

              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> HAVIT HV-G92 Gamepad </Link>
                </h6>

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
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> AK-900 Wired Keyboard</Link>
                </h6>

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
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> IPS LCD Gaming Monitor</Link>
                </h6>

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
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> RGB liquid CPU Cooler </Link>
                </h6>

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
      {/* Browser by category - Cards */}
      {/* <div className='flex flex-col justify-center my-10'>
        <span className='h-10 w-36 flex flex-row items-center gap-3'>
          <span className='h-9 w-2 bg-[#872341] p-[9px] rounded-[4px]' />
          <h4 className='text-[#872341] font-medium'>Categories</h4>
        </span>

        <h2 className='font-medium text-3xl my-3'>Browser by Category</h2>

        <Box width='170px' height='145px' maxHeight='145px'>
          <Card size='4' className='flex flex-col justify-center items-center'>
            <Inset className='flex justify-center items-center'>
              <img src={CardPhone} alt='category-card-phone' />
            </Inset>
            <Text as='p' size='3'>
              Phones
            </Text>
          </Card>
        </Box>
      </div> */}
      <div className='flex flex-col justify-center my-10 items-center'>
        <span className='h-10 w-36 flex flex-row items-center gap-3'>
          <span className='h-9 w-2 bg-[#872341] p-[9px] rounded-[4px]' />

          <h4 className='text-[#872341] font-medium'>This month</h4>
        </span>
        <div className='flex flex-row gap-6 mt-14'>
          <div className='flex flex-row gap-4'>
            <span>
              <AnotherRedControler />

              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> HAVIT HV-G92 Gamepad </Link>
                </h6>

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
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'>AK-900 Wired Keyboard</Link>
                </h6>

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
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'>IPS LCD Gaming Monitor</Link>
                </h6>

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
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> RGB liquid CPU Cooler</Link>
                </h6>

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
      {/* Second main banner */}
      <span className='my-14'>
        <FirstBanner />
      </span>
      {/* Grid-col 4 */}
      <div className='grid grid-cols-4 gap-4 my-10'>
        <span className='h-10 w-36 flex flex-row items-center gap-3'>
          <span className='h-9 w-2 bg-[#872341] p-[9px] rounded-[4px]' />
          <h4 className='text-[#872341] font-medium'>Our Products</h4>
        </span>

        <div className='col-span-4 grid grid-cols-4 gap-6 mt-14'>
          {/* Produto 1 */}
          <div className='flex flex-col gap-4'>
            <span>
              <AnotherRedControler />
              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> HAVIT HV-G92 Gamepad</Link>
                </h6>
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

          {/* Produto 2 */}
          <div className='flex flex-col gap-4'>
            <span>
              <KeyboardGamer />
              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'>AK-900 Wired Keyboard</Link>
                </h6>
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

          {/* Produto 3 */}
          <div className='flex flex-col gap-4'>
            <span>
              <img src={GamerMonitor} alt='' />
              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'>IPS LCD Gaming Monitor</Link>
                </h6>
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

          {/* Produto 4 */}
          <div className='flex flex-col gap-4'>
            <span>
              <img src={GamerMonitor} alt='' />
              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'>IPS LCD Gaming Monitor</Link>
                </h6>
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

          {/* Produto 5 */}
          <div className='flex flex-col gap-4'>
            <span>
              <img src={GamerMonitor} alt='' />
              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> IPS LCD Gaming Monitor</Link>
                </h6>
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

          {/* Produto 6 */}
          <div className='flex flex-col gap-4'>
            <span>
              <img src={GamerMonitor} alt='' />
              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'>IPS LCD Gaming Monitor</Link>
                </h6>
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

          {/* Produto 7 */}
          <div className='flex flex-col gap-4'>
            <span>
              <BoxSoundPlus />
              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> RGB liquid CPU Cooler</Link>
                </h6>
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

          {/* Produto 8 */}
          <div className='flex flex-col gap-4'>
            <span>
              <BoxSoundPlus />
              <span className='flex flex-col gap-1'>
                <h6 className='font-medium hover:underline'>
                  <Link to='/product'> RGB liquid CPU Cooler</Link>
                </h6>
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
      {/* Grid Banners */}
      <div>
        <span className='h-10 w-36 flex items-center gap-3'>
          <span className='h-9 w-2 bg-[#872341] rounded-[4px]' />
          <h4 className='text-[#872341] font-medium'>Featured</h4>
        </span>

        <h2 className='text-xl font-semibold mt-4'>New Arrival</h2>

        <div className='grid grid-flow-col gap-4 mt-6 items-center justify-center'>
          {/* Main PS5 Banner (occupies full column) */}
          <div className='row-span-3 items-center'>
            <PS5 />
          </div>

          {/* Woman Hat Banner (occupies two columns) */}
          <div className='row-span-2'>
            <img src={BannerWomanHat} alt='woman-hat-banner' />
          </div>

          {/* Soundbar and Gucci banners (occupy two columns below the Hat Woman Banner) */}
          <div className='col-span-1 grid grid-flow-col'>
            <div>
              <HalfBannerSoyndBox />
            </div>
            <div>
              <HalfBannerGucci />
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap w-[943px] my-10'>
        <span>
          <FastTruckCircle />
          <h5>Free and fast delivery</h5>
          <p>Free delivery for all over $140</p>
        </span>

        <span>
          <HeadphoneMarketing />
          <h5>247 customer service</h5>
          <p>Friendly 24/7 customer support</p>
        </span>

        <span>
          <ShieldProtection />
          <h5>Money back guarantee</h5>
          <p>We reurn money within 30 days</p>
        </span>
      </div>
    </section>
  )
}
