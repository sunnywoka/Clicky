import Header from './Header'
import useRecord from './hooks/useRecord'

function ScoreRanking() {
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
        </tr>
        {records.data?.map((Score) => (
          <tr key={Score.nickname}>
            <th>1</th>
            <th>{Score.nickname}</th>
            <th>{Score.score}</th>
          </tr>
        ))}
      </table>
    </>
  )
}

export default ScoreRanking
