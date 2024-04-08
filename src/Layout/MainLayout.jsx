import { Outlet } from "react-router-dom"
import { Navbar } from "../Shared/Navbar/Navbar"

export const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
