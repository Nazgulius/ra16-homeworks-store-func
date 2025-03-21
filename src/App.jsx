import './App.css'
import ShopItemFunc from './components/ShopItemFunc'
import Item from './components/Item'

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={Item} />
      </div>
    </div>
  )
}

export default App
