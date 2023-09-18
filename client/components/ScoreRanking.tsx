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
        {records.data?.sort(compareFn)?.map((Score, index, array) => (
          <tr
            key={Score.nickname}
            className={
              index === array.length - 1 ? 'border-b-2 border-primary' : ''
            }
          >
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
              {Score.mode}
            </td>
          </tr>
        ))}
      </table>
      <div className="spacer layer1 flip"></div>
    </>
  )
}

export default ScoreRanking
