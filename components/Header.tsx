import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex-auto'>
      <nav className='navbar navbar-expand-sm navbar-light absolute left-0 right-0 top-0 z-50 h-16'>
        <div className='container-fixed-padding mx-auto h-full max-w-7xl bg-transparent px-20 align-middle'>
          <div className='row mx-0 flex h-full flex-grow flex-wrap'>
            <div className='col-lg-12 d-flex align-items-center flex w-full flex-nowrap items-center justify-between px-0'>
              <a
                className='SiteNavbarBrand font-weight-bold navbar-brand weight font-bold leading-none'
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
              <ul className='flex flex-row'>
                <div className='flex flex-row items-center'>
                  <li className='mr-4'>
                    <Link
                      href='#'
                      className='rounded-lg px-2 py-3 text-sm font-bold leading-none hover:bg-[var(--white-hover)]'
                    >
                      Log in
                    </Link>
                  </li>
                  <li className='mr-4'>
                    <Link
                      href='#'
                      className='leading-nones rounded-3xl bg-[var(--orange)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--orange-hover)]'
                    >
                      Sign up
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
