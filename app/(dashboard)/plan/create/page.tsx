import HeaderText1 from '@/components/HeaderText1';

const CreatePlanPage = () => {
  return (
    <>
      <div className='flex grow flex-col pb-[60px] pt-16'>
        <div className='mx-auto w-full max-w-[1140px] px-4 py-12'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='relative ml-[25%] w-1/2 w-full max-w-[50%] flex-shrink-0 flex-grow-0 px-4 text-center'>
              <div className='text-center'>
                <HeaderText1 className='' content='Plan a new trip' />
              </div>
              <div className='pt-6'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePlanPage;
