import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
const LayOut = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default LayOut