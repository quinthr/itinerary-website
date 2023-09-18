import Image from 'next/image';

const FeatureBox = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className='relative w-full max-w-[33.33%] px-4'>
        <div className='mb-6 block items-center'>
          <div className='mb-4 flex flex-row justify-center overflow-hidden px-0'>
            <div>
              <Image
                src={image}
                alt='Feature'
                className='mb-4 max-w-[260px] translate-y-0 opacity-100 transition-all duration-200 ease-in-out'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className='relative flex w-full max-w-full flex-col px-3'>
            <h3 className='mb-4 text-center text-[22px] font-bold leading-none tracking-tight text-[var(--black)]'>
              {title}
            </h3>
            <div className='text-center text-base font-normal leading-6 tracking-tight text-[#6c757d]'>
              {description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureBox;
