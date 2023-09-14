import { Link } from 'react-router-dom'
import Header from './Header'

function Home() {
  return (
    <div>
      <Header />
      <hr className="border-4 border-primary" />
      <div className="flex justify-center items-center h-screen bg-pink3">
        <Link
          to="/catagory"
          className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse"
        >
          Choose Game Mode
        </Link>
      </div>
    </div>
  )
}

export default Home
