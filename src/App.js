import React from 'react'
import { TicTacToe, Circle, Xmark, Square, Result } from './components'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="App">
        <TicTacToe />
        <Circle />
        <Xmark />
        <Square />
        <Result />
    </div>
  )
}

export default App