import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShopItemFunc from './components/ShopItemFunc'
import item from './components/Item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  )
}

export default App
