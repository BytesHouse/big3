import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../core/redux/store/reducers/auth/authSlice';
// import style from './Hamburger.module.css';
import Wrapper from '../../assets/wrappers/sidebar';
import signOut from '../../assets/icon/input.svg';
import NavLinks from '../../components/NavLinks/NavLinks';

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store: any) => store.dashboard);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'container show' : 'container hide'}>
        <NavLinks />
        <div>
          <div
            onClick={() => {
              dispatch(logoutUser());
              navigate('/');
            }}
            className="flex"
          >
            <img src={signOut} alt="person" />
            <span>Sign out</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HamburgerMenu;
