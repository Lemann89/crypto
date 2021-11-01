import './Sidebar.scss';

import classNames from 'classnames';
import React from 'react';

import SidebarLink from '../../SidebarLink/SidebarLink';

interface IProps {
  isSidebarOpen: boolean;
  hideSidebar: () => void;
}

const Sidebar: React.FC<IProps> = ({ isSidebarOpen = false, hideSidebar }) => {
  return (
    <aside className={classNames('sidebar', { 'sidebar--open': isSidebarOpen })}>
      <div className="sidebar__links">
        <SidebarLink to="/" icon="home" exact>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <span onClick={hideSidebar} role="button" tabIndex={0}>
            Home
          </span>
        </SidebarLink>
        <SidebarLink to="/cryptocurrencies" icon="coins">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <span onClick={hideSidebar} role="button" tabIndex={0}>
            Cryptocurrencies
          </span>
        </SidebarLink>
      </div>
    </aside>
  );
};

export default Sidebar;
