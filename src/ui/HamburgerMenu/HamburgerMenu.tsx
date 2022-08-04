import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../core/redux/store/reducers/auth/authSlice';
// import style from './Hamburger.module.css';
import Wrapper from '../../assets/wrappers/sidebar';
import signOut from '../../assets/icon/input.svg';
import { PersonIcon, GroupPersonIcon } from '../../assets/icon/icons.tsx';

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store: any) => store.dashboard);
  console.log(isSidebarOpen);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const onNavigateHandler = (url: string, page: number) => {
    navigate(url);
    setPage(page);
  };
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'container show' : 'container hide'}>
        <div>
          <div onClick={() => onNavigateHandler('teams', 1)} className="flex">
            {page === 1 ? <GroupPersonIcon color="red" /> : <GroupPersonIcon color="#9C9C9C" />}
            <span>Teams</span>
          </div>
          <div onClick={() => onNavigateHandler('players', 2)} className="flex">
            {page === 2 ? <PersonIcon color="red" /> : <PersonIcon color="#9C9C9C" />}
            <span>Players</span>
          </div>
        </div>
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
