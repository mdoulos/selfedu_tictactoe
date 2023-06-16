import React from 'react';
import './header.css';
import streakimg from '../../assets/icon-fire.png';

const Header = ({streak, opponentType}) => {
  const streakClass = opponentType === 'human' ? 'hidden' : '';

  return (
    <div className="app-header">
          <h1>Tic Tac Toe</h1>
          <p>by Micah Doulos and Hunor Borbély</p>
          <div className={`streak ${streakClass}`}><img src={streakimg} alt="Winning Streak" /><span>{streak}</span></div>
    </div>
  )
}

export default Header