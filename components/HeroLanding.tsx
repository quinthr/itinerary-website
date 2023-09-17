import Image from 'next/image';

const HeroLanding = () => {
  return (
    <div className='pointer-events-none absolute top-0 min-h-[46vw] w-full overflow-hidden'>
      <Image
        src='/LandingPageHero__path.png'
        alt='Landing Hero Path'
        className='absolute z-[6] align-middle opacity-100'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      />
      <Image
        src='/LandingPageHero__foreground.png'
        alt='Landing Hero Foreground'
        className='absolute z-[2] align-middle opacity-100'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="absolute z-[4] h-full w-full bg-[url('/LandingPageHero__girl.png')] bg-contain bg-fixed bg-top bg-no-repeat"></div>
      <div className="absolute h-full w-full bg-[url('/LandingPageHero.jpg')] bg-contain bg-fixed bg-top bg-no-repeat"></div>
      <Image
        src='/LandingPageHero__sameSize.png'
        alt='Landing Hero Foreground'
        className='invisible align-middle'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default HeroLanding;
