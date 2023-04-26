import React from 'react';
import '../Component/Box.css';

export const Box = ({ value, onClick }) => {
  const style = value === 'x' ? 'box x' : 'box o';

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
