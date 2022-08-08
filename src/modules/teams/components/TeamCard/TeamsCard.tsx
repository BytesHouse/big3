import React from 'react';
import style from './TeamsCard.module.css';
import { ITeamData } from '../../../../types/types';

interface ITeamCardProps {
  team: ITeamData;
  onClick: () => void;
}

export const TeamsCard: React.FC<ITeamCardProps> = ({ team, onClick }) => {
  return (
    <div onClick={onClick} className={style.container}>
      <div className={style.topBlock}>
        <img src={team.imageUrl} alt="Team" />
      </div>
      <div className={style.bottomBlock}>
        <div className={style.name}>{team.name}</div>
        <div className={style.year}>Year of foundation: {team.foundationYear}</div>
      </div>
    </div>
  );
};
