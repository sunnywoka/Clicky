import { useQuery } from '@tanstack/react-query'
import { getPlayer } from '../../apis/api'
import { useAuth0 } from '@auth0/auth0-react'

function useGetNickname() {
  const { getAccessTokenSilently } = useAuth0()
  const { data } = useQuery(['player'], async () => {
    const accessToken = await getAccessTokenSilently()
    const response = await getPlayer(accessToken)
    return response.nickname
  })
  return { data }
}

export default useGetNickname
