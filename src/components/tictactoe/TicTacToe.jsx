import React from 'react';
import { Result } from '../../components';
import { Square } from '../../components';
import { EMPTY, O, X } from '../../globals';
import './tictactoe.css';
import { detectWinner } from '../../functions';
import SOUND1 from '../../assets/sound-click-1.mp3';
import SOUND2 from '../../assets/sound-click-2.mp3';

const audio1 = new Audio(SOUND1);
const audio2 = new Audio(SOUND2);

const initialState = {
  player: X,
  positions: [
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY
  ]
}


const TicTacToe = ({opponentType, soundControl, setStreak}) => {
  const [state, setState] = React.useState(initialState)
  const winner = detectWinner(state.positions)

  if(winner == undefined && state.player == "O" && opponentType == "robot") {
    const position = findRandomPosition(state.positions);
    setTimeout(() => takeTurn(position, true), 600)  
  } 

  function takeTurn(position, wait = false) {
    const positions = [...state.positions]
    positions[position] = state.player

    if (opponentType === "robot" && state.player === O && wait === false) {
      return;
    }

    if (soundControl === 'on') {
      state.player === O ? audio1.play() : audio2.play();
    }

    setState({
      player: state.player == O ? X : O,
      positions,
    })
  }

  function findRandomPosition(allPositions) {
    const emptyPositions = []
    allPositions.forEach((position, index) => {
      if (position === EMPTY) {
        emptyPositions.push(index)
      }
    })

    const randomIndex = Math.floor(Math.random() * emptyPositions.length)
    const position = emptyPositions[randomIndex]

    return position;
  }

  function reset() {
    setState(initialState)
  }

  return (
    <div className="tictactoe-wrapper">
      <div className="tictactoe grid">
          <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
          <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
          <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
          <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
          <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
          <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
          <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
          <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
          <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
      </div>
      {winner && <Result winner={ winner } reset={ reset } soundControl={soundControl} opponentType={opponentType} setStreak={setStreak} />}
    </div>
  )
}

export default TicTacToe