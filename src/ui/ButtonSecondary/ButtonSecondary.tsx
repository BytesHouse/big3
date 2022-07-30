import React from 'react';
import style from './ButtonSecondary.module.css';

interface IButtonSecondaryProps {
  onClick?: () => void;
}

const ButtonSecondary = (props: IButtonSecondaryProps) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className={style.secondary}>
      Cancel
    </button>
  );
};

export default ButtonSecondary;
