'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import LoginInput from './LoginInput';
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import LoginButton from './LoginButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { signin } from '@/lib/api';
import ErrorMessage from './ErrorMessage';

Modal.setAppElement('#modal');

type Inputs = {
  username: string;
  password: string;
};

const LoginModal = ({
  modalIsOpen,
  closeModal,
  openSignupModal,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
  openSignupModal: () => void;
}) => {
  const [focusInput, setFocusInput] = useState(true);
  const [focusInputPassword, setFocusInputPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<Inputs>();

  const onClose = () => {
    closeModal();
    clearErrors();
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    clearErrors('root.ServerError');
    try {
      await signin(data);
      console.log('result');
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
                  Log in to Wanderlog
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
                          <span>Username/Email Address</span>
                        </div>
                      </div>
                      <input
                        className='loginInput'
                        type='text'
                        {...register('username', {
                          required: 'Please enter your username/email address',
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
                    <LoginButton
                      className='text-xs font-bold text-[#6c757d] hover:text-[#495057]'
                      type='button'
                      tabIndex={0}
                    >
                      Forget Password
                    </LoginButton>
                  </div>
                  <LoginButton
                    className=' font-bold text-[#495057] hover:text-[#3f52e3]'
                    type='submit'
                    tabIndex={0}
                  >
                    Login
                  </LoginButton>
                </form>
                <ErrorMessage>{errors.root?.ServerError?.message}</ErrorMessage>
                <LoginButton
                  className=' mt-4 text-[#495057] hover:text-[#3f52e3]'
                  type='button'
                  tabIndex={0}
                  onClick={() => {
                    /* Open Signup Modal */
                    clearErrors();
                    closeModal();
                    openSignupModal();
                  }}
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
