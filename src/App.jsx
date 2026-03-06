import { Login } from "./Pages/Login";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { LoginOtp } from "./Pages/LoginOtp";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Colleges } from "./Pages/Colleges";
import { AboutUs } from "./Pages/Aboutus";
import { ContactUs } from "./Pages/ContactUs";
import {Services}from "./Pages/Services";
function App() {
  const router = createBrowserRouter([
    {
      path : '/loginpage',
      element : <Login/>
    },
    {
      path : '/loginpage/otp',
      element : <LoginOtp/>
    },{
      path : '/header',
      element : <Header/>
    },{
      path : '/footer',
      element : <Footer/>
    },{
      path : '/collegelist',
      element : <Colleges/>
    }
    ,{
      path : '/aboutus',
      element : <AboutUs/>
    },{
      path : '/contactus',
      element : <ContactUs/>
    },{
      path : '/services',
      element : <Services/>
    }
  ])
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
