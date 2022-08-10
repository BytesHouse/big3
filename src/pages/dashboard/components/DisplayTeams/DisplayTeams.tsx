import React, { useEffect } from 'react';
// Components
import Pagination from '../../../../ui/Pagination/Pagination';
import AddButton from '../../../../ui/AddButton/AddButton';
import SearchBox from '../../../../ui/SearchBox/SearchBox';
import SingleSelect from '../../../../ui/SingleSelect/SingleSelect';
import { selectOption } from '../../../../ui/SingleSelect/options';
// CSS
import style from './DisplayTeams.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamData } from '../../../../core/redux/store/reducers/teams/teamsSlice';
import TeamList from '../../../../modules/teams/components/TeamList/TeamList';

const DisplayTeams = () => {
  const { teams } = useSelector((store: any) => store.teams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeamData('Team/GetTeams'));
  }, []);
  return (
    <div className={style.display}>
      <div className={style.top}>
        <SearchBox />
        <AddButton path="/addTeam" />
      </div>
      <div className={style.display__content}>
        <TeamList teams={teams} />
      </div>
      <div className={style.footer}>
        <Pagination
          pageCount={3}
          onChange={function ({ selected }: { selected: any }): void {
            throw new Error('Function not implemented.');
          }}
        />
        <SingleSelect data={selectOption} />
      </div>
    </div>
  );
};

export default DisplayTeams;
