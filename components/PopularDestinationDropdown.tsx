'use client';

import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faShare } from '@fortawesome/free-solid-svg-icons';

const PopularDestinationDropdown = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const closeDropdown = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <>
      <div className='absolute right-0 top-0 pr-2 pt-2'>
        <div className='relative'>
          <div ref={dropdownRef} aria-haspopup='true' aria-expanded='true'>
            <button
              onClick={toggleDropdown}
              type='button'
              tabIndex={0}
              className='relative inline-flex min-h-[24px] min-w-[24px] cursor-pointer items-center justify-center rounded-2xl border border-solid border-transparent bg-[rgba(33,37,41,.502)] p-[3px]  text-white'
            >
              <div className='relative flex h-[14px] w-[17.5px] flex-grow justify-center text-center leading-none text-white'>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  style={{
                    color: 'white',
                    width: '17.5px',
                    height: '14px',
                  }}
                />
              </div>
            </button>
          </div>
          <div
            tabIndex={-1}
            role='menu'
            aria-hidden={true}
            className={clsx(
              'top:100% absolute left-auto right-0 z-[1000] float-left block max-h-[calc(100vh-16px)] min-w-[10rem] list-none overflow-y-auto rounded-lg border border-solid border-[#dee2e6] border-[rgba(0,0,0,.15)] bg-white bg-clip-padding px-2 text-left text-[#212529] shadow-md',
              dropdownActive ? 'block' : 'hidden'
            )}
          >
            <button className='clear-both block w-full cursor-pointer whitespace-nowrap border-none px-1 py-3 text-left text-[#212529] hover:bg-[#f3f4f5] active:bg-[#3f52e3] active:text-white active:hover:text-white'>
              <span className='mr-4'>
                <FontAwesomeIcon
                  icon={faShare}
                  style={{
                    width: '17.5px',
                    height: '14px',
                  }}
                />
              </span>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDestinationDropdown;
