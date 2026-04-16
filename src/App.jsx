import { useState } from "react"
import { Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HostLayout from "./layouts/HostLayout/HostLayout"

// PAGES
import {
  Home,
  Login,
  Register,
  About,
  Vans,
  VanDetail,
  Income,
  Reviews,
  Dashboard,
  NotFound
} from "./pages"


// Components

// Mock data
import { vansData, usersData } from "./assets/mock-data"
import vansLoader from "./loaders/vans.loader"
import vanDetailLoader from "./loaders/van-detail.loader"
import { loginAction } from "./actions/login.action"
import loginLoader from "./loaders/login.loader"
import logoutAction from "./actions/logout.action"
import mainLayoutLoader from "./loaders/main-layout.loader"
import hostDashboardLoader from "./loaders/host-dashboard.loader"
import authLoader from "./loaders/auth.loader"

function App() {
  const [user] = useState(usersData[0])
  const [vans] = useState(vansData)
  const hostVans = vans.filter(van => van.hostId === user.id)


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout vans={vans} user={user} />} loader={mainLayoutLoader} >
      <Route index element={<Home />} loader={authLoader} />
      <Route path="login" element={<Login />} action={loginAction} loader={loginLoader} />
      <Route path="logout" action={logoutAction} />
      <Route path="register" element={<Register />} />
      <Route path="about" element={<About />}/>
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="/host" element={<HostLayout user={user} hostVans={hostVans} />}>
        <Route index element={<Dashboard />} loader={hostDashboardLoader} />
        <Route path="income" element={<Income />}  loader={authLoader} />
        <Route path="reviews" element={<Reviews />}  loader={authLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route >
  ))

  return <RouterProvider router={router} />

}
export default App
