import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../core/redux/store/reducers/auth/signInSlice';
import { Button } from '../../../ui/ButtonPrimary/Button';
import Input from '../../../ui/Input/Input';
import style from './AuthorizationForm.module.css';
import StyledLink from '../../../ui/StyledLink/StyledLink';
import { ILogin } from '../../../api/dto/auth';

const AuthorizationForm: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getLoginValue = (value: string) => {
    setLogin(value);
  };
  const getPassValue = (value: string) => {
    setPassword(value);
  };
  const authUser: ILogin = {
    login,
    password,
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(signIn(authUser));
    navigate('/dashboard/teams');
  }
  return (
    <div>
      <form action="">
        <Input onChange={getLoginValue} id="login" type="text" title="Login" />
        <Input onChange={getPassValue} id="password" type="password" title="Password" />
        <Button onClick={handleSubmit} typeButton="submit">
          Sign in
        </Button>
        <div className={style.text}>
          <span>Not a member yet?</span>
          <StyledLink text="Sign Up" path="/signup" />
        </div>
      </form>
    </div>
  );
};

export default AuthorizationForm;
