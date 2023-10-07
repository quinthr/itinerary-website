const UserDropdown = ({ firstLetter }: { firstLetter: string }) => {
  return (
    <>
      <div className='relative'>
        <div className='box-border flex items-center'>
          <button className='cursor-pointer border-0 bg-transparent p-0 leading-none'>
            <span className='flex h-10 w-10 min-w-[40px] items-center justify-center rounded-[20px] border-none bg-[#adb5bd] px-0 py-5  text-xl font-bold leading-5 text-white'>
              <div>{firstLetter}</div>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDropdown;
