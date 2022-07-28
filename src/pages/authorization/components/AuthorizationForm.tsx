import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signIn } from '../../../core/redux/store/reducers/auth/signInSlice';
import { Button } from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import style from './AuthorizationForm.module.css';
import StyledLink from '../../../ui/StyledLink/StyledLink';
// import { ILogin } from '../../../api/dto/auth';

const AuthorizationForm: FC = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  async function handleSubmit(event: any) {
    event.preventDefault();
    navigate('/teams');
  }
  return (
    <div>
      <form action="">
        <Input id="login" type="text" title="Login" />
        <Input id="password" type="password" title="Password" />
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
