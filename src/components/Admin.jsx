import React, { useState } from 'react'
//import axios from 'axios'
import { useMutation } from 'react-query'
import { withRouter } from 'react-router'
import { addPost } from '../api/addNewPost'
//import { useAddPost } from '../hooks/useAddPost'

const Admin = (props) => {
  //console.log(props)
  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [classe, setClasse] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const { mutateAsync, isLoading, error } = useMutation(addPost, {
    onSuccess: (e) => {
      console.log('object', { e })
    },
    onMutate: () => {
      console.log('muttated')
    },
    onSettled: () => {
      console.log('settled')
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      firstName,
      lastName,
      Class: classe,
      gender,
      age
    }
    // addPost(data)
    await mutateAsync(data)
    props.history.push('/')
    setFirstName('')
    setlastName('')
    setClasse('')
    setGender('')
    setAge('')
  }
  return (
    <div>
      <h3>Admin section</h3>
      <p>isAdding:{isLoading ? 'yes' : 'no'}</p>
      <p>isError:{JSON.stringify(error)}</p>
      <p>fill the following to add new post</p>

      <form onSubmit={handleSubmit}>
        <p>
          Firstname
          <input
            defaultValue={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="type it"
          />
        </p>
        <p>
          Lastname
          <input
            defaultValue={lastName}
            onChange={(e) => setlastName(e.target.value)}
            type="text"
            placeholder="type it"
          />
        </p>
        <p>
          class
          <input
            defaultValue={classe}
            onChange={(e) => setClasse(e.target.value)}
            type="text"
            placeholder="type it"
          />
        </p>
        <p>
          gender
          <input
            defaultValue={gender}
            onChange={(e) => setGender(e.target.value)}
            type="text"
            placeholder="type it"
          />
        </p>
        <p>
          age
          <input
            defaultValue={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="type it"
          />
        </p>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
export default withRouter(Admin)
