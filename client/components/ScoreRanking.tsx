import Header from './Header'
import useRecord from './hooks/useRecords'
import { Record } from '../../models/Record'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

function ScoreRanking() {
  function compareFn(a: Record, b: Record) {
    return b.score - a.score
  }

  const records = useRecord()

  const [selectedNickname, setSelectedNickname] = useState('')
  const nicknames = [
    ...new Set(records.data?.map((score: Record) => score.nickname || '')),
  ] as string[]
  const handleNicknameChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedNickname(event.target.value)
  }

  const [selectedGameId, setSelectedGameId] = useState('')
  const gameIds = [
    ...new Set(
      records.data?.map((score: Record) => score.gameId.toString() || '')
    ),
  ] as string[]
  const handleGameIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGameId(event.target.value)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <Link
          to="/"
          className="text-primary text-2xl px-8 py-4 ml-6 border-2 border-primary rounded hover:bg-pink2 hover:text-pink3 hover:animate-pulse"
        >
          Back
        </Link>

        <h2 className="text-5xl mb-8 text-primary font-bold text-center flex-grow">
          Score Ranking
        </h2>
        <table className="mx-auto">
          <thead>
            <tr>
              <th className="border-l-4 border-y-4 text-4xl font-bold text-primary border-primary px-12 py-6">
                Order
              </th>
              <th className="border-y-4 text-4xl font-bold text-primary border-primary px-24 py-12">
                <select
                  value={selectedNickname}
                  onChange={handleNicknameChange}
                  className="border-2 rounded border-primary p-2 bg-pink3 cursor-pointer dark:bg-[#121212]"
                >
                  <option value={''}>Nickname</option>
                  {nicknames.map((nickname, index) => (
                    <option value={nickname} key={index}>
                      {nickname}
                    </option>
                  ))}
                </select>
              </th>
              <th className="border-y-4 text-4xl font-bold text-primary border-primary px-24 py-12">
                Score
              </th>
              <th className="border-y-4 border-r-4 text-4xl font-bold text-primary border-primary px-24 py-12">
                <select
                  value={selectedGameId}
                  onChange={handleGameIdChange}
                  className="border-2 rounded border-primary p-2 bg-pink3 cursor-pointer dark:bg-[#121212]"
                >
                  <option value={''}>Game Mode</option>
                  {gameIds.map((id, index) => (
                    <option value={id} key={index}>
                      {id === '1'
                        ? 'Clicky'
                        : id === '2'
                        ? 'Bouncy'
                        : id === '3'
                        ? 'Shrinky'
                        : id === '4'
                        ? 'Movey'
                        : 'Pain'}
                    </option>
                  ))}
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {records.data &&
              records.data
                .sort(compareFn)
                .filter((Score: Record) => {
                  if (selectedNickname && Score.nickname !== selectedNickname) {
                    return false
                  }
                  if (
                    selectedGameId &&
                    Score.gameId.toString() !== selectedGameId
                  ) {
                    return false
                  }
                  return true
                })
                .map((Score: Record, index: number) => (
                  <tr key={index}>
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
                      {Score.gameId === 1
                        ? 'Clicky'
                        : Score.gameId === 2
                        ? 'Bouncy'
                        : Score.gameId === 3
                        ? 'Shrinky'
                        : Score.gameId === 4
                        ? 'Movey'
                        : 'Pain'}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <div className="spacer layer1 flip"></div>
      </motion.div>
    </>
  )
}

export default ScoreRanking
