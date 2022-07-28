export interface IUser {
  userName: string;
  login: string;
  password: string;
  confirmPassword?: string;
  status?: Number;
  avatar?: string;
  lastName?: string;
  firstName?: string;
}
