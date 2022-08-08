import React, { FC } from 'react';
import { IPlayerProps } from '../../interfaces/playerCardProps';
import style from './PlayerCard.module.css';

export const PlayerCard: FC<IPlayerProps> = ({ player, onClick }) => {
  return (
    <div onClick={onClick} className={style.container}>
      <div className={style.topBlock}>
        <img src={player.imageUrl} alt="Player" />
      </div>
      <div className={style.bottomBlock}>
        <div className={style.name}>{player.name}</div>
        <div className={style.year}>{player.team}</div>
      </div>
    </div>
  );
};
