import React from 'react';
import { Circle, Cross } from '../../components'
import { EMPTY, O, X } from '../../globals';
import './square.css';
import SOUND1 from '../../assets/sound-click-1.mp3';
import SOUND2 from '../../assets/sound-click-2.mp3';

const Square = ({ position, value, takeTurn, player, soundControl }) => {
  const audio1 = new Audio(SOUND1);
  const audio2 = new Audio(SOUND2);

  function handleClick() {
    if (value === EMPTY) {
      if (soundControl === 'on') {
        player === O ? audio1.play() : audio2.play();
      }
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