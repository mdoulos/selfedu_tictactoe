import React, { useState }  from 'react'
import { Header, Footer } from './containers'
import { TicTacToe } from './components'
import './App.css'
import './index.css'

const App = () => {
  const [playerType, setPlayerType] = useState('human');
  const [soundControl, setSoundControl] = useState('on');

  return (
    <div className="app">
        <Header />
        <TicTacToe playerType={playerType} soundControl={soundControl} />
        <Footer playerType={playerType} setPlayerType={setPlayerType} soundControl={soundControl} setSoundControl={setSoundControl} />
    </div>
  )
}

export default App