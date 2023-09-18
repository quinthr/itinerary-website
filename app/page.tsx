import Button from '@/components/Button';
import AnchorButton from '@/components/AnchorButton';
import HeaderText1 from '@/components/HeaderText1';
import HeroLanding from '@/components/HeroLanding';
import SubtitleText from '@/components/SubtitleText';
import Image from 'next/image';
import ParagraphText from '@/components/ParagraphText';
import CardAnimation from '@/components/CardAnimation';
import FeatureBox from '@/components/FeatureBox';

const features = [
  {
    image: '/MainFeatureTiles__addPlaces.png',
    title: 'Add places from guides with 1 click',
    description:
      'We crawled the web so you don’t have to. Easily save mentioned places.',
  },
  {
    image: '/MainFeatureTiles__collaborate.png',
    title: 'Collaborate with friends in real time',
    description:
      'Plan along with your friends with live syncing and collaborative editing.',
  },
  {
    image: '/MainFeatureTiles__import.png',
    title: 'Import flight and hotel reservations',
    description:
      'Connect or forward your emails to get them magically added into your trip plan.',
  },
  {
    image: '/LandingPageProFeatureTiles__optimize.png',
    title: 'Optimize your route',
    description:
      'Perfect for road trips and saving $$$ on gas! Get the best route auto-rearranged.',
  },
  {
    image: '/MainFeatureTiles__recommendations.png',
    title: 'Get personalized suggestions',
    description:
      'Find the best places to visit with smart recommendations based on your itinerary.',
  },
  {
    image: '/MainFeatureTiles__export.png',
    title: 'Export your places to Google Maps',
    description: 'Synced automatically, for when plans change.',
  },
];

export default function Home() {
  return (
    <main className=''>
      <HeroLanding />
      <div className='grow-1 py-16'>
        <div className='mx-auto min-h-[calc(50.4vw-64px)] w-full max-w-7xl px-20'>
          <div className='mx-0 flex flex-wrap'>
            <div className='z-[5] flex max-w-[50%] flex-col items-start pt-32'>
              <div className='flex flex-wrap text-left'>
                <HeaderText1
                  content="You'll never travel without our trip planner again"
                  className='mb-3 max-w-[75%]'
                />
              </div>
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
      <div className='grow-1 z-[4] mx-auto mt-32 w-full max-w-7xl px-20'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='flex w-full max-w-[58.33%] flex-row justify-center px-6'>
            <div className='relative w-full'>
              <Image
                src='/LandingPageProductAnimation__background.jpg'
                alt='Landing Page Map'
                className='z-0 max-w-[960px] rounded-[4%/6%] align-middle drop-shadow'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
              <div className='z-1 absolute bottom-0 left-[6%] top-[calc(10%-16px)] flex w-[52%] flex-col'>
                <CardAnimation
                  image='/LandingPageProductAnimation__card0.jpg'
                  className='z-[3] animate-[CardAnimation0_5s_linear_2s_infinite]'
                  first={true}
                />
                <CardAnimation
                  image='/LandingPageProductAnimation__card1.jpg'
                  className='animate-[CardAnimation1_5s_linear_2s_infinite]'
                  first={false}
                />
                <CardAnimation
                  image='/LandingPageProductAnimation__card2.jpg'
                  className='animate-[CardAnimation2_5s_linear_2s_infinite]'
                  first={false}
                />
                <CardAnimation
                  image='/LandingPageProductAnimation__card3.jpg'
                  className=''
                  first={false}
                />
              </div>
            </div>
          </div>
          <div className='relative w-full max-w-[33.33%] px-4'>
            <HeaderText1
              content='Your itinerary and your map in one view'
              className='my-4'
            />
            <ParagraphText content='No more switching between different apps, tabs, and tools to keep track of your travel plans.' />
          </div>
        </div>
      </div>
      <div className='grow-1 z-[4] mx-auto mb-[120px] mt-52 w-full max-w-7xl px-20'>
        <HeaderText1
          content='Features to replace all your other tools'
          className='mb-12 text-center'
        />
        <div className='-mx-4 flex flex-wrap justify-center'>
          {features.map((feature, index) => (
            <FeatureBox
              image={feature.image}
              title={feature.title}
              description={feature.description}
              key={`feature-${index}`}
            />
          ))}
        </div>
      </div>
      <div className='z-[4] mx-auto w-full max-w-7xl flex-grow border-t-[1px] border-solid border-[#dee2e6] px-20 py-[120px]'>
        <div className='mt-30 z-[4]'>
          <div className='relative w-full max-w-full px-4'>
            <HeaderText1
              content='Ready to plan your trip in half the time?'
              className='mb-4 text-center'
            />
            <div className='mt-6 flex justify-center'>
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
    </main>
  );
}
