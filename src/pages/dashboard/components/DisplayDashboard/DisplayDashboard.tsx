import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

// CSS
import style from './DisplayDashboard.module.css';

const DisplayDashboard: FC = (props) => (
  <div className={style.container}>
    <Outlet />
  </div>
);

export default DisplayDashboard;
