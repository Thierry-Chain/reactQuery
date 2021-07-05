/* eslint-disable no-undef */
//import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

let getData = async () => {
  res = await fetch('http://localhost:3000/posts')
  res.json()
}

export default function Main() {
  let { data, status } = useQuery('post', getData)
  console.log(data)
  return (
    <React.Fragment>
      <div className="main">Main content</div>
      <p>status:{status}</p>
    </React.Fragment>
  )
}
