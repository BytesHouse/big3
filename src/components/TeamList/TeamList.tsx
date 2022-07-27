import React, { FC } from 'react';
import { ITeamData } from '../../types/types';
import { TeamsCard } from '../TeamCard/TeamsCard';

export interface ITeamsListProps {
  teams: ITeamData[];
}

const TeamList: FC<ITeamsListProps> = ({ teams }) => {
  return (
    <>
      {teams.map((team) => (
        <TeamsCard key={team.id} team={team} />
      ))}
    </>
  );
};
export default TeamList;
