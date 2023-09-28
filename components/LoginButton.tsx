import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const buttonClasses = cva([
  'min-h-[24px]',
  'min-w-[24px]',
  'cursor-pointer',
  'border-[1px]',
  'border-transparent',
  'bg-transparent',
  'p-1',
  'px-4',
]);

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {
  type?: 'button' | 'submit' | 'reset';
}

const LoginButton: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <>
      <button className={buttonClasses({ className })} {...props}>
        <div className='flex-shrink flex-grow'>
          <div className='flex items-center justify-center text-xs font-bold'>
            <span className='flex-shrink overflow-hidden text-ellipsis whitespace-nowrap'>
              {children}
            </span>
          </div>
        </div>
      </button>
    </>
  );
};

export default LoginButton;
