import React, { useState } from 'react';
import style from './Input.module.css';
import { input } from '../../types/input';

const Input = (props: input) => {
  const { id, title } = props;
  const [view, setView] = useState(props.type);
  const [valueState, setValueState] = useState('');

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
            <input
              onChange={(e) => setValueState(e.target.value)}
              type={view}
              name={title}
              className={style.inp}
              value={valueState}
              id={id}
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
