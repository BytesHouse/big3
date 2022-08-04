import React, { useEffect } from 'react';
import { ITeamData } from '../../api/dto/teams';
import { CreateIcon, TrashIcon } from '../../assets/icon/icons';
import style from './TeamInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamData } from '../../core/redux/store/reducers/team/teamSlice';

const TeamInfo = (props: ITeamData) => {
  const { name, foundationYear, division, conference, imageUrl, id } = props;
  const dispatch = useDispatch();
  const team = useSelector((store: any) => store.getTeamInfo);
  useEffect(() => {
    dispatch(fetchTeamData(id));
  }, []);
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.info}>
          <span>Teams</span>
          <span>/</span>
          <span>{name}</span>
        </div>
        <div className={style.control}>
          <CreateIcon />
          <TrashIcon color="red" />
        </div>
      </div>
      <div className={style.content}>
        <div>
          <img src={imageUrl} alt={name} />
        </div>
        <div>
          <h1>{name}</h1>
          <div>
            <div>
              <h3>Year of foundation</h3>
              <h4>{foundationYear}</h4>
            </div>
            <div>
              <h3>Division</h3>
              <h4>{division}</h4>
            </div>
          </div>
          <div>
            <h3>Conference</h3>
            <h4>{conference}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
