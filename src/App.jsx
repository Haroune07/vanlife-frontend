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

function App() {
  const [user] = useState(usersData[0])
  const [vans] = useState(vansData)
  const hostVans = vans.filter(van => van.hostId === user.id)


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout vans={vans} user={user} />} >
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" />
      <Route path="register" element={<Register />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="/host" element={<HostLayout user={user} hostVans={hostVans} />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route >
  ))

  return <RouterProvider router={router} />

}
export default App
