import "./MainLayout.css"
import { Outlet } from "react-router-dom"
import Header from "../../components/ui/Header"
import Footer from "../../components/ui/Footer"

export default function MainLayout({user, vans}) {

  return (
    <div className="site-wrapper">
      <Header user={user} />
      <main>
        <Outlet context={{user, vans}} />
      </main>
      <Footer />
    </div>
  )
}