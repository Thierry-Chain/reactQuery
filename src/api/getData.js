import { store } from '../redux/store'
import { getDataDone } from '../redux/actions'

export const getData = async () => {
  const res = await fetch(
    `http://localhost:5000/api/student/60e44cd6a5d6420af484f287`
  )
  const data = await res.json()
  console.log(res)
  store.dispatch(getDataDone(data))

  return data
}
/*
export const getData = async () => {
  const res = await fetch(
    `http://localhost:5000/api/student/60e44cd6a5d6420af484f287m`
  )
  const data = await res.json()
  console.log(res)
  store.dispatch(getDataDone(data))

  return data
}
*/
