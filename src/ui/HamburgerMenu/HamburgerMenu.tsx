import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../core/redux/store/reducers/auth/authSlice';
// import style from './Hamburger.module.css';
import Wrapper from '../../assets/wrappers/sidebar';
import signOut from '../../assets/icon/input.svg';
import links from '../../core/utils/links';

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store: any) => store.dashboard);
  console.log(isSidebarOpen);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'container show' : 'container hide'}>
        <div>
          {links.map((link) => {
            const { id, text, path, icon } = link;
            return (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) => {
                  return isActive ? 'nav-link active' : 'nav-link';
                }}
              >
                <div className="flex">
                  <span className="icon">{icon}</span>
                  {text}
                </div>
              </NavLink>
            );
          })}
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
