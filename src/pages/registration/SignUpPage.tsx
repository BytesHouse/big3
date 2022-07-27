import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import style from './SignUp.module.css';
import group from '../../assets/images/Group2.png';

const SignUpPage = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>Sign Up</div>
        <RegistrationForm />
      </div>
      <div className={style.image}>
        <img src={group} alt="group" />
      </div>
    </div>
  );
};

export default SignUpPage;
