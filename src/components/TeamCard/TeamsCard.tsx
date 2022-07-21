import React from 'react';
import style from './TeamsCard.module.css';
import image from '../../assets/images/POR1.png';

export const TeamsCard: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.topBlock}>
        <img src={image} alt="Team" />
      </div>
      <div className={style.bottomBlock}>
        <div className={style.name}>Portland trail blazers</div>
        <div className={style.year}>Year of foundation: 1970</div>
      </div>
    </div>
  );
};
