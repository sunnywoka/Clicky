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
      <table>
        <tr>
          <th>Order</th>
          <th>Nickname</th>
          <th>Score</th>
          <th>Game mode</th>
        </tr>
        {records.data?.sort(compareFn)?.map((Score) => (
          <tr key={Score.nickname}>
            <th>1</th>
            <th>{Score.nickname}</th>
            <th>{Score.score}</th>
            <th>{Score.mode}</th>
          </tr>
        ))}
      </table>
    </>
  )
}

export default ScoreRanking
