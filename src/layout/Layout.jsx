import { Outlet } from "react-router-dom"
import Navbar from "../components/Project2_Navbar"

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
    </>
  )
}