import React from 'react';
import { EMPTY, O, X } from '../../globals';
import './result.css';

const Result = ({ winner, reset }) => {
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