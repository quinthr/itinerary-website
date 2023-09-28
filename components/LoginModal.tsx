'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import LoginInput from './LoginInput';
import * as React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import LoginButton from './LoginButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#modal');

type Inputs = {
  username: string;
  password: string;
};

const LoginModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [focusInput, setFocusInput] = useState(true);
  const [focusInputPassword, setFocusInputPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
        className='pointer-events-auto relative flex w-3/4 max-w-[480px] rounded-3xl border-[#00000033] bg-white bg-clip-padding p-8 shadow-2xl outline-0'
      >
        <div className='relative flex-auto p-8'>
          <div className='text-center'>
            <div className='pb-6'>
              <div className='m-6 text-center'>
                <div className='mb-0 text-2xl font-bold leading-none tracking-tight'>
                  Log in to Wanderlog
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='w-80'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='mb-2'>
                    <div className='relative flex items-center rounded-lg'>
                      <div className='pointer-events-none absolute flex h-full w-full items-center px-4 font-normal text-[#6c757d]'>
                        <div
                          className={focusInput ? '' : 'loginForm-label-focus'}
                        >
                          <span>Email</span>
                        </div>
                      </div>
                      <LoginInput
                        type='email'
                        onFocus={(e) => {
                          setFocusInput(false);
                          e.target.classList.add('loginForm-input-focus');
                        }}
                        onBlur={(e) => {
                          e.target.classList.remove('loginForm-input-focus');
                          if (e.target.value === '') {
                            setFocusInput(true);
                          }
                        }}
                        className=''
                        {...(register('username'),
                        { required: true, maxLength: 128 })}
                        aria-invalid={errors.username ? 'true' : 'false'}
                      />
                      {errors.username?.type === 'required' && (
                        <p role='alert'>Username is required</p>
                      )}
                    </div>
                  </div>
                  <div className='mb-2'>
                    <div className='relative flex items-center rounded-lg'>
                      <div className='pointer-events-none absolute flex h-full w-full items-center px-4 font-normal text-[#6c757d]'>
                        <div
                          className={
                            focusInputPassword ? '' : 'loginForm-label-focus'
                          }
                        >
                          <span>Password</span>
                        </div>
                      </div>
                      <LoginInput
                        type='password'
                        onFocus={(e) => {
                          e.target.classList.add('loginForm-input-focus');
                          setFocusInputPassword(false);
                        }}
                        onBlur={(e) => {
                          e.target.classList.remove('loginForm-input-focus');
                          if (e.target.value === '') {
                            setFocusInputPassword(true);
                          }
                        }}
                        className=''
                        {...(register('password'), { required: true })}
                        aria-invalid={errors.password ? 'true' : 'false'}
                      />
                      {errors.password?.type === 'required' && (
                        <p role='alert'>Password is required</p>
                      )}
                      <div className='absolute right-2 flex-shrink-0'>
                        <button
                          type='button'
                          tabIndex={0}
                          className='inline-flex h-10 min-h-[32px] w-10 min-w-[40px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl border-0 bg-white p-2 text-[#495057]'
                        >
                          <div className='flex flex-grow justify-center text-center leading-none'>
                            <FontAwesomeIcon
                              icon={faEyeSlash}
                              style={{ color: '#495057' }}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                    <LoginButton
                      className='text-[#6c757d]'
                      type='button'
                      tabIndex={0}
                    >
                      Forget Password
                    </LoginButton>
                  </div>
                  <LoginButton
                    className=' text-[#3f52e3]'
                    type='submit'
                    tabIndex={0}
                  >
                    Login
                  </LoginButton>
                </form>
                <LoginButton
                  className=' mt-4 text-[#495057]'
                  type='button'
                  tabIndex={0}
                >
                  Don&apos;t have an account yet? <strong>Sign up</strong>
                </LoginButton>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
