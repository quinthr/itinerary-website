import clsx from 'clsx';

const HeaderText1 = ({
  content,
  className,
}: {
  content: string;
  className: string;
}) => {
  return (
    <>
      <h2
        className={clsx(
          'text-4xl font-bold leading-none tracking-tight text-[var(--black)]',
          className
        )}
      >
        {content}
      </h2>
    </>
  );
};

export default HeaderText1;
