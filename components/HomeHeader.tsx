import Image from 'next/image';
import Link from 'next/link';
import HeaderSearch from './HeaderSearch';
import Notification from './Notification';
import UserDropdown from './UserDropdown';

const nav = [
  { name: 'Home', link: '/home' },
  { name: 'Plan', link: '/plan' },
  { name: 'Guides', link: '/guides' },
  { name: 'Hotel', link: '#' },
];

const HomeHeader = () => {
  return (
    <>
      <header className='flex-auto'>
        <nav className='navbar navbar-expand-sm navbar-light absolute left-0 right-0 top-0 z-50 h-16 border-b border-solid border-[#e9ecef]'>
          <div className='container-fixed-padding mx-auto h-full max-w-7xl bg-transparent px-20 align-middle'>
            <div className='row mx-0 flex h-full flex-grow flex-wrap'>
              <div className='col-lg-12 d-flex align-items-center flex w-full flex-nowrap items-center justify-between px-0'>
                <div className='flex items-center'>
                  <a
                    className='SiteNavbarBrand font-weight-bold navbar-brand weight mr-4 font-bold leading-none'
                    href='/'
                  >
                    <div>
                      <div className='d-flex align-items-center'>
                        <Image
                          src='/logoWithText.png'
                          alt='Wanderlog'
                          className='logo'
                          width={147}
                          height={28}
                        />
                      </div>
                    </div>
                  </a>
                  <div>
                    <ul className='flex flex-row'>
                      {nav.map((nav) => (
                        <li className='mr-2' key={nav.name}>
                          <Link
                            href={nav.link}
                            className='flex h-16 cursor-pointer items-center rounded-none border-b-2 border-solid border-white px-2 py-3 text-center text-sm font-bold text-[#212529] transition-all duration-200 ease-in-out'
                          >
                            {nav.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className='flex flex-row'>
                  <div className='flex items-center '>
                    <HeaderSearch />
                    <Notification />
                    <UserDropdown firstLetter='Q' />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HomeHeader;
