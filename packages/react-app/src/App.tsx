import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>counter</button>
      <sbg-button color="accent">React button {count}</sbg-button>
    </div>
  )
}

export default App
