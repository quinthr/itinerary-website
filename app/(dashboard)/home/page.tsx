import HeaderText1 from '@/components/HeaderText1';
import AnchorButton from '@/components/AnchorButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MainFeature from '@/components/MainFeature';
import Image from 'next/image';
import PopularDestination from '@/components/PopularDestination';

const DashboardHome = () => {
  return (
    <>
      <div className='flex grow flex-col pb-[60px] pt-16'>
        <div className='mx-auto w-full max-w-[1140px] px-[15px] pt-6'>
          <div>
            <div className='mb-6 flex items-center justify-between'>
              <HeaderText1
                className=''
                content='Recently viewed and upcoming'
              />
              <AnchorButton
                intent='primary'
                className='inline-flex h-10 min-w-[40px] px-4'
              >
                <div className='inline-flex items-center justify-center text-center leading-none text-white'>
                  <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
                </div>
                <span className='ml-1 text-sm'>Plan a new trip</span>
              </AnchorButton>
            </div>
            <div className='text-[#212529] '>
              You haven&apos;t created anything yet.{' '}
              <Link
                href='/plan/create/plan'
                className='font-bold text-[#f75940]'
              >
                Plan a new trip
              </Link>
              .
            </div>
          </div>
        </div>
        <div className='mx-auto w-full max-w-[1140px] px-[15px]'>
          <div className='mx-auto my-20 w-full'>
            <div className='flex flex-row'>
              <MainFeature
                className='mr-4'
                header='Your trips'
                buttonText='Plan new trip'
                emptyText="You don't have any trip plans yet."
                highlightText=' Plan a new trip'
              />
              <MainFeature
                className=''
                header='Your guides'
                buttonText='Create new guide'
                emptyText="You don't have any guides yet."
                highlightText=' Create a new guide'
              />
            </div>
          </div>
          <div className='mb-6 text-4xl font-bold'>Explore</div>
          <div>
            <div className='mb-4 flex items-end justify-between'>
              <div className='text-2xl font-bold'>Popular Destinations</div>
            </div>
            <div className='-m-2'>
              <div className='relative'>
                <div className='transition-height will-change-height relative h-auto w-full outline-none delay-0 duration-300 ease-in-out'>
                  <div className='flex w-[60%] text-left'>
                    <PopularDestination />
                    <PopularDestination />
                    <PopularDestination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
