export interface IAuth {
  auth: any;
  accessToken: string;
  refreshToken: string;
}

export interface ILogin {
  login: string;
  password: string;
}

export interface ISignUp {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
}
