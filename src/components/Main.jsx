import React from 'react'
import { useQuery, useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { deletePost } from '../api/deletePost'
import { queryClient } from '../index'
import { getData } from '../api/getData'

export default function Main() {
  const { mutateAsync } = useMutation(deletePost, {
    onSuccess: (dt) => {
      console.log('in mutation', dt)
      queryClient.invalidateQueries('posts')
      console.log('my chache', queryClient)
    },
    onError: (err) => {
      console.error('error occured ', err)
    }
  })

  const { status, data, isError } = useQuery('posts', getData, {
    refetchOnWindowFocus: true,
    onSuccess: (dt) => console.log(dt)
  })
  //console.log(data)
  const content =
    !isError && data
      ? data.map((dt) => {
          return (
            <div className="card-body" key={dt._id}>
              <p className="card-username">
                Username:{dt.firstName + ' ' + dt.lastName}
              </p>
              <p className="card-id">Id:dt._id{dt._id}</p>
              <p className="card-times">Times:{dt.lend}</p>
              <div>
                <button
                  onClick={() => {
                    mutateAsync(dt._id)
                    // queryClient.invalidateQueries('posts')
                  }}
                >
                  Delete
                </button>

                <Link to={`/post/${dt._id}`}>
                  <button>Edit</button>
                </Link>
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
