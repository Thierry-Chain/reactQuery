//import axios from 'axios'
import { useQuery } from 'react-query'

const getData = async (id) => {
  const res = await fetch(
    `http://localhost:5000/api/student/60e44cd6a5d6420af484f287/${id}`
  )
  return res.json()
}

const usePost = (id) => {
  return useQuery('onePost', () => getData(id))
}
export { usePost }
