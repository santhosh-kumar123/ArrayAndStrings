import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <section>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="*">NotFound</Link>
            </li>
        </ul>
    </section>
  )
}

export default Navbar