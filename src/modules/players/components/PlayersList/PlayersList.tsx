import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlayerCard } from '../PlayerCard/PlayerCard';
import EmptyPlayers from '../../pages/dashboard/components/EmptyPlayers/EmptyPlayers';
import { fetchPlayer } from '../../core/redux/store/reducers/player/playerSlice';

const PlayersList = (props: any) => {
  const { players } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewPlayerInfo = (id: any) => {
    dispatch(fetchPlayer(id));
    navigate(`${id}`);
  };
  if (!players.count) {
    return <EmptyPlayers />;
  }
  return (
    <>
      {players.data.map((player: any) => (
        <PlayerCard key={player.id} player={player} onClick={() => viewPlayerInfo(player.id)} />
      ))}
    </>
  );
};
export default PlayersList;
