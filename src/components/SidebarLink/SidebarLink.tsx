import './SidebarLink.scss';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
  to: string;
  icon: IconProp;
  exact?: boolean;
}

const SidebarLink: React.FC<IProps> = ({ icon, to, exact = false, children }) => {
  return (
    <NavLink
      to={to}
      className="sidebar-link"
      activeClassName="sidebar-link--active"
      exact={exact}>
      <div className="sidebar-link__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="sidebar-link__text">{children}</span>
    </NavLink>
  );
};

export default SidebarLink;
