import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import PopularDestinationDropdown from './PopularDestinationDropdown';

const PopularDestination = () => {
  return (
    <>
      <div className='h-auto w-[33.33%] flex-1 px-2 py-0 opacity-100'>
        <div className='relative cursor-pointer flex-col'>
          <div className='flex flex-col'>
            <Link href='#' className='block rounded-lg'>
              <span className='relative inline-block w-full'>
                <Image
                  src='/cairo.jpeg'
                  alt='Cairo'
                  className='align-middle'
                  width={66}
                  height={100}
                  layout='responsive'
                />
                <span className='absolute bottom-0 left-0 right-0 top-0 block'>
                  <div className='h-full w-full overflow-hidden rounded-lg'>
                    <Image
                      src='/cairo.jpeg'
                      alt='Cairo'
                      className='rounded-lg object-cover align-middle transition-transform delay-300'
                      width={100}
                      height={100}
                      layout='responsive'
                    />
                  </div>
                </span>
              </span>
            </Link>
            <div className='mt-2'>
              <div className='mb-1 flex items-center'>
                <Link
                  href='#'
                  className='block overflow-hidden text-ellipsis whitespace-nowrap text-lg text-[#212529]'
                >
                  What to See in Queenstown. A Saber Viajando
                </Link>
              </div>
              <div className='mt-1 line-clamp-2 overflow-hidden text-ellipsis text-[#6c757d]'>
                My trip plan looking for information in google maps, trip
                advisor, en.wikipedia.org, https://www.holidify.com/,
                https://www.kiwibird.co.nz/, https://www.queenstownnz.co.nz/ and
                https://www.dangerousroads.org
              </div>
            </div>
          </div>
          <PopularDestinationDropdown />
          <div className='mt-4 flex h-full'>
            <div className='relative'>
              <Link href='#' className='text-[#212529]'>
                <span className='flex h-7 w-7 min-w-[28px] items-center justify-center rounded-xl border-none bg-[#adb5bd] py-2 text-xs font-bold leading-3 text-white'>
                  Q
                </span>
              </Link>
            </div>
            <div className='mx-2 overflow-hidden text-ellipsis whitespace-nowrap'>
              <Link
                href='#'
                className='flex w-[60%] overflow-hidden text-ellipsis whitespace-nowrap text-left text-[#212529]'
              >
                Quinth Razuman
              </Link>
            </div>
            <div className='ml-auto flex items-center'>
              <div className='flex items-center whitespace-nowrap text-left'>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    color: 'black',
                    width: '16px',
                    height: '16x',
                  }}
                />
                <div className='ml-1'>0</div>
              </div>
              <div className='ml-4 flex items-center whitespace-nowrap text-left'>
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    color: 'black',
                    width: '16px',
                    height: '16x',
                  }}
                />
                <div className='ml-1'>0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDestination;
