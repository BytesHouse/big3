import React from 'react';
import style from './Players.module.css';
import AddButton from '../../../ui/AddButton/AddButton';
import HamburgerMenu from '../../../ui/HamburgerMenu/HamburgerMenu';
import Navigation from '../../../ui/Navigation/Navigation';
import Pagination from '../../../ui/Pagination/Pagination';
import SearchBox from '../../../ui/SearchBox/SearchBox';
import SingleSelect from '../../../ui/SingleSelect/SingleSelect';
import { selectOption } from '../../../ui/SingleSelect/options';
import Multiselect from '../../../ui/Multiselect/Multiselect';

const Players = () => {
  return (
    <div className={style.container}>
      <Navigation />
      <div className={style.wrapper}>
        <HamburgerMenu />
        <div className={style.display}>
          <div className={style.top}>
            <div>
              <SearchBox />
              <Multiselect />
            </div>
            <AddButton />
          </div>
          <div className={style.display__content}>{/* <TeamList teams={data} /> */}</div>
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

export default Players;
