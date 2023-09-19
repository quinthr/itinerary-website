const BeforeFooterText = ({
  header,
  paragraph,
}: {
  header: string;
  paragraph: string;
}) => {
  return (
    <>
      <h3 className='mb-4 mt-0 text-center text-2xl font-bold leading-none tracking-tight'>
        {header}
      </h3>
      <div className='text-center text-[#6c757d]'>{paragraph}</div>
    </>
  );
};

export default BeforeFooterText;
