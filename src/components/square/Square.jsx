import React from 'react';
import { Circle, Cross } from '../../components'
import { EMPTY, O, X } from '../../globals';
import './square.css';

const Square = ({ position, value, takeTurn }) => {
  function handleClick() {
    if (value === EMPTY) {
      takeTurn(position)
    }
  }

  return (
    <div className="square" onClick={handleClick}>
        {value == O && <Circle />}
        {value == X && <Cross />}
    </div>
  )
}

export default Square