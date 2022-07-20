import React from 'react';
import AuthorizationForm from './components/AuthorizationForm';
import style from './Signin.module.css';
import group from '../../assets/images/Group.png';

const SignInPage = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>Sign In</div>
        <AuthorizationForm />
      </div>
      <div className={style.image}>
        <img src={group} alt="group" />
      </div>
    </div>
  );
};

export default SignInPage;
