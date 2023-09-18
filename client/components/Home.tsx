import { Link } from 'react-router-dom'
import Header from './Header'
import LoginButton from './LoginButton'
import ScoreButton from './ScoreButton'
import { motion } from 'framer-motion'

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <div className="flex justify-center items-center m-24">
          <Link
            to="/category"
            className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse"
          >
            Choose Game Mode
          </Link>
        </div>
        <div className="flex justify-center items-center gap-10 -mb-12">
          <LoginButton />
          <ScoreButton />
        </div>
        <div className="spacer layer1 flip"></div>
      </motion.div>
    </>
  )
}

export default Home
