import React from 'react';
// Components
import Pagination from '../../../../ui/Pagination/Pagination';
import AddButton from '../../../../ui/AddButton/AddButton';
import SearchBox from '../../../../ui/SearchBox/SearchBox';
import SingleSelect from '../../../../ui/SingleSelect/SingleSelect';
import { selectOption } from '../../../../ui/SingleSelect/options';
import TeamList from '../../../../components/TeamList/TeamList';
// CSS
import style from './DisplayTeams.module.css';

const DisplayTeams = () => {
  return (
    <div className={style.display}>
      <div className={style.top}>
        <SearchBox />
        <AddButton path="/dashboard/addTeam" />
      </div>
      <div className={style.display__content}>
        <TeamList />
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
