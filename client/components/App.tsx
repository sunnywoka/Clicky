import { Routes, Route } from 'react-router-dom'
import Game from './Game'
import Home from './Home'
import Category from './Category'
import Explode from './Explode'
import BounceGame from './BounceGame'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/clicky" element={<Game />} />
        <Route path="/bounce" element={<BounceGame />} />
        <Route path="/explode" element={<Explode />} />
      </Routes>
    </>
  )
}

export default App
