import React from 'react';
import style from './EmptyPlayers.module.css';
import empty from '../../../../assets/images/emptyPlayer.png';
const EmptyPlayers = () => {
  return (
    <>
      <div className={style.container}>
        <img src={empty} alt="empty" />
        <h1>Empty here</h1>
        <h3>Add new players to continue</h3>
      </div>
    </>
  );
};

export default EmptyPlayers;
