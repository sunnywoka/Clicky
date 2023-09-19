import { useQueryClient, useMutation } from '@tanstack/react-query'
import { addNewRecord } from '../../apis/api'

export default function useScores() {
  const queryClient = useQueryClient()
  const scoreMutation = useMutation({
    mutationFn: ({
      token,
      score,
      gameId,
    }: {
      token: string
      score: number
      gameId: number
    }) => addNewRecord(token, score, gameId),
    onSuccess: () => {
      queryClient.invalidateQueries(['records'])
    },
  })

  return { scoreMutation }
}
