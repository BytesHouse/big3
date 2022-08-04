import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlayerCard } from '../PlayerCard/PlayerCard';
import { fetchPlayers } from '../../core/redux/store/reducers/players/playersSlice';
import EmptyPlayers from '../../pages/dashboard/components/EmptyPlayers/EmptyPlayers';

const PlayersList: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const players = useSelector((store: any) => store.players);
  useEffect(() => {
    dispatch(fetchPlayers('Player/GetPlayers'));
  }, []);
  if (!players.count) {
    return <EmptyPlayers />;
  }
  return (
    <>
      {players.data.map((player: any) => (
        <PlayerCard key={player.id} player={player} onClick={() => navigate(`:${player.id}`)} />
      ))}
    </>
  );
};
export default PlayersList;
