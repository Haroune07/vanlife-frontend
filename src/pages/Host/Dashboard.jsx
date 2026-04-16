import { Link, NavLink, useOutletContext } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import HostVansList from "../../components/HostVanList"
import "./Dashboard.css"

export default function Dashboard() {
  const {user, hostVans} = useOutletContext()
  return (
    <>

      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome {user.name}!</h1>
          <p>Income last <span>30 days</span></p>
          <h2>$2,260</h2>
        </div>
        <Link className="nav-button" to="/host/income">
          Details
        </Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="/host/reviews" className="nav-button">
          Details
        </Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
        </div>
        <HostVansList vans={hostVans} />
      </section>
    </>

  )
}