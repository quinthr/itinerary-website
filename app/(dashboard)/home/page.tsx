import HeaderText1 from '@/components/HeaderText1';
import AnchorButton from '@/components/AnchorButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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
            <div className='flex flex-row'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
