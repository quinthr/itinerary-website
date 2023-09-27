'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import LoginInput from './LoginInput';

Modal.setAppElement('#modal');

const LoginModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //await login
    closeModal();
  };

  return (
    <>
      <Link
        href='#'
        className='rounded-lg px-2 py-3 text-sm font-bold leading-none hover:bg-[var(--white-hover)]'
        onClick={() => openModal()}
      >
        Log in
      </Link>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName='bg-[rgba(0,0,0,.4)] z-[1050] overflow-hidden overflow-y-scroll flex justify-center items-center absolute top-0 left-0 h-screen w-screen'
        className='pointer-events-auto relative flex w-3/4 max-w-[480px] rounded-3xl rounded-xl border-[rgba(0_0_0_0.2)] bg-white bg-clip-padding p-8 shadow-[rgba(0_0_0_0.5)] outline-0'
      >
        <div className='relative flex-auto p-8'>
          <div className='text-center'>
            <div className='pb-6'>
              <div className='m-6 text-center'>
                <div className='mb-0 text-2xl font-bold leading-none tracking-tight'>
                  Login to Wanderlog
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='w-80'>
                <form>
                  <div className='mb-2'>
                    <div className='relative flex items-center rounded-lg'>
                      <div className='pointer-events-none absolute flex h-full w-full items-center px-4 font-normal text-[#6c757d]'>
                        <div className=''>
                          <span>Email</span>
                        </div>
                      </div>
                      <LoginInput
                        maxLength={128}
                        type='email'
                        className=''
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => console.log('working')}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
