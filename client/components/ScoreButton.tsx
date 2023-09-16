import { Link } from 'react-router-dom'

function ScoreButton() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link
          to="/ranking"
          className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse"
        >
          Ranking
        </Link>
      </div>
    </>
  )
}

export default ScoreButton
