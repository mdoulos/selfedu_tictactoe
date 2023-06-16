import React from 'react';
import { O, X } from '../../globals';
import './result.css';
import SOUND1 from '../../assets/sound-victory.mp3';
import SOUND2 from '../../assets/sound-defeat.mp3';
import SOUND3 from '../../assets/sound-tie.mp3';

const Result = ({ winner, reset, soundControl }) => {
  const audio1 = new Audio(SOUND1);
  const audio2 = new Audio(SOUND2);
  const audio3 = new Audio(SOUND3);

  if (soundControl === 'on') {
    if (winner === O) {
      audio1.play();
    } else if (winner === X) {
      audio2.play();
    } else {
      audio3.play();
    }
  }

  return (
    <div className="result">
        {winner == O && <span>Player O wins!</span>}
        {winner == X && <span>Player X wins!</span>}
        {winner == 'It is a tie' && <span>It's a tie!</span>}
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Result