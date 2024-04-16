import  "./App.css"
import { Outlet } from "react-router-dom"
import NavBar from "./Components/NavBar"



export default function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}