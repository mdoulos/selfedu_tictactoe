import React, { useState }  from 'react'
import { Header, Footer } from './containers'
import { TicTacToe } from './components'
import './App.css'
import './index.css'

const App = () => {
  const [opponentType, setOpponentType] = useState('human');
  const [soundControl, setSoundControl] = useState('on');
  const [streak, setStreak] = useState(0);

  return (
    <div className="app">
        <Header streak={streak} opponentType={opponentType} />
        <TicTacToe opponentType={opponentType} soundControl={soundControl} setStreak={setStreak} />
        <Footer opponentType={opponentType} setOpponentType={setOpponentType} soundControl={soundControl} setSoundControl={setSoundControl} />
    </div>
  )
}

export default App