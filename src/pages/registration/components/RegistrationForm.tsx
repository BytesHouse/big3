import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import style from './RegistrationForm.module.css';
import StyledLink from '../../../ui/StyledLink/StyledLink';
import Checkbox from '../../../ui/Checkbox/Checkbox';

const RegistrationForm: FC = () => {
  const navigate = useNavigate();

  async function handleSubmit(event: any) {
    event.preventDefault();
    navigate('/teams');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <Input onChange={() => console.log('hello')} type="text" title="Name" />
        <Input onChange={() => console.log('hello')} type="text" title="Login" />
        <Input onChange={() => console.log('hello')} type="password" title="Password" />
        <Input
          onChange={() => console.log('hello')}
          type="password"
          title="Enter your password again"
        />
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
