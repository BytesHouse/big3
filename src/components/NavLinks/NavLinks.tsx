import React from 'react';
import links from '../../core/utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
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
  );
};

export default NavLinks;
