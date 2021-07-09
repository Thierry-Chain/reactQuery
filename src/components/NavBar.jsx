import React from 'react'
import { Link } from 'react-router-dom'
import { onlineManager } from 'react-query'
import GlobalLoader from './GlobalLoader'

export default function NavBar() {
  onlineManager.setOnline(true)
  return (
    <React.Fragment>
      <nav className="nav">
        <span className="brand"> React Query Exercise </span>
        <span className="">
          {onlineManager.isOnline ? <span>Online</span> : null}
        </span>
        <span>
          <GlobalLoader />
        </span>
      </nav>
      <div className="disp">
        <Link className="link" to="/">
          Blog
        </Link>
        <Link className="link" to="/admin">
          Admin
        </Link>
      </div>
    </React.Fragment>
  )
}
