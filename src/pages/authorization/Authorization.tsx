import React, { useEffect, useState } from 'react';
import style from './Authorization.module.css';
import group from '../../assets/images/Group.png';
import group2 from '../../assets/images/Group2.png';
import { Checkbox, Input, ButtonPrimary } from '../../ui';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, signIn } from '../../core/redux/store/reducers/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
  userName: '',
  login: '',
  password: '',
  passwordConfirm: '',
  confirmAgreement: true,
  isMember: true,
};

const Registration = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { auth, isLoading } = useSelector((store: any) => store.auth);
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { userName, login, password, passwordConfirm, isMember, confirmAgreement } = values;
    if (!login || !password || (!isMember && !userName) || (!isMember && !passwordConfirm)) {
      toast.warning('Please fill out all fields');
      return;
    }
    if (isMember) {
      dispatch(signIn({ login, password }));
      return;
    }
    dispatch(signUp({ userName, login, password }));
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const toogleAcceptAgreement = () => {
    setValues({ ...values, confirmAgreement: !values.confirmAgreement });
  };
  useEffect(() => {
    if (auth) {
      setTimeout(() => {
        navigate('/dashboard/teams');
      }, 3500);
    }
  }, [auth]);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>{values.isMember ? 'Sign in' : 'Sign up'}</div>
        <form onSubmit={onSubmit}>
          {/* Name Field */}
          {!values.isMember && (
            <Input title="Name" name="userName" type="text" onChange={handleChange} />
          )}
          {/* Login Field */}
          <Input title="Login" name="login" type="text" onChange={handleChange} />
          {/* Password Field */}
          <Input title="Password" name="password" type="password" onChange={handleChange} />
          {/* Password Confirm Field */}
          {!values.isMember && (
            <Input
              title="Enter your password again"
              name="passwordConfirm"
              type="password"
              onChange={handleChange}
            />
          )}
          {!values.isMember && (
            <Checkbox
              onToggle={toogleAcceptAgreement}
              className={style.checkbox}
              title="I accept the agreement"
            />
          )}
          <ButtonPrimary isDisabled={isLoading} className={style.btn} typeButton="submit">
            {values.isMember ? 'Sign In' : 'Sign up'}
          </ButtonPrimary>
          <div className={style.member}>
            <p>{values.isMember ? 'Not a member yet?' : 'Already a member?'}</p>
            <button type="button" onClick={toggleMember}>
              {values.isMember ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
      <div className={style.image}>
        <img src={values.isMember ? group : group2} alt="group" />
      </div>
    </div>
  );
};

export default Registration;
