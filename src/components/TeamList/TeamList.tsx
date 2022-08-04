import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyTeams from '../../pages/dashboard/components/EmptyTeams/EmptyTeams';
import { TeamsCard } from '../TeamCard/TeamsCard';

const TeamList = (props: any) => {
  const { teams } = props;
  console.log(teams);
  const navigate = useNavigate();
  if (!teams.data || teams.data.length === 0) {
    return <EmptyTeams />;
  }
  return (
    <>
      {teams.data.map((team: any) => (
        <TeamsCard key={team.id} team={team} onClick={() => navigate(`:${team.id}`)} />
      ))}
    </>
  );
};
export default TeamList;
