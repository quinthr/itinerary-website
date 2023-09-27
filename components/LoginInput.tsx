import clsx from 'clsx';

const LoginInput = ({ className, ...props }: { className: String }) => {
  return (
    <>
      <input
        className={clsx(
          'color-[#495057] block h-14 w-full text-ellipsis rounded-lg border-2 border-solid border-[#dee2e6] bg-white bg-clip-padding px-4 pb-4 pt-7 text-base font-normal leading-6 shadow-none',
          className
        )}
        {...props}
      />
    </>
  );
};

export default LoginInput;
