import { getRecords } from '../../api'
import { useQuery } from '@tanstack/react-query'

function useRecord() {
  const { data } = useQuery(['notifications'], getRecords)
  return { data }
}

export default useRecord
