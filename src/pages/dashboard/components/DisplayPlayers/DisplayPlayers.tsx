import React from 'react';
// Components
import Pagination from '../../../../ui/Pagination/Pagination';
import AddButton from '../../../../ui/AddButton/AddButton';
import SearchBox from '../../../../ui/SearchBox/SearchBox';
import SingleSelect from '../../../../ui/SingleSelect/SingleSelect';
import { selectOption } from '../../../../ui/SingleSelect/options';
import PlayersList from '../../../../components/PlayersList/PlayersList';
// CSS
import style from './DisplayPlayers.module.css';
import { Multiselect } from '../../../../ui';

const DisplayPlayers = () => {
  return (
    <div className={style.display}>
      <div className={style.top}>
        <div className={style.input__wrapper}>
          <SearchBox />
          <Multiselect />
        </div>
        <AddButton path="/dashboard/addPlayer" />
      </div>
      <div className={style.display__content}>
        <PlayersList />
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

export default DisplayPlayers;
