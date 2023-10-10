import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const MainFeature = ({
  header,
  buttonText,
  emptyText,
  highlightText,
  className,
}: {
  header: string;
  buttonText: string;
  emptyText: string;
  highlightText: string;
  className: string;
}) => {
  return (
    <>
      <div
        className={clsx(
          'mb-0 box-border flex w-full flex-col items-end rounded-lg bg-[#f3f4f5] p-6',
          className
        )}
      >
        <div className='mb-6 flex w-full justify-between'>
          <div className='text-2xl font-bold'>{header}</div>
          <Link
            href='#'
            className='flex h-[40px] min-h-[32px] min-w-[40px] cursor-pointer items-center justify-start overflow-hidden rounded-3xl border-[1px] border-solid border-[##e9ecef] bg-[#e9ecef] p-2 pl-3 pl-4 transition-colors hover:bg-[#dee2e6]'
          >
            <div className='inline-flex h-[14px] w-[17.5px] items-center justify-center text-center leading-none text-[#212529]'>
              <FontAwesomeIcon icon={faPlus} style={{ color: '#212529' }} />
            </div>
            <div className='min-w-0 flex-shrink flex-grow'>
              <div className='flex min-w-0 items-center justify-center text-sm font-bold'>
                <span className='ml-1 min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap'>
                  {buttonText}
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className='w-full'>
          <div>
            {emptyText}
            <Link href='#' className='font-bold text-[#f75940]'>
              {highlightText}
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFeature;
