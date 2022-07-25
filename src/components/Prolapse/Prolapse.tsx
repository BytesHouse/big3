import React from 'react';
import { Spin } from 'antd';
import style from './Prolapse.module.css';

export const Prolapse = () => {
  return (
    <div className={style.spin}>
      <Spin tip="Loading" />
    </div>
  );
};
