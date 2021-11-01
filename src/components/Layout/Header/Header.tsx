import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  onBurgerClick: () => void;
}

const Header: React.FC<IProps> = ({ onBurgerClick }) => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="../../../../resources/logo.png" alt="logo" />
        <span className="header__name">Cryptonomicon</span>
      </Link>

      {isMobile && (
        <button onClick={onBurgerClick} className="header__burger">
          <FontAwesomeIcon icon="bars" size="2x" />
        </button>
      )}
    </header>
  );
};

export default Header;
