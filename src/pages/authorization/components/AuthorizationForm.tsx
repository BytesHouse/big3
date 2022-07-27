import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import style from './AuthorizationForm.module.css';
import StyledLink from '../../../ui/StyledLink/StyledLink';

const AuthorizationForm: FC = () => {
  const navigate = useNavigate();

  async function handleSubmit(event: any) {
    event.preventDefault();
    navigate('/teams');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <Input type="text" title="Login" />
        <Input type="password" title="Password" />
        <Button onClick={handleSubmit}>Sign in</Button>
        <div className={style.text}>
          <span>Not a member yet?</span>
          <StyledLink text="Sign Up" path="/signup" />
        </div>
      </form>
    </div>
  );
};

export default AuthorizationForm;
