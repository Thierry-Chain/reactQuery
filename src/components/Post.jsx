import React from 'react'
import { usePost } from '../hooks/usePost'

export default function Post(props) {
  const id = props.match.params.id

  const { status, data } = usePost(id)
  // console.log(data)
  const content = data ? (
    <div className="card-body" key={data._id}>
      <p className="card-username">
        Username:{data.firstName + ' ' + data.lastName}
      </p>
      <p className="card-id">Id:data._id{data._id}</p>
      <p className="card-times">Times:{data.lend}</p>
      <div></div>
    </div>
  ) : null
  return (
    <div className="card">
      {status === 'error'
        ? 'sorry we meet an error ..'
        : status === 'loading'
        ? 'Please wait ..'
        : content}
      {}
    </div>
  )
}
