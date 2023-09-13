import Image from 'next/image';

export default function Header() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-transparent'>
      <div className='container-fixed-padding'>
        <div className='row flex-grow-1 mx-0'>
          <div className='col-lg-12 justify-content-between d-flex align-items-center flex-nowrap px-0'>
            <a
              className='SiteNavbarBrand font-weight-bold navbar-brand'
              href='/'
            >
              <div>
                <div className='d-flex align-items-center'>
                  <Image
                    src='/logoWithText.png'
                    alt='Wanderlog'
                    className='logo'
                    width={100}
                    height={24}
                    priority
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
