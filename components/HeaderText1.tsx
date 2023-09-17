const HeaderText1 = ({ content }: { content: string }) => {
  return (
    <>
      <div className='flex flex-wrap text-left'>
        <h1 className='mb-3 max-w-[75%] text-4xl font-bold leading-none tracking-tight text-[var(--black)]'>
          {content}
        </h1>
      </div>
    </>
  );
};

export default HeaderText1;
