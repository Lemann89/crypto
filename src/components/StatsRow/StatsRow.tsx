import './StatsRow.scss';

import React from 'react';

interface IProps {
  title: string;
  value: string | number;
}

const StatsRow: React.FC<IProps> = ({ title, value }) => {
  return (
    <div className="stats__row">
      <span className="stats__row-key">{title}</span>
      <span className="stats__row-value">{value}</span>
    </div>
  );
};

export default StatsRow;
