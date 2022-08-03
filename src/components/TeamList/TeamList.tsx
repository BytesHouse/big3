import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTeamData } from '../../core/redux/store/reducers/teams/teamsSlice';
import EmptyTeams from '../../pages/dashboard/components/EmptyTeams/EmptyTeams';
import { TeamsCard } from '../TeamCard/TeamsCard';

const TeamList: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teams = useSelector((store: any) => store.teams);
  useEffect(() => {
    dispatch(fetchTeamData('Team/GetTeams'));
  }, []);
  if (!teams.teams.data) {
    return <EmptyTeams />;
  }
  return (
    <>
      {teams.teams.data.map((team: any) => (
        <TeamsCard key={team.id} team={team} onClick={() => navigate(`:${team.id}`)} />
      ))}
    </>
  );
};
export default TeamList;
