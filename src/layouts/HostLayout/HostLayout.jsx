import { Link, Outlet } from "react-router-dom";
import "./HostLayout.css"

export default function HostLayout({user, hostVans}) {


  return (
    <>
      <nav className="host-nav">
        <Link to="." className="nav-button">
          Dashboard
        </Link>
        <Link to="/host/income" className="nav-button">
          Income
        </Link>
        <Link to="/host/reviews" className="nav-button">
          Reviews
        </Link>
      </nav>

      <Outlet context={{user, hostVans}} />
    </>

  )
}