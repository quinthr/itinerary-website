const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='mt-1 text-xs font-normal text-red-600'>{children}</div>
    </>
  );
};

export default ErrorMessage;
