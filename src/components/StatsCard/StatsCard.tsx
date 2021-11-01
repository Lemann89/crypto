import './StatsCard.scss';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';

export enum StatsCardStyles {
  RED = 'stats-card--red',
  YELLOW = 'stats-card--yellow',
  BLUE = 'stats-card--blue',
  VIOLET = 'stats-card--violet',
}

interface IProps {
  text?: string;
  title: string;
  icon: IconProp;
  style: StatsCardStyles;
}

const StatsCard: React.FC<IProps> = ({ icon, text, title, style }) => {
  return (
    <div className={classNames(['stats-card', style])}>
      <div className="stats-card__icon">
        <FontAwesomeIcon icon={icon} size="3x" color="white" />
      </div>
      <div className="stats-card__info">
        <span className="stats-card__title">{title}</span>
        <span className="stats-card__text">{text}</span>
      </div>
    </div>
  );
};

export default StatsCard;
