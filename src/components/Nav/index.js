import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div>
        <Link to="/">
          FILOHA
        </Link>
      </div>
      <div>
        <Link to="mpifidy">
          MPIFIDY
        </Link>
      </div>
      <div>
        <Link to="/fifidianana">
          FIFIDIANANA
        </Link>
      </div>
      <hr />
    </div>
  )
}

export default Nav
