import React, { useState }  from 'react'
import { Header, Footer } from './containers'
import { TicTacToe } from './components'
import './App.css'
import './index.css'

const App = () => {
  const [opponentType, setOpponentType] = useState('human');
  const [soundControl, setSoundControl] = useState('on');

  return (
    <div className="app">
        <Header />
        <TicTacToe opponentType={opponentType} soundControl={soundControl} />
        <Footer opponentType={opponentType} setOpponentType={setOpponentType} soundControl={soundControl} setSoundControl={setSoundControl} />
    </div>
  )
}

export default App