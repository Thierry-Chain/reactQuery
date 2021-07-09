export const getData = async () => {
  const res = await fetch(
    `http://localhost:5000/api/student/60e44cd6a5d6420af484f287`
  )
  //console.log(res)
  return res.json()
}
