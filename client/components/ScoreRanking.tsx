import Header from './Header'
import useRecord from './hooks/useRecords'

interface Record {
  nickname: string
  score: number
  mode: string
}

function ScoreRanking() {
  function compareFn(a: Record, b: Record) {
    if (a.score > b.score) {
      return -1
    } else if (a.score < b.score) {
      return 1
    }
    return 0
  }

  const records = useRecord()

  return (
    <>
      <Header />
      <h2 className="text-5xl m-12 text-primary font-bold text-center">
        Score Ranking
      </h2>
      <table className="mx-auto">
        <tr>
          <th className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse">
            Order
          </th>
          <th className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse">
            Nickname
          </th>
          <th className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse">
            Score
          </th>
          <th className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse">
            Game mode
          </th>
        </tr>
        {records.data?.sort(compareFn)?.map((Score, index) => (
          <tr key={Score.nickname}>
            <th className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse">
              {index + 1}
            </th>
            <th className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse">
              {Score.nickname}
            </th>
            <th className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse">
              {Score.score}
            </th>
            <th className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse">
              {Score.mode}
            </th>
          </tr>
        ))}
      </table>
      <div className="spacer layer1 flip"></div>
    </>
  )
}

export default ScoreRanking
