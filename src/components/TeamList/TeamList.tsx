import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { TeamsCard } from '../TeamCard/TeamsCard';

const TeamList: FC = () => {
  const { teams } = useSelector((store: any) => store.teams);
  return (
    <>
      {teams.map((team: any) => (
        <TeamsCard key={team.id} team={team} />
      ))}
    </>
  );
};
export default TeamList;
