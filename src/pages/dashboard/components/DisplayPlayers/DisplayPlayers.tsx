import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../../../../core/redux/store/reducers/players/playersSlice';

const DisplayPlayers = () => {
  const { players } = useSelector((store: any) => store.players);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlayers('Player/GetPlayers'));
  }, []);
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
        <PlayersList players={players} />
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
