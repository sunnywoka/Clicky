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
          <th className="border-2 rounded text-4xl font-bold text-primary border-primary px-24 py-12">
            Order
          </th>
          <th className="border-2 rounded text-4xl font-bold text-primary border-primary px-24 py-12">
            Nickname
          </th>
          <th className="border-2 rounded text-4xl font-bold text-primary border-primary px-24 py-12">
            Score
          </th>
          <th className="border-2 rounded text-4xl font-bold text-primary border-primary px-24 py-12">
            Game mode
          </th>
        </tr>
        {records.data?.sort(compareFn)?.map((Score, index) => (
          <tr key={Score.nickname}>
            <th className="border-2 rounded text-4xl text-primary border-primary px-24 py-4">
              {index + 1}
            </th>
            <th className="border-2 rounded text-4xl text-primary border-primary px-24 py-4">
              {Score.nickname}
            </th>
            <th className="border-2 rounded text-4xl text-primary border-primary px-24 py-4">
              {Score.score}
            </th>
            <th className="border-2 rounded text-4xl text-primary border-primary px-24 py-4">
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
