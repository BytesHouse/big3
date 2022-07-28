import React from 'react';
import style from './EmptyTeams.module.css';
import empty from '../../../../assets/images/empty.png';
const EmptyTeams = () => {
  return (
    <>
      <div className={style.container}>
        <img src={empty} alt="empty" />
        <h1>Empty here</h1>
        <h3>Add new teams to continue</h3>
      </div>
    </>
  );
};

export default EmptyTeams;
