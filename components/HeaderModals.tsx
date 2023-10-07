'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import Link from 'next/link';
import ForgetPasswordModal from './ForgetPasswordModal';

const HeaderModals = () => {
  const [loginModalIsOpen, setLoginIsOpen] = useState(false);
  const openLoginModal = () => {
    setLoginIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeLoginModal = () => {
    setLoginIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const [signupModalIsOpen, setSignupIsOpen] = useState(false);
  const openSignupModal = () => {
    setSignupIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeSignupModal = () => {
    setSignupIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const [forgetModalIsOpen, setForgetIsOpen] = useState(false);
  const openForgetModal = () => {
    setForgetIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeForgetModal = () => {
    setForgetIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className='flex flex-row items-center'>
        <li className='mr-4'>
          <Link
            href='#'
            className='rounded-lg px-2 py-3 text-sm font-bold leading-none hover:bg-[var(--white-hover)]'
            onClick={() => openLoginModal()}
          >
            Log in
          </Link>
          <LoginModal
            modalIsOpen={loginModalIsOpen}
            closeModal={closeLoginModal}
            openSignupModal={openSignupModal}
            openForgetModal={openForgetModal}
          />
        </li>
        <li className='mr-4'>
          <Link
            href='#'
            className='leading-nones rounded-3xl bg-[var(--orange)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--orange-hover)]'
            onClick={() => openSignupModal()}
          >
            Sign up
          </Link>
          <SignupModal
            modalIsOpen={signupModalIsOpen}
            closeModal={closeSignupModal}
            openLoginModal={openLoginModal}
          />
        </li>
        <ForgetPasswordModal
          modalIsOpen={forgetModalIsOpen}
          closeModal={closeForgetModal}
          openLoginModal={openLoginModal}
        />
      </div>
    </>
  );
};

export default HeaderModals;
