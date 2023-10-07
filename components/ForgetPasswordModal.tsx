'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import LoginButton from './LoginButton';
import { forgetPassword } from '@/lib/api';

Modal.setAppElement('#modal');

type Inputs = {
  email: string;
};

const ForgetPasswordModal = ({
  modalIsOpen,
  closeModal,
  openLoginModal,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
  openLoginModal: () => void;
}) => {
  const [focusInput, setFocusInput] = useState(true);
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
    closeModal();
    clearErrors();
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    clearErrors('root.ServerError');
    try {
      await forgetPassword(data);
      closeModal();
      router.replace('/home');
    } catch (error: any) {
      console.log(error);
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
                  Reset Password
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
                          <span>Email Address</span>
                        </div>
                      </div>
                      <input
                        className='loginInput'
                        type='text'
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
                  <LoginButton
                    className=' font-bold text-[#495057] hover:text-[#3f52e3]'
                    type='submit'
                    tabIndex={0}
                  >
                    Reset Password
                  </LoginButton>
                </form>
                <ErrorMessage>{errors.root?.ServerError?.message}</ErrorMessage>
                <LoginButton
                  className='font-bold text-[#6c757d] hover:text-[#495057]'
                  type='button'
                  tabIndex={0}
                  onClick={() => {
                    /* Open Signup Modal */
                    clearErrors();
                    closeModal();
                    openLoginModal();
                  }}
                >
                  Wait, I remember it now!
                </LoginButton>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ForgetPasswordModal;
