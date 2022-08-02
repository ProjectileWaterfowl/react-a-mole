import { useState } from 'react'
import MoleContainer from './components/MoleContainer'

function App() {
  let [score, setScore] = useState(0)
  
  const createMoleHill = ()=>{
    let hills = []
    for(let i = 0; i < 8; i++) {
      hills.push(<MoleContainer setScore={setScore} score={score} key={i} />)
    }

    return (
      <div style={{display: 'grid', gap: 1, 'grid-template-columns': 'repeat(3, 1fr)'}}>
        {hills}
      </div>
    )
  }

  return (
    <div>
      <h2>Score: {score}</h2>
      {createMoleHill()}
    </div>
  )
}

export default App

