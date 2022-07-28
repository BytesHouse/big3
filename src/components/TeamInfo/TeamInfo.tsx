import React from 'react';
import { CreateIcon, TrashIcon } from '../../assets/icon/icons';
import style from './TeamInfo.module.css';

interface ITeamInfoProps {
  title?: string;
}

const TeamInfo = (props: ITeamInfoProps) => {
  const { title } = props;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.info}>
          <span>Teams</span>
          <span>/</span>
          <span>{title}</span>
        </div>
        <div className={style.control}>
          <CreateIcon />
          <TrashIcon color="red" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TeamInfo;
