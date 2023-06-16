import React from 'react';
import { O, X } from '../../globals';
import { Confetti } from '../../components';
import './result.css';
import SOUND1 from '../../assets/sound-victory.mp3';
import SOUND2 from '../../assets/sound-defeat.mp3';
import SOUND3 from '../../assets/sound-tie.mp3';

const Result = ({ winner, reset, soundControl, opponentType }) => {
  const audio1 = new Audio(SOUND1);
  const audio2 = new Audio(SOUND2);
  const audio3 = new Audio(SOUND3);

  if (soundControl === 'on') {
    if ((winner == "X") || (winner == "O" && opponentType == "human")) {
      audio1.play();
    } else if (winner == "O") {
      audio2.play();
    } else {
      audio3.play();
    }
  }

  return (
    <div className="result">
        {winner == X && opponentType == "human" && <span>Player X wins!</span>}
        {winner == X && opponentType == "robot" && <span>You Won!</span>}
        {winner == O && opponentType == "human" && <span>Player O wins!</span>}
        {winner == O && opponentType == "robot" && <span>The Computer wins!</span>}
        {winner == 'It is a tie' && <span>It's a tie!</span>}
        <button onClick={reset}>Reset</button>


        {(winner == X || winner == O) && opponentType == "human" && <Confetti />}
        {winner == X && opponentType == "robot" && <Confetti />}
    </div>
  )
}

export default Result