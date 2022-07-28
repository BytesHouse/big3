import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import style from './RegistrationForm.module.css';
import StyledLink from '../../../ui/StyledLink/StyledLink';
import Checkbox from '../../../ui/Checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../core/redux/store/reducers/auth/signUpSlice';
import { IUser } from '../../../api/dto/user';

const RegistrationForm: FC = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [passConfirm, setPassConfirm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameHandler = (value: string) => {
    console.log(value);
    setName(value);
  };
  const loginHandler = (value: string) => {
    console.log(value);
    setLogin(value);
  };
  const passwordHandler = (value: string) => {
    console.log(value);
    setPassword(value);
  };
  const passConfirmHandler = (value: string) => {
    console.log(value);
    setPassConfirm(value);
  };

  const newUser: IUser = {
    userName: name,
    login,
    password,
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(signUp(newUser));
    navigate('/teams');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <Input onChange={nameHandler} type="text" title="Name" />
        <Input onChange={loginHandler} type="text" title="Login" />
        <Input onChange={passwordHandler} type="password" title="Password" />
        <Input onChange={passConfirmHandler} type="password" title="Enter your password again" />
        <Checkbox className={style.checkbox} title="I accept the agreement" />
        <Button onClick={handleSubmit}>Sign up</Button>
        <div className={style.text}>
          <span>Not a member yet?</span>
          <StyledLink text="Sign In" path="/" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
