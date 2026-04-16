import { Link } from "react-router-dom"
import "./Header.css"

export default function Header({ user }) {

  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <Link to="/about" className="nav-button" >About</Link>
        <Link to="/vans" className="nav-button">Vans</Link>

        <Link className="nav-button" to="/host">
          {user.name}
        </Link>
        <button className="nav-button" type="submit">Logout</button>
      </nav>
    </header>
  )
}
