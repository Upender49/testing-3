import { Login } from "./Pages/Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginOtp } from "./Pages/LoginOtp";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Colleges } from "./Pages/Colleges";
import { AboutUs } from "./Pages/Aboutus";
import { ContactUs } from "./Pages/ContactUs";
import { Services } from "./Pages/Services";
import { Home } from "./Pages/Home";
import { StudentProfile } from "./Pages/StudentProfie";
import { TeacherProfile } from "./Pages/TeacherProfile";
import { AdminProfile } from "./Pages/AdminProfile";
import { Assignments } from "./Pages/Assignments";
import { StudentSidebar } from "./Pages/StudentSidebar";
import { TeacherSidebar } from "./Pages/TeacherSidebar";
import { AdminSidebar } from "./Pages/AdminSidebar";
import { StudentDashboard } from "./Pages/StudentDashboard";
import { TeacherDashboard } from "./Pages/TeacherDashboard";
import {AdminDashboard} from "./Pages/AdminDashboard";
function App() {
  const router = createBrowserRouter([
    {
      path: '/loginpage',
      element: <Login />
    },
    {
      path: '/loginpage/otp',
      element: <LoginOtp />
    }, {
      path: '/header',
      element: <Header />
    }, {
      path: '/footer',
      element: <Footer />
    }, {
      path: '/collegelist',
      element: <Colleges />
    }
    , {
      path: '/aboutus',
      element: <AboutUs />
    }, {
      path: '/contactus',
      element: <ContactUs />
    }, {
      path: '/services',
      element: <Services />
    }, {
      path: '/home',
      element: <Home />
    }, {
      path: '/studentprofile',
      element: <StudentProfile />
    }, {
      path: '/teacherprofile',
      element: <TeacherProfile />
    }, {
      path: '/adminprofile',
      element: <AdminProfile />
    },
    {
      path: '/studentsidebar',
      element: <StudentSidebar />
    },
    {
      path: '/teachersidebar',
      element: <TeacherSidebar />
    }, {
      path: '/adminsidebar',
      element: <AdminSidebar />
    },
    {
      path: '/assignments',
      element: <Assignments />
    }, {
      path: '/studentdashboard',
      element: <StudentDashboard />
    }, {
      path: '/teacherdashboard',
      element: <TeacherDashboard />
    },{
      path : '/admindashboard',
      element : <AdminDashboard/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
