import React, { useEffect, useRef } from 'react';
import { O, X } from '../../globals';
import './result.css';
import SOUND1 from '../../assets/sound-victory.mp3';
import SOUND2 from '../../assets/sound-defeat.mp3';
import SOUND3 from '../../assets/sound-tie.mp3';

const Result = ({ winner, reset, soundControl, opponentType, setStreak }) => {
  const audio1 = useRef(new Audio(SOUND1));
  const audio2 = useRef(new Audio(SOUND2));
  const audio3 = useRef(new Audio(SOUND3));

  useEffect(() => {
    if (soundControl === 'on') {
      if ((winner == "X") || (winner == "O" && opponentType == "human")) {
        audio1.current.play();
      } else if (winner == "O") {
        audio2.current.play();
      } else {
        audio3.current.play();
      }
    }
  }, [winner, opponentType, soundControl]);

  useEffect(() => {
    if (winner == O && opponentType == "robot") {
        setStreak(0);
    } else if (winner == X && opponentType == "robot") {
        setStreak(prevStreak => prevStreak + 1);
    }
  }, [winner, opponentType, setStreak]);

  return (
    <div className="result">
        {winner == X && opponentType == "human" && <span>Player X wins!</span>}
        {winner == X && opponentType == "robot" && <span>You Won!</span>}
        {winner == O && opponentType == "human" && <span>Player O wins!</span>}
        {winner == O && opponentType == "robot" && <span>The Computer wins!</span>}
        {winner == 'It is a tie' && <span>It's a tie!</span>}
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Result