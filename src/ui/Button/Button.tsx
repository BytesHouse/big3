import React, { DOMAttributes } from 'react';
import style from './Button.module.css';
import classNames from 'classnames';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  typeButton?: ButtonType;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  isDisabled,
  typeButton,
  onClick,
  ...rest
}) => {
  const classnames = classNames(style.primary, className, { [style.disabled]: isDisabled });
  return (
    <button
      className={classnames}
      disabled={isDisabled}
      type={typeButton}
      onClick={onClick}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};
