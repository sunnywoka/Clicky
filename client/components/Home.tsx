import { Link } from 'react-router-dom'
import Header from './Header'
import LoginButton from './LoginButton'
import ScoreButton from './ScoreButton'

function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen bg-pink3">
        <Link
          to="/category"
          className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse"
        >
          Choose Game Mode
        </Link>
      </div>
      <LoginButton />
      <ScoreButton />
    </div>
  )
}

export default Home
