import { useQuery } from 'react-query'
import axios from 'axios'

const usePosts = async () => {
  return useQuery('posts', () =>
    axios.get('http://localhost:3000/posts').then((res) => res.data)
  )
}

export default usePosts
