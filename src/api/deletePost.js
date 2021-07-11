/* eslint-disable no-undef */
//import React, { lazy } from 'react'

import axios from 'axios'
import { store } from '../redux/store'
////lazy(async () => {
//import { store } from '../redux/store'
import { deletePostError } from '../redux/actions'
//})
export const deletePost = async (id) => {
  const config = {
    url: `http://localhost:5000/api/student/60e44cd6a5d6420af484f287/${id}`,
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU0NGNkNmE1ZDY0MjBhZjQ4NGYyODciLCJpYXQiOjE2MjU1ODgwMTZ9._E_RWxdDWbH8BST6AYTj26GkxwB4nweallhk3LBphFY'
    }
  }

  axios(config)
    .then((dt) => {
      alert('deleted')
      return dt
    })
    .catch((err) => {
      // console.warn(err.response.data)
      store.dispatch(deletePostError(err.response.data))
      //return err
    })
}
