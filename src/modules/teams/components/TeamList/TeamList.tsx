import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTeamData } from '../../core/redux/store/reducers/team/teamSlice';
import EmptyTeams from '../../pages/dashboard/components/EmptyTeams/EmptyTeams';
import { TeamsCard } from '../TeamCard/TeamsCard';

const TeamList = (props: any) => {
  const { teams } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!teams.data || teams.data.length === 0) {
    return <EmptyTeams />;
  }
  const viewTeamInfo = (id: any) => {
    dispatch(fetchTeamData(id));
    navigate(`${id}`);
  };
  return (
    <>
      {teams.data.map((team: any) => (
        <TeamsCard key={team.id} team={team} onClick={() => viewTeamInfo(team.id)} />
      ))}
    </>
  );
};
export default TeamList;
