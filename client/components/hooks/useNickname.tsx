import { useQueryClient, useMutation } from '@tanstack/react-query'
import { addNewPlayer } from '../../apis/api'

export default function useNickname() {
  const queryClient = useQueryClient()
  const nicknameMutation = useMutation({
    mutationFn: ({ nickname, token }: { nickname: string; token: string }) =>
      addNewPlayer(token, nickname),
    onSuccess: () => {
      queryClient.invalidateQueries(['user'])
    },
  })

  return { nicknameMutation }
}
