'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import LoginButton from './LoginButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { signup } from '@/lib/api';
import ErrorMessage from './ErrorMessage';

Modal.setAppElement('#modal');

type Inputs = {
  email: string;
  username: string;
  password: string;
};

const SignupModal = ({
  modalIsOpen,
  closeModal,
  openLoginModal,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
  openLoginModal: () => void;
}) => {
  const [focusInput, setFocusInput] = useState(true);
  const [focusInputUsername, setFocusInputUsername] = useState(true);
  const [focusInputPassword, setFocusInputPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<Inputs>();

  const onClose = () => {
    reset();
    setFocusInput(true);
    setFocusInputPassword(true);
    setFocusInputPassword(true);
    clearErrors();
    closeModal();
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    clearErrors('root.ServerError');
    try {
      await signup(data);
      closeModal();
      router.replace('/home');
    } catch (error: any) {
      setError('root.ServerError', {
        type: 'custom',
        message: error.message,
      });
    }
  };

  const onError = (errors: FieldErrors<Inputs>) => {
    console.log('Form errors', errors);
    setError('root.ServerError', {
      type: 'custom',
      message:
        "Some fields don't seem to be filled in correctly! Please try again.",
    });
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        overlayClassName='bg-[rgba(0,0,0,.4)] z-[1050] overflow-hidden overflow-y-scroll flex justify-center items-center absolute top-0 left-0 h-screen w-screen'
        className='pointer-events-auto relative flex w-3/4 max-w-[448px] rounded-3xl border-[#00000033] bg-white bg-clip-padding p-8 shadow-2xl outline-0'
      >
        <div className='relative flex-auto'>
          <div className='text-center'>
            <div className='pb-6'>
              <div className='m-6 text-center'>
                <div className='mb-0 text-2xl font-bold leading-none tracking-tight'>
                  Sign up to take your trip planning to the next level
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='w-80'>
                <form
                  onSubmit={handleSubmit(onSubmit, onError)}
                  autoComplete='off'
                  noValidate
                >
                  <div className='mb-2'>
                    <div className='relative flex items-center rounded-lg'>
                      <div className='pointer-events-none absolute flex h-full w-full items-center px-4 font-normal text-[#6c757d]'>
                        <div
                          className={focusInput ? '' : 'loginForm-label-focus'}
                        >
                          <span>Email</span>
                        </div>
                      </div>
                      <input
                        className='loginInput'
                        type='email'
                        {...register('email', {
                          required: 'Please enter your email address',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
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
                      />
                    </div>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                  </div>
                  <div className='mb-2'>
                    <div className='relative flex items-center rounded-lg'>
                      <div className='pointer-events-none absolute flex h-full w-full items-center px-4 font-normal text-[#6c757d]'>
                        <div
                          className={
                            focusInputUsername ? '' : 'loginForm-label-focus'
                          }
                        >
                          <span>Username</span>
                        </div>
                      </div>
                      <input
                        className='loginInput'
                        {...register('username', {
                          required: 'Please enter your username.',
                          minLength: {
                            value: 3,
                            message: 'Your username must exceed 3 characters',
                          },
                          maxLength: {
                            value: 24,
                            message:
                              'Your username must not exceed 24 characters',
                          },
                        })}
                        type='text'
                        onFocus={(e) => {
                          setFocusInputUsername(false);
                          e.target.classList.add('loginForm-input-focus');
                        }}
                        onBlur={(e) => {
                          e.target.classList.remove('loginForm-input-focus');
                          if (e.target.value === '') {
                            setFocusInputUsername(true);
                          }
                        }}
                      />
                    </div>
                    <ErrorMessage>{errors.username?.message}</ErrorMessage>
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
                      <input
                        className='loginInput'
                        {...register('password', {
                          required: 'Please enter your password.',
                          minLength: {
                            value: 3,
                            message: 'Your password must exceed 3 characters',
                          },
                        })}
                        type={showPassword ? 'text' : 'password'}
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
                      />
                      <div className='absolute right-2 flex-shrink-0'>
                        <button
                          onClick={(e) => {
                            setShowPassword(!showPassword);
                          }}
                          type='button'
                          tabIndex={0}
                          className='inline-flex h-10 min-h-[32px] w-10 min-w-[40px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl border-0 bg-white p-2 text-[#495057] hover:bg-[#f3f4f5] hover:text-[#495057]'
                        >
                          <div className='flex flex-grow justify-center text-center leading-none'>
                            {showPassword ? (
                              <FontAwesomeIcon
                                icon={faEye}
                                style={{ color: '#495057' }}
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faEyeSlash}
                                style={{ color: '#495057' }}
                              />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                  </div>
                  <ErrorMessage>
                    {errors.root?.ServerError?.message}
                  </ErrorMessage>
                  <LoginButton
                    className=' font-bold text-[#495057] hover:text-[#3f52e3]'
                    type='submit'
                    tabIndex={0}
                  >
                    Sign up with email
                  </LoginButton>
                </form>
                <LoginButton
                  className=' mt-4 text-[#495057] hover:text-[#3f52e3]'
                  type='button'
                  tabIndex={0}
                  onClick={() => {
                    /* Open Login Modal */
                    clearErrors();
                    closeModal();
                    openLoginModal();
                  }}
                >
                  Already have an account? <strong>Log in</strong>
                </LoginButton>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignupModal;
