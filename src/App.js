import React from 'react'
import { TicTacToe } from './components'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="app">
        <div className="app-header">
          <h1>Tic Tac Toe</h1>
          <p>by Micah Doulos and Hunor Borbély</p>
        </div>
        <TicTacToe />
        <div className="app-footer">
          <button className="code-button"><a href="https://github.com/micahdoulos/selfedu_tictactoe">See the Code</a></button>
          <button className="tutorial-button"><a href="https://www.skillshare.com/en/classes/Tic-Tac-Toe-A-Playful-Intro-to-React/1248127804/projects">See the Tutorial</a></button>
        </div>
    </div>
  )
}

export default App