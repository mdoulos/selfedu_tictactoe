import React from 'react';
import { Result } from '../../components';
import { Square } from '../../components'
import { EMPTY, O, X } from '../../globals';
import './tictactoe.css';
import { detectWinner } from '../../functions';


const TicTacToe = ({playerType, soundControl}) => {
  const [state, setState] = React.useState({
    player: O,
    positions: [
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY
    ]
  })

  function takeTurn(position) {
    const positions = [...state.positions]
    positions[position] = state.player

    setState({
      player: state.player == O ? X : O,
      positions,
    })
  }

  const winner = detectWinner(state.positions)

  function reset() {
    setState({
      player: O,
      positions: [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
      ]
    })
  }


  return (
    <div className="tictactoe-wrapper">
      <div className="tictactoe grid">
          <Square position={0} value={state.positions[0]} takeTurn={takeTurn} player={state.player} soundControl={soundControl} />
          <Square position={1} value={state.positions[1]} takeTurn={takeTurn} player={state.player} soundControl={soundControl} />
          <Square position={2} value={state.positions[2]} takeTurn={takeTurn} player={state.player} soundControl={soundControl} />
          <Square position={3} value={state.positions[3]} takeTurn={takeTurn} player={state.player} soundControl={soundControl} />
          <Square position={4} value={state.positions[4]} takeTurn={takeTurn} player={state.player} soundControl={soundControl} />
          <Square position={5} value={state.positions[5]} takeTurn={takeTurn} player={state.player} soundControl={soundControl} />
          <Square position={6} value={state.positions[6]} takeTurn={takeTurn} player={state.player} soundControl={soundControl} />
          <Square position={7} value={state.positions[7]} takeTurn={takeTurn} player={state.player} soundControl={soundControl} />
          <Square position={8} value={state.positions[8]} takeTurn={takeTurn} player={state.player} soundControl={soundControl} />
      </div>
      {winner && <Result winner={ winner } reset={ reset } soundControl={soundControl} />}
    </div>
  )
}

export default TicTacToe