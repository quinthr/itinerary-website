import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const buttonClasses = cva(
  [
    'items-center',
    'border-solid',
    'inline-flex',
    'min-h-[32px]',
    'border-1',
    'h-14',
    'py-3',
    'min-w-[56px]',
    'px-6',
    'pointer',
    'rounded-[100px]',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-[var(--orange)]',
          'border-[var(--orange)]',
          'hover:bg-[var(--orange-hover)]',
          'text-white',
        ],

        secondary: [
          'bg-[var(--light-orange)]',
          'border-[var(--light-orange)]',
          'hover:bg-[var(--light-orange-hover)]',
          'text-[var(--orange)]',
        ],
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

const Button: FC<ButtonProps> = ({ children, className, intent, ...props }) => {
  return (
    <>
      <button className={buttonClasses({ intent, className })} {...props}>
        <div className='flex-shrink-1 flex-grow-1 min-w-0'>
          <div className='flex min-w-0 items-center justify-center text-base font-bold'>
            <span className='overflow-hidden text-ellipsis whitespace-nowrap'>
              {children}
            </span>
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
