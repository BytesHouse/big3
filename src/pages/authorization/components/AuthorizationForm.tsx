import React from 'react';
import { Button } from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import style from './AuthorizationForm.module.css';
import StyledLink from '../../../ui/StyledLink/StyledLink';

const AuthorizationForm = () => {
  return (
    <div>
      <form action="">
        <Input type="text" title="Login" />
        <Input type="password" title="Password" />
        <Button>Sign in</Button>
        <div className={style.text}>
          <span>Not a member yet?</span>
          <StyledLink text="Sign Up" path="/signup" />
        </div>
      </form>
    </div>
  );
};

export default AuthorizationForm;
