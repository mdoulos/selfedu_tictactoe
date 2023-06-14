import React from 'react';
import { Circle, Xmark } from '../../components'
import { EMPTY, CIRCLED, CROSSED, PLAYER1, PLAYER2 } from '../../globals';
import './square.css';

const Square = ({ position, value }) => {
  return (
    <div className="square">
        {value == CIRCLED && <Circle />}
        {value == CROSSED && <Xmark />}
    </div>
  )
}

export default Square