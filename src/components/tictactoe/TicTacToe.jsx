import React from 'react';
import { Square, Circle, Xmark } from '../../components'
import { EMPTY, CIRCLED, CROSSED, PLAYER1, PLAYER2 } from '../../globals';
import './tictactoe.css';


const TicTacToe = () => {
  const player = PLAYER1;
  const positions = [
    EMPTY, CIRCLED, EMPTY,
    EMPTY, EMPTY, CROSSED,
    CIRCLED, EMPTY, EMPTY
  ];

  return (
    <div className="tictactoe grid">
        <Square position={0} value={positions[0]} />
        <Square position={1} value={positions[1]} />
        <Square position={2} value={positions[2]} />
        <Square position={3} value={positions[3]} />
        <Square position={4} value={positions[4]} />
        <Square position={5} value={positions[5]} />
        <Square position={6} value={positions[6]} />
        <Square position={7} value={positions[7]} />
        <Square position={8} value={positions[8]} />
    </div>
  )
}

export default TicTacToe