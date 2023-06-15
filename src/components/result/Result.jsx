import React from 'react';
import { EMPTY, O, X } from '../../globals';
import './result.css';

const Result = ({ winner, reset }) => {
  return (
    <div className="result">
        {winner == O && <h1>Player O wins!</h1>}
        {winner == X && <h1>Player X wins!</h1>}
        {winner == 'It is a tie' && <h1>It's a tie!</h1>}
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Result