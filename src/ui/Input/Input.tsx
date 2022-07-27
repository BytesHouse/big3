import React, { useState } from 'react';
import style from './Input.module.css';
import { input } from '../../types/input';

const Input = (props: input) => {
  const [view, setView] = useState(props.type);
  const [value, setValue] = useState('');

  const onChange = (value: any) => {
    setValue(value);
  };

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
        <label htmlFor="login">
          <div className={style.label}>{props.title}</div>
          <div className={style.password}>
            <input
              onChange={() => onChange(value)}
              type={view}
              name="login"
              className={style.inp}
            />
            {props.type === 'password' && (
              <a href="#" className={style.passwordControl} onClick={togglePassword}></a>
            )}
          </div>
        </label>
        <div className={style.hide}>SomeText</div>
      </div>
    </div>
  );
};

export default Input;
