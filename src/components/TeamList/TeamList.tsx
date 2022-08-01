import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamData } from '../../core/redux/store/reducers/teams/teamsSlice';
import EmptyTeams from '../../pages/ApplicationPage/components/EmptyTeams/EmptyTeams';
import { TeamsCard } from '../TeamCard/TeamsCard';

const TeamList: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeamData('Team/GetTeams'));
  }, []);
  const teams = useSelector((store: any) => store.teamsReducer.teams);
  console.log(teams);
  if (!teams.data) {
    return <EmptyTeams />;
  }
  return (
    <>
      {teams.data.map((team: any) => (
        <TeamsCard key={team.id} team={team} />
      ))}
    </>
  );
};
export default TeamList;
