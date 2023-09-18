import { Routes, Route } from 'react-router-dom'
import Game from './Game'
import Home from './Home'
import Category from './Category'
import Explode from './Explode'
import BounceGame from './BounceGame'
import ScoreRanking from './ScoreRanking'
import AddNickname from './AddNickname'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/clicky" element={<Game />} />
        <Route path="/bounce" element={<BounceGame />} />
        <Route path="/explode" element={<Explode />} />
        <Route path="/ranking" element={<ScoreRanking />} />
        <Route path="/addnickname" element={<AddNickname />} />
      </Routes>
    </>
  )
}

export default App
