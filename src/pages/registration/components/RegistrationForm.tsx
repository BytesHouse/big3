import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import style from './RegistrationForm.module.css';
import StyledLink from '../../../ui/StyledLink/StyledLink';

const RegistrationForm: FC = () => {
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
