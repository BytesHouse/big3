import React from 'react';
// Components
import Pagination from '../../../../ui/Pagination/Pagination';
import AddButton from '../../../../ui/AddButton/AddButton';
import SearchBox from '../../../../ui/SearchBox/SearchBox';
import SingleSelect from '../../../../ui/SingleSelect/SingleSelect';
import { selectOption } from '../../../../ui/SingleSelect/options';
import TeamList from '../../../../components/TeamList/TeamList';
import EmptyTeams from '../EmptyTeams/EmptyTeams';
import { ITeamData } from '../../../../types/types';
// CSS
import style from './DisplayTeams.module.css';
// Dummy Date to test TeamList
const data: ITeamData[] = [
  // {
  //   name: 'test',
  //   foundationYear: 1,
  //   division: 'test',
  //   conference: 'test',
  //   imageUrl: test,
  //   id: 1,
  // },
  // {
  //   name: 'test2',
  //   foundationYear: 2,
  //   division: 'test2',
  //   conference: 'test2',
  //   imageUrl: test,
  //   id: 2,
  // },
  // {
  //   name: 'test2',
  //   foundationYear: 3,
  //   division: 'test2',
  //   conference: 'test2',
  //   imageUrl: test,
  //   id: 3,
  // },
  // {
  //   name: 'test2',
  //   foundationYear: 4,
  //   division: 'test2',
  //   conference: 'test2',
  //   imageUrl: test,
  //   id: 4,
  // },
  // {
  //   name: 'test2',
  //   foundationYear: 5,
  //   division: 'test2',
  //   conference: 'test2',
  //   imageUrl: test,
  //   id: 5,
  // },
  // {
  //   name: 'test2',
  //   foundationYear: 6,
  //   division: 'test2',
  //   conference: 'test2',
  //   imageUrl: test,
  //   id: 6,
  // },
];

const DisplayTeams = () => {
  return (
    <div className={style.display}>
      <div className={style.top}>
        <SearchBox />
        <AddButton path="addTeam" />
      </div>
      <div className={style.display__content}>
        {data.length > 0 ? <TeamList /> : <EmptyTeams />}
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
