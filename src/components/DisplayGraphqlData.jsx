import React from 'react'
import { test } from '../api/graphql/actions'

export default function DisplayGraphqlData() {
  const data = test()
  console.log(data)
  return (
    <div className="box">
      <div>
        <h4>All Posts</h4>
      </div>
      <div>
        <h4>All users</h4>
      </div>
      <div>
        <h4>All comments</h4>
      </div>
    </div>
  )
}
