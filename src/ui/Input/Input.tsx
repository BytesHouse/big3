import React, { useState } from 'react';
import style from './Input.module.css';
import { input } from '../../types/input';

const Input = (props: input) => {
  const { id, title, onChange, name } = props;
  const [view, setView] = useState(props.type);

  const togglePassword = () => {
    if (view === 'password') {
      setView('text');
    } else {
      setView('password');
    }
  };

  return (
    <div>
      <div className={style.wrapper}>
        <label htmlFor={title}>
          <div className={style.label}>{title}</div>
          <div className={style.password}>
            <input onChange={onChange} type={view} name={name} className={style.inp} id={id} />
            {props.type === 'password' && (
              <a href="#" className={style.passwordControlVisible} onClick={togglePassword}></a>
            )}
          </div>
        </label>
        <div className={style.hide}>SomeText</div>
      </div>
    </div>
  );
};

export default Input;
