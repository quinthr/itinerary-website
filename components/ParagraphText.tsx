const ParagraphText = ({ content }: { content: string }) => {
  return (
    <>
      <p className='mb-4 text-2xl font-normal leading-7 tracking-tight text-[var(--grey)]'>
        {content}
      </p>
    </>
  );
};

export default ParagraphText;
