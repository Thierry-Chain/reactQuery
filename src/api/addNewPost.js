/* eslint-disable no-undef */
import axios from 'axios'
export const addPost = async (data) => {
  const config = {
    url: `http://localhost:5000/api/student/60e44cd6a5d6420af484f287`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU0NGNkNmE1ZDY0MjBhZjQ4NGYyODciLCJpYXQiOjE2MjU1ODgwMTZ9._E_RWxdDWbH8BST6AYTj26GkxwB4nweallhk3LBphFY'
    },
    data: JSON.stringify(data)
  }

  axios(config)
    .then(() => {
      alert('done')
    })
    .catch((err) => {
      return alert(err.response.data.message)
    })
}
