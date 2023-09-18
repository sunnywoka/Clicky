import { getRecords } from '../../apis/api'
import { useQuery } from '@tanstack/react-query'

function useRecords() {
  const { data } = useQuery(['records'], getRecords)
  return { data }
}

export default useRecords
