export interface ITeamData {
  name: 'string';
  foundationYear: number;
  division: 'string';
  conference: 'string';
  imageUrl: 'string';
  id: number;
}

export interface ITeamResponse {
  data: ITeamData[];
  count: number;
  page: number;
  size: number;
}
