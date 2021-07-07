import React from 'react'
import { useQuery } from 'react-query'
const getData = async () => {
  const res = await fetch(
    `http://localhost:5000/api/student/60e44cd6a5d6420af484f287`
  )
  //console.log(res)
  return res.json()
}

export default function Main() {
  const { status, data, isError } = useQuery('posts', getData, {
    refetchOnWindowFocus: true,
    onSuccess: () => console.log('done')
  })
  console.log(data)
  const content =
    !isError && data
      ? data.map((dt) => {
          return (
            <div className="card-body" key={dt._id}>
              <p className="card-username">Username:{dt.firstName}</p>
              <p className="card-id">Id:dt._id{dt._id}</p>
              <p className="card-times">Times:{dt.lend}</p>
              <div>
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          )
        })
      : null
  return (
    <div className="card">
      {status === 'loading' ? 'Please wait ..' : content}
    </div>
  )
}
