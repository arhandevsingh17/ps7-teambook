import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">TeamBook</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/employees">Our Team</Link>
      </div>
    </nav>
  )
}

export default Navbar