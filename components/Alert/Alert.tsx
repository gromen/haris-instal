import { clsx } from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCircleInfo,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export interface AlertProps {
  variant?: 'success' | 'error';
  message?: string;
  onClickCloseAlert: () => void;
}

const Alert = forwardRef(function Alert(
  { variant, message, onClickCloseAlert }: AlertProps,
  ref
) {
  const alertRef = useRef<HTMLParagraphElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToView() {
        if (alertRef.current) {
          alertRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      },
    };
  });

  const classes = clsx([
    'relative p-4 my-4 border bg-opacity-30 rounded flex items-center animate-show font-semibold',
    { 'border-[green] bg-[green] text-[green]': variant === 'success' },
    { 'border-[red] bg-[red] text-[red]': variant === 'error' },
  ]);
  const classesIcon = clsx([
    'pr-4 text-2xl',
    { 'text-[green]': variant === 'success' },
    { 'text-[red]': variant === 'error' },
  ]);
  const classesIconClose = clsx([
    'p-3 text-2xl',
    { 'text-[green]': variant === 'success' },
    { 'text-[red]': variant === 'error' },
  ]);

  return (
    <p className={classes} ref={alertRef}>
      <FontAwesomeIcon
        icon={variant === 'success' ? faCircleInfo : faCircleXmark}
        className={classesIcon}
      />
      {message}
      <span className="absolute bottom-0 right-0">
        <FontAwesomeIcon
          icon={faXmark}
          className={classesIconClose}
          role="button"
          onClick={onClickCloseAlert}
        />
      </span>
    </p>
  );
});
export default Alert;
