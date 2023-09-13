import { Routes, Route } from 'react-router-dom'
import Game from './Game'
import Home from './Home'
import Catagory from './Catagory'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catagory" element={<Catagory />} />
        <Route path="/blicky" element={<Game />} />
      </Routes>
    </>
  )
}

export default App
