const SubtitleText = ({ content }: { content: string }) => {
  return (
    <>
      <div className='flex flex-wrap text-left'>
        <div className='max-w-[83%]'>
          <h3 className='mb-6 text-[1.75rem] font-normal leading-8 tracking-tight text-[var(--grey)]'>
            {content}
          </h3>
        </div>
      </div>
    </>
  );
};

export default SubtitleText;
