import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <React.Fragment>
      <nav className="nav">
        <span className="brand"> React Query Exercise </span>
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
