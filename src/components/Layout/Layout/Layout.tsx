import './Layout.scss';

import React, { useState } from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Layout: React.FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onBurgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header onBurgerClick={onBurgerClick} />
      <main className="main">
        <Sidebar isSidebarOpen={isSidebarOpen} hideSidebar={onBurgerClick} />
        <div className="content">{children}</div>
      </main>
    </>
  );
};

export default Layout;
