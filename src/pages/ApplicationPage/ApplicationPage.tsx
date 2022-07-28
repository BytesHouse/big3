import React from 'react';
import style from './ApplicationPage.module.css';
import HamburgerMenu from '../../ui/HamburgerMenu/HamburgerMenu';
import Navigation from '../../ui/Navigation/Navigation';
import SearchBox from '../../ui/SearchBox/SearchBox';
import AddButton from '../../ui/AddButton/AddButton';
import TeamList from '../../components/TeamList/TeamList';
import { ITeamData } from '../../types/types';
import test from '../../assets/images/POR1.png';
import Pagination from '../../ui/Pagination/Pagination';
import SingleSelect from '../../ui/SingleSelect/SingleSelect';
import { selectOption } from '../../ui/SingleSelect/options';

const data: ITeamData[] = [
  {
    name: 'test',
    foundationYear: 1,
    division: 'test',
    conference: 'test',
    imageUrl: test,
    id: 1,
  },
  {
    name: 'test2',
    foundationYear: 2,
    division: 'test2',
    conference: 'test2',
    imageUrl: test,
    id: 2,
  },
  {
    name: 'test2',
    foundationYear: 3,
    division: 'test2',
    conference: 'test2',
    imageUrl: test,
    id: 3,
  },
  {
    name: 'test2',
    foundationYear: 4,
    division: 'test2',
    conference: 'test2',
    imageUrl: test,
    id: 4,
  },
  {
    name: 'test2',
    foundationYear: 5,
    division: 'test2',
    conference: 'test2',
    imageUrl: test,
    id: 5,
  },
  {
    name: 'test2',
    foundationYear: 6,
    division: 'test2',
    conference: 'test2',
    imageUrl: test,
    id: 6,
  },
];

export const ApplicationPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Navigation />
      <div className={style.wrapper}>
        <HamburgerMenu />
        <div className={style.display}>
          <div className={style.top}>
            <SearchBox />
            <AddButton />
          </div>
          <div className={style.display__content}>
            <TeamList teams={data} />
          </div>
          <div className={style.footer}>
            <Pagination
              pageCount={5}
              onChange={function ({ selected }: { selected: number }): void {
                throw new Error('Function not implemented.');
              }}
            />
            <SingleSelect data={selectOption} />
          </div>
        </div>
      </div>
    </div>
  );
};
