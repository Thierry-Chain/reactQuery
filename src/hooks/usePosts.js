import { useQuery } from 'react-query'
import axios from 'axios'

const usePosts = () => {
  return useQuery(
    'posts',
    () => {
      axios
        .get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        .then((res) => res.data)
        .then((dt) => dt.json())
    },
    {
      onSuccess: (dt) => {
        console.log(dt)
      }
    }
  )
}

export default usePosts
