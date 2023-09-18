import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import scoresHook from './hooks/useScores'

interface Prop {
  score: number
  gameId: number
}

function AddScoreButton(props: Prop) {
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()
  const useScores = scoresHook()

  async function handleClick(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    const token = await getAccessTokenSilently()
    useScores.scoreMutation.mutate({
      token,
      score: props.score,
      gameId: props.gameId,
    })
    navigate('/ranking')
  }

  return (
    <>
      <button
        className="border-4 rounded text-5xl font-bold text-primary border-primary px-24 py-18 hover:bg-pink2 hover:text-pink3 hover:animate-pulse"
        onClick={handleClick}
      >
        Add to ranking table
      </button>
    </>
  )
}
export default AddScoreButton
