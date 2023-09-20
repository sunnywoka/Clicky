import { Link } from 'react-router-dom'
import Header from './Header'
import { motion } from 'framer-motion'

function Category() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <h2 className="text-5xl my-12 text-primary font-bold text-center">
          Game Modes
        </h2>
        <div className="flex justify-center items-center gap-96 m-6">
          <Link className="cat-btn" to="/clicky">
            Clicky
          </Link>
          <Link className="cat-btn" to="/bounce">
            Bouncy
          </Link>
        </div>

        <div className="flex justify-center m-6">
          <Link className="cat-btn" to="/shrinky">
            Shrinky
          </Link>
        </div>

        <div className="flex justify-center items-center gap-96 m-6">
          <Link className="cat-btn" to="/pain">
            Pain
          </Link>
          <Link className="cat-btn" to="/movey">
            Movey
          </Link>
        </div>
        <div className="spacer layer1 flip"></div>
      </motion.div>
    </>
  )
}

export default Category
