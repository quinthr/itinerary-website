import Button from '@/components/Button';
import AnchorButton from '@/components/AnchorButton';
import HeaderText1 from '@/components/HeaderText1';
import HeroLanding from '@/components/HeroLanding';
import SubtitleText from '@/components/SubtitleText';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <HeroLanding />
      <div className='flex-grow-1 py-16'>
        <div className='mx-auto min-h-[calc(50.4vw-64px)] w-full max-w-7xl px-20'>
          <div className='mx-0 flex flex-wrap'>
            <div className='z-[5] flex max-w-[50%] flex-col items-start pt-32'>
              <HeaderText1 content="You'll never travel without our trip planner again" />
              <SubtitleText content='Build, organize, and map your itineraries in a free travel app designed for vacations & road trips' />
              <div className='mt-6'>
                <div className='flex'>
                  <AnchorButton intent='primary'>Start Planning</AnchorButton>
                  <div className='relative ml-4'>
                    <div className='relative'>
                      <Button intent='secondary'>Get the app</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
