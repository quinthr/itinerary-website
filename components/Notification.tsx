import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const Notification = () => {
  return (
    <>
      <div className='mr-1'>
        <div>
          <li className='list-none'>
            <button className='color-[#212529] h-12 w-12 cursor-pointer items-center justify-center rounded-3xl border-0 bg-transparent px-2 transition-all duration-200 ease-in-out'>
              <div className='relative m-auto h-[17px] w-[30px] items-center text-sm'>
                <FontAwesomeIcon icon={faBell} style={{ color: '#212529' }} />
              </div>
            </button>
          </li>
        </div>
      </div>
    </>
  );
};

export default Notification;
