import Header from './Header'
import useRecord from './hooks/useRecords'
import { Record } from '../../models/Record'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function ScoreRanking() {
  function compareFn(a: Record, b: Record) {
    return b.score - a.score
  }

  const records = useRecord()

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <h2 className="text-5xl m-12 text-primary font-bold text-center">
          Score Ranking
        </h2>
        <table className="mx-auto">
          <tr>
            <th className="border-l-4 border-y-4 text-4xl font-bold text-primary border-primary px-12 py-6">
              Order
            </th>
            <th className="border-y-4 text-4xl font-bold text-primary border-primary px-24 py-12">
              Nickname
            </th>
            <th className="border-y-4 text-4xl font-bold text-primary border-primary px-24 py-12">
              Score
            </th>
            <th className="border-y-4 border-r-4 text-4xl font-bold text-primary border-primary px-24 py-12">
              Game mode
            </th>
          </tr>
          {records.data
            ?.sort(compareFn)
            ?.map((Score: Record, index: number, array: Record[]) => (
              <tr key={Score.nickname}>
                <td className="border-y-2 border-l-2 text-4xl text-primary border-primary px-24 py-4">
                  {index + 1}
                </td>
                <td className="border-y-2 text-4xl text-primary border-primary px-24 py-4">
                  {Score.nickname}
                </td>
                <td className="border-y-2 text-4xl text-primary border-primary px-24 py-4">
                  {Score.score}
                </td>
                <td className="border-y-2 border-r-2 text-4xl text-primary border-primary px-24 py-4">
                  {Score.gameId === 1 ? 'Normal' : 'Bounce'}
                </td>
              </tr>
            ))}
        </table>
        <Link to="/" className="home-btn mx-auto">
          Back
        </Link>
        <div className="spacer layer1 flip"></div>
      </motion.div>
    </>
  )
}

export default ScoreRanking
