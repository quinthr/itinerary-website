import clsx from 'clsx';
import Image from 'next/image';

const CardAnimation = ({
  image,
  className,
  first,
}: {
  image: string;
  className: string;
  first: boolean;
}) => {
  return (
    <>
      <div className={clsx('relative', className)}>
        <div className='w-full pt-4 drop-shadow-[0_24px_48px_rgba(0,0,0,.1)]'>
          <Image
            src={image}
            alt='Desination Card'
            className='rounded-xl align-middle'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        {first ? (
          <Image
            src='/LandingPageProductAnimation__dragHandle.png'
            alt='Hand icon'
            className='absolute -bottom-3 left-[80%] z-[4] align-middle'
            width={24}
            height={24}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default CardAnimation;
