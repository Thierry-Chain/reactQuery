import React from 'react'
import { useIsFetching } from 'react-query'

export default function GlobalLoader() {
  const isFetching = useIsFetching()
  return (
    <div>{isFetching ? <span className="loader">Loading ...</span> : null}</div>
  )
}
