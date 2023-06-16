import React, { useState } from 'react';
import './footer.css';
import { robot, human, mute, sound } from './imports';

const Footer = ({opponentType, setOpponentType, soundControl, setSoundControl}) => {

  const toggleOpponentType = () => setOpponentType(opponentType === 'human' ? 'robot' : 'human');
  const toggleSoundControl = () => setSoundControl(soundControl === 'on' ? 'off' : 'on');

  return (
    <div className="app-footer">
        <button className="player-button icon-button" onClick={toggleOpponentType}><img src={ opponentType === 'human' ? human : robot } alt="Player or Computer" /></button>
        <button className="sound-button icon-button" onClick={toggleSoundControl}><img src={ soundControl === 'on' ? sound : mute } alt="Sound Control" /></button>
        <button className="code-button text-button"><a href="https://github.com/micahdoulos/selfedu_tictactoe" target="_blank">See the Code</a></button>
        <button className="tutorial-button text-button"><a href="https://www.skillshare.com/en/classes/Tic-Tac-Toe-A-Playful-Intro-to-React/1248127804/projects" target="_blank">See the Tutorial</a></button>
    </div>
  )
}

export default Footer
