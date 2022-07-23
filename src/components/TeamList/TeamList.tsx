import React, { FC } from 'react';
import { ITeamData } from '../../types/types';
import { TeamsCard } from '../TeamCard/TeamsCard';

interface ITeamsListProps {
  teams: ITeamData[];
}

const TeamList: FC<ITeamsListProps> = ({ teams }) => {
  return (
    <div>
      {teams.map((team) => (
        <TeamsCard key={team.id} team={team} />
      ))}
    </div>
  );
};
export default TeamList;
