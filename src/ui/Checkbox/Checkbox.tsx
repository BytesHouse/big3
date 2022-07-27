import React from 'react';
import style from './Checkbox.module.css';

const Checkbox = (props: any) => {
  return (
    <div className={style.wrapper}>
      <label className={style.container}>
        {props.title}
        <input type="checkbox" />
        <span className={style.checkmark}></span>
      </label>
    </div>
  );
};

export default Checkbox;
