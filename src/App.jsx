import React from "react"
import { Login } from "./Pages/Login";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { LoginOtp } from "./Pages/LoginOtp";
function App() {
  const router = createBrowserRouter([
    {
      path : '/loginpage',
      element : <Login/>
    },
    {
      path : '/loginpage/otp',
      element : <LoginOtp/>
    }
  ])
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
