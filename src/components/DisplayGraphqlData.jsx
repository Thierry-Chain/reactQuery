/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { test, getUser, createUser } from '../api/graphql/actions'
import { queryClient } from '../index'

export default function DisplayGraphqlData() {
  const [name, setName] = useState('')
  const {
    mutateAsync,
    data: resp,
    status: stat
  } = useMutation(createUser, {
    onSuccess: () => {
      // console.log('succesfully dtat', dt)
      queryClient.invalidateQueries('Testing')
    }
  })
  // console.log(stat)
  //console.log(resp)
  const handleSubmit = async (e) => {
    e.preventDefault()
    await mutateAsync({ name })
    console.log(name, resp)
    setName('')
  }
  const user = useSelector((state) => state.posts.selectedUser)
  // //console.log('hhh', user)
  const { data, status } = useQuery('Testing', test)
  //console.log('state', status)
  //console.log({ data })

  const users =
    status === 'success' && data
      ? data.allUsers.map((dt) => {
          return (
            <div
              className={
                !dt.Posts.length ? 'user_body notAllowed' : 'user_body'
              }
              key={dt.id}
            >
              <p>Name: {dt.name}</p>
              <p>Id: {dt.id}</p>
              <button
                onClick={() => {
                  getUser({ ide: dt.id })
                }}
                disabled={!dt.Posts.length ? true : false}
              >
                Select
              </button>
            </div>
          )
        })
      : null
  return (
    <div className="box">
      <div className="user">
        <h4 className="user_title">All users</h4>
        {status === 'loading' ? 'wait ..' : null}
        {users}
      </div>
      <div>
        <h4>Selected User:</h4>
        {user ? (
          <div>
            <p>Name:{user.name}</p>
            <center>Posts: {user.Posts.length}</center>
            <p>Title: {user.Posts[0].title}</p>
            <p>Id: {user.Posts[0].id}</p>
          </div>
        ) : (
          'None'
        )}
      </div>
      <div>
        <h4>Create User</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button>{stat === 'loading' ? 'wait ..' : 'Create'}</button>
        </form>
      </div>
    </div>
  )
}
